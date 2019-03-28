var app = angular.module("myApp", ['ngMaterial', 'ngMessages', 'ui.router']);

// app.config(function($stateProvider){
//   $stateProvider
//     .state('stateone', {
//       url: '/stateone', 
//       template: '<h1>State One</h1>'
//     })
//     .state('statetwo', {
//       url: '/statetwo',
//       template: '<h1>State Two</h1>'
//     })
// }); 

app.config(function($stateProvider) {
  
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>HELLO</h3>'
  }
  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>ABOUT</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  console.log("IN");
});


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


app.controller("controller1", function($scope, $http, itemsFactory, $mdSidenav, $mdDialog){
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

  $scope.deleteItem = function(event, item){
    let confirm = $mdDialog.confirm()
      .title(`Are you sure you want to delete ${item.name}? `)
      .ok('Yes')
      .cancel('No')
      .targetEvent(event); 
     
      $mdDialog.show(confirm).then(function(){
        let index = $scope.items.indexOf(item)
        $scope.items.splice(index, 1); 
      }, function(){
        $scope.status
      }); 
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
