import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-employee',
    templateUrl: './new-employee.component.html',
    styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

    newEmployee: EmployeeModel = new EmployeeModel();

    constructor(
        private dataService: DataService,
        private router: Router) { }

    ngOnInit(): void {
    }

    createEmployeeRecord() {
        console.log(this.newEmployee);
        this.dataService.createEmployeeRecord(this.newEmployee).subscribe(response => {
            console.log(response);
            this.router.navigateByUrl('/employees');
        });
    }

}
