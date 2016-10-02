angular.module('tps').controller('UsersCtrl', usersController);

function usersController($scope, $location, UserService, ROUTES){
    $scope.title = 'Users';

    $scope.goToUser = goToUser;
    $scope.createUser = createUser;

    $scope.users = UserService.getAll();

    function goToUser(user){
        $location.path('/user/' + user.id);
    }

    function createUser(){
        console.log(ROUTES.USER_CREATE);
        $location.path(ROUTES.USER_CREATE);
    }
}