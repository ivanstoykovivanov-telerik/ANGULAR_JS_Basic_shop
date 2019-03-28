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


app.controller("controller1", function($scope, $http, itemsFactory, $mdSidenav){
    $scope.sideNavIsOpen = false; 
    $scope.showing = false; 
    $scope.showAdmin = true; 
    $scope.showContact = false; 
    $scope.editing = false; 

    const contact = {
      name: "Ivan Ivanov", 
      phone: "555-555-555", 
      email: "ivanstoykovivanov@gmail.com" 
    }

  itemsFactory.getItems()
    .then(function(data){     // the data coming back from the get request once the promise is resolved
      $scope.items = data.data;  
    });

  // $http.get('data/items.json')
  //   .then(function(data){     // the data coming back from the get request once the promise is resolved
  //     console.log(data.data);  
  //     $scope.items = data.data;  
  //   });

  $scope.openSidebar = function(){
    $mdSidenav('left').open(); 
  }; 

  $scope.closeSidebar = function(){
    $mdSidenav('left').close(); 
  }

  $scope.editItem = function(item){
    $scope.editing = true; 
    $scope.openSidebar(); 
    $scope.item =  item; 
  }

  $scope.saveEdit = function(){
    $scope.editing = false; 
    $scope.item = {}; 
    $scope.closeSidebar(); 
  }

  $scope.saveItem = function(item){
    if(item){
      item.contact = contact ;  
      $scope.items.push(item); 
      $scope.item = {};  
      $scope.closeSidebar(); 
    }
  }
  
  function showToast(message, delay){
    $mdToast.show(
      $mdToast.simple()
        .content(message)
        .position('top, right')
        .hideDelay(3000)
    )
  }
}) 
