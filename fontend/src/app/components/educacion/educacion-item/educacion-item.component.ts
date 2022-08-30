import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css'],
})
export class EducacionItemComponent implements OnInit {
 
  @Input() item!: Educacion;
  @Input() isLast!: boolean;
  
  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public editMode: boolean = false;

  public desde: string = '';
  public hasta: string = '';
  public nombreEdu: string = '';
  public descripcionEdu: string = '';

  constructor(
    private authService: AuthService,
    private eduService: EducacionService
  ) {}

  ngOnInit(): void {
    this.editMode = this.item.id == 0;
    if (this.item.id != 0) this.setInitialValues();
  }

  setInitialValues() {
    this.desde = (this.item.fechaDesde 
        ? new Date(this.item.fechaDesde) 
          : new Date()).toJSON().split('T')[0];
    this.hasta = (this.item.fechaHasta 
        ? new Date(this.item.fechaHasta) 
          : new Date()).toJSON().split('T')[0];
    this.nombreEdu = this.item.nombreEdu;
    this.descripcionEdu = this.item.descripcionEdu;
  }

  delete() {
    if (window.confirm("¿Realmente quiere eliminar esta entrada?")) {
    this.eduService.delete(this.item.id).subscribe({
      next: (x) => {
        this.eduService.fetchData();
      },
    });
  }
  }

  saveChanges() {
    var edu: Educacion = {
      id: this.item.id,
      nombreEdu: this.nombreEdu,
      descripcionEdu: this.descripcionEdu,
      fechaDesde: new Date(this.desde),
      fechaHasta: new Date(this.hasta),
    };
    if (edu.id == 0) {
      this.eduService.save(edu).subscribe({
        next: (x) => {
          this.editMode = false;
          this.eduService.fetchData();
        },
      });
    } else {
      this.eduService.update(this.item.id, edu).subscribe({
        next: (x) => {
          this.editMode = false;
          this.eduService.fetchData();
        },
      });
    }
  }
  
  cancel() {
    this.setInitialValues();
    this.editMode = false;
    if (this.item.id == 0) this.eduService.removeZeroIds();
  }

  public ToggleEdit() {
    this.editMode = true;
  }
}
