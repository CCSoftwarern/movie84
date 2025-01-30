import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmComentariosComponent } from './frm-comentarios.component';

describe('FrmComentariosComponent', () => {
  let component: FrmComentariosComponent;
  let fixture: ComponentFixture<FrmComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
