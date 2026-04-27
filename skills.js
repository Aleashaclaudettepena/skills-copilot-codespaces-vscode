function calculateNumbers(var1, var2) {
    return var1 + var2;
}

function calculateDifference(var1, var2) {
    return var1 - var2;
}

function calculateProduct(var1, var2) {
    return var1 * var2;
}

function calculateQuotient(var1, var2) {
    if (var2 === 0) {
        return "Cannot divide by zero";
    }
    return var1 / var2;
}