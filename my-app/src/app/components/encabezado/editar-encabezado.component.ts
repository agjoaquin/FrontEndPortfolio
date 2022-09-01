import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-encabezado',
  templateUrl: './editar-encabezado.component.html',
  styleUrls: ['./editar-encabezado.component.css']
})
export class EditarEncabezadoComponent implements OnInit {
  persona: Persona = new Persona("","","","");
  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data;}, 
      err =>{
      alert("Error al modificar encabezado");
      this.router.navigate(['portfolio']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['portfolio']);
      }, err =>{
         alert("Error al modificar encabezado");
         this.router.navigate(['portfolio']);
      }
    )
  }

}
