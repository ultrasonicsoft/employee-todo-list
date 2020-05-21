using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using employee_todo_list_api.Models;
using employee_todo_list_api.Services;
using employee_todo_list_api.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace employee_todo_list_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeService employeeService;
        private readonly ILogger<EmployeesController> logger;
        private readonly IMapper mapper;

        public EmployeesController(EmployeeService employeeService,
            IMapper mapper,
            ILogger<EmployeesController> logger)
        {
            this.employeeService = employeeService;
            this.mapper = mapper;
            this.logger = logger;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<IEnumerable<EmployeeViewModel>> GetAllEmployees()
        {
            var employees = await employeeService.GetAllEmployees();
            var result = mapper.Map<List<EmployeeDTO>, IEnumerable<EmployeeViewModel>>(employees);
            return result;
        }

        // GET: api/Employees/id
        [HttpGet("{id}", Name = "GetEmployeeById")]
        public async Task<IActionResult> GetEmployeeById(string id)
        {
            var foundEmployee = await employeeService.GetEmployeeById(id);
            if (foundEmployee == null)
            {
                return BadRequest();
            }
            return Ok(mapper.Map<EmployeeViewModel>(foundEmployee));
        }

        // POST: api/Employees
        [HttpPost]
        public async Task<IActionResult> CreateEmployeeRecord([FromBody] EmployeeDTO newEmployeeDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var isCreated = await employeeService.CreateEmployeeRecord(newEmployeeDetails);

            if (isCreated == false)
            {
                return BadRequest();
            }
            return Ok();
        }

        // PUT: api/Employees/id
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(string id, [FromBody] EmployeeDTO employee)
        {
            var isUpdated = await employeeService.UpdateEmployeeRecord(id, employee);
            if(isUpdated == false)
            {
                return BadRequest();
            }
            return Ok();
        }

        // DELETE: api/ApiWithActions/id
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(string id)
        {
            var isDeleted = await employeeService.DeleteEmployeeRecord(id);
            if(isDeleted == false)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
