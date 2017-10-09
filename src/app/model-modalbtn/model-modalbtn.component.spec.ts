import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelModalbtnComponent } from './model-modalbtn.component';

describe('ModelModalbtnComponent', () => {
  let component: ModelModalbtnComponent;
  let fixture: ComponentFixture<ModelModalbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelModalbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelModalbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
