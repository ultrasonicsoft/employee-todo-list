using System;
using AutoMapper;
using employee_todo_list_api.Models;
using employee_todo_list_api.ViewModels;

namespace employee_todo_list_api.AutoMappers
{
    public class EmployeeProfile : Profile
    {
        public EmployeeProfile()
        {
            CreateMap<EmployeeDTO, EmployeeViewModel>();
        }
    }
}
