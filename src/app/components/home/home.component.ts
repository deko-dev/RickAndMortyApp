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
    private personajesService: PersonajesService
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

  // getSiguiente(pag:number = 1){
  //   console.log(this.personajes.length);
  //   this.count = this.personajes.length + this.count;
  //   // console.log(this.personajes.length + this.count);
  //   this.page = this.page + pag; 
  //   // this.count = this.page * 20;
  //   if(this.page === 30){
  //     this.count = this.count - 9;
  //   }
  //   this.getPagina(this.page);
  //   console.log(this.personajes.length);
  //   console.log(this.count)
  // }

  // getAtras(pag:number = 1){
  //   console.log(this.personajes.length);
  //   this.count = this.count - this.personajes.length;
  //   // console.log(this.personajes.length + this.count);
  //   this.page = this.page + pag; 
  //   // this.count = this.page * 20;
  //   this.getPagina(this.page);
  //   console.log(this.personajes.length);
  //   console.log(this.count)
  // }


  ngOnInit(): void {
  }

}
