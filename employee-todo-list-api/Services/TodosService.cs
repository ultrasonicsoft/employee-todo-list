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
    public class TodosService
    {
        private readonly IMongoCollection<TodoDTO> todos;
        private readonly ILogger<TodosService> logger;

        public TodosService(IDbSettings dbSettings,
            ILogger<TodosService> logger)
        {
            this.logger = logger;
            var client = new MongoClient(dbSettings.ConnectionString);
            var db = client.GetDatabase(dbSettings.DatabaseName);
            todos = db.GetCollection<TodoDTO>(dbSettings.TodosCollectionName);
        }

        public async Task<List<TodoDTO>> GetEmployeeTodos(string employeeId)
        {
            List<TodoDTO> allTodos = null;
            try
            {
                var result = await todos.FindAsync(todo => todo.EmployeeId.Equals(employeeId));
                allTodos = result.ToList();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Get all todos failed.");
            }
            return allTodos;
        }

        
        internal async Task<bool> CreateTodo(TodoDTO newTodo)
        {
            var isCreated = false;
            try
            {
                await todos.InsertOneAsync(newTodo);
                isCreated = true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Create todo record failed.");
            }
            return isCreated;
        }

        internal async Task<TodoDTO> GetTodoById(string id)
        {
            TodoDTO foundTodo = null;
            try
            {
                var result = await todos.FindAsync(todo => ObjectId.Parse(id).Equals(todo.Id));
                foundTodo = result.FirstOrDefault();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Get todo by ID failed.");
            }
            return foundTodo;
        }

        internal async Task<bool> UpdateTodo(string id, TodoDTO updatedTodoDTO)
        {
            var isUpdated = false;
            try
            {
                var foundTodo = GetTodoById(id).Result;

                foundTodo.Title = updatedTodoDTO.Title;
                foundTodo.Description = updatedTodoDTO.Description;
                foundTodo.Priority = updatedTodoDTO.Priority;
                foundTodo.State = updatedTodoDTO.State;
                foundTodo.Estimate = updatedTodoDTO.Estimate;

                await todos.ReplaceOneAsync(todo => ObjectId.Parse(id).Equals(todo.Id), foundTodo);
                isUpdated = true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Upadte todo failed.");
            }
            return isUpdated;
        }

        internal async Task<bool> DeleteTodo(string id)
        {
            var isDeleted = false;
            try
            {
                await todos.DeleteOneAsync(todo => ObjectId.Parse(id).Equals(todo.Id));
                isDeleted = true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Delete todo failed.");
            }
            return isDeleted;
        }
    }
}
