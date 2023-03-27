import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SocialComponent } from './componentes/social/social.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HysComponent } from './componentes/hys/hys.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SocialComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    NeweducacionComponent,
    EditExperienciaComponent,
    EditeducacionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgCircleProgressModule.forRoot({ }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
