import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgprogComponent } from './components/header/logo-argprog/logo-argprog.component';
import { RedsocIconsComponent } from './components/header/redsoc-icons/redsoc-icons.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { NombreTituloComponent } from './components/acerca-de/nombre-titulo/nombre-titulo.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosRealizadosComponent } from './components/proyectos-realizados/proyectos-realizados.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgprogComponent,
    RedsocIconsComponent,
    BannerComponent,
    AcercaDeComponent,
    NombreTituloComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosRealizadosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-flp23ydd.us.auth0.com',
      clientId: 'vurLFTi8semJ8bIAgbkakltVtCInjmRv',
      redirectUri: window.location.origin,
      httpInterceptor: {
        allowedList: [
          // Attach access tokens to any calls that start with '/api/'
          '/api/*',
        ]

    }})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
