export class Jugador {
    constructor(nombre, puntos_salud, puntos_ataque, dinero) {
        this.nombre = nombre;
        this.puntos_salud = puntos_salud;
        this.puntos_ataque = 0;
        this.dinero = 20;
    }
    calcularFuerzaInicial() {
        this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    }
    imprimirEstadisticas() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.puntos_salud}, Ataque: ${this.puntos_ataque}, Dinero ${this.dinero}`);
    }
}
export class Enemigo {
    constructor(nombre, puntos_salud, puntos_ataque, dinero) {
        this.nombre = nombre;
        this.puntos_salud = 100;
        this.puntos_ataque = 0;
        this.dinero = 0;
    }
    calcularFuerzaInicial() {
        this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    }
    soltarDinero() {
        this.dinero = Math.floor(Math.random() * (25 - 18 + 1)) + 10;
    }
    imprimirEstadisticas() {
        console.log(`Enemigo: ${this.nombre},Ataque: ${this.puntos_ataque}`);
    }
}
