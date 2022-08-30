import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { AuthService } from 'src/app/service/auth.service';
import { ExperiencialaboralService } from 'src/app/service/experiencialaboral.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  @Input() item!: ExperienciaLaboral;
  @Input() isLast!: boolean;
  
  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public editMode: boolean = false;

  public desde: string = '';
  public hasta: string = '';
  public nombreExp: string = '';
  public descripcionExp: string = '';

  constructor(
    private authService: AuthService,
    private expService: ExperiencialaboralService
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
    this.nombreExp = this.item.nombreExp;
    this.descripcionExp = this.item.descripcionExp;
  }

  delete() {
    if (window.confirm("¿Realmente quiere eliminar esta entrada?")) {
      this.expService.delete(this.item.id).subscribe({
        next: (x) => {
          this.expService.fetchData();
        },
      });
    }
  }

  saveChanges() {
    var exp: ExperienciaLaboral = {
      id: this.item.id,
      nombreExp: this.nombreExp,
      descripcionExp: this.descripcionExp,
      fechaDesde: new Date(this.desde),
      fechaHasta: new Date(this.hasta),
    };
    if (exp.id == 0) {
      this.expService.save(exp).subscribe({
        next: (x) => {
          this.editMode = false;
          this.expService.fetchData();
        },
      });
    } else {
      this.expService.update(this.item.id, exp).subscribe({
        next: (x) => {
          this.editMode = false;
          this.expService.fetchData();
        },
      });
    }
  }
  
  cancel() {
    this.setInitialValues();
    this.editMode = false;
    if (this.item.id == 0) this.expService.removeZeroIds();
  }

  public ToggleEdit() {
    this.editMode = true;
  }
}
