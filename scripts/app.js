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


app.controller("controller1", function($scope){
    $scope.person = {
        first: "Ryan", 
        last: "Johnson", 
        job: "programmer"
    }; 


    $scope.showing = false; 
    $scope.showAdmin = true; 
    $scope.showContact = false; 
    $scope.items = [
            {
              "id":"1",
              "title":"20 Foot Equipment Trailer",
              "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
              "price":6000,
              "posted":"2015-10-24",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Vehicles",
                "Parts and Accessories"
              ],
              "image": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Caravan.jpg",
              "views":213
            },
            {
              "id":"2",
              "title":"Canada Goose Jacket",
              "description":"Red woman's Canada Goose Montebello jacket. It was used for two seasons. This jacket retails for $745. The jacket has been professionally cleaned since it was last worn by anyone.",
              "price": 500,
              "posted": "2015-10-28",
              "contact": {
                "name": "Jane Doe",
                "phone": "(555) 555-5555",
                "email": "janedoe@gmail.com"
              },
              "categories": [
                "Clothing"
              ],
              "image":"http://canadagoose-jacket.weebly.com/uploads/9/2/3/3/9233177/9087323_orig.jpg",
              "views":422
            },
            {
              "id":"3",
              "title":"Baby Crib and Matress",
              "description":"Good condition.",
              "price":50,
              "posted":"2015-10-27",
              "contact": {
                "name":"Jane Doe",
                "phone":"(555) 555-5555",
                "email":"janedoe@gmail.com"
              },
              "categories":[
                "Furniture"
              ],
              "image":"http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Nat_V1/$web_setitem$/1308310657/andersen-crib-maple.jpg",
              "views":23
            },
            {
              "id":"4",
              "title":"Leather Sofa",
              "description":"Brown leather sofa for sale.  Good condition but small tear on one cushion.",
              "price":250,
              "posted":"2015-11-01",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Furniture"
              ],
              "image":"https://images.homedepot-static.com/productImages/dbbdf272-e3b1-46b8-a8ca-b828868fc82a/svn/chocolate-homesullivan-sofas-loveseats-409616brw-3-64_1000.jpg",
              "views":77
            },
            {
              "id":"5",
              "title":"MacBook Air",
              "description":"2013 MacBook Air. Great condition, but a few scratches.",
              "price":1150,
              "posted":"2015-11-02",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Electronics",
                "Computer Parts and Accessories"
              ],
              "image":"http://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg?retina",
              "views":889
            },
            {
              "id":"6",
              "title":"2008 Dodge Caliber",
              "description":"Battery blanket and block heater installed. Winter tires, good tread left are on the car currently. Car comes with 4 summer tires with also good treads left. Hydraulic power steering fluid line installed so this won't break on you in the cold Yellowknife winters! Synthetic oil used, good for 1000+ more KMs. AC/Sunroof/power doors/steering, CD player/radio. Red accented dash and upolstry.",
              "price":4800,
              "posted":"2015-11-03",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Vehicles",
                "Cars"
              ],
              "image":"http://images.buysellsearch.com/image/orig/8dfc4f6c5d411130d19dedd28d61bc2b/2009-dodge-caliber-se.jpg",
              "views":423
            }
          ]; 

    $scope.message = "Hello world from the scope"; 
}) 
