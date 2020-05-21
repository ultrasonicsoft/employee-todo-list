# Employee TODO List app

The simple website built with Angular 9.1 and ASP.NET Core 3.1 with MongoDb database

## API Setup

1. Clone this repository
2. Navigate to `employee-todo-list-api` folder and open in Visual Studio/Visual Studio for MAC or VS Code
3. Install MongoDb community edition and make sure `mongod` demon service is running and database can be accessed without any username and password
4. Run the .NET core project
5. Navigate to Swagger URL - `https://localhost:5001/swagger/index.html` and get familiar with available API endpoints

## Website setup

1. Install Angular CLI latest version and Nodejs
2. Navigate to `employee-todo-list-app` folder
3. Launch the application by running command `ng serve --open` in terminal.
4. If there are no employee records then create new employee records from "Employees" section
5. Once employees records are present, go to "Dashboard" section. The employee records shall be displayed in ascending order here.
6. To create new Todo item, select employee and click on "New Todo" button
7. Provide all required todo item details and click on "Create" button
8. The Dashboard will show all todo items for selected employee in ascending order i.e. Critical todo items first.
9. Click on todo item in Dashboard and it shall open todo detail page
10. Click on "Delete" button to delete current todo item.
