import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'todo-details/:employeeId/:id',
        loadChildren: () => import('./todo-details/todo-details.module').then(m => m.TodoDetailsModule)
    },
    {
        path: 'new-todo/:employeeId',
        loadChildren: () => import('./new-todo/new-todo.module').then(m => m.NewTodoModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class DashboardRoutingModule { }
