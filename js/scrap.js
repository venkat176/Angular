$http({  
		url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('angular%20list')/items?$select=Title,Last_x0020_Name,CellPhone,Country&$filter=ID eq '"+urlId+"'",   
        method: "GET",  
        async: false,
        headers: { "Accept": "application/json;odata=verbose" }  
    }).then(function (data)  
    {  
        var countries = data.data.d.results;  
         $scope.getFname = data.data.d.results[0].CellPhone;
         $scope.getLname = data.data.d.results[0].Country;
         $scope.getMobile = data.data.d.results[0].Last_x0020_Name;
         $scope.getCount = data.data.d.results[0].Title;
        console.log(countries);
     });

var appVar = angular.module('formApp',[]);
appVar.controller("formctrl", function($scope, $http){    
     
	$http({  
		url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Countries')/items?$select=Countries",   
        method: "GET",  
        async: false,
        headers: { "Accept": "application/json;odata=verbose" }  
    }).then(function (data)  
    {  
        var countries = data.data.d.results;   
        $scope.listItems = countries;
        //console.log(countries);
     });     
    
$scope.submit = function() {

       //alert('clicked');
      
  $http({
                
            url:_spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('angular%20list')/items",
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
			        'Title':$scope.fname,
			        'Last_x0020_Name':$scope.lname,
			        'CellPhone':$scope.mobilenum,
			        'Country':$scope.count,       
				}),
                }).then(saveContact) 
		           .catch(function (message) {
                    console.log("submit() error: " + message);
                });
                function saveContact(data) {
                    alert("Item Added Successfully");
                    //return data.data.d;
			          
                 } 
		      		            
        };
		      		            
         
        
	$scope.cancel = function() {
		 window.location.href = "https://xentechn.sharepoint.com/sites/Registration/Lists/angular%20list/AllItems.aspx";
 	    };
 	
  });





/*function createItem($scope, $http){

		/* var data = {
        __metadata: { "type": "SP.Data.Contacts_x0020_ListListItem" },
        Title: "Some title"};

	      $http({
                
            url:_spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('angular%20list')/items",
            method: "POST",  
            headers: {  
                "Accept": "application/json;odata=verbose",  
                "Content-Type": "application/json;odata=verbose",  
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                "X-HTTP-Method": "POST"  
                },  
     
                data: JSON.stringify({
			        __metadata: { "type": "SP.Data.Angular_x0020_listListItem" },
			        Title: $scope.fname,
			        Last_x0020_Name:$scope.lname,
			        CellPhone:$scope.mobilenum,
			        Countries:$scope.count
				        
				}).then(function(response) {  
		            alert("success");  
		        }, function(response) {  
		            alert("failed");  
		        });
		    }*/
				        
                 
            

//var spApp= angular.module('list-module', []);     
//spApp.controller('list-controller', function($scope, $http){ 

/*function GetListItems($scope, $http){     
    $http({  
		url: _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getbytitle('Countries')/items", //assuming web part is added on same site :)   
        method: "GET",  
        headers: { "Accept": "application/json;odata=verbose" }  
    }).success(function (data) //got the result successfully  
    {  
        var dataResults = data.d.results; // List Items  
        $scope.listitems = dataResults;   
    })  
          .error(function (data, status, headers, config) // got the error  
          {     
                alert("error"); //ToDo:Display proper error message/Stack Trace/ Status Code  
        });     
}  
}).success(function(data, status, headers, config) {
                alert("updated");
                }).error(function(data, status, headers, config) {
                alert("Error! The  data cannot be updated.");
             });*/
/*function GetListItems($scope, listName){    
    $.ajax({    
        url: "/_api/web/lists/GetByTitle('"+listName+"')/items?$select=Countries",    
        method: "GET",    
        async: false,    
        headers: { "Accept": "application/json;odata=verbose" },    
        success: function(data){    
            $scope.items = data.d.results;
            console.log(items);    
        },    
        error: function(sender,args){    
            console.log(args.get_message());    
        }    
    });   
}   */  


       /*var firstname = $('#fname').val();
       var lastname = $('#lname').val();
       var phNumber = $('#mobilenum').val();
       var country = $('#count').val();
       var isValid = true;
       
       if (firstname.length < 1) {
         $('#fname').after('<span class="error">This field is required*</span>');
         isValid = false;
      }
      
      if (lastname.length < 1) {
          $('#lname').after('<span class="error">This field is required*</span>');
          isValid = false;
      }
      
      if (phNumber.length < 1) {
      		$('#mobilenum').after('<span class="error">This field is required*</span>');
      		isValid = false;
      }	
      
	  if (country == undefined) {
      		$('#count').after('<span class="error">This field is required*</span>');
      		isValid = false;
      }	
      
      if (firstname.length >1 && !(/^[A-Za-z]+$/.test(firstname))) {
          $('#fname').after('<span class="error">Please enter valid text in first name</span>');
          isValid = false;
      }	
      		
       if (lastname.length >1 && !(/^[A-Za-z]+$/.test(lastname ))) {
          $('#lname').after('<span class="error">Please enter valid text in last name</span>');
          isValid = false;
      }
		
	  if (phNumber.length >=1 && !(/^\d{10}$/.test(phNumber))) {
         $('#mobilenum').after('<span class="pherror">Please enter valid phone number</span>');
         isValid = false;
      }

	  if(isValid){*/
