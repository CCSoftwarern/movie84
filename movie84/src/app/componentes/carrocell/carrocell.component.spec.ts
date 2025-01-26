import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocellComponent } from './carrocell.component';

describe('CarrocellComponent', () => {
  let component: CarrocellComponent;
  let fixture: ComponentFixture<CarrocellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
