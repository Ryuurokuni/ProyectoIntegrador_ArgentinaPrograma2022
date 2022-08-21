import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public get items() : Educacion[] {
    return this.educacionS.items;
  }
  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(private educacionS: EducacionService, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.educacionS.fetchData();
  }

  delete(id?: number){

  }
}
