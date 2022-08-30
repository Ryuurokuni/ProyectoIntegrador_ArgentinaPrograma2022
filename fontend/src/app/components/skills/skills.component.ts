import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { AuthService } from 'src/app/service/auth.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // @Input() item!: Skill;
  item: Skill[] = [];
  
  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  
  public get items() : Skill[] {
    return this.sSkill.items;
  }

  constructor(private sSkill: SkillService, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    this.sSkill.fetchData();
  }

  delete(id?: number) {
    if (window.confirm("¿Realmente quiere eliminar esta entrada?")) {
    this.sSkill.delete(id).subscribe({
      next: (x) => {
        this.sSkill.fetchData();
      },
    });
  }
  }
}
