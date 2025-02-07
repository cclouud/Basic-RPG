"use strict";
//---------------Imports----------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearJugador = crearJugador;
exports.irATienda = irATienda;
exports.irAMenu = irAMenu;
exports.irACombate = irACombate;
exports.fadeOutBackground = fadeOutBackground;
exports.fadeInBackground = fadeInBackground;
var Clases_js_1 = require("./Clases.js");
var Clases_js_2 = require("./Clases.js");
//-------------Variables---------------------------
var jugador;
var enemigo1;
var contador = 5;
var imagen = document.getElementById("enem");
var divva = document.getElementById("divva");
var tienda = document.getElementById("tie");
var menu = document.getElementById("men");
var comb = document.getElementById("ene");
var boton = document.getElementById("guardNom");
var vid = document.getElementById("mVida");
var atq = document.getElementById("mAtq");
var intercomb = document.getElementById("intercomb");
var combate = document.getElementById("combate");
var botsalir = document.getElementById("sa");
var bot1 = document.getElementById("botoness");
var nombpp = document.getElementById("nombpp");
var nomben = document.getElementById("nombene");
var centro = document.getElementById("canv");
var textoro = document.getElementById("textoro");
var perdido = document.getElementById("perdido");
var main = document.getElementById("mainC");
var streak = document.getElementById("textcont");
var ganado = document.getElementById("ganado");
//-----------------Funciones de Juego----------------
function crearJugador() {
    console.log("player");
    var nombre = document.getElementById("nombre").value;
    jugador = new Clases_js_1.Jugador(nombre, 100, 0, 2);
    jugador.calcularFuerzaInicial();
    mostrarEst(jugador);
    var div = document.getElementById("canv");
    div.style.backgroundImage = "url('/img/menu.gif')";
    div.style.backgroundSize = "";
    div.style.backgroundPosition = "bottom center";
    var botong = document.getElementById("guardNom");
    setTimeout(function () {
        fadeOutElement(botong);
    }, 700);
    var no = document.getElementById("nombre");
    setTimeout(function () {
        fadeOutElement(no);
    }, 1000);
    var texto = document.getElementById("text");
    texto.innerText = "";
    var textoEscrito = "Comienza tu viaje y salva Medac";
    var indice = 0;
    var intervalo = setInterval(function () {
        if (indice < textoEscrito.length) {
            texto.textContent += textoEscrito[indice];
            indice++;
        }
        else {
            clearInterval(intervalo);
        }
    }, 40);
    setTimeout(function () {
        fadeOutElement(texto);
        texto.style.display = "none";
        no.style.display = "none";
        botong.style.display = "none";
    }, 3000);
    var main = document.getElementById("mainC");
    var estadisticas = document.getElementById("estadisticas");
    setTimeout(function () {
        fadeInElement(main);
        fadeInElement(estadisticas);
        main.style.display = "";
        no.style.display = "none";
        botong.style.display = "none";
    }, 4000);
    setTimeout(function () {
        empezarJuego();
    }, 4000);
    return jugador;
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
                contador -= 1;
                streak.innerHTML = "Enemigos restantes: " + contador;
                if (contador <= 0) {
                    fadeOutElement(main);
                    setTimeout(function () {
                        fadeOutElement(centro);
                        fadeOutElement(bot1);
                        ganado.style.display = "";
                        fadeInElement(ganado);
                    }, 2000);
                    setTimeout(function () {
                        centro.style.display = "none";
                        bot1.style.display = "none";
                    }, 3000);
                }
                return;
            }
            jugador.puntos_salud -= enemigo1.puntos_ataque;
            actualizarEstadisticas();
            if (jugador.puntos_salud <= 0) {
                fadeOutElement(main);
                setTimeout(function () {
                    fadeOutElement(centro);
                    fadeOutElement(bot1);
                    perdido.style.display = "";
                    fadeInElement(perdido);
                }, 2000);
                return;
            }
            setTimeout(turnoCombate, 1000);
        }
    }
    actualizarEstadisticas();
    turnoCombate();
}
function empezarJuego() {
    var buscar = document.getElementById("ene");
    var tienda = document.getElementById("tie");
    var sa = document.getElementById("sa");
    var men = document.getElementById("men");
    men.style.opacity = "0";
    buscar.style.opacity = "0";
    tienda.style.opacity = "0";
    sa.style.opacity = "0";
    var elementos = ['ene', 'tie', 'sa', 'men'];
    elementos.forEach(function (id) {
        var elemento = document.getElementById(id);
        if (elemento) {
            fadeInElement(elemento);
            streak.innerHTML = "Enemigos para ganar: " + contador;
            fadeInElement(streak);
        }
    });
}
function masAtq() {
    disableButton(atq);
    disableButton(vid);
    if (jugador.dinero >= 15) {
        jugador.puntos_ataque += 20;
        jugador.dinero -= 15;
        textoro.innerHTML = "Oro: " + jugador.dinero;
        var texto_1 = document.getElementById("text");
        texto_1.innerText = "";
        var textoEscrito_1 = "Tu ataque ha mejorado en 20 puntos";
        var indice_1 = 0;
        var intervalo_1 = setInterval(function () {
            if (indice_1 < textoEscrito_1.length) {
                texto_1.textContent += textoEscrito_1[indice_1];
                indice_1++;
            }
            else {
                clearInterval(intervalo_1);
                enableButton(atq);
                enableButton(vid);
            }
        }, 40);
    }
    else {
        var texto_2 = document.getElementById("text");
        texto_2.innerText = "";
        var textoEscrito_2 = "No tienes suficiente dinero, prueba a matar un par de bichos";
        var indice_2 = 0;
        var intervalo_2 = setInterval(function () {
            if (indice_2 < textoEscrito_2.length) {
                texto_2.textContent += textoEscrito_2[indice_2];
                indice_2++;
            }
            else {
                clearInterval(intervalo_2);
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
        jugador.dinero -= 15;
        textoro.innerHTML = "Oro: " + jugador.dinero;
        var texto_3 = document.getElementById("text");
        texto_3.innerText = "";
        var textoEscrito_3 = "Tu salud ha mejorado en 50 puntos";
        var indice_3 = 0;
        var intervalo_3 = setInterval(function () {
            if (indice_3 < textoEscrito_3.length) {
                texto_3.textContent += textoEscrito_3[indice_3];
                indice_3++;
            }
            else {
                clearInterval(intervalo_3);
                enableButton(vid);
                enableButton(atq);
            }
        }, 40);
    }
    else {
        var texto_4 = document.getElementById("text");
        texto_4.innerText = "";
        var textoEscrito_4 = "No tienes suficiente dinero, prueba a matar un par de bichos";
        var indice_4 = 0;
        var intervalo_4 = setInterval(function () {
            if (indice_4 < textoEscrito_4.length) {
                texto_4.textContent += textoEscrito_4[indice_4];
                indice_4++;
            }
            else {
                clearInterval(intervalo_4);
                enableButton(vid);
                enableButton(atq);
            }
        }, 40);
    }
}
function mostrarEst(jugador) {
    var textoElemento = document.getElementById("textes");
    if (textoElemento) {
        textoElemento.innerHTML = "\n      <p><strong>Estad\u00EDsticas del Jugador</strong></p>\n      <p>Nombre: ".concat(jugador.nombre, "</p>\n      <p>Vida: ").concat(jugador.puntos_salud, "</p>\n      <p>Ataque: ").concat(jugador.puntos_ataque, "</p>\n      <p>Dinero: ").concat(jugador.dinero, "</p>\n    ");
    }
}
function generarEnemigo() {
    var enemigos = [
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
    var nombreEnemigo = enemigos[Math.floor(Math.random() * enemigos.length)];
    var enemigo = new Clases_js_2.Enemigo(nombreEnemigo, 100, 0, 0);
    enemigo.calcularFuerzaInicial();
    enemigo.soltarDinero();
    return enemigo;
}
//-------------------Ir A-------------------------
function irATienda() {
    disableButton(tienda);
    disableButton(atq);
    disableButton(vid);
    enableButton(comb);
    enableButton(menu);
    var estadisticas = document.getElementById("estadisticas");
    var texto = document.getElementById("text");
    setTimeout(function () {
        fadeOutElement(estadisticas);
        fadeOutElement(imagen);
        fadeOutElement(streak);
        fadeOutElement(intercomb);
    }, 500);
    var div = document.getElementById("canv");
    fadeOutBackground(div);
    setTimeout(function () {
        div.style.backgroundImage = "url('img/tienda.gif')";
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "bottom center";
        textoro.innerHTML = "Oro: " + jugador.dinero;
        fadeInBackground(div);
        fadeInElement(texto);
        texto.innerText = "";
        var textoEscrito = "Bienvenido viajero. ¿Deseas mejorar tu vida o tu ataque a cambio de 15 Oro?";
        var indice = 0;
        var intervalo = setInterval(function () {
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
    }, 1000);
    setTimeout(function () {
        fadeInElement(divva);
        fadeInElement(textoro);
    }, 3000);
}
function irAMenu() {
    disableButton(menu);
    enableButton(comb);
    enableButton(tienda);
    var estadisticas = document.getElementById("estadisticas");
    var texto = document.getElementById("text");
    setTimeout(function () {
        fadeOutElement(texto);
        fadeOutElement(imagen);
        fadeOutElement(divva);
        fadeOutElement(intercomb);
        fadeOutElement(textoro);
    }, 600);
    var div = document.getElementById("canv");
    fadeOutBackground(div);
    setTimeout(function () {
        div.style.backgroundImage = "url('img/menu.gif')";
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "bottom center";
        fadeInBackground(div);
        mostrarEst(jugador);
        fadeInElement(estadisticas);
        fadeInElement(streak);
    }, 1000);
}
function irACombate() {
    disableButton(comb);
    enableButton(tienda);
    enableButton(menu);
    fadeInElement(combate);
    var estadisticas = document.getElementById("estadisticas");
    var div = document.getElementById("canv");
    var texto = document.getElementById("text");
    enemigo1 = generarEnemigo();
    setTimeout(function () {
        fadeOutElement(texto);
        fadeOutElement(estadisticas);
        fadeOutElement(divva);
        fadeOutElement(textoro);
        fadeOutElement(streak);
    }, 500);
    fadeOutBackground(div);
    setTimeout(function () {
        var aleat = Math.floor(Math.random() * 3) + 1;
        div.style.backgroundImage = "url('img/fondocombate".concat(aleat, ".gif')");
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "bottom center";
        fadeInBackground(div);
        setTimeout(function () {
            var aleatene = Math.floor(Math.random() * 5) + 1;
            imagen.src = "/img/Ene".concat(aleatene, ".gif");
            fadeInElement(imagen);
            fadeInElement(intercomb);
            nombpp.innerHTML = jugador.nombre + " -- HP: " + jugador.puntos_salud + " -- Atk: " + jugador.puntos_ataque;
            nomben.innerHTML = enemigo1.nombre + " -- HP: " + enemigo1.puntos_salud + " -- Atk: " + enemigo1.puntos_ataque;
            enableButton(comb);
        }, 200);
    }, 1000);
}
function salir() {
    fadeOutElement(centro);
    fadeOutElement(bot1);
    setTimeout(function () {
        centro.style.display = "none";
        bot1.style.display = "none";
    }, 1000);
    setTimeout(function () {
        window.location.reload();
    }, 2000);
}
//-------------Funciones para animaciones---------------------
function fadeOutElement(element) {
    if (!element || getComputedStyle(element).opacity === "0")
        return;
    var opacity = 1;
    var decrement = 0.12;
    var interval = setInterval(function () {
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
    var opacity = 0;
    var increment = 0.12;
    element.style.display = "";
    var interval = setInterval(function () {
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
function fadeOutBackground(element) {
    var opacity = 1;
    var decrement = 0.12;
    var interval = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(interval);
        }
        element.style.opacity = opacity;
        opacity -= decrement;
    }, 100);
}
function fadeInBackground(element) {
    var opacity = 0;
    var increment = 0.12;
    element.style.display = "";
    var interval = setInterval(function () {
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
document.addEventListener('DOMContentLoaded', function () {
    boton.addEventListener('click', crearJugador);
    tienda.addEventListener('click', irATienda);
    menu.addEventListener('click', irAMenu);
    comb.addEventListener('click', irACombate);
    vid.addEventListener('click', masVida);
    atq.addEventListener('click', masAtq);
    combate.addEventListener('click', function () { return empezarComb(enemigo1); });
    botsalir.addEventListener('click', salir);
});
