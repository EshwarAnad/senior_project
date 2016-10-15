angular.module('tps').controller('CandidatesCtrl', candidatesController);

function candidatesController($scope, CandidateService, $location, ROUTES){
        $scope.title = 'Candidates';

        $scope.createCandidate = createCandidate;
        $scope.goToCandidate = goToCandidate;

        $scope.candidates = CandidateService.getAll();

        function goToCandidate(candidate){
                $location.path('/candidate/' + candidate.id);
        }

        function createCandidate(){
                $location.path(ROUTES.CANDIDATES_CREATE)
        }
}