import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill';
import { AuthService } from 'src/app/service/auth.service';
import { SkillService } from 'src/app/service/skill.service';


@Component({
  selector: 'app-skills-crear',
  templateUrl: './skills-crear.component.html',
  styleUrls: ['./skills-crear.component.css']
})
export class SkillsCrearComponent implements OnInit {

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public nombre: string = '';
  public porcentaje: number = 0;

  constructor(public modal:NgbModal, private authService: AuthService, private sSkill: SkillService) { }

  ngOnInit(): void {
  }

  openLG(contenido: any){
    this.modal.open(contenido,{size:'md', centered:true});
  }

  saveChanges() {
    var skill: Skill = {
      id: 0,
      nombre: this.nombre,
      porcentaje: this.porcentaje
    };
      this.sSkill.save(skill).subscribe({
        next: (x) => {
          this.sSkill.fetchData();
          window.location.reload();
        },
      });
    }
  }
