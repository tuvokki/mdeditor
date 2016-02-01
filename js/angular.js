angular.module('todoApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "partials/state1.html"
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "partials/state1.list.html",
        controller: "StateOneListController as onelist"
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
      })
      .state('state2.list', {
        url: "/list",
        templateUrl: "partials/state2.list.html",
        controller: "StateTwoListController as twolist"
      })
      .state('todos', {
        url: "/todos",
        templateUrl: "partials/todos.html",
        controller: "TodoListController as todoList"
      })
      // .state('mdeditor', {
      //   url: "/mdeditor",
      //   templateUrl: "partials/mdeditor.html",
      //   controller: "MDEditorController as mdeditor"
      // })
      ;
  })
  .controller('StateOneListController', function() {
    var oneList = this;
    oneList.items = ["One", "Two", "Three", "Four"];
  })
  .controller('StateTwoListController', function() {
    var twoList = this;
    twoList.things = ["A", "List", "Of", "Items"];
  })
  .controller('MDEditorController', function() {
    var mdeditor = this;
    mdeditor.things = ["A", "List", "Of", "Items"];
  })
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });