using System;
using employee_todo_list_api.Models;

namespace employee_todo_list_api.ViewModels
{
    public class EmployeeViewModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Department { get; set; }
    }
}
