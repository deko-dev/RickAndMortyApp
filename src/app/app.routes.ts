import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BuscarPersonajeComponent } from './components/buscar-personaje/buscar-personaje.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarPersonajeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'personaje/:id', component: PersonajeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
