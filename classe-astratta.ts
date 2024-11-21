// Definizione della classe astratta
abstract class Animale {
    constructor(public nome: string) {}

    // Metodo astratto
    abstract fareVerso(): void;

    // Metodo concreto
    muovi(): void {
        console.log(`${this.nome} si sta muovendo.`);
    }
}

// Classe concreta che eredita da Animale
class Cane extends Animale {
    fareVerso(): void {
        console.log(`${this.nome} abbaia: Bau Bau!`);
    }
}

// Classe concreta che eredita da Animale
class Gatto extends Animale {
    fareVerso(): void {
        console.log(`${this.nome} miagola: Miao Miao!`);
    }
}

// Utilizzo delle classi
const cane = new Cane("Fido");
cane.fareVerso(); // Output: Fido abbaia: Bau Bau!
cane.muovi();     // Output: Fido si sta muovendo.

const gatto = new Gatto("Whiskers");
gatto.fareVerso(); // Output: Whiskers miagola: Miao Miao!
gatto.muovi();     // Output: Whiskers si sta muovendo.