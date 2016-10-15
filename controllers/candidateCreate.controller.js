angular.module('tps').controller('CandidateCreateCtrl', candidateCreateController);

function candidateCreateController($scope, CandidateService, $location, ROUTES){
    $scope.title = 'Candidates: Create';

    $scope.create = create;
    $scope.cancel = cancel;

    function create(){
        CandidateService.create($scope.username, $scope.password, $scope.firstName,
            $scope.lastName, $scope.skills, '');
    }

    function cancel(){
        $location.path(ROUTES.CANDIDATES_LIST);
    }
}