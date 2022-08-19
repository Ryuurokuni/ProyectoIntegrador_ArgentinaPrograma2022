import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-nombre-titulo',
  templateUrl: './nombre-titulo.component.html',
  styleUrls: ['./nombre-titulo.component.css']
})
export class NombreTituloComponent implements OnInit {
  // Cuando cambia la variable persona, se va a cambiar en data, el subscribe detecta el data y se lo transmite al service, el cual va a hablar con el service
  persona: persona = new persona("","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.traerPersona().subscribe(data => {this.persona = data}) //subscribe provoca respuesta cuando detecta que un Observable se activa
  }

}
