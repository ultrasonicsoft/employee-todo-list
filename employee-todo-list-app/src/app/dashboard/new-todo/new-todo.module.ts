import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedMatModule } from 'src/app/shared/shared-mat.module';
import { NewTodoComponent } from './new-todo.component';


const routes: Routes = [
  { path: '', component: NewTodoComponent }
];

@NgModule({
  declarations: [NewTodoComponent],
  imports: [
    CommonModule,
    SharedMatModule,
    RouterModule.forChild(routes)
  ]
})
export class NewTodoModule { }
