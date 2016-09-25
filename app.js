angular.module('tps', ['ngRoute'])

    .run(function(SessionService){
        var credential = {
            id: 1000,
            username: 'andyadmin',
            firstName: 'Andy',
            lastName: 'Admin',
            type: 'admin',
            hiringCompany: null,
            emailAddress: 'andy@tpsstaffing.com'
        };

        SessionService.create(credential);
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
            .when('/hiringcompanies', {
                controller: 'HiringCompaniesCtrl',
                templateUrl: 'views/hiringCompanies.html'
            })
            .when('/hiringcompany/:id', {
                controller: 'HiringCompanyCtrl',
                templateUrl: 'views/hiringCompany.html',
                resolve: {
                    hiringCompanyId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when('/login', {
                controller: 'LoginCtrl',
                templateUrl: 'views/login.html'
            })
            .when('/staffing/recommendations', {
                controller: 'StaffingRecommendations',
                templateUrl: 'views/staffingRecommendations.html'
            })
            .when('/staffing/recommendation/:id', {
                controller: 'StaffingRecommendationCtrl',
                templateUrl: 'views/staffingRecommendation.html',
                resolve: {
                    staffingRecommendationId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when('/staffingrequests', {
                controller: 'StaffingRequests',
                templateUrl: 'views/staffingRequests.html'
            })
            .when('/staffingrequest/:id', {
                controller: 'StaffingRequest',
                templateUrl: 'views/staffingRequest.html',
                resolve: {
                    staffingRequestId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when('/users', {
                controller: 'UsersCtrl',
                templateUrl: 'views/users.html'
            })
            .when('/user/:id', {
                controller: 'UserCtrl',
                templateUrl: 'views/user.html',
                resolve: {
                    userId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
    });