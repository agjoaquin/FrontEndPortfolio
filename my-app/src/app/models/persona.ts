export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    resumen: string;
    img: string;

    constructor(nombre: string,apellido: string, resumen:string, img: string){
        this.resumen = resumen;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}