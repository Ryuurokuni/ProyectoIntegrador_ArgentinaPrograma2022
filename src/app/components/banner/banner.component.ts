import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BannerImages } from 'src/app/model/BannerImages';
import { BannerService } from 'src/app/service/banner-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  readonly bannerUrl = this.service.bannerUrl;
  readonly profileUrl =this.service.profileUrl;

  constructor(private tokenService: TokenService, private service: BannerService) { }

  isLogged = false;
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
