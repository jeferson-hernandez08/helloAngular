/*
    ===== Código de TypeScript =====
*/

// Array
let habilidades: string[] = ["Bash", "Counter", "Healing"];

//habilidades.push(true);

// Objeto
interface Personaje {
  nombre: String;
  hp: number;
  habilidades: string[]
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: 'Jeferson',
  hp: 100,
  habilidades: ['Bash', 'Conunter', 'Healing']
}

personaje.puebloNatal = 'Manizales';

console.table(personaje);








/*
  min 5    
*/



