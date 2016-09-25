angular.module('tps').factory('UserService', userService);

function userService(UsersConstants){
    var userService = {};

    userService.getAll = getAll;
    userService.getByUsername = getByUsername;
    userService.getById = getById;

    function getAll(){
        return UsersConstants.users;
    }

    function getByUsername(username){
        var users = UsersConstants.users;

        for(var i = 0; i < users.length; i++){
            if(username.toLowerCase() === users[i].username.toLowerCase()){
                return users[i];
            }
        }

        return null;
    }

    function getById(id){
        var users = UsersConstants.users;

        for(var i = 0; i < users.length; i++){
            if(id.toString() === users[i].id.toString()){
                return users[i];
            }
        }

        return null;
    }

    return userService;
}