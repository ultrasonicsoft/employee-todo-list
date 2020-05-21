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
    public class TodosController : ControllerBase
    {
        private readonly TodosService todosService;
        private readonly ILogger<TodosController> logger;
        private readonly IMapper mapper;

        public TodosController(TodosService TodosService,
            IMapper mapper,
            ILogger<TodosController> logger)
        {
            this.todosService = TodosService;
            this.mapper = mapper;
            this.logger = logger;
        }

        // GET: api/Todos
        [HttpGet("{employeeId}", Name = "GetEmployeeTodos")]
        public async Task<IEnumerable<TodoViewModel>> GetEmployeeTodos(string employeeId)
        {
            var Todos = await todosService.GetEmployeeTodos(employeeId);
            var result = mapper.Map<List<TodoDTO>, IEnumerable<TodoViewModel>>(Todos);
            return result;
        }

        // GET: api/Todos/id
        [HttpGet("{employeeId}/{id}", Name = "GetTodoById")]
        public async Task<IActionResult> GetTodoById(string employeeId, string id)
        {
            var foundTodo = await todosService.GetTodoById(id);
            if (foundTodo == null)
            {
                return BadRequest();
            }
            return Ok(mapper.Map<TodoViewModel>(foundTodo));
        }

        // POST: api/Todos
        [HttpPost]
        public async Task<IActionResult> CreateTodo([FromBody] TodoDTO newTodo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var isCreated = await todosService.CreateTodo(newTodo);

            if (isCreated == false)
            {
                return BadRequest();
            }
            return Ok();
        }

        // PUT: api/Todos/id
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTodo(string id, [FromBody] TodoDTO updatedTodo)
        {
            var isUpdated = await todosService.UpdateTodo(id, updatedTodo);
            if (isUpdated == false)
            {
                return BadRequest();
            }
            return Ok();
        }

        // DELETE: api/ApiWithActions/id
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTodo(string id)
        {
            var isDeleted = await todosService.DeleteTodo(id);
            if (isDeleted == false)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
