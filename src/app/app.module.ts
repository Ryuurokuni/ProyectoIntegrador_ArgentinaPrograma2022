import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgprogComponent } from './components/header/logo-argprog/logo-argprog.component';
import { RedsocIconsComponent } from './components/header/redsoc-icons/redsoc-icons.component';
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
import { ExperienciaCrearComponent } from './components/experiencia/experiencia-crear/experiencia-crear.component';
import { ExperienciaEditarComponent } from './components/experiencia/experiencia-editar/experiencia-editar.component';
import { EducacionCrearComponent } from './components/educacion/educacion-crear/educacion-crear.component';

import { ProyectosRealizadosCrearComponent } from './components/proyectos-realizados/proyectos-realizados-crear/proyectos-realizados-crear.component';
import { SkillsCrearComponent } from './components/skills/skills-crear/skills-crear.component';
import { BannerEditComponent } from './components/profile/banner/banner-edit/banner-edit.component';
import { EducacionItemComponent } from './components/educacion/educacion-item/educacion-item.component';
import { ExperienciaItemComponent } from './components/experiencia/experiencia-item/experiencia-item.component';
import { ProyectosRealizadosItemComponent } from './components/proyectos-realizados/proyectos-realizados-item/proyectos-realizados-item.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgprogComponent,
    RedsocIconsComponent,
    BannerComponent,
    AcercaDeComponent,

    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosRealizadosComponent,
    FooterComponent,
    ModalLoginComponent,
    ExperienciaCrearComponent,
    ExperienciaEditarComponent,
    EducacionCrearComponent,

    ProyectosRealizadosCrearComponent,
    SkillsCrearComponent,
    BannerEditComponent,
    EducacionItemComponent,
    ExperienciaItemComponent,
    ProyectosRealizadosItemComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
