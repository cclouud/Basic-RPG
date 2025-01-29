//---------------Imports----------------------------

import { Jugador } from './Clases.js';
import { Enemigo } from './Clases.js';

//-------------Variables---------------------------

let jugador;
let enemigo1;
let contador;
let imagen = document.getElementById("enem") as HTMLImageElement;
let divva = document.getElementById("divva")
const tienda = document.getElementById("tie");
const menu = document.getElementById("men")
const comb = document.getElementById("ene")
const boton = document.getElementById("guardNom");
const vid = document.getElementById("mVida")
const atq = document.getElementById("mAtq")
const intercomb = document.getElementById("intercomb")
const combate = document.getElementById("combate")
const botsalir = document.getElementById("sa")
const bot1 = document.getElementById("botoness")
let nombpp = document.getElementById("nombpp")
let nomben = document.getElementById("nombene")
let centro = document.getElementById("canv")
let textoro = document.getElementById("textoro")
let perdido = document.getElementById("perdido")
let main = document.getElementById("mainC");
let streak = document.getElementById("textcont")

//-----------------Funciones de Juego----------------


export function crearJugador(): Jugador {
  console.log("player");

  let nombre = (document.getElementById("nombre") as HTMLInputElement).value;

  jugador = new Jugador(nombre, 100, 0, 2);
  jugador.calcularFuerzaInicial();
  mostrarEst(jugador);




  const div = document.getElementById("canv")


  div.style.backgroundImage = "url('/img/menu.gif')";
  div.style.backgroundSize = "";
  div.style.backgroundPosition = "bottom center"

  let botong = document.getElementById("guardNom")
  setTimeout(() => {
    fadeOutElement(botong);
  }, 700);

  let no = document.getElementById("nombre")
  setTimeout(() => {
    fadeOutElement(no);

  }, 1000);



  let texto = document.getElementById("text")
  texto.innerText = ""
  let textoEscrito = "Comienza tu viaje y salva Medac"
  let indice = 0
  const intervalo = setInterval(() => {
    if (indice < textoEscrito.length) {
      texto.textContent += textoEscrito[indice];
      indice++;
    } else {
      clearInterval(intervalo);
    }
  }, 40);


  setTimeout(() => {
    fadeOutElement(texto);
    texto.style.display = "none"
    no.style.display = "none"
    botong.style.display = "none"

  }, 3000);

  let main = document.getElementById("mainC");
  let estadisticas = document.getElementById("estadisticas")



  setTimeout(() => {
    fadeInElement(main);
    fadeInElement(estadisticas)
    main.style.display = ""
    no.style.display = "none"
    botong.style.display = "none"
  }, 4000);


  setTimeout(() => {
    empezarJuego()

  }, 4000)

  return jugador;

}

function mostrarEst(jugador) {

  const textoElemento = document.getElementById("textes");

  if (textoElemento) {
    textoElemento.innerHTML = `
      <p><strong>Estadísticas del Jugador</strong></p>
      <p>Nombre: ${jugador.nombre}</p>
      <p>Vida: ${jugador.puntos_salud}</p>
      <p>Ataque: ${jugador.puntos_ataque}</p>
      <p>Dinero: ${jugador.dinero}</p>
    `;
  }


}

function generarEnemigo(): Enemigo {
  const enemigos: string[] = [
    "Caído",
    "Profano",
    "Espectro",
    "Abismo",
    "Centinela",
    "Sombra",
    "Bestia",
    "Verdugo",
    "Profanador",
    "Maldito",
    "Serpiente",
    "Portador",
    "Devorador",
    "Ladrón",
    "Hereje",
    "Nigromante",
    "Vástago",
    "Tirano",
    "Coloso",
    "Errante"
  ];
  
  const nombreEnemigo = enemigos[Math.floor(Math.random() * enemigos.length)];
  const enemigo = new Enemigo(nombreEnemigo, 100, 0, 0);
  enemigo.calcularFuerzaInicial();
  enemigo.soltarDinero();
  return enemigo;
}

function empezarJuego() {
  let buscar = document.getElementById("ene");
  let tienda = document.getElementById("tie");
  let sa = document.getElementById("sa");
  let men = document.getElementById("men");
  men.style.opacity = "0"
  buscar.style.opacity = "0";
  tienda.style.opacity = "0";
  sa.style.opacity = "0";

  const elementos = ['ene', 'tie', 'sa', 'men'];

  elementos.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      fadeInElement(elemento);
      streak.innerHTML = "Enemigos para ganar: " + 5;
      fadeInElement(streak)
    }
  });
}

