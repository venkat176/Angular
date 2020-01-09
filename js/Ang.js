
var appVar = angular.module('formApp', []);
appVar.controller("formctrl", function ($scope, $http) {

    $http({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Countries')/items?$select=Countries",
        method: "GET",
        async: false,
        headers: { "Accept": "application/json;odata=verbose" }
    }).then(function (data) {
        var countries = data.data.d.results;
        $scope.listItems = countries;
        //console.log(countries);
    });

    $scope.submit = function () {

        $http({

            url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('angular%20list')/items",
            method: "POST",
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                //"X-HTTP-Method": "POST" 
            },
            data: JSON.stringify
                ({
                    __metadata:
                    {
                        "type": "SP.Data.Angular_x0020_listListItem"
                    },
                    'Title': $scope.fname,
                    'Last_x0020_Name': $scope.lname,
                    'CellPhone': $scope.mobilenum,
                    'Country': $scope.count,
                }),
        }).then(saveContact)
            .catch(function (message) {
                console.log("submit() error: " + message);
            });
        function saveContact(data) {
            // alert("Item Added Successfully");

            Swal.fire({
                icon: 'success',
                title: 'Good job',
                text: 'Your item has been successfully Created:)',
            }).then((result) => {
                window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";
            })

            //window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";

        }

    };

    $scope.cancel = function () {
        window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";
    };

});