import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesfilmeComponent } from './detalhesfilme.component';

describe('DetalhesfilmeComponent', () => {
  let component: DetalhesfilmeComponent;
  let fixture: ComponentFixture<DetalhesfilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesfilmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesfilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
