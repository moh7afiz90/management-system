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
import { NavbarDashboardComponent } from './components/dashboard/navbar-dashboard/navbar-dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { OrderComponent } from './components/dashboard/main-page/order/order.component';
// Dashboard Components

// Router Configuration
const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', component: MainPageComponent, children: [
    { path: 'order', component: OrderComponent }
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ParticlesComponent,
    MainPageComponent,
    NavbarDashboardComponent,
    SidebarComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    FlashMessagesModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
