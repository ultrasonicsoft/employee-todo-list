import { environment } from 'src/environments/environment';

export const ApiRoutes = {
    GetAllEmployees: environment.apiUrl + `/employees`,
    GetEmployeeTodos: environment.apiUrl + `/todos/{employeeId}`,
    GetTodoDetails: environment.apiUrl + `/todos/{employeeId}/{tipId}`
};
