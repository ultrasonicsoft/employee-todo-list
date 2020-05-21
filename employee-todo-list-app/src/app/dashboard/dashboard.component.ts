import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        console.log('dashboard initialized...');
        this.dataService.getAllEmployees().subscribe(employees => {
            console.log(employees);
        })
    }

}
