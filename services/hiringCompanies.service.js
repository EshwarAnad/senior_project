angular.module('tps').factory('HiringCompaniesService', hiringCompaniesService);

function hiringCompaniesService(HiringCompaniesConstants){
    var hiringCompaniesService = {};

    hiringCompaniesService.getAll = getAll;
    hiringCompaniesService.get = get;

    function getAll(){
        return HiringCompaniesConstants.hiringCompanies;
    }

    function get(id){
        var companies = HiringCompaniesConstants.hiringCompanies;

        for(var i = 0; i < companies.length; i++){
            if(id.toString() === companies[i].id.toString()){
                return companies[i];
            }
        }

        return null;
    }

    return hiringCompaniesService;
}