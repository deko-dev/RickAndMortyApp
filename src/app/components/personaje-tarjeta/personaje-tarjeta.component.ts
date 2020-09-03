import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styles: []
})
export class PersonajeTarjetaComponent implements OnInit {

  @Input() personajes: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
