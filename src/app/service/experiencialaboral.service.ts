import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../model/experiencia-laboral';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExperiencialaboralService {
  expURL = 'http://localhost:8080/experiencialaboral/';

  public items: ExperienciaLaboral[] = [];

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(private httpClient : HttpClient, private authService: AuthService) { }

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

 

  public lista(): Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaLaboral>{
    return this.httpClient.get<ExperienciaLaboral>(this.expURL + `detalle/${id}`);
  }

  public save(experiencia: ExperienciaLaboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crear', experiencia);
  }

  public update(id: number, experiencia: ExperienciaLaboral): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
  public apendToArray(experiencia: ExperienciaLaboral){
    this.items = [...this.items, experiencia];
  }
  public removeZeroIds(){
    this.items = this.items.filter(x=> x.id != 0);
  }
}
