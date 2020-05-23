import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todo-details.component';
import { SharedMatModule } from '../app/shared/shared-mat.module';


const routes: Routes = [
  { path: '', component: TodoDetailsComponent }
];

@NgModule({
  declarations: [TodoDetailsComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoDetailsModule { }
