using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using employee_todo_list_api.Models;
using employee_todo_list_api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace employee_todo_list_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        public EmployeeService employeeService { get; set; }
        private readonly ILogger<EmployeesController> logger;

        public EmployeesController(EmployeeService employeeService,
            ILogger<EmployeesController> logger)
        {
            this.employeeService = employeeService;
            this.logger = logger;
        }

        // GET: api/Employees
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return this.employeeService.GetAllEmployees();
            //return new string[] { "value1", "value2" };
        }

        // GET: api/Employees/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Employees
        [HttpPost]
        public ActionResult Post([FromBody] Employee newEmployeeDetails)
        {
            var status = employeeService.CreateEmployeeRecord(newEmployeeDetails);
            return Ok();
        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
