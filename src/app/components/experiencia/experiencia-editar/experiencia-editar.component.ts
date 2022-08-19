import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperiencialaboralService } from 'src/app/service/experiencialaboral.service';

@Component({
  selector: 'app-experiencia-editar',
  templateUrl: './experiencia-editar.component.html',
  styleUrls: ['./experiencia-editar.component.css']
})
export class ExperienciaEditarComponent implements OnInit {

 // expLab: ExperienciaLaboral = null;
  constructor(private sExperiencia: ExperiencialaboralService, public modal:NgbModal, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    /* const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        // this.router.navigate(['']);
      }
    ) */
  }

  /* onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(this.expLab.id, this.expLab).subscribe(
      data => {
        alert("Experiencia añadida exitosamente!");
        // this.router.navigate(['']);
        window.location.reload();
      }, err =>{
         alert("Error al modificar experiencia");
         // this.router.navigate(['']);
         window.location.reload();
      }
    )
  } */

  openLG(contenido: any){
    this.modal.open(contenido,{size:'lg', centered:true});
  }


}
