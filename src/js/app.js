'use strict';

angular.module('app', ['app2', 'app3']);
angular.module('app2', []);
angular.module('app3', []);

angular.module('app2').controller('Controller1', function ($scope) {
  $scope.name = 'Controller 1 in App2';
})

angular.module('app3').controller('Controller1', function ($scope) {
  $scope.name = 'Controller 1 in App3';
})

// var angular = require('angular');
// require('angular-cookies');

// var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
//   .config(function ($routeProvider) {
//
//     $routeProvider.when('/newEvent',
//       {
//         templateUrl: '/templates/NewEvent.html',
//         controller: 'EditEventController'
//       }
//     );
//     $routeProvider.otherwise({redirectTo: '/events'});
//   });

// CONTROLLERS ----------------------------------------------------------------
// require('./controllers/EventController');


// DIRECTIVES -----------------------------------------------------------------
// require('./directives/collapsible');


// FILTERS --------------------------------------------------------------------
// require('./filters');


// SERVICES -------------------------------------------------------------------
// require('./services/calendarHelper');
