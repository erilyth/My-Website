//The <projectdetail projectdetaildata=""></projectdetail> directive used for displaying projects 
angular.module('app.directives.projectdetail', [])
	.directive('projectdetail', function(){
		return {
			restrict: 'E',
			scope: {
				projectdetaildata: '='
			},
			templateUrl: "templates/directives/projectdetail.html",
			replace: true,
			controller: function($scope){
				console.log($scope.projectdetaildata);
			}
		};
	});

//Use link to do DOM related modifications
