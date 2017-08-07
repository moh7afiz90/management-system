import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// Particles Module
import { ParticlesModule } from 'angular-particle';


import { AppComponent } from './app.component';
// Welcome Components
import { WelcomeComponent } from './components/landing-page/welcome/welcome.component';
import { NavbarComponent } from './components/landing-page/navbar/navbar.component';
import { ParticlesComponent } from './components/landing-page/particles/particles.component';
import { MainPageComponent } from './components/dashboard/main-page/main-page.component';
// Dashboard Components

// Router Configuration


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ParticlesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    FlashMessagesModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
