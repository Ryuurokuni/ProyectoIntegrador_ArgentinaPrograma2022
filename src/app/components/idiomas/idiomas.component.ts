import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { AuthService } from 'src/app/service/auth.service';
import { IdiomaService } from 'src/app/service/idioma.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  item: Idioma[] = [];
  
  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  
  public get items() : Idioma[] {
    return this.sIdioma.items;
  }

  constructor(private sIdioma: IdiomaService, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    this.sIdioma.fetchData();
  }

  delete(id?: number) {
    if (window.confirm("¿Realmente quiere eliminar esta entrada?")) {
    this.sIdioma.delete(id).subscribe({
      next: (x) => {
        this.sIdioma.fetchData();
      },
    });
    }
  }
}
