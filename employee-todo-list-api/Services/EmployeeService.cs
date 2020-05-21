using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DnsClient.Internal;
using employee_todo_list_api.Models;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;

namespace employee_todo_list_api.Services
{
    public class EmployeeService
    {
        private readonly IMongoCollection<EmployeeDTO> employees;
        private readonly ILogger<EmployeeService> logger;

        public EmployeeService(IDbSettings dbSettings,
            ILogger<EmployeeService> logger)
        {
            this.logger = logger;
            var client = new MongoClient(dbSettings.ConnectionString);
            var db = client.GetDatabase(dbSettings.DatabaseName);
            employees = db.GetCollection<EmployeeDTO>(dbSettings.EmployeesCollectionName);
        }

        public async Task<List<EmployeeDTO>> GetAllEmployees()
        {
            List<EmployeeDTO> allEmployees = null;
            try
            {
                var result = await employees.FindAsync(x => true);
                allEmployees = result.ToList();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Get all employees failed.");
            }
            return allEmployees;
        }

        internal async Task<bool> CreateEmployeeRecord(EmployeeDTO newEmployeeDetails)
        {
            var isCreated = false;
            try
            {
                await employees.InsertOneAsync(newEmployeeDetails);
                isCreated = true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Create Employee record failed.");
            }
            return isCreated;
        }

        internal async Task<EmployeeDTO> GetEmployeeById(string id)
        {
            EmployeeDTO foundEmployee = null;
            try
            {
                var result = await employees.FindAsync(employee => ObjectId.Parse(id).Equals(employee.Id));
                foundEmployee = result.FirstOrDefault();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Get Employee by ID failed.");
            }
            return foundEmployee;
        }

        internal async Task<bool> UpdateEmployeeRecord(string id, EmployeeDTO updatedEmployeeDTO)
        {
            var isUpdated = false;
            try
            {
                var foundEmployee = GetEmployeeById(id).Result;

                foundEmployee.FirstName = updatedEmployeeDTO.FirstName;
                foundEmployee.LastName = updatedEmployeeDTO.LastName;
                foundEmployee.Email = updatedEmployeeDTO.Email;
                foundEmployee.Department = updatedEmployeeDTO.Department;

                await employees.ReplaceOneAsync(emp => ObjectId.Parse(id).Equals(emp.Id), foundEmployee);
                isUpdated = true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Upadte Employee failed.");
            }
            return isUpdated;
        }

        internal async Task<bool> DeleteEmployeeRecord(string id)
        {
            var isDeleted = false;
            try
            {
                await employees.DeleteOneAsync(emp => ObjectId.Parse(id).Equals(emp.Id));
                isDeleted = true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Delete Employee failed.");
            }
            return isDeleted;
        }
    }
}
