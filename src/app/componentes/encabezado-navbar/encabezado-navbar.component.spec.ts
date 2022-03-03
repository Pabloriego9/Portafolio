import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoNavbarComponent } from './encabezado-navbar.component';

describe('EncabezadoNavbarComponent', () => {
  let component: EncabezadoNavbarComponent;
  let fixture: ComponentFixture<EncabezadoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
