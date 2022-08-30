import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos-realizados',
  templateUrl: './proyectos-realizados.component.html',
  styleUrls: ['./proyectos-realizados.component.css']
})
export class ProyectosRealizadosComponent implements OnInit {

  public get items() : Proyecto[] {
    return this.sProyecto.items;
  }
  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  public get anyInserting(): boolean {
    return this.sProyecto.items.some(x=> x.id == 0);
  }

  constructor(private sProyecto: ProyectoService, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    this.sProyecto.fetchData();
  }

  CreateNew(){
    this.sProyecto.apendToArray({
      id: 0,
      descripcion: "",
      nombre: "",
      fecha: null,
      link: ""
    })
  }
}
