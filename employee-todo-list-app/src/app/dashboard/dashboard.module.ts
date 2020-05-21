import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMatModule } from '../shared/shared-mat.module';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
