(app.controller("homeCtrl", ["$rootScope", "$scope", "authService", "queryStringService", "authSettingService", '$route'
    , function ($rootScope
        , $scope
        , authService
        , queryStringService
        , authSettingService
        , $route) {

        $rootScope.currentUser = null;
        $rootScope.sPHostUrl = null;
        $rootScope.haveAdminPrivileges = true;

        $scope.actionUrls = {
            home: "/",
            task: null,
            viewItService: "/itService/view",
            myItServiceApproval: "/itService/MyApprovalView",
            itService: "/itService/request",
            adminviewItService: "/itService/admin",
            viewOda: "/ODA/view",
            myODAApproval: "/ODA/MyApprovalView",
            oda: "/ODA/request",
            adminviewOda: "/ODA/admin",
            travelPlan: "/TravelPlan/request",
            mytravelPlanApproval: "/Travel/MyApprovalView",
            travelPlanView: "/TravelPlan/view",
            travelPlanAdminView: "/TravelPlan/admin",
            travelClaim: "/TravelClaim/request",
            travelClaimView: "/TravelClaim/view",
            mytravelClaimApproval: "/TravelClaim/MyApprovalView",
            travelClaimAdminView: "/TravelClaim/adminview",
            delegationUser: "/Delegation/request",
            interRequisition: "/InternRequisition/request",
            interRequisitionView: "/InternRequisition/view",
            bulkApproval: "/Task/BulkApproval",
            interRequisitionAdminView: "/admin/InternRequisition/adminview",
            workFlowInformation: "/workFlowInformation/Information",
            //CherishSIM
            cherishSimRequisition: "/cherishsim/requisition",
            cherishSimMyRequest: "/cherishsim/myrequest",
            cherishSimAdminAllRequest: "/cherishsim/admin",
            cherishSimMIISDNAdminAllRequest: "/cherishsim/admindetail",
            cherishSimReconciliation: "/cherishsim/reconciliation",
            //TestSIM
            testAndSpecialSimRequisition: "/testspecial/requisition",
            testAndSpecialSimMyRequest: "/testspecial/myrequest",
            testAndSpecialSimAllRequest: "/testspecial/admin",
            testAndSpecialSimSCMView: "testspecial/scmteam",
            testAndSpecialSimWarehouseView: "/testspecial/warehouse",
            testAndSpecialSimB2BView: "/testspecial/b2b",
            testAndSpecialSimInitiatorView: "/testspecial/initiator",
            testAndSpecialSimReports: "/testspecial/livesimreport",

            accessManagementRequest: "/accessrequest/request",
            accessManagementMyRequest: "/accessrequest/myrequest",
            accessManagementAdminView: "/accessrequest/adminpanel"
        };

        $rootScope.adminUrls = {
            admin: "/admin",
            workflowConfiguration: "/master/configuration",
            workflowConfigurationV1: "/master/configurationV1",
            approvalMapping: "/master/approvalMapping",
            productMapping: "/master/MapProduct",
            department: "/master/department",
            product: "/master/product",
            ///delegationUser: "/master/delegation",
            role: "/master/role",
            category: "/master/category",
            facilityLocation: "/master/facilityLocation",
            coordinator: "/master/coordinator",
            division: "/master/division",
            scheduleEmailReceiver: "/master/ScheduleEmailReceiver",
            currency: "/master/currency",
            expenseType: "/master/expenseType",
            travelRequiredFor: "/master/travelRequiredFor",
            adminUser: "/master/adminUser",
            iTUserAccessApplicationRole: "/master/iTUserAccessApplicationRole",
            iTSystemName: "/master/iTSystemName",
            UserAccess: "/master/UserAccess",
            itAllocationType: "/master/AllocationType",
            itEmployeeType: "/master/EmployeeType",
            itJobLoaction: "/master/JobLocation",
            itJobLocationFloor: "/master/JobLocationFloor",
            employeeBand: "/master/EmployeeBand",
            pmoUser: "/master/pmoUser",
            productCategory: "/master/productCategory",
            subCaterory: "/master/subCategory"

        };

        var getCurrentUser = $scope.$watch(function () {
            $rootScope.currentUser = authService.getCurrentUser();
            if ($rootScope.currentUser != null) {
                console.log($rootScope.currentUser);
                getCurrentUser();
            }
        }, true);

        $scope.HomeOnInit = function () {
            try {
               // $scope.actionUrls.task = authSettingService.authAccess.sharePointUrl + "/SitePages/WorkflowInbox.aspx";

                var result = queryStringService.getFilters({ SPHostUrl: null });
                if (result.SPHostUrl !== null && result.SPHostUrl !== "") {
                    $rootScope.sPHostUrl = result.SPHostUrl;

                    $scope.actionUrls.home += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.viewItService += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.itService += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.adminviewItService += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.viewOda += "?SPHostUrl=" + result.SPHostUrl
                    $scope.actionUrls.oda += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.adminviewOda += "?SPHostUrl=" + result.SPHostUrl;

                    $scope.actionUrls.travelPlan += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.travelPlanView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.travelPlanAdminView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.travelClaim += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.travelClaimView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.travelClaimAdminView += "?SPHostUrl=" + result.SPHostUrl;

                    $scope.actionUrls.interRequisition += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.interRequisitionView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.interRequisitionAdminView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.myODAApproval += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.myItServiceApproval += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.mytravelPlanApproval += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.mytravelClaimApproval += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.bulkApproval += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.delegationUser += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.workFlowInformation += "?SPHostUrl=" + result.SPHostUrl;

                    $scope.actionUrls.cherishSimRequisition += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.cherishSimMyRequest += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.cherishSimAdminAllRequest += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.cherishSimMIISDNAdminAllRequest += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.cherishSimReconciliation += "?SPHostUrl=" + result.SPHostUrl;


                    $scope.actionUrls.testAndSpecialSimAllRequest += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.testAndSpecialSimAllRequest += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.testAndSpecialSimAllRequest += "?SPHostUrl=" + result.SPHostUrl;

                    $scope.actionUrls.testAndSpecialSimSCMView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.testAndSpecialSimWarehouseView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.testAndSpecialSimB2BView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.testAndSpecialSimInitiatorView += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.testAndSpecialSimReports += "?SPHostUrl=" + result.SPHostUrl;

                    $scope.actionUrls.accessManagementRequest += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.accessManagementMyRequest += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.actionUrls.accessManagementAdminView += "?SPHostUrl=" + result.SPHostUrl;

                    $scope.adminUrls.admin += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.workflowConfiguration += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.workflowConfigurationV1 += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.approvalMapping += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.department += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.role += "?SPHostUrl=" + result.SPHostUrl;
                    ////$scope.adminUrls.delegationUser += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.productMapping += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.product += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.categorySubcaterory += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.coordinator += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.division += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.scheduleEmailReceiver += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.itAllocationType += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.itEmployeeType += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.itJobLoaction += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.itJobLocationFloor += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.facilityLocation += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.employeeBand += "?SPHostUrl=" + result.SPHostUrl;

                    $scope.adminUrls.adminUser += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.iTUserAccessApplicationRole += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.iTSystemName += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.UserAccess += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.currency += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.expenseType += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.travelRequiredFor += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.pmoUser += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.productCategory += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.category += "?SPHostUrl=" + result.SPHostUrl;
                    $scope.adminUrls.subCaterory += "?SPHostUrl=" + result.SPHostUrl;
                }

            } catch (e) {
                //alert("OnInit " + e);
                swal("Something went wrong!", response.data.message, "error");
            }
        }

        $rootScope.replaceUrl = function (url, paramter, value) {
            var n = url.includes("?");
            if (n)
                return url + "&" + paramter + "=" + value;
            else
                return url + "?" + paramter + "=" + value;
        };
        $scope.$watch(function () {
            return ($route.current && $route.current.css) ? $route.current.css : '/app/appcontent/home.css';
        },
            function (value) {
                $scope.css = value;
            });

    }]));