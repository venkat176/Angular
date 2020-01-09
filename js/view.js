var appVar = angular.module('formApp', []);
var urlId = window.location.href.split('&')[0].split('=')[1];

appVar.controller("formctrl", function ($scope, $http) {

    $http({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('angular%20list')/items?$select=Title,Last_x0020_Name,CellPhone,Country&$filter=ID eq '" + urlId + "'",
        method: "GET",
        async: false,
        headers: { "Accept": "application/json;odata=verbose" }
    }).then(function (data) {

        /*$('#getFname').val(data.data.d.results[0].Title);
        $('#getLname').val(data.data.d.results[0].Last_x0020_Name);
        $('#getMobile').val(data.data.d.results[0].CellPhone);
        $('#getCount').val(data.data.d.results[0].Country); */

        var countries = data.data.d.results;
        $scope.getFname = data.data.d.results[0].Title;
        $scope.getLname = data.data.d.results[0].Last_x0020_Name;
        $scope.getMobile = data.data.d.results[0].CellPhone;
        $scope.getCount = data.data.d.results[0].Country;
        console.log(countries);
    });

    $scope.cancel = function () {
        window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";
    };


});