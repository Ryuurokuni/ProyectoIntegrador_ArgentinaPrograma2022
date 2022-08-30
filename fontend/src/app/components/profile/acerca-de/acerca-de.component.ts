import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { AuthService } from 'src/app/service/auth.service';
import { BannerService } from 'src/app/service/banner-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {


  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  public get acercaDe(): AcercaDe{
    return this.acercaDeService.aboutData;
  }

  public editMode: boolean = false;

  public titulo: string = "";
  public nombre: string = "";
  public apellido: string = "";
  public descripcion: string = "";

  fileBanner: File;
  fileProfile: File;

  public openAvatarEdit = false;

  readonly profileUrl = this.bservice.profileUrl;

  constructor(private acercaDeService: AcercaDeService,public modal: NgbModal,  private authService: AuthService, private bservice: BannerService) { }

  ngOnInit(): void {
   
  }
  openLG(contenido: any){
    this.modal.open(contenido,{size:'lg', centered:true});
  }

  onSubmit(){
    const fd = new FormData();

    fd.append("banner", this.fileBanner);
    fd.append("profile", this.fileProfile)

    console.log(fd);
    this.bservice.submit(fd)
        .subscribe(() => {
          // this.imagenesGuardadas.emit(true);
          // alert("Ta bien");
          window.location.reload();
        }, err =>{
          window.alert("Una de las imágenes seleccionadas excede el límite permitido. Comprima la imagen en cuestión o seleccione una imágen alternativa.")
        });
   
  }

  bannerChange(e: any){
    this.fileBanner = e.target.files![0];

  }
  profileChange(e: any){
    this.fileProfile = e.target.files![0];
  }

  toggleEdit(){
    this.editMode = true;
    this.titulo = this.acercaDe.titulo;
    this.nombre = this.acercaDe.nombre;
    this.apellido = this.acercaDe.apellido;
    this.descripcion = this.acercaDe.descripcion;
  }

  cancel(){
    this.editMode = false;
    this.acercaDeService.fetchData();
  }

  save(){
    this.acercaDeService.update({
      nombre: this.nombre,
      apellido: this.apellido,
      titulo: this.titulo,
      descripcion: this.descripcion
    })
    .subscribe(() => {
      this.editMode = false;
    });
  }

  onAvatarChange(){
    this.openAvatarEdit = true;
  }
}
