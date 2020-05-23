import { environment } from '../environments/environment';

export const ApiRoutes = {
    GetAllEmployees: environment.apiUrl + `/employees`,
    DeleteEmployee: environment.apiUrl + `/employees/{employeeId}`,
    GetEmployeeTodos: environment.apiUrl + `/todos/{employeeId}`,
    GetTodoDetails: environment.apiUrl + `/todos/{employeeId}/{todoId}`,
    CreateEmployeeRecord: environment.apiUrl + `/employees`,
    CreateTodo: environment.apiUrl + `/todos`,
    DeleteTodo: environment.apiUrl + `/todos/{todoId}`,
};
