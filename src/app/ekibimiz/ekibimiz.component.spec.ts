import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkibimizComponent } from './ekibimiz.component';

describe('EkibimizComponent', () => {
  let component: EkibimizComponent;
  let fixture: ComponentFixture<EkibimizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EkibimizComponent]
    });
    fixture = TestBed.createComponent(EkibimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
