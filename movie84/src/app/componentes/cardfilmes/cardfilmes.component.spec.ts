import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfilmesComponent } from './cardfilmes.component';

describe('CardfilmesComponent', () => {
  let component: CardfilmesComponent;
  let fixture: ComponentFixture<CardfilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardfilmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardfilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
