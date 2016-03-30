//The <project projectdata=""></project> directive used for displaying projects 
angular.module('app.directives.project', [])
	.directive('project', function(){
		return {
			restrict: 'E',
			scope: {
				projectdata: '='
			},
			templateUrl: "templates/directives/project.html",
			replace: true,
			controller: function($scope){
				console.log($scope.projectdata);
			}
		};
	});

//Use link to do DOM related modifications
