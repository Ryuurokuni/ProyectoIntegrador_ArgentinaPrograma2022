import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/profile/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaDeComponent } from './components/profile/acerca-de/acerca-de.component';

import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosRealizadosComponent } from './components/proyectos-realizados/proyectos-realizados.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { interceptorProvider } from './service/interceptor-service';

import { SkillsCrearComponent } from './components/skills/skills-crear/skills-crear.component';
import { EducacionItemComponent } from './components/educacion/educacion-item/educacion-item.component';
import { ExperienciaItemComponent } from './components/experiencia/experiencia-item/experiencia-item.component';
import { ProyectosRealizadosItemComponent } from './components/proyectos-realizados/proyectos-realizados-item/proyectos-realizados-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { IdiomasCrearComponent } from './components/idiomas/idiomas-crear/idiomas-crear.component';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faPencil, faTrash, faCancel, faBan, faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

const WhiteListedIcons = [
  faSave, faPencil, faTrash, faBan, faCheck, faCancel, faTimes, faPlus
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,

    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosRealizadosComponent,
    FooterComponent,
    ModalLoginComponent,

    SkillsCrearComponent,
    EducacionItemComponent,
    ExperienciaItemComponent,
    ProyectosRealizadosItemComponent,
    ProfileComponent,
    IdiomasComponent,
    IdiomasCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(...WhiteListedIcons);
  }
 }
