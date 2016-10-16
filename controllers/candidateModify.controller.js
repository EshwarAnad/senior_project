angular.module('tps').controller('CandidateModifyCtrl', candidateModifyController);

function candidateModifyController(candidateId, $scope, $location, ROUTES, CandidateUserService){
    $scope.title = 'Modify Candidate';

    $scope.update = update;
    $scope.cancel = cancel;

    $scope.candidate = CandidateUserService.getCandidateById(candidateId);

    $scope.candidateUser = $scope.candidate.user;
    $scope.candidate.user.candidateInfo = $scope.candidate;

    function update(){
        CandidateUserService.modifyUserCandidate($scope.candidateUser.id, $scope.candidateUser.password,
                    $scope.candidateUser.firstName, $scope.candidateUser.lastName, $scope.candidateUser.candidateInfo.skills,
                    $scope.candidateUser.candidateInfo.status);

        $location.path(ROUTES.CANDIDATES_DETAIL.replace(":id", candidateId));
    }

    function cancel(){
        $location.path(ROUTES.CANDIDATES_DETAIL.replace(":id", candidateId));
    }
}