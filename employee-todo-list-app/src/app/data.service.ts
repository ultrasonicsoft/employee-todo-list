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

    getTodoDetails(employeeId: string, todoId: string): Observable<TodoModel> {
        const url = ApiRoutes.GetTodoDetails.replace(`{employeeId}`, employeeId).replace(`{todoId}`, todoId);
        return this.httpClient.get<TodoModel>(url);
    }

    createEmployeeRecord(newEmployeeRecord: EmployeeModel) {
        return this.httpClient.post(ApiRoutes.CreateEmployeeRecord, newEmployeeRecord);
    }

    createNewTodo(newTodo: TodoModel) {
        return this.httpClient.post(ApiRoutes.CreateTodo, newTodo);
    }

    deleteEmployeeRecord(employeeId: string) {
        const url = ApiRoutes.DeleteEmployee.replace(`{employeeId}`, employeeId);
        return this.httpClient.delete(url);
    }

    deleteTodo(todoId: string){
        const url = ApiRoutes.DeleteTodo.replace(`{todoId}`, todoId);
        return this.httpClient.delete(url);
    }
}
