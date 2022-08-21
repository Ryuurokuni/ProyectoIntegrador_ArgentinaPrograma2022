import { Component, OnInit } from '@angular/core';

import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {


  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  public get acercaDe(): AcercaDe{
    return this.acercaDeService.aboutData;
  }

  public editMode: boolean = false;

  public titulo: string = "";
  public nombre: string = "";
  public apellido: string = "";
  public descripcion: string = "";

  constructor(private acercaDeService: AcercaDeService, private authService: AuthService) { }

  ngOnInit(): void {
   
  }



  toggleEdit(){
    this.editMode = true;
    this.titulo = this.acercaDe.titulo;
    this.nombre = this.acercaDe.nombre;
    this.apellido = this.acercaDe.apellido;
    this.descripcion = this.acercaDe.descripcion;
  }

  cancel(){
    this.editMode = false;
    this.acercaDeService.fetchData();
  }

  save(){
    this.acercaDeService.update({
      nombre: this.nombre,
      apellido: this.apellido,
      titulo: this.titulo,
      descripcion: this.descripcion
    })
    .subscribe(() => {
      this.editMode = false;
    });
  }
}
