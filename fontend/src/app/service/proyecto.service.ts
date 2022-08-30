import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = 'http://localhost:8080/proyecto/';

public items: Proyecto[] = [];

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

public lista(): Observable<Proyecto[]>{
  return this.httpClient.get<Proyecto[]>(this.url + 'lista');
}

public detail(id: number): Observable<Proyecto>{
  return this.httpClient.get<Proyecto>(this.url + `detalle/${id}`);
}

public save(proyecto: Proyecto): Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', proyecto);
}

public update(id: number, proyecto: Proyecto): Observable<any>{
  return this.httpClient.put<any>(this.url + `editar/${id}`, proyecto);
}

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}
public apendToArray(proyecto: Proyecto){
  this.items = [...this.items, proyecto];
}
public removeZeroIds(){
  this.items = this.items.filter(x=> x.id != 0);
}
}
