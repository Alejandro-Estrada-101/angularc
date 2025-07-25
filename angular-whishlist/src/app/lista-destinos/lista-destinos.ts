import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViaje } from "../models/destino-viaje.model";
import { DestinoViaje as DestinoViajeComponent } from "../destino-viaje/destino-viaje";

@Component({
  selector: 'app-lista-destinos',
  imports: [CommonModule, DestinoViajeComponent],
  templateUrl: './lista-destinos.html',
  styleUrl: './lista-destinos.css'
})
export class ListaDestinos implements OnInit {
  destinos: DestinoViaje[];
  constructor() {
    this.destinos = [
      new DestinoViaje('Paris', 'https://picsum.photos/150/200?random=1'),
      new DestinoViaje('New York', 'https://picsum.photos/150/200?random=2'),
      new DestinoViaje('Tokyo', 'https://picsum.photos/150/200?random=3')
    ];
  }

  ngOnInit() {}

  guardar(nombre: string, url: string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    return false;
  }

  elegido(d: DestinoViaje) {
    this.destinos.forEach(function(x) {x.setSelected(false)})
    d.setSelected(true);
  }
}
