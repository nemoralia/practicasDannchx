/* 3. IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
// escribe la función bmi acá

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso" */



let bmi = []

array  = prompt ("Favor ingrese su peso ")
bmi.push(array)
document.write (bmi,"<br>")

array2 = prompt ("Favor ingrese su estatura ")
bmi.push(array2)
document.write (bmi,"<br>")

bmi= [bmi[0]/bmi[1]**2] //PENDIENTE CORREGIR FORMULA
document.write (bmi,"<br>")

if (bmi < 18.5){
    document.write ("<br> Bajo de Peso")
}else if (bmi >= 18.5 && bmi <= 24.9){
    document.write ("<br> Normal")
}else if (bmi >= 25 && bmi <= 29.9){
    document.write ("<br> Sobrepeso")
}else if (bmi >= 30){
    document.write ("<br> Obeso")
}

