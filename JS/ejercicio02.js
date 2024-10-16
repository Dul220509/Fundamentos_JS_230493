//tipos de datos js


//1. undefinided
console.warn("----Declaracion de variables locales usando: INDEFINIDO POR DEFAULT")

// 1.Undefined 
let cliente; 
let Premium;
console.log(`El cliente es: ${cliente}`); 
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)} `);

cliente = "Juan";

console.log(`El cliente es: ${(cliente)}`);

cliente = "123";

console.log(`El cliente es: ${(cliente)}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)} `);
 
// 2. Boolean 
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/ False)");

let esPremium = "No lo se";

console.log(`¿Es el cliente Premium? : ${Premium}`);

console.log(`El tipo de dato de la variable Premium es: ${typeof(Premium)} `);

Premium=true;
console.log(`El tipo de la variable Premium es : ${typeof(Premium)}`);
if(Premium)
console.log ("El cliente pago por usar el servicio");
else
 console.log("El cliente pago por usar el servicio");
 console.log(`¿Es el cliente Premium? : ${Premium}`);
 console.log("cambiando el valor de Premium a false");
 Premium = false;
 if(Premium)
console.log("El cliente pago por usar el servicio");
else{
    console.log("El cliente no pago por usar el servicio");
}



//3. NUMBER
var cantidad
const costo_producto=10.50
let saldo_cuenta=-2500.40
let monto_trasaccion;

console.warn("-tipo de dato NUMBER (Numeros positivos , neghativos,decimaeles,flotantes");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta :${costo_producto}`)
cantidad=8;
console.log(`as elegido comprar :${cantidad} de productos.`)
console.log(`El importe total de la compra es ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`tu nuevo saldo es de ${saldo_cuenta}`);
//El cliente realiza uin abono de 1500
monto_trasaccion=1500;
console.log (`tu abono de ${monto_trasaccion} a sido asignada tu nuevbo saldo es de :${(saldo_cuenta+monto_trasaccion)}`);

console.warn("Tipo de datos ---STRING--- (Cadena de caracteres)");

const alumno = "Dulce Yadira Salvador Antonio"
let producto = "MONITOR DE 28\"";

console.log(`El nombre del alumno es: ${(alumno)}, que es tipo de dato ${typeof(alumno)}`);
producto= "MONITOR DE 28\"";
console.log(`El nombre del producto es ${(producto)}, que es un tipo de dato ${typeof(producto)}`);

//Manipulando los strings

console.log(`Mas adelante podremos manipular el contenido de  los STRINGS usando funciones 
    específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
    //toUpperCase convierte a mayusculas los datos strings

console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);
    //toLowerCase convierte a minusculas los datos de tipo string



    console.warn("Tipo de datos -----BIG INT---- (Numeros grandes asta 19 digitos en total )");


    const numeroGrande = 1234567890
    const numeroGrande2 = 12345678901234567890
    let numeroGrande3 = 12345678901234567890123456789
    let numeroGrande4 = 1234567890123456789012345678901234567890
    
    console.log(`El primer experimento de un número grande es: ${numeroGrande}, que sí es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande)}`);
    console.log(`El Segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande2)}`);
    console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, ya no es soportado por NUMBER ya hay perdida de precición y su tipo de dato es: ${typeof(numeroGrande3)}`);
    console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, ya no es soportado por NUMBER ya hay perdida de precición su tipo de dato es: ${typeof(numeroGrande4)}`);


//para definir el tipo de dato bigint debemos invocar  la funcion BigInt
//o usar la letra n al final del numero de la asignacion del valor 
 console.log("Declaramos los valores númericos de gran tamaño...")
 numeroGrande3 = BigInt (12345678901234567890123456789);
 numeroGrande4 = 1234567890123456789012345678901234567890n;

