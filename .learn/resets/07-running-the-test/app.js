// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar =
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => { return euro * 1.07;}

const fromDollarsToYen = (dolar) => { const euro = dolar / 1.07
return euro * 156.5;
}

const fromYenToPound = (yen) => {
    const euro = yen / 156.5
    return euro * 0.87;
}


// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarsToYen, fromYenToPound};