import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje as DestinoViajeModel } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  imports: [],
  templateUrl: './destino-viaje.html',
  styleUrl: './destino-viaje.css'
})
export class DestinoViaje implements OnInit {
  @Input() destino!: DestinoViajeModel;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViajeModel>;

  constructor() {
    this.clicked = new EventEmitter();  }

  ngOnInit() {}

  ir() {
    this.clicked.emit(this.destino);
    return false; 
  }
}
