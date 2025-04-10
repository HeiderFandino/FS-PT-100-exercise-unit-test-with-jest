// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(1);
       
    const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);
})

test("One dolar should be 156.5 Yen", function() {
  
    const {fromDollarsToYen} = require('./app.js');

  
    const dollars = fromDollarsToYen (1);

    
    const expected = (1 / 1.07) * 156.5;


    expect( dollars).toBe(expected); 
})



// converting to pound

test("One yen should be 0.87 pounds", function() {
   
    const { fromYenToPound } = require('./app.js');
   
    const yen = fromYenToPound(1);
  
    const expected = (1 / 156.5) * 0.87;
 
    expect(yen).toBe(expected);
})
