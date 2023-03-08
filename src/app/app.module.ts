import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoapComponent } from './componentes/logoap/logoap.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SocialComponent } from './componentes/social/social.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysSkillComponent } from './componentes/hys-skill/hys-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    BannerComponent,
    SocialComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HysSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
