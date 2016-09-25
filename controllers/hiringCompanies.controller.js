angular.module('tps').controller('HiringCompaniesCtrl', hiringCompaniesController);

function hiringCompaniesController($scope, $location, HiringCompaniesService){
    $scope.title = 'Hiring Companies';

    $scope.goToCompany = goToCompany;

    $scope.hiringCompanies = HiringCompaniesService.getAll();

    function goToCompany(company){
        $location.path('/hiringcompany/' + company.id);
    }
}