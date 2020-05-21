namespace employee_todo_list_api.Models
{
    public interface IDbSettings
    {
        string EmployeesCollectionName { get; set; }

        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
