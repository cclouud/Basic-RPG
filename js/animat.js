//---------------------Variables-------------------

let fondo = "img/menu.gif";

let buscar = document.getElementById("ene");
let tienda = document.getElementById("tie");
let sa = document.getElementById("sa");
let men = document.getElementById("men");
let gn = document.getElementById("genshinNever");
let botong = document.getElementById("guardNom");
let nombre = document.getElementById("nombre");
let texto = document.getElementById("text");
let main = document.getElementById("mainC");
let dives = document.getElementById("estadisticas");
let imagen = document.getElementById("enem");
let divva = document.getElementById("divva");
let intercomb = document.getElementById("intercomb")
let textoro = document.getElementById("textoro")
let perdido = document.getElementById("perdido")
let ganado = document.getElementById("ganado")
let streak = document.getElementById("textcont")


buscar.style.opacity = "0";
tienda.style.opacity = "0";
sa.style.opacity = "0";
men.style.opacity = "0";
perdido.style.opacity = "0"
streak.style.opacity = "0"
ganado.style.opacity = "0"

botong.style.display = "none";
nombre.style.display = "none";
texto.style.display = "none";
ganado.style.display = "none"
perdido.style.display = "none"

main.style.opacity = "0";
dives.style.opacity = "0";
imagen.style.opacity = "0";
divva.style.opacity = "0";
intercomb.style.opacity = "0"
textoro.style.opacity = "0"

//------------------------Funciones Principales-------------------------

function inicio() {

    let textoEscrito = "Bienvenido, Introduce tu nombre";
    let indice = 0;
    let velocidad = 100;
    let elemento = document.getElementById("text");
    let video = document.querySelector("video");
    let nombre = document.getElementById("nombre");
    let botonEnviar = document.getElementById("guardNom");

    elemento.style.opacity = "0";
    elemento.style.display = "";
    nombre.style.display = "none";

    const intervalo = setInterval(() => {
        if (indice < textoEscrito.length) {
            elemento.textContent += textoEscrito[indice];
            indice++;
        } else {
            clearInterval(intervalo); 
        }
    }, velocidad);
    disableButton(gn)

    setTimeout(() => {
        fadeOutElement(video);
        let fon = document.getElementById("canv")
        fon.style.backgroundImage = `url(${fondo})`;
        fon.style.backgroundPosition = "bottom"
        fadeInElement(elemento); 
    }, 2000); 

    setTimeout(() => {
        fadeInElement(nombre);
    }, 1000); 

   
    setTimeout(() => {
        botonEnviar.style.display = ""
        fadeInElement(botonEnviar);
    }, 500); 
    botonEnviar.addEventListener("click", () => {
        disableButton(botonEnviar)
        let nombreUsuario = nombre.value;
        console.log("Nombre enviado: " + nombreUsuario);
    });
}



//---------------------------Funciones de Animacion-----------------------

function fadeOutElement(element) {
    var opacity = 1;
    var decrement = 0.12;
    var interval = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(interval);
            element.style.display = "none";
        }
        element.style.opacity = opacity;
        opacity -= decrement;
    }, 100);
}

function fadeInElement(element) {
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

  function aparecer() {
    let bot = document.getElementById("genshinNever");
    fadeInElement(bot); 
}

function desaparecer() {
    let bot = document.getElementById("genshinNever");
    fadeOutElement(bot); 
}

