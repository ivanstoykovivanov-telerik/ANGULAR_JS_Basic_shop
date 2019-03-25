(function (){
    "use strict"; 

    app
        .controller("classifiedsCtrl", function($scope){
            // controller code here : 
            $scope.person = {
                first: "Ryan", 
                last: "Johnson", 
                job: "programmer"
            }; 

            $scope.message = "Hello world"; 
        }); 

})();