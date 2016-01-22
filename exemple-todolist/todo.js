angular.module('todoApp', [])

    .controller('TodoListController', function($scope) {

        $scope.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}
        ];

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            return $scope.todos.reduce(function (count, todo) {
                return count + (todo.done ? 0 : 1);
            }, 0);
        };

        $scope.archive = function() {
            $scope.todos = $scope.todos.filter(function (todo) {
                return !todo.done;
            });
        };

    });
