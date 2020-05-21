using System;
using System.Collections.Generic;
using employee_todo_list_api.Models;
using MongoDB.Driver;

namespace employee_todo_list_api.Services
{
    public class EmployeeService
    {
        private readonly IMongoCollection<Employee> employees;

        public EmployeeService(IDbSettings dbSettings)
        {
            var client = new MongoClient(dbSettings.ConnectionString);
            var db = client.GetDatabase(dbSettings.DatabaseName);
            employees = db.GetCollection<Employee>(dbSettings.EmployeesCollectionName);
        }

        public List<Employee> GetAllEmployees()
        {
            return employees.Find(x => true).ToList();
        }

        internal bool CreateEmployeeRecord(Employee newEmployeeDetails)
        {
            employees.InsertOne(newEmployeeDetails);
            return true;
        }
    }
}
