import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from './api.routes';
import { Observable } from 'rxjs';
import { EmployeeModel } from './models/employee.model';
import { TodoModel } from './models/todo.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) { }

    getAllEmployees(): Observable<Array<EmployeeModel>> {
        return this.httpClient.get<Array<EmployeeModel>>(ApiRoutes.GetAllEmployees);
    }

    getEmployeeTodos(employee: EmployeeModel): Observable<Array<TodoModel>> {
        const url = ApiRoutes.GetEmployeeTodos.replace('{employeeId}', employee.id);
        return this.httpClient.get<Array<TodoModel>>(url);
    }

    getTodoDetails(employeeId: string, tipid: string): Observable<TodoModel> {
        const url = ApiRoutes.GetTodoDetails.replace(`{employeeId}`, employeeId).replace(`{tipId}`, tipid);
        return this.httpClient.get<TodoModel>(url);
    }
}
