import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public traerPersona(): Observable<persona>{ //'Observable' se encarga de las peticiones asincronicas
    return this.http.get<persona>(this.url+'traer');
  }
}
