import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropModalComponent } from './prop-modal.component';

describe('PropModalComponent', () => {
  let component: PropModalComponent;
  let fixture: ComponentFixture<PropModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
