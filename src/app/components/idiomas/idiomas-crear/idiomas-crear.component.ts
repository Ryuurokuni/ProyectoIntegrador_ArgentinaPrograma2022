import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Idioma } from 'src/app/model/idioma';
import { AuthService } from 'src/app/service/auth.service';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-idiomas-crear',
  templateUrl: './idiomas-crear.component.html',
  styleUrls: ['./idiomas-crear.component.css']
})
export class IdiomasCrearComponent implements OnInit {

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public nombre: string = '';
  public nombreReal: string = '';
  public porcentaje: number = 0;

  constructor(public modal:NgbModal, private authService: AuthService, private sIdioma: IdiomaService) { }

  ngOnInit(): void {
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size:'md', centered:true});
  }

  saveChanges() {
    var idioma: Idioma = {
      id: 0,
      nombre: this.nombre,
      nombreReal:this.nombreReal,
      porcentaje: this.porcentaje
    };
      this.sIdioma.save(idioma).subscribe({
        next: (x) => {
          this.sIdioma.fetchData();
          window.location.reload();
        },
      });
    }
  }
