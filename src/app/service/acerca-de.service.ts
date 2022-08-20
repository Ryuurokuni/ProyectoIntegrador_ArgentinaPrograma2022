import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../model/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  url = 'http://localhost:8080/acercade/';
  constructor(private httpClient : HttpClient) { }

  public detail(id: number): Observable<AcercaDe>{
    return this.httpClient.get<AcercaDe>(this.url + `detalle/1`);
  }

  public update(id: number, descripcion: string): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, descripcion);
  }

}