function masAtq() {
  disableButton(atq)
  disableButton(vid)
  if (jugador.dinero >= 15) {
    jugador.puntos_ataque += 20;
    jugador.dinero -= 15;
    textoro.innerHTML = "Oro: " + jugador.dinero
    let texto = document.getElementById("text")
    texto.innerText = ""
    let textoEscrito = "Tu ataque ha mejorado en 20 puntos"
    let indice = 0

    const intervalo = setInterval(() => {
      if (indice < textoEscrito.length) {
        texto.textContent += textoEscrito[indice];
        indice++;
      } else {
        clearInterval(intervalo);
        enableButton(atq)
        enableButton(vid)


      }
    }, 40);

  } else {
    let texto = document.getElementById("text")
    texto.innerText = ""
    let textoEscrito = "No tienes suficiente dinero, prueba a matar un par de bichos"
    let indice = 0

    const intervalo = setInterval(() => {
      if (indice < textoEscrito.length) {
        texto.textContent += textoEscrito[indice];
        indice++;
      } else {
        clearInterval(intervalo);
        enableButton(atq)
        enableButton(vid)


      }
    }, 40);

  }
}

function masVida() {
  disableButton(vid)
  disableButton(atq)

  if (jugador.dinero >= 15) {
    jugador.puntos_salud += 50;
    jugador.dinero -= 15;
    textoro.innerHTML = "Oro: " + jugador.dinero

    let texto = document.getElementById("text")
    texto.innerText = ""
    let textoEscrito = "Tu salud ha mejorado en 50 puntos"
    let indice = 0

    const intervalo = setInterval(() => {
      if (indice < textoEscrito.length) {
        texto.textContent += textoEscrito[indice];
        indice++;
      } else {
        clearInterval(intervalo);
        enableButton(vid)
        enableButton(atq)
      }
    }, 40);

  } else {
    let texto = document.getElementById("text")
    texto.innerText = ""
    let textoEscrito = "No tienes suficiente dinero, prueba a matar un par de bichos"
    let indice = 0

    const intervalo = setInterval(() => {
      if (indice < textoEscrito.length) {
        texto.textContent += textoEscrito[indice];
        indice++;
      } else {
        clearInterval(intervalo);
        enableButton(vid)
        enableButton(atq)
      }
    }, 40);

  }
}


function empezarComb(enemigo1) {
  fadeOutElement(combate);


  function actualizarEstadisticas() {
    nombpp.innerHTML = jugador.nombre + " -- HP: " + jugador.puntos_salud + " -- Atk: " + jugador.puntos_ataque;
    nomben.innerHTML = enemigo1.nombre + " -- HP: " + enemigo1.puntos_salud + " -- Atk: " + enemigo1.puntos_ataque;
  }

  function turnoCombate() {
    if (jugador.puntos_salud > 0 && enemigo1.puntos_salud > 0) {
      enemigo1.puntos_salud -= jugador.puntos_ataque;
      actualizarEstadisticas(); 

      if (enemigo1.puntos_salud <= 0) {
        jugador.dinero += enemigo1.dinero;
        nomben.innerHTML = enemigo1.nombre + " ha sido derrotado!!";
        fadeOutElement(imagen);
        streak.innerHTML = "Enemigos para ganar: " + (contador -= 1);
        return 
      }

      jugador.puntos_salud -= enemigo1.puntos_ataque;
      actualizarEstadisticas(); 
      if (jugador.puntos_salud <= 0) {
        fadeOutElement(main)

        setTimeout(()=>{
          fadeOutElement(centro)
          fadeOutElement(bot1)
          fadeInElement(perdido)
        }, 2000)


        return;
      }

      setTimeout(turnoCombate, 1000); 
    }
  }

  actualizarEstadisticas();
  turnoCombate();
}

//-------------------Ir A-------------------------

export function irATienda() {
  disableButton(tienda)
  disableButton(atq)
  disableButton(vid)

  enableButton(comb)
  enableButton(menu)
  let estadisticas = document.getElementById("estadisticas");
  let texto = document.getElementById("text");

  setTimeout(() => {
    fadeOutElement(estadisticas);
    fadeOutElement(imagen);
    fadeOutElement(streak)
    fadeOutElement(intercomb)
    

  }, 500);

  const div = document.getElementById("canv");

  fadeOutBackground(div);

  setTimeout(() => {
    div.style.backgroundImage = "url('img/tienda.gif')";
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "bottom center";
    textoro.innerHTML = "Oro: " + jugador.dinero
    fadeInBackground(div);
    fadeInElement(texto);

    texto.innerText = "";
    let textoEscrito = "Bienvenido viajero. ¿Deseas mejorar tu vida o tu ataque a cambio de 15 Oro?";
    let indice = 0;
    const intervalo = setInterval(() => {
      if (indice < textoEscrito.length) {
        texto.textContent += textoEscrito[indice];
        indice++;
      } else {
        clearInterval(intervalo);
        enableButton(vid)
        enableButton(atq)
      }
    }, 50);
  }, 1000);

  setTimeout(() => {
    fadeInElement(divva);
    fadeInElement(textoro)
    
  }, 3000);
}

