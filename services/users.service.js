angular.module('tps').factory('UserService', userService);

function userService(UsersConstants){
    var userService = {};

    userService.getAll = getAll;

    function getAll (){
        return UsersConstants.users;
    }

    return userService;
}