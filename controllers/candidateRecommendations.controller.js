angular.module('tps').controller('CandidateRecommendationsCtrl', candidatesRecommendationsController);

function candidatesRecommendationsController($scope, StaffingRecommendationsService){
    $scope.title = 'Job Recommendations';

    console.log($scope.session.user);

    if($scope.session.type === 'candidate'){
        $scope.candidateRecommendations =
            StaffingRecommendationsService.getForCandidate($scope.session.user.candidateInfo.id);
    }
}