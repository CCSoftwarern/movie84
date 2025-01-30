import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebridadesComponent } from './celebridades.component';

describe('CelebridadesComponent', () => {
  let component: CelebridadesComponent;
  let fixture: ComponentFixture<CelebridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelebridadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
