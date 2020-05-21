import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from './api.routes';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) { }

    getAllEmployees() {
        return this.httpClient.get(ApiRoutes.GetAllEmployees);
    }
}
