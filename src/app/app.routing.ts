import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExplorerPanelComponent } from './explorer-panel/explorer-panel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EpcComponent } from './epc/epc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelPanelComponent } from './model-panel/model-panel.component';
import { BProcessComponent } from './b-process/b-process.component';
import { TestModelComponent } from './test-model/test-model.component';



const routes: Routes = [
  { path: '', component: AppComponent , pathMatch: 'full'},
  {
    path: 'main', component: ModelPanelComponent , children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'process', component: BProcessComponent, children: [
      { path: '', redirectTo: 'test-model', pathMatch: 'full' },
      { path: 'test-model', component: TestModelComponent },
      { path: 'test-model', component: TestModelComponent },
    ]  },
    ]
  },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
