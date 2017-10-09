import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPanelComponent } from './model-panel.component';

describe('ModelPanelComponent', () => {
  let component: ModelPanelComponent;
  let fixture: ComponentFixture<ModelPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
