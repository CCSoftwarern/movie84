import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheserieComponent } from './detalheserie.component';

describe('DetalheserieComponent', () => {
  let component: DetalheserieComponent;
  let fixture: ComponentFixture<DetalheserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheserieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
