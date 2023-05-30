import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzmanlikAlanlariComponent } from './uzmanlik-alanlari.component';

describe('UzmanlikAlanlariComponent', () => {
  let component: UzmanlikAlanlariComponent;
  let fixture: ComponentFixture<UzmanlikAlanlariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UzmanlikAlanlariComponent]
    });
    fixture = TestBed.createComponent(UzmanlikAlanlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
