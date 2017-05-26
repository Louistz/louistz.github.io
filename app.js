var blogs = [
    {title:"hello world",name:"hello-world",year:"2015",month:"11",day:"19",tag:["test","hello"]},
];



var app = angular.module('blogApp', ['ngRoute']);

app.controller("BlogCtrl",function($scope,$location){
     $scope.blogs = blogs;
     $scope.toDetail = function(blog){
         var url = "/blogs/" + blog.year +"/"+blog.month+"/"+blog.day+"/"+blog.name
         $location.path(url);
     }
});
app.controller("BlogDetailCtrl",function($scope,$routeParams){
    var year = $routeParams.year;
    var month = $routeParams.month;
    var day = $routeParams.day;
    var name = $routeParams.name;

    var url =  "/blogs/" + year +"/"+month+"/"+day+"/"+name+".html";
    console.log(url);
    $("#content").load(url);
});
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'blog-list.html',controller:"BlogCtrl"})
        .when('/blogs/:year/:month/:day/:name', {templateUrl: 'blog.html',controller:"BlogDetailCtrl"})
        .otherwise({redirectTo: '/'});
});

