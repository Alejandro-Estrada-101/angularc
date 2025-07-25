import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoViaje } from './destino-viaje';

describe('DestinoViaje', () => {
  let component: DestinoViaje;
  let fixture: ComponentFixture<DestinoViaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinoViaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinoViaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
