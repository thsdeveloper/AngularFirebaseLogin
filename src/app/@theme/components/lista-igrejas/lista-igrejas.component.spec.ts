import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIgrejasComponent } from './lista-igrejas.component';

describe('ListaIgrejasComponent', () => {
  let component: ListaIgrejasComponent;
  let fixture: ComponentFixture<ListaIgrejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIgrejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIgrejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
