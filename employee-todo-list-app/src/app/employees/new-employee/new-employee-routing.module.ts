import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEmployeeComponent } from './new-employee.component';

const routes: Routes = [{ path: '', component: NewEmployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewEmployeeRoutingModule { }
