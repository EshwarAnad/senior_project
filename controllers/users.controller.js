angular.module('tps').controller('UsersCtrl', usersController);

function usersController($scope){
    $scope.debug = 'users controller hello world!';
}