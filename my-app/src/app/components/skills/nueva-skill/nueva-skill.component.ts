import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {
  nombreSkill : string = '';
  porcentajeSkill : number = 0;
  linkImagenSkill : string = '';
  
  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombreSkill, this.porcentajeSkill,this.linkImagenSkill);
    this.skillService.save(skill).subscribe(
      data => {
        alert("Habilidad añadida.");
        this.router.navigate(['portfolio']);
      }, err => {
        alert("Ocurrió un error.");
        this.router.navigate(['portfolio']);
      }
    )

}
}
