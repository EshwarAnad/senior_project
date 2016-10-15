angular.module('tps').factory('HiringCompaniesService', hiringCompaniesService);

function hiringCompaniesService(HiringCompaniesConstants){
    var hiringCompaniesService = {};

    hiringCompaniesService.getAll = getAll;
    hiringCompaniesService.get = get;
    hiringCompaniesService.create = create;

    var hiringCompanies = HiringCompaniesConstants.hiringCompanies;

    function getAll(){
        return hiringCompanies;
    }

    function get(id){
        for(var i = 0; i < hiringCompanies.length; i++){
            if(id.toString() === hiringCompanies[i].id.toString()){
                return hiringCompanies[i];
            }
        }

        return null;
    }

    function create(name){
        var id = 1000;

        for(var i = 0; i < candidates.length; i++){
            id = Math.max(id, candidates[i].id + 1);
        }

        var hiringCompany = {
            id: id,
            name: name,
            userIds: [],
            notes: [],
            active: true
        };

        candidates.push(hiringCompany);

        return hiringCompany;
    }

    return hiringCompaniesService;
}