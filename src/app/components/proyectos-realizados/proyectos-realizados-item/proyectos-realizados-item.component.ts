import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos-realizados-item',
  templateUrl: './proyectos-realizados-item.component.html',
  styleUrls: ['./proyectos-realizados-item.component.css']
})
export class ProyectosRealizadosItemComponent implements OnInit {

  @Input() item!: Proyecto;
  @Input() isLast!: boolean;
  

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public editMode: boolean = false;

  public fecha: string = '';
  public nombre: string = '';
  public descripcion: string = '';
  public link: string = '';

  constructor(
    private authService: AuthService,
    private sProyecto: ProyectoService
  ) {}

  ngOnInit(): void {
    this.editMode = this.item.id == 0;
    if (this.item.id != 0) this.setInitialValues();
  }

  setInitialValues() {
    this.fecha = (this.item.fecha 
        ? new Date(this.item.fecha) 
          : new Date()).toJSON().split('T')[0];
    this.nombre = this.item.nombre;
    this.descripcion = this.item.descripcion;
    this.link = this.item.link;
  }

  delete() {
    if (window.confirm("¿Realmente quiere eliminar esta entrada?")) {
    this.sProyecto.delete(this.item.id).subscribe({
      next: (x) => {
        
        this.sProyecto.fetchData();
      },
    });
    }
  }

  saveChanges() {
    var proyecto: Proyecto = {
      id: this.item.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      fecha: new Date(this.fecha),
      link: this.link,
    };
    if (proyecto.id == 0) {
      this.sProyecto.save(proyecto).subscribe({
        next: (x) => {
          this.editMode = false;
          this.sProyecto.fetchData();
        },
      });
    } else {
      this.sProyecto.update(this.item.id, proyecto).subscribe({
        next: (x) => {
          this.editMode = false;
          this.sProyecto.fetchData();
        },
      });
    }
  }

  cancel() {
    this.setInitialValues();
    this.editMode = false;
    if (this.item.id == 0) this.sProyecto.removeZeroIds();
  }

  public ToggleEdit() {
    this.editMode = true;
  }
}
