angular.module('tps').factory('StaffingRequestsService', staffingRequestsService);

function staffingRequestsService(StaffingRequestsConstant){
    var staffingRequestService = {};

    staffingRequestService.getAll = getAll;
    staffingRequestService.getById = getById;
    staffingRequestService.create = create;

    var staffingRequests = StaffingRequestsConstant.staffingRequests;

    function getAll(){
        return staffingRequests;
    }

    function getById(id){
        for(var i = 0; i < staffingRequests.length; i++){
            if(id.toString() === staffingRequests[i].id.toString()){
                return staffingRequests[i];
            }
        }

        return null;
    }

    function create(companyObj, hiringUserObj, skillKeywordsArr, notesArr){
        var id = 1000;

        for(var i = 0; i < staffingRequests.length; i++){
            id = Math.max(id, staffingRequests[i].id + 1);
        }

        staffingRequests.push({
            id: id,
            company: companyObj,
            hiringUser: hiringUserObj,
            active: true,
            skillKeywords: skillKeywordsArr,
            notes: notesArr,
            created: new Date()
        });
    }

    return staffingRequestService;
}