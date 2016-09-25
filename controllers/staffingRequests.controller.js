angular.module('tps').controller('StaffingRequests', staffingRequestsController);

function staffingRequestsController($scope, $location, StaffingRequestsService){
    $scope.title = 'Staffing Requests';

    $scope.goTo = goTo;

    $scope.staffingRequests = StaffingRequestsService.getAll();

    function goTo(path){
        $location.path(path);
    }
}