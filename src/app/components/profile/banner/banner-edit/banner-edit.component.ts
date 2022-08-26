import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BannerService } from 'src/app/service/banner-service.service';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {

  @Output()
  public imagenesGuardadas: EventEmitter<boolean> = new EventEmitter();  

  constructor(public modal:NgbModal, public service: BannerService) { }

  fileBanner: File;
  fileProfile: File;

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
    this.service.submit(fd)
        .subscribe(() => {
          this.imagenesGuardadas.emit(true);
          alert("Ta bien");
          window.location.reload();
        });
   
  }



  bannerChange(e: any){
    this.fileBanner = e.target.files![0];

  }
  profileChange(e: any){
    this.fileProfile = e.target.files![0];
  }



}
