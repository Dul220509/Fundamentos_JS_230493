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

console.log("%c6.- Ciclo iterativo - (FOR)", style_console);
//Recorre de manera iterativa (i), de incrementa o decrementa

console.log("Los dias de la semana en orden ascendente son:")
let dias = ["Domingo","Lunes", "Martes", "Miercoles","Jueves","Viernes","Sabado"]
for (let i=0; i<dias.length;i++){
    console.log(dias[i])
}

console.log("Los meses del año en orden ascendente son:")
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for (let i=meses.length-1; i>=0;i--){
    console.log(meses[i])
}
console.log("%c7.- Ciclos condicionales - (WHILE)", style_console);
//Los ciclos (BUCLE) dependen de una condicion para continuar y seguir ejecutandose
let finDeSemana = false;
let mensaje = "";
let j = 0;
//usamos J para que coincida  con el indice
while (j < dias.length){
    switch(j)
    {
        case 0:
            finDeSemana = true;
            mensaje = "Domingo de Resurreccion";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "Maldito Lunes";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Martesito";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Miercolitrosss"
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Juevebes"
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Vebiernes"
            break;
        case 6:
            finDeSemana = false;
            mensaje = "Sabadito";
            break;
    }
        //Impirmi el nombre del dia y su mensaje
    if (!finDeSemana)
    {
        console.log(`Dia ${dias[j]}`)
        console.log(`Mensaje del dia ${mensaje}`)
    }
    j++;
}


console.log("%c8.- ciclo condicionales, que se ejecutan al menos una vez - (DO WHILE)", style_console);

let episodios = [
    "Episodio 1: Femenina o masculina",
    "Episodio 2: ¿Sexi o sexista?",
    "Episodio 3: Un beso es un beso",
    "Episodio 4: Falsos amigos ",
    "Episodio 5: Ringarde",
    "Episodio 6: Un final frances",
];

let indice = 0;
let continuarViendo = true; 

do {
    console.log(`Reproduciendo ${episodios[indice]}`)
    indice++;

    if(indice < episodios.length){
        continuarViendo = confirm("Deseas continuar con el siguiente episodio?"); 
}else{
    continuarViendo = false; 
}
}while (continuarViendo && indice < episodios.length);
console.log("Fin de la reproduccion.");

//ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos 
console.log("%c9.- ciclo para recorrer elementos finitos (FOR ...OF", style_console);

let seriesTrending = [
    { nombre: "Emily en paris", temporadas: 4, totalViewers: "1.0M", totalReprods: "5.0M"},
    { nombre: "Estamos vivos", temporadas: 2, totalViewers: "1.50M", totalReprods: "2.0M"},
    { nombre: "Dardevil", temporadas: 3, totalViewers: "1.0M", totalReprods: "1.0M"},

];
  
for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.Temporadas}`);
}
try {
    console.log(`La ultima serie leida fue: ${serie.nombre}`);
}
catch(error)
{
    console.log("Mensaje de error: "+error.message)
}
console.log("%c10,- Ciclos para recorrer las propiedades de elmentos finitos-(FOR..IN", style_console); 

for (let i in seriesTrending) {
    console.log(`Serie ${parseInt(i)+1}:`);
    for (let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[1][propiedad]}`);
    }
    console.log(`--------------------`); 

}
console.log("%c11.- ciclos ininterrumpidos para cada uno de los elementos del arreglo (FOR EACH)", style_console);

let seriesTrending2 = [
    {nombre: "The Witcher", temporadas:4, viewers: 800000, reproducciones:25000},
    {nombre: "Stranger Things", temporadas:5, viewers: 500000, reproducciones:25000},
    {nombre: "Bridgerthn", temporadas:3, viewers: 600000, reproducciones:25000},
    {nombre: "Loki", temporadas:3, viewers: 300000, reproducciones:25000},
    {nombre: "Dark", temporadas:3, viewers: 700000, reproducciones:25000},
];

seriesTrending.forEach((serie,index )=> {
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2);


    console.log(`Serie: ${index + 1}:`);
    console.log(`Nombre: ${serie.nombre}:`);
    console.log(`Temporada: ${serie.temporadas}:`);
    console.log(`Viewers: ${serie.viewers}:`);
    console.log(`Reproducciones: ${serie.reproducciones}:`);
    console.log(`Calificacion: ${calificacion}:`);
    console.log(`-------------`);

});

let seriesDeseadas = ["Emily en paris", " Dardevil", " loki"];

let seriesConTresTemporadas = seriesTrending2
.filter(serie => serie.temporadas <=3 )
.map(serie => serie.nombre)
.filter(nombre => seriesDeseadas.includes(nombre)); 

console.log("Series con tres temporadas que estan en la lista deseada:");
console.log(seriesConTresTemporadas);