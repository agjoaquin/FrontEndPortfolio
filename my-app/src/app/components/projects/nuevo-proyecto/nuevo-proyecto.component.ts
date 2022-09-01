import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  tituloP: string = '';
  descripcionP: string = '';
  linkP: string = '';
  imgP: string = '';
  anioP: string = '';

  constructor(private proyectoService: ProyectoService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.tituloP, this.descripcionP,this.anioP, this.linkP, this.imgP );
    this.proyectoService.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido.");
        this.router.navigate(['portfolio']);
      }, err => {
        alert("Ocurrió un error.");
        this.router.navigate(['portfolio']);
      }
    )
  }

}
