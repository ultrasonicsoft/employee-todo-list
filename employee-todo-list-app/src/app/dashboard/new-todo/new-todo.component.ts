import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { TodoModel } from 'src/app/models/todo.model';
import { PriorityStatus } from 'src/app/models/priority-status.enum';
import { States } from 'src/app/models/states.enum';

@Component({
    selector: 'app-new-todo',
    templateUrl: './new-todo.component.html',
    styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
    newTodo: TodoModel = new TodoModel();
    employeeId: string;
    priorityOptions = [];
    stateOptions = [];

    constructor(
        private dataService: DataService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.employeeId = this.activatedRoute.snapshot.paramMap.get('employeeId');
        console.log(this.employeeId);

        this.priorityOptions = Object.keys(PriorityStatus).filter(
            (type) => isNaN(type as any) && type !== 'values'
        );
        console.log(this.priorityOptions);

        this.stateOptions = Object.keys(States).filter(
            (type) => isNaN(type as any) && type !== 'values'
        );
        console.log(this.stateOptions);

    }

    createTodo() {
        this.newTodo.employeeId = this.employeeId;
        console.log(this.newTodo);
        this.dataService.createNewTodo(this.newTodo).subscribe(response => {
            console.log(response);
            this.router.navigateByUrl('/dashboard');
        });
    }

}
