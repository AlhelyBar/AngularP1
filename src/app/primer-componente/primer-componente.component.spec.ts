import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerComponenteComponent } from './primer-componente.component';


export interface Persona {
  Nombre: string;
  Apellidos: String;
  Edad: string;
}

let persona: Persona;
persona = {
  Nombre: 'Alhely',
  Apellidos: 'Barraza',
  Edad: '25 xD'
};



describe('PrimerComponenteComponent', () => {
  let component: PrimerComponenteComponent;
  let fixture: ComponentFixture<PrimerComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

