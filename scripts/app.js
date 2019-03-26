// // USE Ctrl + F5 to refresh 
// console.log("Testing... ");

//  var app = angular.module("ngClassifieds", ["ngMaterial"]); 
// // angular.module("ngClassifieds", ["ngMaterial"])
// //     .config(function($mdThemingProvider){
// //         $mdThemingProvider.theme('default')
// //             .primaryPalette('teal')
// //             .accentPalette('orange'); 
// //     }) 
// // app.directive("helloWorld", function(){
// //         return {            // => directive definition object
// //            template: "<h1>Hello World</h1>"  
// //         }; 
// // }); 


// app.directive("w3TestDirective", function() {
//     return {
//         template : "<h1>Made by a directive!</h1>"
//     };
// });


var app = angular.module("myApp", ['ngMaterial', 'ngMessages']);



app.directive("helloWorld", function(){
    return{
        template:  "<h1> Hello World </h1>"
    };
}); 
 
app.directive("w3TestDirective", function() {
    return {
        template : "<h1> {{message}} </h1>"
    };
});


app.controller("controller1", function($scope, $http, itemsFactory){
  
  itemsFactory.getItems()
    .then(function(data){     // the data coming back from the get request once the promise is resolved
      console.log(data.data);  
      $scope.items = data.data;  
    });

  // $http.get('data/items.json')
  //   .then(function(data){     // the data coming back from the get request once the promise is resolved
  //     console.log(data.data);  
  //     $scope.items = data.data;  
  //   });


  $scope.person = {
        first: "Ryan", 
        last: "Johnson", 
        job: "programmer"
    }; 


    $scope.showing = false; 
    $scope.showAdmin = true; 
    $scope.showContact = false; 
    $scope.items = []; 

    $scope.message = "Hello world from the scope"; 
}) 
