angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('myprofile',{
        url:'/profile',
        templateUrl:'/views/myprofile.html',
        controller:'mainCtrl',
      })
      .state('findfriends',{
        url:'/findfriends',
        templateUrl:'/views/findfriends.html',
        controller:'mainCtrl',
      })
      .state('myfriends',{
        url:'/myfriends',
        templateUrl:'/views/myfriends.html',
        controller:'mainCtrl',
      })
      .state('updateprofile',{
        url:'/updateprofile',
        templateUrl:'/views/updateprofile.html',
        controller:'mainCtrl',
      })
      .state('friend',{
        url:'/myfriends/:id',
        templateUrl:'/views/friend.html',
        controller:'mainCtrl',
      })
      .state('nodata',{
        url:'/',
        templateUrl:'/views/nodata.html',
        controller:'mainCtrl',
      });

    $urlRouterProvider.otherwise('/');
  });
