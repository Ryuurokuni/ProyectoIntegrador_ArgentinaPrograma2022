import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-redsoc-icons',
  templateUrl: './redsoc-icons.component.html',
  styleUrls: ['./redsoc-icons.component.css']
})
export class RedsocIconsComponent {

  // Inject the authentication service into your component through the constructor
  constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) { }


  login(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithPopup();
  }

  logout(): void {
    // Call this to redirect the user to the login page
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
