/*  2. Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. 
Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos 
* 40%. De lo contrario retornar 0.

// escribe tu respuesta acá

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0 */


let calcularImpuestos = []
let array = prompt ('Favor ingrese su edad')
calcularImpuestos.push(array)
let array2 = prompt ('Favor ingrese sus ingreso ')
calcularImpuestos.push(array2)



if (calcularImpuestos[0] >= 18 && calcularImpuestos [1] >= 1000){
    calcularImpuestos[1] = calcularImpuestos[1]*0.40;
    document.write ("Debe retornar: ",calcularImpuestos[1])
}
else {document.write ("Debe retornar: $0")
}
