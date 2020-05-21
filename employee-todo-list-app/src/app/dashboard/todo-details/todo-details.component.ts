import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        const employeeId = this.activatedRoute.snapshot.paramMap.get('employeeId');
        const tipId = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(employeeId);
        console.log(tipId);

        this.dataService.getTodoDetails(employeeId, tipId).subscribe(todo => {
            console.log(todo);
            this.selectedTodo = todo;
        });
    }

}
