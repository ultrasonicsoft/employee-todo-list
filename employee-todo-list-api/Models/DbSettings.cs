using System;
namespace employee_todo_list_api.Models
{
    public class DbSettings : IDbSettings
    {
        public string EmployeesCollectionName { get; set; }

        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
