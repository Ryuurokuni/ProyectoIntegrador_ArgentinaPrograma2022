import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  descripcion: AcercaDe;
  constructor(private acercaDe: AcercaDeService, private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarAcercaDe();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercaDe(): void {
    this.acercaDe.detail(1).subscribe(data => { this.descripcion = data; })
  }
}
