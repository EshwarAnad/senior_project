angular.module('tps').controller('CandidateModifyCtrl', candidateModifyController);

function candidateModifyController(candidateId, $scope, $location, ROUTES, CandidateUserService, UserService){
    $scope.title = 'Modify Candidate';

    $scope.update = update;
    $scope.cancel = cancel;

    $scope.candidate = CandidateUserService.getCandidateById(candidateId);

    $scope.candidateUser = $scope.candidate.user;
    $scope.candidate.user.candidateInfo = $scope.candidate;

    function update(){

    }

    function cancel(){
        $location.path(ROUTES.CANDIDATES_DETAIL.replace(":id", candidateId));
    }
}