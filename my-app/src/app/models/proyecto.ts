export class Proyecto {
    id? : number;
    tituloP : string;
    descripcionP : string;
    anioP : string;
    linkP : string;
    imgP : string;

    constructor(tituloP: string, descripcionP: string, anioP: string, linkP: string, imgP: string){
        this.tituloP = tituloP;
        this.descripcionP = descripcionP;
        this.anioP = anioP;
        this.linkP = linkP;
        this.imgP = imgP;
    }
}