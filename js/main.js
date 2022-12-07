const contenedorMuebles = document.getElementById("contenedor-muebles")

let ziby =[]
//let muebles = []
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
    constructor(nombreZiby,fotoZiby,descripcionZiby){
        this.nombreZiby=nombreZiby
        this.fotoZiby=fotoZiby
        this.descripcionZiby=descripcionZiby
       
    }
  }

  let melami1 = new Mueble('Jugue1','img/IMG_JUGUETES/zibyCajaJuguetes.jpeg','Caja de Juguetes')
  let melami2 = new Mueble('Jugue2','img/IMG_JUGUETES/zibyCamaMuñecaJ.jpeg','Cama de Muñecas')
  let melami3 = new Mueble('Jugue3','img/IMG_JUGUETES/zibyCarritoNiña1J.jpeg','Carrito de Niña')
  let melami4 = new Mueble('Jugue4','img/IMG_JUGUETES/zibyCarritoNiña2J.jpeg','Carrito de Niña')
  let melami5 = new Mueble('Jugue5','img/IMG_JUGUETES/zibyCarritoNiño1J.jpg','Carrito Silla')
  let melami6 = new Mueble('Jugue6','img/IMG_JUGUETES/zibyCarritoNiño2J.png','Carrito de Niños')
  let melami7 = new Mueble('Jugue7','img/IMG_JUGUETES/zibyCarritoNiño3J.jpeg','Carrito de Niños')
  let melami8 = new Mueble('Jugue8','img/IMG_JUGUETES/zibyCarritoNiño4J.jpeg','Carrito de Niños')
  let melami9 = new Mueble('Jugue9','img/IMG_JUGUETES/zibyCocina1J.jpeg','Cocina')
  let melam10 = new Mueble('Jugu10','img/IMG_JUGUETES/zibyCocina2J.jpeg','Cocina')
  let melam11 = new Mueble('Jugu11','img/IMG_JUGUETES/zibyCocodriloJ.jpeg','Cocodrilo')
  let melam12 = new Mueble('Jugu12','img/IMG_JUGUETES/zibyCunaMuñeca1J.jpeg','Cuna de muñecas')
  let melam13 = new Mueble('Jugu13','img/IMG_JUGUETES/zibyCunaMuñeca2J.jpeg','Cuna de muñecas')
  let melam14 = new Mueble('Jugu14','img/IMG_JUGUETES/zibyMicroondasJ.jpeg','Microondas Juguetes')
  let melam15 = new Mueble('Jugu15','img/IMG_JUGUETES/zibyPercheroJ.jpeg','Perchero')
  let melam16 = new Mueble('Jugu16','img/IMG_JUGUETES/zibySillaAnimalesJ.jpeg','Silla de Animalitos')
  let melam17 = new Mueble('Jugu17','img/IMG_JUGUETES/zibySillaOsoJ.jpeg','Silla de  Oso')
  let melam18 = new Mueble('Jugu18','img/IMG_JUGUETES/zibySillaOvejaJ.jpeg','Silla de  Oveja')
  let melam19 = new Mueble('Jugu19','img/IMG_JUGUETES/zibySillaPrincesaJ.jpeg','Silla de Niña')
  let melam20 = new Mueble('Jugu20','img/IMG_JUGUETES/zibyStandJ.jpeg','Repisas Flotantes')
  let melam21 = new Mueble('muebl1','img/IMG_MUEBLES/zibyArmario.jpeg','Armario Empotrado')
  let melam22 = new Mueble('muebl2','img/IMG_MUEBLES/zibyCocina.jpeg','Cocina')
  let melam23 = new Mueble('muebl3','img/IMG_MUEBLES/zibyFlotante.jpeg','Estante Flotante')
  let melam24 = new Mueble('muebl4','img/IMG_MUEBLES/zibyMesaTv.jpeg','Mesa de  Tv')
  let melam25 = new Mueble('muebl5','img/IMG_MUEBLES/zibyStand.jpeg','Mueble para Exhibir')
  /*let melam26 = new Mueble('muebl2','img/IMG_MUEBLES/zibyCocina.jpeg','tercero')
  let melam27 = new Mueble('muebl2','img/IMG_MUEBLES/zibyCocina.jpeg','tercero')
  let melam28 = new Mueble('muebl2','img/IMG_MUEBLES/zibyCocina.jpeg','tercero')
  let melam29 = new Mueble('muebl2','img/IMG_MUEBLES/zibyCocina.jpeg','tercero')
  let melam30 = new Mueble('muebl2','img/IMG_MUEBLES/zibyCocina.jpeg','tercero')*/


  ziby.push(melami1,melami2,melami3,melami4,melami5,melami6,melami7,melami8,melami9,melam10,melam11,melam12,melam13,melam14,melam15,melam16,melam17,melam18,melam19,melam20,melam21,melam22,melam23,melam24,melam25)/**,melam26,melam27,melam28,melam29,melam30,melam31,melam32)*/


insertarHtml()

  function insertarHtml(){

    ziby.forEach((mueble) =>{
        //console.log(mueble.foto)
         opcionMuebles=`
     
         <div id="${mueble.nombreZiby}" class="carousel-item">
             <p class="sabor"> ${mueble.descripcionZiby}</p>
             <img src="${mueble.fotoZiby}" alt=${mueble.nombreZiby}>
             <span id="contactos-Ziby">Contactos:992269538/943155403-Ziby</span> 
             <span id="Email-Ziby">Email:ziby.eclipce@gmail.com-Ziby</span>
         </div>
     `
     contenedorMuebles.innerHTML+=opcionMuebles
     })
      
  }

 

