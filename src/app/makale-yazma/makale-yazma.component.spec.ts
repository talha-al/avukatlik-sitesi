import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakaleYazmaComponent } from './makale-yazma.component';

describe('MakaleYazmaComponent', () => {
  let component: MakaleYazmaComponent;
  let fixture: ComponentFixture<MakaleYazmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakaleYazmaComponent]
    });
    fixture = TestBed.createComponent(MakaleYazmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
