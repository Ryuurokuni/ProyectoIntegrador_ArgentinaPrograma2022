import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos-realizados',
  templateUrl: './proyectos-realizados.component.html',
  styleUrls: ['./proyectos-realizados.component.css']
})
export class ProyectosRealizadosComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
