import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url = 'http://localhost:8080/skill/';

  public items: Skill[] = [];

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(private httpClient : HttpClient, private authService: AuthService) { 
   this.fetchData();
  }

  public fetchData(): void{
    this.lista().subscribe({
      next: (lista)=> {
        this.items = [...lista];
      },
      complete: ()=> {
        console.log(this.items);
      }
    })
  }

 

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.url + `detalle/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  public apendToArray(skill: Skill){
    this.items = [...this.items, skill];
  }
  public removeZeroIds(){
    this.items = this.items.filter(x=> x.id != 0);
  }
}
