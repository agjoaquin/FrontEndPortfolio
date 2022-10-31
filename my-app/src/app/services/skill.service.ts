import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService{
  skillUrl = 'https://backendportfoliojma.herokuapp.com/skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillUrl + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillUrl + `detail/${id}`);
  } 

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.skillUrl + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillUrl + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skillUrl + `delete/${id}`);
  }
}
