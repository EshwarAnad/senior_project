angular.module('tps').controller('CreateStaffingRequestCtrl', createStaffingRequestController);

function createStaffingRequestController($scope, $location){

    $scope.title = 'Create Staffing Request';

    $scope.goTo = goTo;

    function goTo(path){
        $location.path(path);
    }
}