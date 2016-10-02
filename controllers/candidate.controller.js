angular.module('tps').controller('CandidateCtrl', function($scope, candidateId, CandidatesConstants, $location,
                                                            $rootScope, StaffingRecommendationsService){
    $scope.title = 'Candidates';

    $scope.addNote = addNote;
    $scope.addPrivateNote = addPrivateNote;

    $scope.staffingRecommendations =
        StaffingRecommendationsService.getForCandidate(candidateId);

    console.log($scope.staffingRecommendations);

    var candidates = CandidatesConstants.list;

    for(var i = 0; i < candidates.length; i++){
        if(candidateId.toString() === candidates[i].id.toString()){
            $scope.candidate = candidates[i];
            break;
        }
    }

    $scope.candidates = CandidatesConstants.list;

    $scope.goTo = function(path){
        $location.path(path);
    };

    function addNote(content){
        $scope.candidate.notes.push({
            content: content,
            author: $rootScope.session.user,
            created: new Date()
        });

        $scope.pendingNote = '';
    }

    function addPrivateNote(content){
        $scope.candidate.privateNotes.push({
            content: content,
            author: $rootScope.session.user,
            created: new Date()
        });

        $scope.pendingPrivateNote = '';
    }
});