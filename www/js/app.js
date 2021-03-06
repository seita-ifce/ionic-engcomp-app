// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('news', {
    url: '/news',
    templateUrl: 'views/news/news.html',
    controller: 'NewsController'
  })
  .state('get-started', {
    url: '/get-started',
    templateUrl: 'views/get_started/get_started.html'
  })
  .state('ementas', {
    url: '/ementas',
    abstract: true,
    templateUrl: 'views/ementa/ementas.html',
  })
  .state('ementas.antiga', {
    url: '/grade-antiga',
    views: {
      'grade-antiga-tab': {
        templateUrl: 'views/ementa/grade_antiga.html',
        controller: 'GradeAntigaController'
      }
    }
  })
  .state('ementas.nova', {
    url: '/grade-nova',
    views: {
      'grade-nova-tab': {
        templateUrl: 'views/ementa/grade_nova.html',
        controller: 'GradeNovaController'
      }
    }
  })
  .state('teachers', {
    url: '/teachers',
    templateUrl: 'views/teachers/teachers.html',
    controller: 'TeachersController'
  })
  .state('links', {
    url: '/links',
    templateUrl: 'views/links/links.html',
  })
  .state('labs', {
    url: '/labs',
    templateUrl: 'views/labs/labs.html'
  })
  .state('highlights', {
    url: '/highlights',
    templateUrl: 'views/highlights/highlights.html'
  })
  .state('yearbook', {
    url: '/yearbook',
    templateUrl: 'views/yearbook/yearbook.html'
  })
  .state('phones', {
    url: '/phones',
    templateUrl: 'views/phones/phones.html',
    controller: 'PhonesController'
  })
  .state('mails', {
    url: 'mails',
    templateUrl: 'views/mails/mails.html',
    controller: 'TeacherMailsController'
  })
  .state('about-ifce', {
    url: '/about-ifce',
    templateUrl: 'views/about/about_ifce.html'
  })
  .state('about-developers', {
    url: 'about-developers',
    templateUrl: 'views/about/about_developers.html'
  });

  $urlRouterProvider.otherwise('/get-started');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
