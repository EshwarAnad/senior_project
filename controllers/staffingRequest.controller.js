angular.module('tps').controller('StaffingRequest', staffingRequestController);

function staffingRequestController($scope, $location, StaffingRecommendationsService){
    $scope.staffingRequest = StaffingRecommendationsService.getById(staffingRequestId);

    $scope.title = 'Staffing Request for ' + $scope.staffingRequest.company;

    $scope.goTo = goTo;

    function goTo(path){
        $location.path(path);
    }
}