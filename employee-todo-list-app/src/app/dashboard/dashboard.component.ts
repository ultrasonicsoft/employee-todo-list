import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EmployeeModel } from '../models/employee.model';
import { TodoModel } from '../models/todo.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    allEmployees: Array<EmployeeModel> = [];
    allTodos: Array<TodoModel> = [];
    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        console.log('dashboard initialized...');
        this.dataService.getAllEmployees().subscribe(employees => {
            console.log(employees);
            this.allEmployees = employees;
        });
    }

    onEmployeeSelected(employee: EmployeeModel) {
        console.log(employee);
        this.allTodos = [];
        this.dataService.getEmployeeTodos(employee).subscribe(todos => {
            console.log(todos);
            this.allTodos = todos;
        });
    }
    onTodoSelected(todo: TodoModel) {
        console.log(todo);
    }

}
