import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root' 
})
export class PersonajesService { 

    episodes: Object[] = [];

    constructor( private http: HttpClient ){
        console.log('Servicio Personajes Listo');
    }

    getQuery( query:string ){
        const url = `https://rickandmortyapi.com/api/character/?${query}`;

        return this.http.get(url);
    }

    getPersonajes(page:number){
        return this.getQuery(`page=${page}`);
    }

}
