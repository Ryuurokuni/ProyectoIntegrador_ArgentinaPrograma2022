import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-acerca-de-edit',
  templateUrl: './acerca-de-edit.component.html',
  styleUrls: ['./acerca-de-edit.component.css']
})
export class AcercaDeEditComponent implements OnInit {

  acde: AcercaDe = new AcercaDe("");
  constructor(private acercaDe: AcercaDeService, public modal:NgbModal) { }

  ngOnInit(): void {
     this.acercaDe.detail(1).subscribe(
      data =>{
        this.acde = data;
      }, err =>{
        alert("Error al modificar Acerca De");
        // this.router.navigate(['']);
      }
    )
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size:'lg', centered:true});
  }

  onUpdate(): void{
    this.acercaDe.update(1, this.acde.descripcion).subscribe(
      data => {
        alert("Acerca De editado exitosamente!");
        // this.router.navigate(['']);
        window.location.reload();
      }, err =>{
         alert("Error al modificar Acerca De");
         // this.router.navigate(['']);
         window.location.reload();
      }
    )
  }
}
