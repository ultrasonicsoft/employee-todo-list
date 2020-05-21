import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMatModule } from '../shared/shared-mat.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        SharedMatModule,
        FormsModule,
        DashboardRoutingModule,
    ]
})
export class DashboardModule { }
