import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GradesComponent } from './components/grades/grades.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { interceptorProvider } from './services/interceptor-service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './components/grades/nueva-educacion.component';
import { EditarEducacionComponent } from './components/grades/editar-educacion.component';
import { EditarEncabezadoComponent } from './components/encabezado/editar-encabezado.component';
import { NuevoProyectoComponent } from './components/projects/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './components/projects/editar-proyecto/editar-proyecto.component';
import { NuevaSkillComponent } from './components/skills/nueva-skill/nueva-skill.component';
import { EditarSkillComponent } from './components/skills/editar-skill/editar-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ResumenComponent,
    ProjectsComponent,
    GradesComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    SkillsComponent,
    NavbarComponent,
    ExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    EditarEncabezadoComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    NuevaSkillComponent,
    EditarSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({
      radius: 80,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#ffd700cc",
      innerStrokeColor: "''",
      backgroundColor: "#333333cc",
      animation: true,
      animationDuration: 1000,
      showImage: true,
      imageHeight: 90,
      imageWidth: 90
    })
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

const firebaseConfig = {
  apiKey: "AIzaSyDmhalVwyvzY-_NsJfBSg_XRHvo9PST-Gw",
  authDomain: "portfolio-joaquinaguirre.firebaseapp.com",
  projectId: "portfolio-joaquinaguirre",
  storageBucket: "portfolio-joaquinaguirre.appspot.com",
  messagingSenderId: "938713842331",
  appId: "1:938713842331:web:6fe05a316aed69e3143c3e",
  measurementId: "G-LS441PKC7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
