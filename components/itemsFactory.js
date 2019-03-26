(function(){
    "user strict"; 

    angular
        .module("myApp")
        .factory("itemsFactory", function($http){
            function getItems(){
                return $http.get('data/items.json'); 
            }

            return {
                getItems: getItems
            }
        })
})(); 