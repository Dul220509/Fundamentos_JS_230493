//Repaso de ciclo y sentencias de control

// Estilizacion de los mensajes de salida
const bg="linear-gradient(11deg,rgba(0,199,36,1) 0%, rgba(192,255,26,1)33%, rgba(191,255,26,1) 86%)";
const style_console =`background: ${bg}; color:white; border-radius:6px; padding:4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de las salidas de  consola 

console.warn("Practica 7 : ARREGLOS EN JAVA SCRIPT")
console.log("%c1.- CONDICIONALES -SI/ENTONCES...(IF)", style_console);
//Le indica al programa que hacer o que no en base a una prueba logica de verdadero o falso
let fechaActual=new Date();
//let fechaActual=new Date("2025/06/05");

console.log(`Hola la fecha de hoy es :${fechaActual.toString()}`);

//Y si la necesitamos en formato local?
const fechaLocal1MX =fechaActual.toLocaleString('es-MX',
    {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12:false
    });
    console.log(`en formato local (Meéxico):${fechaLocal1MX}`);



//Si es antes de las 12 saluda con un beuenos dias 

    if(fechaActual.getHours()<12)
        console.log(`Buenos días , hoy es ${fechaLocal1MX}`);

//existe un extensor de la sentencia if(si)que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad de añoi`);
    else
    console.log(`Estas en la segunda mitad del año`);


//Que pasa si la validacion tiene varias operaciones 

     const anio=fechaActual.getFullYear();


     let inicioPrimavera =new Date(anio,2,21);
     let inicioVerano =new Date(anio,5,21);
     let inicioOtonio =new Date(anio,8,23);
     let inicioInvierno =new Date(anio,11,21);
     let estacion;
     let horarioVerano=false;

     if (fechaActual>= inicioPrimavera &&fechaActual<inicioVerano)
     {
        console.log("estamos en la primavera..")
        console.log("Inicia la floracion de muchas plantas...")
        console.log("los dias son mas largos y las noches mas cortas")
        console.log("Muchos nombres despiertan de la hibernacion")
        estacion="primavera"
        horarioVerano=true;
     }
     else if (fechaActual>=inicioVerano &&fechaActual<inicioOtonio)
        {
        console.log("Estamos en verano...")
        console.log("En esta temporada los abundan los dias soleados y calurosos..-")
        console.log("En esta tempporada el indice de turismo vacacional sube...")
        console.log("Mucha gente busca realizar actividades al aire...")
        estacion="verano"
        horarioVerano=true;
     }
     else if (fechaActual>= inicioOtonio && fechaActual<inicioInvierno)
     {
        console.log("Estamos en Otoño..")
        console.log("Los arboles suelen cambiar de follaje")
        console.log("Se registran temperaturas mas templadas")
        console.log("Los animales conmienzan con la recloeccion de alimento y preparan sus espacios para la hibernacion, incluso algunas aves migran.")
        estacion="verano"
        horarioVerano=true;
     }
else
{
   console.log("Estamos en -invierno..")
   console.log("En esta temporada los dias son mas cortos  y las noches son mas largas")
   console.log("En algunas regiones suele nevar ...")
   console.log("Dado las bajas temperaturas se recomienda abrigarse...")
   estacion="invierno"
   horarioVerano=false;
}



console.log("%c2.- Operador ternario (Validacion cumple:no_cumple", style_console);
/*En Java Script esiste una operacion simplificada que valida si una condicion se cumple o no 
y que hacer en cada caso */
const edadPersona=18;
const mayorEdadMX =18;
const mayorEdadUS =21;

let evaluarMayoriaEdad =(edad)=>edad>=18?"Eres mayor de edad.": "No eres mayor de edad."


console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

/*Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais 
por cuestiones legales,por lo quqe debemos considerar un segundo parametro en la evaluacion */
evaluarMayoriaEdad=(edad,pais)=>(edad>=18 && pais==="MX")?`En ${pais} eres mayor de esad`:`En ${pais} no eres mayor de edad`;


console.log("Evaluando la mayoria de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"));


console.log("%c3.- SWITCH-CASE(Eleccion de valor definido)", style_console);



