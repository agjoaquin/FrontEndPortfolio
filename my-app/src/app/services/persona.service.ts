import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaUrl = 'https://backendportfoliojma.herokuapp.com/personas/';
  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.httpClient.get<Persona>(this.personaUrl+ 'traer/perfil');
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.personaUrl + `editar/${id}`, persona);
  }
  
}
