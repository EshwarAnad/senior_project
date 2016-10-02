angular.module('tps').controller('CreateUserCtrl', createUserController);

function createUserController($scope, $location, UserService, HiringCompaniesService,
                                    ROUTES){
    $scope.title = 'Create User';

    $scope.goToUser = goToUser;
    $scope.create = create;

    $scope.users = UserService.getAll();
    $scope.hiringCompanies = HiringCompaniesService.getAll();

    function goToUser(user){
        $location.path('/user/' + user.id);
    }

    function create(){
        UserService.create($scope.username, $scope.firstName,
            $scope.lastName, $scope.userType, JSON.parse($scope.hiringCompany),
            $scope.emailAddress, $scope.password);

        console.log(UserService.getAll());

        $location.path(ROUTES.USER_LIST);
    }
}