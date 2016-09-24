angular.module('tps', ['ngRoute'])

    .controller('DashboardCtrl', function($scope){
        $scope.debug = 'Hello World!';
    })

    .controller('NavigationController', function($scope, $location, NavigationConstants){
        $scope.debug = 'Hello World!';

        $scope.navbar = NavigationConstants;

        $scope.goTo = function(path){
            $location.path(path);
        };

        $scope.pathIsActive = function(path){
            return path === $location.path();
        };
    })

    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .when('/candidates', {
                controller: 'CandidatesCtrl',
                templateUrl: 'views/candidates.html'
            })
            .when('/candidate/:id', {
                controller: 'CandidateCtrl',
                templateUrl: 'views/candidate.html',
                resolve: {
                    candidateId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when('/users', {
                controller: 'UsersCtrl',
                templateUrl: 'views/candidate.html'
            })
    });