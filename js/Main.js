//---------------Imports----------------------------
import { Jugador } from './Clases.js';
import { Enemigo } from './Clases.js';
//-------------Variables---------------------------
let jugador;
let imagen = document.getElementById("enem");
let divva = document.getElementById("divva");
const tienda = document.getElementById("tie");
const menu = document.getElementById("men");
const comb = document.getElementById("ene");
const boton = document.getElementById("guardNom");
const vid = document.getElementById("mVida");
const atq = document.getElementById("mAtq");
const intercomb = document.getElementById("intercomb");
const combate = document.getElementById("combate");
//-----------------Funciones de Juego----------------
export function crearJugador() {
    console.log("player");
    let nombre = document.getElementById("nombre").value;
    jugador = new Jugador(nombre, 100, 0, 2);
    jugador.calcularFuerzaInicial();
    mostrarEst(jugador);
    const div = document.getElementById("canv");
    div.style.backgroundImage = "url('/img/menu.gif')";
    div.style.backgroundSize = "";
    div.style.backgroundPosition = "bottom center";
    let botong = document.getElementById("guardNom");
    setTimeout(() => {
        fadeOutElement(botong);
    }, 700);
    let no = document.getElementById("nombre");
    setTimeout(() => {
        fadeOutElement(no);
    }, 1000);
    let texto = document.getElementById("text");
    texto.innerText = "";
    let textoEscrito = "Comienza tu viaje y salva Medac";
    let indice = 0;
    const intervalo = setInterval(() => {
        if (indice < textoEscrito.length) {
            texto.textContent += textoEscrito[indice];
            indice++;
        }
        else {
            clearInterval(intervalo);
        }
    }, 40);
    setTimeout(() => {
        fadeOutElement(texto);
        texto.style.display = "none";
        no.style.display = "none";
        botong.style.display = "none";
    }, 3000);
    let main = document.getElementById("mainC");
    let estadisticas = document.getElementById("estadisticas");
    setTimeout(() => {
        fadeInElement(main);
        fadeInElement(estadisticas);
        main.style.display = "";
        no.style.display = "none";
        botong.style.display = "none";
    }, 4000);
    setTimeout(() => {
        empezarJuego();
    }, 4000);
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
function generarEnemigo() {
    const enemigos = ['Orco', 'Goblin', 'Troll', 'Dragon', 'Esqueleto', 'Vampiro'];
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
    men.style.opacity = "0";
    buscar.style.opacity = "0";
    tienda.style.opacity = "0";
    sa.style.opacity = "0";
    const elementos = ['ene', 'tie', 'sa', 'men'];
    elementos.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            fadeInElement(elemento);
        }
    });
}
function masAtq() {
    disableButton(atq);
    disableButton(vid);
    if (jugador.dinero >= 15) {
        jugador.puntos_ataque += 20;
        jugador.dinero -= 20;
        let texto = document.getElementById("text");
        texto.innerText = "";
        let textoEscrito = "Tu ataque ha mejorado en 20 puntos";
        let indice = 0;
        const intervalo = setInterval(() => {
            if (indice < textoEscrito.length) {
                texto.textContent += textoEscrito[indice];
                indice++;
            }
            else {
                clearInterval(intervalo);
                enableButton(atq);
                enableButton(vid);
            }
        }, 40);
    }
    else {
        let texto = document.getElementById("text");
        texto.innerText = "";
        let textoEscrito = "No tienes suficiente dinero, prueba a matar un par de bichos";
        let indice = 0;
        const intervalo = setInterval(() => {
            if (indice < textoEscrito.length) {
                texto.textContent += textoEscrito[indice];
                indice++;
            }
            else {
                clearInterval(intervalo);
                enableButton(atq);
                enableButton(vid);
            }
        }, 40);
    }
}
function masVida() {
    disableButton(vid);
    disableButton(atq);
    if (jugador.dinero >= 15) {
        jugador.puntos_salud += 50;
        jugador.dinero -= 20;
        let texto = document.getElementById("text");
        texto.innerText = "";
        let textoEscrito = "Tu salud ha mejorado en 50 puntos";
        let indice = 0;
        const intervalo = setInterval(() => {
            if (indice < textoEscrito.length) {
                texto.textContent += textoEscrito[indice];
                indice++;
            }
            else {
                clearInterval(intervalo);
                enableButton(vid);
                enableButton(atq);
            }
        }, 40);
    }
    else {
        let texto = document.getElementById("text");
        texto.innerText = "";
        let textoEscrito = "No tienes suficiente dinero, prueba a matar un par de bichos";
        let indice = 0;
        const intervalo = setInterval(() => {
            if (indice < textoEscrito.length) {
                texto.textContent += textoEscrito[indice];
                indice++;
            }
            else {
                clearInterval(intervalo);
                enableButton(vid);
                enableButton(atq);
            }
        }, 40);
    }
}
function empezarComb() {
    let enemigo = generarEnemigo();
    function turnoCombate() {
        if (jugador.puntos_salud > 0 && enemigo.puntos_salud > 0) {
            enemigo.puntos_salud -= jugador.puntos_ataque;
            if (enemigo.puntos_salud <= 0) {
                jugador.dinero += enemigo.dinero;
                fadeOutElement(imagen);
                return;
            }
            // Turno del enemigo
            jugador.puntos_salud -= enemigo.puntos_ataque;
            if (jugador.puntos_salud <= 0) {
                return;
            }
            setTimeout(turnoCombate, 1000);
        }
    }
    turnoCombate();
}
//-------------------Ir A-------------------------
export function irATienda() {
    disableButton(tienda);
    disableButton(atq);
    disableButton(vid);
    enableButton(comb);
    enableButton(menu);
    let estadisticas = document.getElementById("estadisticas");
    let texto = document.getElementById("text");
    setTimeout(() => {
        fadeOutElement(estadisticas);
        fadeOutElement(imagen);
        fadeOutElement(intercomb);
    }, 500);
    const div = document.getElementById("canv");
    fadeOutBackground(div);
    setTimeout(() => {
        div.style.backgroundImage = "url('img/tienda.gif')";
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "bottom center";
        fadeInBackground(div);
        fadeInElement(texto);
        texto.innerText = "";
        let textoEscrito = "Bienvenido viajero. ¿Deseas mejorar tu vida o tu ataque a cambio de 15 Oro?";
        let indice = 0;
        const intervalo = setInterval(() => {
            if (indice < textoEscrito.length) {
                texto.textContent += textoEscrito[indice];
                indice++;
            }
            else {
                clearInterval(intervalo);
                enableButton(vid);
                enableButton(atq);
            }
        }, 50);
    }, 1000);
    setTimeout(() => {
        fadeInElement(divva);
    }, 3000);
}
export function irAMenu() {
    disableButton(menu);
    enableButton(comb);
    enableButton(tienda);
    let estadisticas = document.getElementById("estadisticas");
    let texto = document.getElementById("text");
    setTimeout(() => {
        fadeOutElement(texto);
        fadeOutElement(imagen);
        fadeOutElement(divva);
        fadeOutElement(intercomb);
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
    }, 1000);
}
export function irACombate() {
    disableButton(comb);
    enableButton(tienda);
    enableButton(menu);
    let estadisticas = document.getElementById("estadisticas");
    const div = document.getElementById("canv");
    let texto = document.getElementById("text");
    setTimeout(() => {
        fadeOutElement(texto);
        fadeOutElement(estadisticas);
        fadeOutElement(divva);
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
            fadeInElement(intercomb);
            enableButton(comb);
        }, 200);
    }, 1000);
}
//-------------Funciones para animaciones---------------------
function fadeOutElement(element) {
    if (!element || getComputedStyle(element).opacity === "0")
        return;
    let opacity = 1;
    const decrement = 0.12;
    const interval = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(interval);
            element.style.opacity = "0";
        }
        else {
            element.style.opacity = opacity.toString();
            opacity -= decrement;
        }
    }, 100);
}
function fadeInElement(element) {
    if (!element || getComputedStyle(element).opacity === "1")
        return;
    let opacity = 0;
    const increment = 0.12;
    element.style.display = "";
    const interval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(interval);
            element.style.opacity = "1";
        }
        else {
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
    combate.addEventListener('click', empezarComb);
});
//--------------------------------------------------------------
function main() {
    const jugador = crearJugador();
    let salir = false;
    while (!salir) {
        let opcion = 1;
        switch (opcion) {
            case 1: // Luchar contra el enemigo
                const enemigo = generarEnemigo();
                console.log(`¡Un ${enemigo.nombre} aparecio!`);
                console.log(`Ataque enemigo: ${enemigo.puntos_ataque}`);
                console.log(`Tu ataque: ${jugador.puntos_ataque}`);
                if (jugador.puntos_ataque >= enemigo.puntos_ataque) {
                    console.log(`¡Venciste al ${enemigo.nombre} y ganaste ${enemigo.dinero} monedas!`);
                    jugador.dinero += enemigo.dinero;
                }
                else {
                    console.log(`El ${enemigo.nombre} te vencio. Perdiste ${enemigo.puntos_ataque} puntos de salud.`);
                    jugador.puntos_salud -= enemigo.puntos_ataque;
                    if (jugador.puntos_salud <= 0) {
                        console.log("Has sido derrotado. Fin del juego.");
                        salir = true;
                    }
                }
                break;
            case 2: // Comprar items
                console.log("\n--- Tienda de items ---");
                console.log("1. Pocion de salud (5 monedas) - Recupera 20 puntos de salud");
                console.log("2. Mejora de ataque (10 monedas) - Incrementa tu ataque en 5 puntos");
                const item = null;
                if (item === 1 && jugador.dinero >= 5) {
                    jugador.dinero -= 5;
                    jugador.puntos_salud += 20;
                    console.log("Has comprado una pocion de salud. Salud +20.");
                }
                else if (item === 2 && jugador.dinero >= 10) {
                    jugador.dinero -= 10;
                    jugador.puntos_ataque += 5;
                    console.log("Has comprado una mejora de ataque. Ataque +5.");
                }
                else {
                    console.log("No tienes suficiente dinero o ingresaste una opcion invalida.");
                }
                break;
            case 3: // Consultar estadisticas
                console.log("\n--- Tus estadisticas ---");
                jugador.imprimirEstadisticas();
                break;
            case 4: // Salir del juego
                console.log("Gracias por jugar. ¡Hasta la proxima!");
                salir = true;
                break;
            default:
                console.log("Opcion invalida.");
        }
    }
}
