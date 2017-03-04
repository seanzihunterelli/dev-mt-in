angular.module('myApp').controller('mainCtrl', function($scope, $stateParams, mainService){
  // $scope.newProfile = {};
  $scope.updatedProfile = function(){

    $scope.myProfile = mainService.updateProfile($scope.newProfile);
    
    // if(mainService.updateProfile(newProfile)){
    //   $scope.fullname = '';
    //   $scope.tagline = '';
    //   $scope.imageurl = '';
    //   $scope.bio = '';
    // }
  };
  $scope.myProfile = mainService.getMyProfile();

  $scope.myFriends = mainService.getFriends();



});
