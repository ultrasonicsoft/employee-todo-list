import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EmployeeModel } from '../models/employee.model';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    allEmployees: Array<EmployeeModel> = [];
    displayedColumns: string[] = ['select', 'firstName', 'lastName', 'email', 'department'];

    selectedEmployeeId: string;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.getAllEmployees();
    }

    getAllEmployees() {
        this.dataService.getAllEmployees().subscribe(employees => {
            this.allEmployees = employees;
            console.log(this.allEmployees);

        });
    }

    deleteEmployee() {
        if (window.confirm('Are you sure to delete employee record?')) {
            this.dataService.deleteEmployeeRecord(this.selectedEmployeeId).subscribe(response => {
                console.log(response);
                this.getAllEmployees();
            });
        }
    }

    onEmployeeSelection(employeeId: string) {
        this.selectedEmployeeId = employeeId;
        console.log(this.selectedEmployeeId);
    }
}
