import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  @Input() item!: Educacion;

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public editMode: boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  delete(){

  }


  public ToggleEdit(){
    this.editMode = true;
  }
}
