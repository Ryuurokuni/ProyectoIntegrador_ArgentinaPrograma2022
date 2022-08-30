import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = 'http://localhost:8080/educacion/';

  public items: Educacion[] = [];

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

 

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detalle/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  public apendToArray(education: Educacion){
    this.items = [...this.items, education];
  }
  public removeZeroIds(){
    this.items = this.items.filter(x=> x.id != 0);
  }
}
