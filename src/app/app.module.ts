import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth-guard.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { XboxComponent } from './components/sections/xbox/xbox.component';
import { PlayStationComponent } from './components/sections/play-station/play-station.component';
import { PCComponent } from './components/sections/pc/pc.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from "@auth0/angular-jwt";

import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sections/sidebar/sidebar.component';
import { PerfilComponent } from './components/sections/perfil/perfil.component';
import { CarouselComponent } from './pages/componentes/carousel/carousel.component';
import { PcComponent } from './pages/componentes/pc/pc.component';
import { ComponentesComponent } from './pages/componentes/componentes.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    XboxComponent,
    PlayStationComponent,
    PCComponent,
    SidebarComponent,
    PerfilComponent,
    CarouselComponent,
    PcComponent,
    ComponentesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44398"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
