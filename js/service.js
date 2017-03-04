angular.module('myApp').service('mainService', function(){
  var myFriends = [
    {
    fullname:'Michael Scott',
    tagline: 'You miss all the shots you don\'t take - Michael Scott',
    bio: '',
    imageurl: 'images/michael.jpg'
    },
    {
    fullname:'Jim Halpert',
    tagline: 'Um, whatever?',
    bio: '',
    imageurl: 'images/jim.jpg'
    },
    {
    fullname:'Dwight Schrute',
    tagline: 'Public safety is not a joke',
    bio: '',
    imageurl: 'images/dwight.jpg'
    },
    {
    fullname:'Stanley Hudson',
    tagline: 'Is it 5pm yet?',
    bio: '',
    imageurl: 'images/stanley.jpg'
    },
    {
    fullname:'Pam Beesly',
    tagline: 'I love Jim',
    bio: '',
    imageurl: 'images/pam.jpg'
    },
    {
    fullname:'Andy Bernard',
    tagline: 'The \'nard dog',
    bio: '',
    imageurl: 'images/andy.jpg'
    }
    ];
  var myProfile = {};

  this.getFriends = function(){
    return myFriends;
  };

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
