import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app.routing';
import { Md2Module } from 'md2';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExplorerPanelComponent } from './explorer-panel/explorer-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EpcComponent } from './epc/epc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelPanelComponent } from './model-panel/model-panel.component';
import { BProcessComponent } from './b-process/b-process.component';
import { PropModalComponent } from './prop-modal/prop-modal.component';
import { TestModelComponent } from './test-model/test-model.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { ModelModalbtnComponent } from './model-modalbtn/model-modalbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExplorerPanelComponent,
    NavigationComponent,
    EpcComponent,
    DashboardComponent,
    ModelPanelComponent,
    BProcessComponent,
    PropModalComponent,
    TestModelComponent,
    TabsComponent,
    TabComponent,
    ModelModalbtnComponent
  ],
  imports: [
    BrowserModule,
    InlineSVGModule,
    AppRoutingModule,
    Md2Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