console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que si es soportado por BigInt y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que si es soportado por BigInt ysu tipo de dato es: ${typeof(numeroGrande4)}`);

//hay que considerar que los tipos de daros declarados como BigInt no son operables con los de tipo Number
let numero =238;
//Si intentanos realizar una operacion matematica entre estos dos tipos de datos , obtendremos un error critio en esta operacion.
 console.log(`El resultado de la opercaion de : numeroGrande4/numero es: ${numeroGrande4/BigInt(numero)}`);


 console.warn("Tipo de datos ---SYMBOL--- (Simbolo o Forzar la unidad)");

 //Symbol

 const numero1= 2;
 const numero2= 2.0;
 const numero3= "2";
 const numero4= "2.0";
 const numero5= Symbol(2);
 const numero6= Symbol(2.0);
 const numero7= Symbol("2");
 const numero8= Symbol("2.0");
 const numero9= Symbol(2);

 //Prueba comparacion 1
 console.log("Prueba de comparacion 1: comparando que ¿2 es igual a 2.0");

 if (numero1 == numero2)
 {
    console.log(`Se an comparado los valores de numero1 y numero2, confirmado que tienen el mismo valor`);
 }
 else
 {
    console.log (`Se an comparado los valores de numero1 y numero2, detectando que no tienen el mismo valor`);
 }
 //Prueba comparacion 2 
 console.log("Prueba de comparacion 2: comparando que ¿2 es igual a 2");

 if (numero1 == numero3)
    {
       console.log(`Se an comparado los valores de numero1 y numero3, confirmado que tienen el mismo valor`);
    }
    else
    {
       console.log (`Se an comparado los valores de numero1 y numero3, detectando que no tienen el mismo valor`);
    }

    //Prueba comparacion 3 valor y tipo de dato === igualdad estricta que compara valor y tipo de dato
    console.log("Prueba de comparacion 3: comparando que ¿2 es esttrictamente igual a `2`");
 if (numero1 === numero3)
    {
       console.log(`Se an comparado los valores de numero1 y numero3, confirmado que tienen el mismo valor`);
    }
    else
    {
       console.log (`Se an comparado los valores de numero1 y numero3, detectando que no tienen el mismo valor`);
    }
 //Prueba comparacion 4
    console.log("Prueba de comparacion 4: comparando que ¿2 es esttrictamente igual a `2`");
    if (numero1 == numero4)
       {
          console.log(`Se an comparado los valores de numero1 y numero4, confirmado que tienen el mismo valor`);
       }
       else
       {
          console.log (`Se an comparado los valores de numero1 y numero4, detectando que no tienen el mismo valor`);
       }

 //Prueba comparacion 5
 console.log("Prueba de comparacion 5: comparando que ¿2 es esttrictamente igual a `4`");
 if (numero1 === numero4)
    {
       console.log(`Se an comparado los valores de numero1 y numero4, confirmado que tienen el mismo valor`);
    }
    else
    {
       console.log (`Se an comparado los valores de numero1 y numero4, detectando que no tienen el mismo valor`);
    }



 //Prueba comparacion 6
 console.log(" Prueba de comparacion 6 :comparando que ¿2 es esttrictamente igual a `2`");
 if (numero1 == numero5)
    {
       console.log(`Se an comparado los valores de numero1 y numero5, confirmado que tienen el mismo valor`);
    }
    else
    {
       console.log (`Se an comparado los valores de numero1 y numero5, detectando que no tienen el mismo valor`);
    }

 //Prueba comparacion 7
 console.log("Prueba de comparacion 7: comparando que ¿Es Symbol(2) = Symbol(\"2\")?");
 if (numero5 == numero7)
    {
       console.log(`Se an comparado los valores de numero5 y numero7, confirmado que tienen el mismo valor`);
    }
    else
    {
       console.log (`Se an comparado los valores de numero5 y numero7, detectando que no tienen el mismo valor`);
    }

 //Prueba comparacion 8
 console.log("Prueba de comparacion 8:comparando que ¿Es Symbol(2) = Symbol(\"2\")?");
 if (numero5 == numero9)
    {
       console.log(`Se an comparado los valores de numero5 y numero9, confirmado que tienen el mismo valor`);
    }
    else
    {
       console.log (`Se an comparado los valores de numero5 y numero9, detectando que no tienen el mismo valor`);
    }
//null
console.warn("Tipo de datos ---NULL--- (Nulo o Vacío)");

/*El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable 
pero prefieren dejarlo vacio, bajo su consentimiento, a diferencia de 
UNDEFIEND que es el valor desconocido asignado por DEFAUL por JS*/

let nombreUsuario= null;
let password= null;
let generoUsuario= null;
let statusRelacionSentimental= null;
let fecha_ultimoPost

 /*Supongamos que estamos programando una red social tipo Facebook 
 en la que parte de la información se publicara en el perfil de usuario.*/

 /*Si el usuario no a iniciado sesion en el dispositivo movil o en 
 la aplicacon web puede exlplorar contenido de acceso publico y no existira informacion para mostrar.*/

 /*en la HU(historias de usuario) que el usuario desee loguearse debera ingersar su numero
  telefonico o correo electronico y una contraseña que deberemos guardar en las variables previamente declaradas
  */

 /* Supongoamos que el usuario Dulce Y. con correo electronico 230493@utxicotepec.edu.mx
  debe ingresar con su contraseña pas123 */

nombreUsuario="230493@utxicotepec.edu.mx";
password= "pas123";

/*En ese momento de ejecucion del sistema no sabemos su genero, ni su estatus 
de relacion sentimental  */

console.log(`el usuario ${nombreUsuario} esta intentando logearse con una contraseña de: ${password}`);

/*lo que prosigue en el sisitema cotejara os datos ingresados con la base de datos
y en caso de que los datos sean corectos comenzara la sesion en la plataforma actualizando esos valores */

/*Dado que Dulce es del genero femenino y denota que su estatus de relacion no a ha sido capturado o lo mantine privado esto genera
la actualizacion de los valores de las variables   */

generoUsuario="F"
statusRelacionSentimental=null

console.log(`El usuario:${nombreUsuario} se a logeado exitosamente , al tener acceso a su informacion de perfil podemos deducir que es del genero:
     ${generoUsuario} y que su estatus de relacion es: ${statusRelacionSentimental}, y su ultima publicacion fue: ${fecha_ultimoPost}`);  



console.warn("Comparacion (entre Undefined y NUL)");
// COMPARANDO NULL VS UNDEFINED

// Si bien undefined y NULL tienen el mismo valor , no tienen el mismo tipo de dato 


console.log ("Comparacion de la equidad entre Undefined y NULL :")
console.log(
   (fecha_ultimoPost==statusRelacionSentimental)?
   "Ambas variables tienen el mismo valor":
   "Las variables no tienen el mismo valor");

console.log ("Comparacion de la identidad entre Undefined y NULL :")
console.log( 
   (fecha_ultimoPost===statusRelacionSentimental)?
   "Ambas variables tienen el mismo valor y el mismo tipo de dato":
   "Las variables tienen el mismo valor, pero no el mismo tipo de dato");


console.warn("Tipo de FUNCTIóN (funciones)");
// 8.Function(Funciones)
/*Declaramos una funcion que nos permite recibir un parametro en este caso el nokmbre de la 
perasona a saludar y la enviamos un saludo, esta funcion la asignamios a una constabnte  */
const saludar = function(nombre){return`hola,${nombre}!`}

//invocamos a la funcion declarada
console.log(saludar(`Dulce`));

//y que tipo de dato tiene esta constante 

console.log(`El tipo de dato de la constante es: ${typeof(saludar)}`);





