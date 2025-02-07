"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemigo = exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, puntos_salud, puntos_ataque, dinero) {
        this.nombre = nombre;
        this.puntos_salud = puntos_salud;
        this.puntos_ataque = 0;
        this.dinero = 20;
    }
    Jugador.prototype.calcularFuerzaInicial = function () {
        this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    };
    Jugador.prototype.imprimirEstadisticas = function () {
        console.log("Nombre: ".concat(this.nombre, ", Salud: ").concat(this.puntos_salud, ", Ataque: ").concat(this.puntos_ataque, ", Dinero ").concat(this.dinero));
    };
    return Jugador;
}());
exports.Jugador = Jugador;
var Enemigo = /** @class */ (function () {
    function Enemigo(nombre, puntos_salud, puntos_ataque, dinero) {
        this.nombre = nombre;
        this.puntos_salud = 100;
        this.puntos_ataque = 0;
        this.dinero = 0;
    }
    Enemigo.prototype.calcularFuerzaInicial = function () {
        this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    };
    Enemigo.prototype.soltarDinero = function () {
        this.dinero = Math.floor(Math.random() * (25 - 18 + 1)) + 10;
    };
    Enemigo.prototype.imprimirEstadisticas = function () {
        console.log("Enemigo: ".concat(this.nombre, ",Ataque: ").concat(this.puntos_ataque));
    };
    return Enemigo;
}());
exports.Enemigo = Enemigo;
