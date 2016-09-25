angular.module('tps').controller('UsersCtrl', usersController);

function usersController($scope, $location, UserService){
    $scope.title = 'Users';

    $scope.goToUser = goToUser;

    $scope.users = UserService.getAll();

    function goToUser(user){
        $location.path('/user/' + user.id);
    }
}