import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperiencialaboralService } from 'src/app/service/experiencialaboral.service';

@Component({
  selector: 'app-experiencia-crear',
  templateUrl: './experiencia-crear.component.html',
  styleUrls: ['./experiencia-crear.component.css']
})
export class ExperienciaCrearComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';
  constructor(private sExperiencia: ExperiencialaboralService, public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size:'lg', centered:true});
  }

  onCreate(): void {
    const exp : ExperienciaLaboral = {
      id: 0,
      nombreExp: this.nombreExp,
      descripcionExp: this.descripcionExp,
      fechaDesde: new Date(),
      fechaHasta: new Date()
    };
    this.sExperiencia.save(exp).subscribe(
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
