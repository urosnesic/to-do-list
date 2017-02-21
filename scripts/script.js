angular.module('ToDoListApp', ['ngAnimate'])
	
	.controller('mainCtrl', ['$scope', function($scope) {

		$scope.tasks = angular.fromJson(localStorage.getItem('task')) || [];

		$scope.addTask = function() {
			$scope.tasks.push({
				task: $scope.newTask,
				done: false
			});

			localStorage.setItem('task', angular.toJson($scope.tasks));

			$scope.newTask = "";
		};

		$scope.removeTasks = function() {
			$scope.tasks = [];
			localStorage.removeItem('task');
		};

		$scope.done = function() {
			$scope.tasks.done = true;
			localStorage.setItem('task', angular.toJson($scope.tasks));

		};

	}])

	.controller('headerCtrl', ['$scope', function($scope) {

		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var date = new Date();
		var currentDay = days[date.getDay()];
		$scope.currentDay = currentDay;

	}]);
