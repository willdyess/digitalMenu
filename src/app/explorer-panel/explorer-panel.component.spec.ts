import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerPanelComponent } from './explorer-panel.component';

describe('ExplorerPanelComponent', () => {
  let component: ExplorerPanelComponent;
  let fixture: ComponentFixture<ExplorerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
