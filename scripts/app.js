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


var app = angular.module("myApp", []);



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


app.controller("controller1", function($scope){
    $scope.person = {
        first: "Ryan", 
        last: "Johnson", 
        job: "programmer"
    }; 
    $scope.message = "Hello world from the scope"; 
}) 
