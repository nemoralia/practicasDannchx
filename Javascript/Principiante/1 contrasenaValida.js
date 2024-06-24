/* 1. Contraseña válida
Escribir una función llamada contrasenaValida que reciba un string y retorne true si 
el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false */

let contrasenaValida = prompt("Favor ingresar una contraseña:<br>");

if(contrasenaValida == "2Fj(jjbFsuj"){
    contrasenaValida=true
    console.log(contrasenaValida,"<br>")
    document.write(contrasenaValida)

}else if(contrasenaValida == "eoZiugBf&g9"){
    contrasenaValida=true
    console.log(contrasenaValida)
    document.write(contrasenaValida)
}else {
    contrasenaValida=false
    console.log(contrasenaValida)
    document.write(contrasenaValida)}






