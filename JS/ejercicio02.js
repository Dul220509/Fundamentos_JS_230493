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

