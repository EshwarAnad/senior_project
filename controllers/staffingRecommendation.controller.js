angular.module('tps').controller('StaffingRecommendationCtrl', staffingRecommendationController);

function staffingRecommendationController($scope, $location, staffingRecommendationId, StaffingRecommendationsService){
    $scope.staffingRecommendation = StaffingRecommendationsService.getById(staffingRecommendationId);

    $scope.title = 'Staffing Recommendation for ' + $scope.staffingRecommendation.company.name;

    $scope.goTo = goTo;

    function goTo(path){
        $location.path(path);
    }
}