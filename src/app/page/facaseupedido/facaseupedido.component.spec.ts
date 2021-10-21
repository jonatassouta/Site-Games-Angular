import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacaseupedidoComponent } from './facaseupedido.component';

describe('FacaseupedidoComponent', () => {
  let component: FacaseupedidoComponent;
  let fixture: ComponentFixture<FacaseupedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacaseupedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacaseupedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
