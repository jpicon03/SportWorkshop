import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeportistasComponent } from './lista-deportistas.component';

describe('ListaDeportistasComponent', () => {
  let component: ListaDeportistasComponent;
  let fixture: ComponentFixture<ListaDeportistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeportistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeportistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
