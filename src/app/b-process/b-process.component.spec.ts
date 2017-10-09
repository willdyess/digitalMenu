import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BProcessComponent } from './b-process.component';

describe('BProcessComponent', () => {
  let component: BProcessComponent;
  let fixture: ComponentFixture<BProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
