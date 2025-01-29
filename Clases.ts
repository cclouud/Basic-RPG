

export class Jugador {

nombre: string;
puntos_salud: number;
puntos_ataque: number;
dinero: number;



constructor  (nombre: string, puntos_salud: number, puntos_ataque: number, dinero: number) {

this.nombre = nombre
this.puntos_salud = puntos_salud
this.puntos_ataque = 0
this.dinero = 20

    }

calcularFuerzaInicial(){
        this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    }


    recalcularFuerza() {
        if (this.dinero > 0) {
          this.dinero--; 
          this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10; // Recalcula fuerza
          console.log(`Has recalculado tu fuerza. Tu nueva fuerza es: ${this.puntos_ataque}. Oro restante: ${this.dinero}`);
        } else {
          console.log("No tienes suficiente oro para recalcular tu fuerza.");
        }
      }
    



imprimirEstadisticas(){

console.log(`Nombre: ${this.nombre}, Salud: ${this.puntos_salud}, Ataque: ${this.puntos_ataque}, Dinero ${this.dinero}`)


    }
}




///////////////////////////////////////////////////////////////////////////////////////////////

export class Enemigo {

    nombre: string;
    puntos_salud: number;
    puntos_ataque: number;
    dinero: number;

constructor  (nombre: string,puntos_salud: number, puntos_ataque: number, dinero: number) {

    this.nombre = nombre
    this.puntos_salud = 100
    this.puntos_ataque = 0
    this.dinero = 0
  }

calcularFuerzaInicial(){
    this.puntos_ataque = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  }

soltarDinero(){
    this.dinero = Math.floor(Math.random() * ( 25 - 18 + 1)) + 10;
  }

imprimirEstadisticas(){
    console.log(`Enemigo: ${this.nombre},Ataque: ${this.puntos_ataque}`);
 
  }

}

