import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos-realizados-crear',
  templateUrl: './proyectos-realizados-crear.component.html',
  styleUrls: ['./proyectos-realizados-crear.component.css']
})
export class ProyectosRealizadosCrearComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size:'lg', centered:true});
  }
}
