import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
  skill: Skill = null;
  constructor(private skillService: SkillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillService.detail(id).subscribe(
        data => {
          this.skill = data;
        }, err => {
          alert("Error al modificar experiencia");
          this.router.navigate(['portfolio']);
        }
      )
    }
  
    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillService.update(id, this.skill).subscribe(
        data => {
          this.router.navigate(['portfolio']);
        }, err => {
          alert("Error al modificar habilidad.");
          this.router.navigate(['portfolio']);
        }
      )
    }
  

}
