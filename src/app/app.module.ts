import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarPersonajeComponent } from './components/buscar-personaje/buscar-personaje.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajeTarjetaComponent } from './components/personaje-tarjeta/personaje-tarjeta.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BuscarPersonajeComponent,
    AboutComponent,
    PersonajeTarjetaComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