let asignaGeneracion=(anioNacimiento)=>{switch(true)

   {
      case(anioNacimiento<1968)://Baby boomers
         return"Baby Boomers";

      case(anioNacimiento>1968 && anioNacimiento<=1980):
         return "Generacion X";

      case(anioNacimiento>1980 && anioNacimiento<=1994):
         return "Milenials";

      case(anioNacimiento>1994 && anioNacimiento<=2010):
         return "Centenials";

      case(anioNacimiento>2010):
         return"Krystal"
   }
}
   console.log(`Dado que nacio en el año de 1992 soy de la generacion: ${asignaGeneracion(1992)}`);

   console.log("%c4.- Manejo de excepciones  (TRY/CATCH))", style_console);
   /**
    * En algunas oraciones existiran errores que no son culpa del programa, si no del usuario , la red,
    * el SO o incluso de un middlware., pero que si duda debemos controlar para evitar las fallas de ejecusion
    *  
    */
   console.log("caso 1");
   console.log("Intentamos dividir : 0/10, el resultado es: ");

   try{                    //intenta
      let result=0/10;     //dividir  entre un entero
      console.log(result)
   }
   catch(error)
   {
      console.log("Ocurrio un  error: "+error.message);
   }
   console.log("caso 2");
   console.log("Intentamos dividir : 10/0, el resultado es: ");

   try{                              //intenta
      let result=10/0;               //dividir  entre un entero
      console.log(result)
   }
   catch(error)
   {
      console.log("Ocurrio un  error: "+error.message);
   }
   console.log("caso 3");
   console.log("Intentamos dividir : a/10, el resultado es: ");

   try{                                //intenta
      let result="a"/10;               //dividir una letra entre un entero
      console.log(result)
   }
   catch(error)
   {
      console.log("Ocurrio un  error: "+error.message);
   }
   console.log("caso 4");
   console.log("Intentamos dividir: la variable : a/10, el resultado es: ");                       
   try{                              //intenta
      let result="a"/10;               //dividir  entre un entero
      console.log(result)
   }
   catch(error)
   {
      console.log("Ocurrio un  error: "+ error.message);
   }


   console.log("caso 5");
   console.log("Intentamos dividir el valor de la variable x/ el valor de la variabley,el resultado es:");

   try{                              //intenta
      let x=8, y=2, result= x/y;     //dividir una variable no definida entre 
      console.log(result)
   }
   catch(error)
   {
      console.log("Ocurrio un error:"+error.message);
   }

   console.log("%c5.- Control de ciclos (BREAK/CONTINUA))", style_console);
   /**
    * En algunas ocaciones sera importante detener un civlo de mnera 
    * abrubta para controlar casos especiales de un ciclo
    */

   console.log("Vamos a contar del uno al 10...")
   for(let num=1; num<=10; num++)
      console.log(num);

   console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte")
for (num=1; num<=10;num++)
   if(num==7)
      break;
   else
   console.log(num);

console.log("ahora necesitamps que si llegas al 7 te saltes eese numero y continues")

for (num=1; num <=10; num++)
{
   if(num==7)
   {
      continue;
   }
   console.log(num);
}
console.log("%c6.- Ciclo Iterativo - (FOR)", style_console);

console.log("Los dias de la semana son de orden ascendente son:")
let dias=["Domingo","lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

for(let i=0; i<dias.length; i++)
console.log(dias[i]) 

console.log("Los meses en orden descendente son: ...")
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

for(let i=meses.length-1; i>=0; i--)
console.log(meses[i]);

console.log("%c7.- ciclo condicionales (WHILE", style_console);

let FinDeSemana = false; 
let mensaje = ""; 
let j =0;

while (j < dias.length){
switch (j) {
    case 0: 
    FinDeSemana = true;
    mensaje = "Ya es Momingooo"; 
    break; 

    case 1: 
    FinDeSemana = false; 
    mensaje = "San lunes a chambiar..."; 
    break; 

    case 2: 
    FinDeSemana = false; 
    mensaje = "Animoo Segundo dia de chamba";
    break; 

    case 3:
        FinDeSemana= false; 
        mensaje= " Ombligo de semana ...";
        break; 

    case 4: 
        FinDeSemana = false; 
        mensaje = "Ya es Juevebessssss"; 
        break; 

 case 5: 
        FinDeSemana=false;
        mensaje= "Por fin es viernes "
        break; 

 case 6:
            FinDeSemana= false; 
            mensaje= "Llegamos a fin de semana";
            break;
}
if (!FinDeSemana)
{
    console.log(`Día: ${dias[j]}`);
    console.log(`Mensaje del dia: ${mensaje}`);
}
j++;
}