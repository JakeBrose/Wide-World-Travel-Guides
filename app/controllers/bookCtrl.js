'use strict';


angular
    .module('wideWorld', [])
    .controller('bookCtrl', function($scope, $q, $http){
        $q((resolve, reject)=>{
            $http.get("data/guides.json")
                .then((booksArray)=>{
                    resolve(booksArray.data.guides);
            });
        })
        .then((books)=>{
            $scope.books = books;
        });
    });