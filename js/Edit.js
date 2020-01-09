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
		$scope.fname = data.data.d.results[0].Title;
		$scope.lname = data.data.d.results[0].Last_x0020_Name;
		$scope.mobilenum = data.data.d.results[0].CellPhone;
		$scope.count = data.data.d.results[0].Country;
		console.log(countries);
	});

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

	$scope.update = function () {

		//alert('clicked');

		$http({
			url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('angular%20list')/items(" + urlId + ")",
			method: "POST",
			headers: {
				"Accept": "application/json;odata=verbose",
				"Content-Type": "application/json;odata=verbose",
				"X-RequestDigest": $("#__REQUESTDIGEST").val(),
				"X-HTTP-Method": "MERGE",
				"If-Match": "*"
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
			//alert("Item updated Successfully");
			//return data.data.d;
			Swal.fire({
				icon: 'success',
				title: 'Good job',
				text: 'Your item has been successfully Updated:)',
			}).then((result) => {
				window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";
			})

		}

	};

	$scope.remove = function () {

		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
		}).then((result) => {
			if (result.value) {
				removeItem($scope, $http);
				swalWithBootstrapButtons.fire(
					'Deleted!',
					'Your item has been deleted.',
					'success'
				).then((result) => {
					window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";
				})
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				swalWithBootstrapButtons.fire(
					'Cancelled',
					'Your imaginary item is safe :)',
					'error'
				)
			}
		})

	};

	$scope.cancel = function () {
		window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";
	};

});


function removeItem($scope, $http) {

	$http({
		url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('angular%20list')/items(" + urlId + ")",
		method: "DELETE",
		headers: {
			"Accept": "application/json;odata=verbose",
			"Content-Type": "application/json;odata=verbose",
			"X-RequestDigest": $("#__REQUESTDIGEST").val(),
			"X-HTTP-Method": "DELETE",
			"If-Match": "*"
		},
	}).then(saveContact)
		.catch(function (message) {
			console.log("submit() error: " + message);
		});
	function saveContact(data) {
		//alert("Item dealeted Successfully");
		//return data.data.d;
		//window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";

	}

}
