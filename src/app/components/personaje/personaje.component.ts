import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: []
})
export class PersonajeComponent implements OnInit {

  idP:number;
  personaje: any = {};


   constructor(
    private activatedRoute: ActivatedRoute,
    private personajesService: PersonajesService
  ) { 

    this.activatedRoute.params
                      .subscribe((res) => {
                        this.idP = res.id;
                      })

    this.personajesService.getPersonaje(this.idP)
                          .subscribe( (res) => {
                            console.log( res )
                            this.personaje = res;
                          })

  }

  ngOnInit(): void {
  }

}
