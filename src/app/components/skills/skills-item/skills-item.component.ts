import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { AuthService } from 'src/app/service/auth.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {

  @Input() item!: Skill;

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public get anyInserting(): boolean {
    return this.sSkill.items.some(x=> x.id == 0);
  }

  public nombre: string = '';
  public porcentaje: number = 0;

  constructor( private authService: AuthService, private sSkill: SkillService) { }

  ngOnInit(): void {
  }


  delete() {
    if (window.confirm("Realmente quiere eliminar esta entrada?")) {
    this.sSkill.delete(this.item.id).subscribe({
      next: (x) => {
        this.sSkill.fetchData();
      },
    });
  }
}

CreateNew(){
  this.sSkill.apendToArray({
    id: 0,
    nombre: "",
    porcentaje: 0
  })
}

  saveChanges() {
    var skill: Skill = {
      id: this.item.id,
      nombre: this.nombre,
      porcentaje: this.porcentaje
    };
      this.sSkill.save(skill).subscribe({
        next: (x) => {
          this.sSkill.fetchData();
        },
      });
    }

}
