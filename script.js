var cardData = [];


var app = angular.module("gitCards", []);

app.controller("gitController", function($scope, $http) {

  $scope.cards = cardData;

  $scope.getCard = function() {
    console.log('getCard');
    $http.get('http://points.agilelabs.com/' + $scope.cardSearch + '.json')
      .success(function(data) {
          // cardData.forEach(function(el, i, a) {
          //   console.log('stuff ' + el.id, data.id);
          // });
          cardData.push(data);
          console.log(data.id);
    }).error(function(data, err) {
      if (err === 404) {
        alert('Could not find user ' + $scope.cardSearch);        
      }
    });
  }
});