angular.module('tps').controller('StaffingRequest', staffingRequestController);

function staffingRequestController($scope, $location, staffingRequestId, StaffingRequestsService){
    $scope.staffingRequest = StaffingRequestsService.getById(staffingRequestId);

    $scope.title = 'Staffing Request for ' + $scope.staffingRequest.company.name;

    $scope.goTo = goTo;

    function goTo(path){
        $location.path(path);
    }
}