import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
    proyectosUrl = 'https://backendportfoliojma.herokuapp.com/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyectosUrl + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyectosUrl + `detail/${id}`);
  } 

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proyectosUrl + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.proyectosUrl + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyectosUrl + `delete/${id}`);
  }
}
