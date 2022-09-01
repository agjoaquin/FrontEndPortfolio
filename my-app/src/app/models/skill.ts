export class Skill {
    id? : number;
    nombreSkill : string;
    porcentajeSkill : number;
    linkImagenSkill : string;

    constructor(nombreSkill: string, porcentajeSkill: number, linkImagenSkill: string){
        this.nombreSkill = nombreSkill;
        this.porcentajeSkill = porcentajeSkill;
        this.linkImagenSkill = linkImagenSkill;
    }
}