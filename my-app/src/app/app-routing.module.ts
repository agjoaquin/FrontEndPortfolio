import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEncabezadoComponent } from './components/encabezado/editar-encabezado.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarEducacionComponent } from './components/grades/editar-educacion.component';
import { NuevaEducacionComponent } from './components/grades/nueva-educacion.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditarProyectoComponent } from './components/projects/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/projects/nuevo-proyecto/nuevo-proyecto.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { EditarSkillComponent } from './components/skills/editar-skill/editar-skill.component';
import { NuevaSkillComponent } from './components/skills/nueva-skill/nueva-skill.component';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'login',component:LoginComponent},
  {path: '',redirectTo:'portfolio',pathMatch:'full'},
  {path: 'nuevaexp', component: NuevaExperienciaComponent},
  {path: 'editexp/:id',  component: EditarExperienciaComponent},
  {path: 'nuevaedu',  component: NuevaEducacionComponent},
  {path: 'editedu/:id',  component: EditarEducacionComponent},
  {path: 'edithead/:id',  component: EditarEncabezadoComponent},
  {path: 'edithead/:id',  component: ResumenComponent},
  {path: 'nuevoproyecto', component: NuevoProyectoComponent},
  {path: 'editproyecto/:id',  component: EditarProyectoComponent},
  {path: 'nuevaskill', component: NuevaSkillComponent},
  {path: 'editarskill/:id', component: EditarSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
