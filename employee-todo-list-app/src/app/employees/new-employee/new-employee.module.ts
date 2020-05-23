import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewEmployeeRoutingModule } from './new-employee-routing.module';
import { NewEmployeeComponent } from './new-employee.component';
import { SharedMatModule } from '../app/shared/shared-mat.module';


@NgModule({
  declarations: [NewEmployeeComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    NewEmployeeRoutingModule
  ]
})
export class NewEmployeeModule { }
