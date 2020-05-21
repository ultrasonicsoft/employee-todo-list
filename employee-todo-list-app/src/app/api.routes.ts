import { environment } from 'src/environments/environment';

export const ApiRoutes = {
    GetAllEmployees: environment.apiUrl + `/employees`,
    DeleteEmployee: environment.apiUrl + `/employees/{employeeId}`,
    GetEmployeeTodos: environment.apiUrl + `/todos/{employeeId}`,
    GetTodoDetails: environment.apiUrl + `/todos/{employeeId}/{tipId}`,
    CreateEmployeeRecord: environment.apiUrl + `/employees`
};
