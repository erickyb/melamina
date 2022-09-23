
const contenedorMuebles=document.getElementById('contenedor-muebles')

let muebles = []
let opcionMuebles




document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel=document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
       duration:1500,   // duracion  de tiempo al momento de girar
       dist:-70,        // distacia de perspectiva se agranda cuando se va o se pequeño
       shift:5,         // distacia a los costados
       padding:5,       // espacio de la image
       numVisible:5,    // cantidad de imagenes quson visibles
       indicators:true, // es para inicar que hay que poner los indicadores
       noWrap:false,     // 'true' es para poner la primera image
                        // pero se ve mejor con 'false'


    });
});


class Mueble{
    constructor(nombre,foto,descripcion){
        this.nombre=nombre
        this.foto=foto
        this.descripcion=descripcion
    }
  }

  let unoM = new Mueble('Juguete','img/carro_para_niño.jpeg','Coche de niño ')
  let dosM = new Mueble('Juguete','img/cuna_para_niña.jpeg','cuna para niña')
  let tresM = new Mueble('Tres','img/empotrado.jpeg','Armario empotrado')
  let cuatroM = new Mueble('cuatro','img/exhibidor.jpeg','mueble para exhibir')
  let cincoM = new Mueble('cinco','img/flotante.jpeg','estante flotante')
 /**  let seisM = new Mueble('seis','img/3.png','tercero')
  let sieteM = new Mueble('siete','img/3.png','tercero')
  let ochoM = new Mueble('ocho','img/3.png','tercero')
  let nueveM = new Mueble('nueve','img/3.png','tercero')
  let diezM = new Mueble('diez','img/3.png','tercero')
  let onceM = new Mueble('once','img/3.png','tercero')
  let doceM = new Mueble('doce','img/3.png','tercero')
  let treceM = new Mueble('trece','img/3.png','tercero')
  let catorceM = new Mueble('catorce','img/3.png','tercero')
  let quinceM = new Mueble('quince','img/3.png','tercero')
  let dieciseisM = new Mueble('dieciseis','img/3.png','tercero')
  let diecisieteM = new Mueble('diecisiete','img/3.png','tercero')
  let dieciochoM = new Mueble('dieciocho','img/3.png','tercero')
  let diecinueveM = new Mueble('diecinueve','img/3.png','tercero')
  let vienteM = new Mueble('veinte','img/3.png','tercero')
  let vientiunoM = new Mueble('veintiuno','img/3.png','tercero')
  let vientidosM = new Mueble('veinte','img/3.png','tercero')*/


  muebles.push(unoM,dosM,tresM,cuatroM,cincoM)/** ,seisM,sieteM,ochoM,nueveM,diezM,onceM,treceM,catorceM,quinceM,dieciseisM,diecisieteM,dieciochoM,diecinueveM,vienteM,vientiunoM,vientidosM)*/


insertarHtml()

  function insertarHtml (){

    muebles.forEach((mueble) =>{
        //console.log(mueble.foto)
         opcionMuebles=`
     
         <div id="${mueble.nombre}" class="carousel-item">
             <p class="sabor"> ${mueble.descripcion}</p>
             <img src="${mueble.foto}" alt=${mueble.nombre}>
         </div>
     `
     contenedorMuebles.innerHTML+=opcionMuebles
     })
      
  }

 

