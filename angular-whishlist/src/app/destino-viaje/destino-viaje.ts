import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinoViaje as DestinoViajeModel } from '../models/destino-viaje.models';

@Component({
  selector: 'app-destino-viaje',
  imports: [],
  templateUrl: './destino-viaje.html',
  styleUrl: './destino-viaje.css'
})
export class DestinoViaje implements OnInit {
  @Input() destino!: DestinoViajeModel;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {}

  ngOnInit() {}
}
