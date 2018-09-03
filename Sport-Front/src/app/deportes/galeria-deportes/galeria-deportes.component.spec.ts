import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDeportesComponent } from './galeria-deportes.component';

describe('GaleriaDeportesComponent', () => {
  let component: GaleriaDeportesComponent;
  let fixture: ComponentFixture<GaleriaDeportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaDeportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
