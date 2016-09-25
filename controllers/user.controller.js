angular.module('tps').controller('UserCtrl', userController);

function userController($scope, $location, userId, UserService){
    $scope.user = UserService.getById(userId);

    $scope.title = 'User: ' + $scope.user.username;

    $scope.goTo = goTo;

    function goTo(path){
        $location.path(path);
    }
}