# Caleb Cleghorn's Fetch Submission

<img src="https://github.com/cleggie66/caleb-cleghorn-receipt-processor-submission/assets/117665526/fd7903e9-1afb-4a3c-9d95-82ef1f61b488" align="left"
     alt="Fetch Logo" height="180">


## About
I'm [Caleb!](https://www.linkedin.com/in/caleb-cleghorn-31843b189/) A Chicago-based software engineer, and this is my submission for Fetch Rewards's Backend Engineering Apprenticeship position! I used a Express application to handle API requests, some custom JavaScript to handle receipt processing, and Docker to tie everything together. I had a ton of fun with this assignment and look forward to continuing this process with Fetch!

## Technologies Used:

<img src="https://skillicons.dev/icons?i=js" align="center"
alt="REST Logo" height="30"> **Javascript**

<img src="https://skillicons.dev/icons?i=express" align="center"
alt="REST Logo" height="30"> **Express**

<img src="https://skillicons.dev/icons?i=nodejs" align="center"
alt="REST Logo" height="30"> **Node.js**

<img src="https://skillicons.dev/icons?i=nodejs" align="center"
alt="REST Logo" height="30"> **UUID**

## How to launch:


### Docker Build Command
<img src="https://github.com/cleggie66/caleb-cleghorn-receipt-processor-submission/assets/117665526/c53231ec-871a-4d27-a142-d9fed5713858" align="left"
     alt="Fetch Logo" height="50">
```bash
docker build -t calebs-cool-code .
```

### Docker Run Image Command
<img src="https://github.com/cleggie66/caleb-cleghorn-receipt-processor-submission/assets/117665526/c53231ec-871a-4d27-a142-d9fed5713858" align="left"
     alt="Fetch Logo" height="50">
```bash
docker run -p 5000:5000 calebs-cool-code
```
This will now run the server on http://localhost:5000/


## API
### Endpoint: Process Receipts

* Path: `/receipts/process`
* Method: `POST`
* Body: Receipt JSON
* Response: A JSON object containing an id for the receipt.

### Endpoint: Get Points

* Path: `/receipts/{id}/points`
* Method: `GET`
* Response: A JSON object containing the number of points awarded.


## More of my Stuff:
[Portfolio](https://caleb-cleghorn.onrender.com/)

[LinkedIn](https://www.linkedin.com/in/caleb-cleghorn-31843b189/)

[GitHub](https://github.com/cleggie66)

[Resume](https://drive.google.com/file/d/1Q1Iqbwz_Q2xbUBHG_nfkTLyb-bDS0tYe/view)
