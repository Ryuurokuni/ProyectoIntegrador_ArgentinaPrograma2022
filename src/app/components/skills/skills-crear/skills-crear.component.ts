import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills-crear',
  templateUrl: './skills-crear.component.html',
  styleUrls: ['./skills-crear.component.css']
})
export class SkillsCrearComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size:'lg', centered:true});
  }

}
