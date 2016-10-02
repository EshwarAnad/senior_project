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

    .config(function($routeProvider, ROUTES){
        $routeProvider
            .when(ROUTES.HOME, {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .when(ROUTES.CANDIDATES_LIST, {
                controller: 'CandidatesCtrl',
                templateUrl: 'views/candidates.html'
            })
            .when(ROUTES.CANDIDATES_DETAIL, {
                controller: 'CandidateCtrl',
                templateUrl: 'views/candidate.html',
                resolve: {
                    candidateId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.HIRING_COMPANIES_LIST, {
                controller: 'HiringCompaniesCtrl',
                templateUrl: 'views/hiringCompanies.html'
            })
            .when(ROUTES.HIRING_COMPANIES_DETAIL, {
                controller: 'HiringCompanyCtrl',
                templateUrl: 'views/hiringCompany.html',
                resolve: {
                    hiringCompanyId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.LOGIN, {
                controller: 'LoginCtrl',
                templateUrl: 'views/login.html'
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_LIST, {
                controller: 'StaffingRecommendations',
                templateUrl: 'views/staffingRecommendations.html'
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_DETAIL, {
                controller: 'StaffingRecommendationCtrl',
                templateUrl: 'views/staffingRecommendation.html',
                resolve: {
                    staffingRecommendationId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_CREATE_DETAIL, {
                controller: 'CreateStaffingRecommendationDetailCtrl',
                templateUrl: 'views/createStaffingRecommendationDetail.html',
                resolve: {
                    staffingRequestId: function($route){
                        return $route.current.params.staffingRequestId;
                    }
                }
            })
            .when(ROUTES.STAFFING_RECOMMENDATIONS_CREATE_LIST, {
                controller: 'CreateStaffingRecommendationCtrl',
                templateUrl: 'views/createStaffingRecommendation.html',
                resolve: {
                    staffingRequestId: function($route){
                        return $route.current.params.staffingRequestId;
                    }
                }
            })
            .when(ROUTES.STAFFING_REQUESTS_LIST, {
                controller: 'StaffingRequests',
                templateUrl: 'views/staffingRequests.html'
            })
            .when(ROUTES.STAFFING_REQUESTS_DETAIL, {
                controller: 'StaffingRequest',
                templateUrl: 'views/staffingRequest.html',
                resolve: {
                    staffingRequestId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
            .when(ROUTES.STAFFING_REQUESTS_CREATE, {
                controller: 'CreateStaffingRequestCtrl',
                templateUrl: 'views/createStaffingRequest.html'
            })
            .when(ROUTES.USER_LIST, {
                controller: 'UsersCtrl',
                templateUrl: 'views/users.html'
            })
            .when(ROUTES.USER_DETAIL, {
                controller: 'UserCtrl',
                templateUrl: 'views/user.html',
                resolve: {
                    userId: function($route){
                        return $route.current.params.id;
                    }
                }
            })
    });