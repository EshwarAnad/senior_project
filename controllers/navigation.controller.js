angular.module('tps').controller('NavigationController', navigationController);

function navigationController($scope, $location, NavigationConstants, SessionService){
    $scope.debug = 'Hello World!';

    $scope.goTo = goTo;
    $scope.pathIsActive = pathIsActive;
    $scope.logout = logout;

    $scope.navbar = NavigationConstants;
    $scope.session = SessionService;

    function goTo(path){
        $location.path(path);
    }

    function pathIsActive(path){
        return path === $location.path();
    }

    function logout(){
        $scope.session.destroy();
        $location.path($scope.navbar.login.path);
    }
}