import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaNavesComponent } from './ficha-naves.component';

describe('FichaNavesComponent', () => {
  let component: FichaNavesComponent;
  let fixture: ComponentFixture<FichaNavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaNavesComponent]
    });
    fixture = TestBed.createComponent(FichaNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
