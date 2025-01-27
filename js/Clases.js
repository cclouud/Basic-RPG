export class Jugador {
    constructor(nombre, puntos_salud, puntos_ataque, dinero) {
        this.nombre = nombre;
        this.puntos_salud = puntos_salud;
        this.puntos_ataque = 0;
        this.dinero = 15;
    }
    calcularFuerzaInicial() {
        // Genera un número aleatorio entre 10 y 50 (puedes ajustar el rango)
        this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    }
    recalcularFuerza() {
        if (this.dinero > 0) {
            this.dinero--;
            this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10; // Recalcula fuerza
            console.log(`Has recalculado tu fuerza. Tu nueva fuerza es: ${this.puntos_ataque}. Oro restante: ${this.dinero}`);
        }
        else {
            console.log("No tienes suficiente oro para recalcular tu fuerza.");
        }
    }
    imprimirEstadisticas() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.puntos_salud}, Ataque: ${this.puntos_ataque}, Dinero ${this.dinero}`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
const enemigos = ['Orco', 'Goblin', 'Troll', 'Dragón', 'Esqueleto', 'Vampiro'];
export class Enemigo {
    constructor(nombre, puntos_ataque, dinero) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
        this.dinero = 0;
    }
    calcularFuerzaInicial() {
        // Genera un número aleatorio entre 10 y 30 (puedes ajustar el rango)
        this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    }
    soltarDinero() {
        // Genera un número aleatorio entre 5 y 15 (puedes ajustar el rango)
        this.dinero = Math.floor(Math.random() * (15 - 5 + 1)) + 10;
    }
    imprimirEstadisticas() {
        console.log(`Enemigo: ${this.nombre},Ataque: ${this.puntos_ataque}`);
    }
}
