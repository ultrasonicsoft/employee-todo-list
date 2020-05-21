import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedMatModule } from '../shared/shared-mat.module';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
