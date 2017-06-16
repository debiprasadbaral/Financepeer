
window.onLoadCallback = function(){
  gapi.auth2.init({
      client_id: '361478182709-kah21eubbeij1g70da5ilr5umr9hrob5.apps.googleusercontent.com'
    });
}
  auth2 = gapi.auth2.init({
       client_id: '361478182709-kah21eubbeij1g70da5ilr5umr9hrob5.apps.googleusercontent.com',
       fetch_basic_profile: false,
       scope: 'profile'
 });

    function onSignIn(googleUser) {
      //console.log("From js !");
    var profile = googleUser.getBasicProfile();
    //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //console.log('Name: ' + profile.getName());
    //console.log('Image URL: ' + profile.getImageUrl());
    //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //document.getElementById('guser').innerHTML="GOOGLE--ID:" + profile.getId()+"   Name:  "+ profile.getName()+"   Email: " + profile.getEmail()+"  pictureURL= "+profile.getImageUrl();
    var id=profile.getId();
   var name=profile.getName();
    var email=profile.getEmail();
    var pictureURL=profile.getImageUrl();


    //var my_array=[id,name,email,pictureURL];
    var my_array={id:id,name:name,email:email,pictureURL:pictureURL};


    console.log("hello from google js --");
    console.log("id="+my_array.id+"  name="+my_array.name+" email="+my_array.email+"picture="+my_array.pictureURL);
    //console.log("id="+my_array[0]+"  name="+my_array[1]+" email="+my_array[2]+"picture="+my_array[3]);
  }


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
