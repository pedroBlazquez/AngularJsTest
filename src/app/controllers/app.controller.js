(function(){
  angular.module('app')
    .controller('myController',myController);

    myController.$injector = ['$scope'];

    function myController ($scope) {
      $scope.saludar = 'Hola';
    }
})();
