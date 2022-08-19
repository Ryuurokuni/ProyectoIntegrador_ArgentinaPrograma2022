import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-crear',
  templateUrl: './educacion-crear.component.html',
  styleUrls: ['./educacion-crear.component.css']
})
export class EducacionCrearComponent implements OnInit {

  nombreEdu: string = '';
  descripcionEdu: string = '';
  constructor(private sEducacion: EducacionService, public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size:'lg', centered:true});
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Educación añadida exitosamente!");
        // this.router.navigate(['']);
        window.location.reload();
      }, err => {
        alert("Error...");
        // this.router.navigate(['']);
        window.location.reload();
      }
    )
  }

}
