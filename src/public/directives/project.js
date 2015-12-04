//The <project data=""></project> directive used for displaying projects 
angular.module('app.directives.project', [])
	.directive('project', function(){
		return {
			restrict: 'E',
			scope: {
				projectdata: '='
			},
			templateUrl: "templates/directives/project.html",
			controller: function($scope){
				console.log($scope.projectdata);
			}
		};
	});
