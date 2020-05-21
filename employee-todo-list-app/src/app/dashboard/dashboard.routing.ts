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
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class DashboardRoutingModule { }
