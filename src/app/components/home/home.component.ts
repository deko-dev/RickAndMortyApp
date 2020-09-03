import { Component, OnInit, DoCheck } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{

  page:number = 0; 
  info: any[] = [];
  personajes:any[] = [];
  count:number = 0;
  disable:boolean=false;

  constructor(
    public personajesService: PersonajesService
  ) { 
    this.getPagina(1);


  }

  getPagina(numPage:number){
    console.log(this.page+numPage);
    console.log(this.count);
    this.page = this.page + numPage;
    this.personajesService.getPersonajes(this.page)
        .subscribe( (data:any) => {
          this.info = data.info;
          this.personajes = data.results;   
          this.count = this.count + this.personajes.length;     
          console.log(this.info);
          console.log(this.personajes);
        })
  }

  ngOnInit(): void {
  }

}
