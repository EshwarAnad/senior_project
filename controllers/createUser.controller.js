angular.module('tps').controller('CreateUserCtrl', createUserController);

function createUserController($scope, $location, UserService, CandidateUserService, HiringCompaniesService,
                                    ROUTES){
    $scope.title = 'Create User';

    $scope.goToUser = goToUser;
    $scope.create = create;

    $scope.users = CandidateUserService.getAllUsers();
    $scope.hiringCompanies = HiringCompaniesService.getAll();

    function goToUser(user){
        $location.path('/user/' + user.id);
    }

    function create(){
        console.log($scope.hiringCompany);

        UserService.create($scope.username, $scope.firstName,
            $scope.lastName, $scope.userType, JSON.parse($scope.hiringCompany),
            $scope.emailAddress, $scope.password);

        console.log(CandidateUserService.getAllUsers());

        $location.path(ROUTES.USER_LIST);
    }
}