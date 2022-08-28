import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { AuthService } from 'src/app/service/auth.service';
import { ExperiencialaboralService } from 'src/app/service/experiencialaboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public get items() : ExperienciaLaboral[] {
    return this.sExperiencia.items;
  }
  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  public get anyInserting(): boolean {
    return this.sExperiencia.items.some(x=> x.id == 0);
  }

  constructor(private sExperiencia: ExperiencialaboralService, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    this.sExperiencia.fetchData();
  }

  CreateNew(){
    this.sExperiencia.apendToArray({
      id: 0,
      descripcionExp: "",
      nombreExp: "",
      fechaDesde: null,
      fechaHasta: null
    })
  }
}
