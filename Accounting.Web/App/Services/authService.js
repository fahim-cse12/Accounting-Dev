app.factory('authService', ['httpService', '$rootScope', function (httpService, $rootScope) {
    var authService = {};

    authService.currentUserInfo = null;
    var authStatus = "Pending";

    authService.authorization = function () {
        if (authStatus === "Pending") {
            authStatus = "InProgress";
            localStorage.setItem("currentUserInfo", null);
            httpService.post('/api/Users/AuthorizeUser', null).then(function success(response) {
                if (response.data != null) {
                    authService.currentUserInfo = response.data;
                    //$rootScope.haveAdminPrivileges = response.data.admin;

                    localStorage.setItem("currentUserInfo", JSON.stringify(authService.currentUserInfo));

                    ///
                    if ($route.current.action) {
                        if ($route.current.action == "master") {
                            var currUser = null;
                            httpService.post("/api/Users/CheckAdminPrivilege", authService.currentUserInfo).then(
                                function success(response) {
                                    if (response.data.output == null) {
                                        $location.path('/');
                                        //alert("You don't have access here");
                                        swal("Access Denied!", "You don't have access here", "info");
                                    }
                                }, function error() {
                                    swal("Something went wrong!", "Error!!!", "error");
                                }

                            );
                            //if (authService.getCurrentUser != null) {

                            //} else {
                            //    $location.path('/');
                            //    //alert("You don't have access here");
                            //    swal("Access Denied!", "You don't have access here", "info");
                            //}
                        }
                    }

                    authStatus = "Completed";

                }
            }, function error(response) {
                //alert(response.data);
                console.log(response.data);
            });
        }
        //alert(JSON.stringify(currentUserInfo));
    }

    authService.getCurrentUser = function () {
        if (localStorage.getItem("currentUserInfo") != null) {
            authService.currentUserInfo = localStorage.getItem("currentUserInfo");
            return JSON.parse(localStorage.getItem("currentUserInfo"));
        }
        return null;
    }

    return authService;
}]);
