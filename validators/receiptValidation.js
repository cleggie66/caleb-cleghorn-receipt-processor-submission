const receiptValidation = ({ retailer, purchaseDate, purchaseTime, items, total }) => {
    if (!retailer) return false;
    if (!purchaseDate) return false;
    if (!purchaseTime) return false;
    if (!items) return false;
    if (!total) return false;

    if (total.split(".").length !== 2) return false;
    if (total.split(".")[1].length !== 2) return false;

    if (purchaseDate.length !== 10) return false;

    if (Number(purchaseTime.split(":")[0]) > 24) return false;
    if (Number(purchaseTime.split(":")[0]) < 0) return false;
    if (Number(purchaseTime.split(":")[1]) > 60) return false;
    if (Number(purchaseTime.split(":")[1]) < 0) return false;

    if (Number(total) < 0 ) return false;

    return true;
}

module.exports = receiptValidation;