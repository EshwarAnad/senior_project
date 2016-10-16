angular.module('tps').controller('UpdateProfileCtrl', updateProfileController);

function updateProfileController($scope, $location, ROUTES, CandidateUserService){
    $scope.title = 'Update User Profile';

    $scope.user = CandidateUserService.getUserById($scope.session.id);

    $scope.update = update;
    $scope.cancel = cancel;

    function update(){
        CandidateUserService.modifyUserOnly($scope.user.id, $scope.username, $scope.user.emailAddress,
            $scope.user.password, $scope.user.firstName, $scope.user.lastName);
        $location.path(ROUTES.HOME);
    }

    function cancel(){
        $location.path(ROUTES.HOME);
    }
}