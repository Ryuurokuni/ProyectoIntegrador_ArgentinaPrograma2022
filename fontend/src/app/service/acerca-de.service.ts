import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AcercaDe } from '../model/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private _aboutData: AcercaDe
  
  public get aboutData(): AcercaDe {
    return this._aboutData;
  }

  url = 'http://localhost:8080/acercade';
  constructor(private httpClient : HttpClient) { 
    this.fetchData();
  }

  public fetchData(){
    this.detail().subscribe((response) => this._aboutData = response);
  }

  public detail(): Observable<AcercaDe>{
    return this.httpClient.get<AcercaDe>(this.url);
  }

  public update(acercaDe: AcercaDe): Observable<any>{

    return this.httpClient.put<any>(this.url, acercaDe)
        .pipe(
          tap((res) => this._aboutData = res)
        );
  }

}
