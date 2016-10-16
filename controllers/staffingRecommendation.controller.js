angular.module('tps').controller('StaffingRecommendationCtrl', staffingRecommendationController);

function staffingRecommendationController($scope, ROUTES, $location, staffingRecommendationId, StaffingRecommendationsService){
    $scope.path = ROUTES;
    $scope.notFound = false;

    if($scope.session.type !== 'candidate'){
        $scope.staffingRecommendation = StaffingRecommendationsService.getById(staffingRecommendationId);
        if(!$scope.staffingRecommendation){
            $scope.notFound = true;
        } else {
            $scope.title = 'Staffing Recommendation for ' + $scope.staffingRecommendation.company.name;
        }
    }

    $scope.goTo = goTo;

    function goTo(path){
        $location.path(path);
    }
}