const express = require('express');
const { v4: uuidv4 } = require('uuid');
const validate = require('uuid-validate');
const receiptValidation = require('./validators/receiptValidation');

// Configures express application
const app = express();

// Parses through the body of the request automatically
app.use(express.json());

// Initialize object for temporary memory
const receiptData = {};

// Helper function to return boolean for valid/invalid UUID
const idValidator = (id) => {
    return validate(id);
}

// Helper function to calculate points awarded for a receipt
const pointCalculator = ({ retailer, purchaseDate, purchaseTime, items, total }) => {
    let points = 0;

    // One point for every alphanumeric character in the retailer name
    let charCount = 0;
    for (let i = 0; i < retailer.length; i++) {
        const char = retailer[i];

        // Checks if character is alphanumeric
        let charCode = char.charCodeAt(0);
        if ((charCode > 47 && charCode < 58) ||
            (charCode > 96 && charCode < 123) ||
            (charCode > 64 && charCode < 91)
        ) {
            charCount += 1;
        }
    }
    points += charCount;

    // 50 points if the total is a round dollar amount with no cents
    const cents = total.split(".")[1];
    if (cents === "00") points += 50;

    // 25 points if the total is a multiple of 0.25
    const quarters = ['00', '25', '50', '75'];
    if (quarters.includes(cents)) points += 25;

    // 5 points for every two items on the receipt
    const length = items.length;
    const pairs = Math.floor(length / 2);
    points += (pairs * 5);

    // If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned
    for (const { price, shortDescription } of items) {
        const length = shortDescription.trim().length;
        if (length % 3 === 0) points += (Math.ceil(Number(price) * 0.2));
    };

    // 6 points if the day in the purchase date is odd
    const day = Number(purchaseDate.split("-")[2]);
    if (day % 2 === 1) points += 6;

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm.
    const hour = purchaseTime.split(":")[0];
    if (hour >= 14 && hour < 16) points += 10;

    return points;
}

const receiptEntry = (receipt) => {
    const points = pointCalculator(receipt);
    const id = uuidv4();
    receiptData[id] = points;
    return id;
};


// APP ROUTES

app.post('/receipts/process', function (req, res) {

    const receipt = req.body;

    // Simple receipt data validation
    if (!receiptValidation(receipt)) {
        return res.json("Receipt not valid")
    }

    // Processes receipt and returns id
    const id = receiptEntry(receipt);

    res.json({ "id": id });

});


app.get('/receipts/:id/points', function (req, res) {

    const id = req.params.id;

    // Checks for valid ID
    if (!idValidator(id)) {
        return res.json("Not a valid ID")
    };

    // Checks if ID is in our data
    if (!receiptData[id]) {
        return res.json("ID is not in our system")
    };

    const points = receiptData[id];

    res.json({ "points": points });

});

// Configures port
const port = 3000;
app.listen(port, () => console.log('Server is listening on port', port));