export function irAMenu() {
  disableButton(menu)
  enableButton(comb)
  enableButton(tienda)

  let estadisticas = document.getElementById("estadisticas");
  let texto = document.getElementById("text");

  setTimeout(() => {
    fadeOutElement(texto);
    fadeOutElement(imagen);
    fadeOutElement(divva);
    fadeOutElement(intercomb)
    fadeOutElement(textoro)
  }, 600);

  const div = document.getElementById("canv");

  fadeOutBackground(div);

  setTimeout(() => {
    div.style.backgroundImage = "url('img/menu.gif')";
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "bottom center";
    fadeInBackground(div);
    mostrarEst(jugador);
    fadeInElement(estadisticas);
    fadeInElement(streak)

  }, 1000);
}

export function irACombate() {
  disableButton(comb)
  enableButton(tienda)
  enableButton(menu)
  fadeInElement(combate)
  let estadisticas = document.getElementById("estadisticas");
  const div = document.getElementById("canv");
  let texto = document.getElementById("text");

  enemigo1 = generarEnemigo()


  setTimeout(() => {
    fadeOutElement(texto);
    fadeOutElement(estadisticas);
    fadeOutElement(divva);
    fadeOutElement(textoro)
    fadeOutElement(streak)


  }, 500);

  fadeOutBackground(div);

  setTimeout(() => {
    let aleat = Math.floor(Math.random() * 3) + 1;
    div.style.backgroundImage = `url('img/fondocombate${aleat}.gif')`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "bottom center";

    fadeInBackground(div);

    setTimeout(() => {
      let aleatene = Math.floor(Math.random() * 5) + 1;
      imagen.src = `/img/Ene${aleatene}.gif`;
      fadeInElement(imagen);
      fadeInElement(intercomb)
      nombpp.innerHTML = jugador.nombre + " -- HP: " + jugador.puntos_salud + " -- Atk: " + jugador.puntos_ataque 
      nomben.innerHTML = enemigo1.nombre + " -- HP: " + enemigo1.puntos_salud + " -- Atk: " + enemigo1.puntos_ataque 
      enableButton(comb)

    }, 200);
  }, 1000);
}

function salir(){
    fadeOutElement(centro)
    fadeOutElement(bot1)
    setTimeout(() => {
      centro.style.display = "none"
      bot1.style.display = "none"
    }, 1000);
}

//-------------Funciones para animaciones---------------------


function fadeOutElement(element: HTMLElement) {
  if (!element || getComputedStyle(element).opacity === "0") return;
  let opacity = 1;
  const decrement = 0.12;
  const interval = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(interval);
      element.style.opacity = "0";
    } else {
      element.style.opacity = opacity.toString();
      opacity -= decrement;
    }
  }, 100);
}

function fadeInElement(element: HTMLElement) {
  if (!element || getComputedStyle(element).opacity === "1") return;
  let opacity = 0;
  const increment = 0.12;
  element.style.display = "";
  const interval = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(interval);
      element.style.opacity = "1";
    } else {
      element.style.opacity = opacity.toString();
      opacity += increment;
    }
  }, 100);
}

export function fadeOutBackground(element) {
  var opacity = 1;
  var decrement = 0.12;
  var interval = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(interval);
    }
    element.style.opacity = opacity;
    opacity -= decrement;
  }, 100);
}

export function fadeInBackground(element) {
  var opacity = 0;
  var increment = 0.12;
  element.style.display = "";
  var interval = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(interval);
    }
    element.style.opacity = opacity;
    opacity += increment;
  }, 100);
}

function disableButton(button) {
  button.disabled = true;
}

function enableButton(button) {
  button.disabled = false;
}


//-----------------DOM y eventos de click------------------------------

document.addEventListener('DOMContentLoaded', () => {
  boton.addEventListener('click', crearJugador);

  tienda.addEventListener('click', irATienda);

  menu.addEventListener('click', irAMenu);

  comb.addEventListener('click', irACombate);

  vid.addEventListener('click', masVida);

  atq.addEventListener('click', masAtq);

  combate.addEventListener('click', () => empezarComb(enemigo1));

  botsalir.addEventListener('click', salir)
});
