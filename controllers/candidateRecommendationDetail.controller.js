angular.module('tps').controller('CandidateRecommendationDetailCtrl', candidatesRecommendationDetailController);

function candidatesRecommendationDetailController(recommendationId, $scope, $location, ROUTES, StaffingRecommendationsService){
    $scope.title = "Job Recommendation Details";

    $scope.update = update;
    $scope.cancel = cancel;

    if($scope.session.type === 'candidate'){
        $scope.recommendation = StaffingRecommendationsService.getById(recommendationId);
        $scope.response = $scope.recommendation.getCandidateStatusById($scope.session.candidateInfo.id);
        console.log($scope.recommendation);
        console.log($scope.response);
    }

    function update(){

    }

    function cancel(){
        $location.path(ROUTES.CANDIDATE_RECOMMENDATIONS);
    }
}