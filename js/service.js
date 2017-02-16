angular.module('myApp').service('mainService', function(){
  var myFriends = [];
  var myProfile = {};

  this.getMyProfile = function (){
    return myProfile;
  };

  this.updateProfile = function (newProfile){
    console.log(newProfile);
    if (newProfile && (newProfile.fullname && newProfile.tagline && newProfile.imageurl && newProfile.bio)) {
      // Object.assign(myProfile, newProfile);
      myProfile = newProfile;
      console.log(myProfile);
      return myProfile;
    }
    else {
      swal({
        title: "Hey! Listen!",
        text: "You can't submit an incomplete profile!",
        imageUrl: "http://images.uncyc.org/pt/9/9c/Navi.gif",
        confirmButtonText: "Ok"
      });
      return false;
    }
  };

});
