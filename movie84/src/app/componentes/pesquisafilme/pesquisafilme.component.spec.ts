import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisafilmeComponent } from './pesquisafilme.component';

describe('PesquisafilmeComponent', () => {
  let component: PesquisafilmeComponent;
  let fixture: ComponentFixture<PesquisafilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisafilmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisafilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
