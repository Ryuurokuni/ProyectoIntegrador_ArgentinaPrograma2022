import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../model/idioma';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  url = 'http://localhost:8080/idioma/';

  public items: Idioma[] = [];

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

 

  public lista(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.url + `detalle/${id}`);
  }

  public save(Idioma: Idioma): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', Idioma);
  }

  public update(id: number, Idioma: Idioma): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, Idioma);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  public apendToArray(Idioma: Idioma){
    this.items = [...this.items, Idioma];
  }
  public removeZeroIds(){
    this.items = this.items.filter(x=> x.id != 0);
  }
}
