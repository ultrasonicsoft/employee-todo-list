import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
    selector: 'app-todo-details',
    templateUrl: './todo-details.component.html',
    styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

    selectedTodo: TodoModel;

    constructor(
        private dataService: DataService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        const employeeId = this.activatedRoute.snapshot.paramMap.get('employeeId');
        const todoId = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(employeeId);
        console.log(todoId);

        this.dataService.getTodoDetails(employeeId, todoId).subscribe(todo => {
            console.log(todo);
            this.selectedTodo = todo;
        });
    }

    deleteTodo() {
        if (window.confirm('Are you sure to delete this todo?')) {
            this.dataService.deleteTodo(this.selectedTodo.id).subscribe(response => {
                this.router.navigateByUrl('/dashboard');
            })
        }
    }

}
