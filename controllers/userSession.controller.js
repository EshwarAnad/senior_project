angular.module('tps').controller('UserSessionsCtrl', userSessionsController);

function userSessionsController($scope){
    $scope.title = 'Hello World!';

    $scope.sessions = [];
}