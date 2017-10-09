import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpcComponent } from './epc.component';

describe('EpcComponent', () => {
  let component: EpcComponent;
  let fixture: ComponentFixture<EpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
