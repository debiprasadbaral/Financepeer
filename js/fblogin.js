
var array=["id","name","email","picture"];

window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : '831797190304459', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });

    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};

// Load the JavaScript SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK

function fbLogin(){
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            //document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});

     //data: JSON.stringify({"id":"test","name":"test","2nd":"test","3rd":"test"}),
       // dataType: 'json',

    $.ajax({
        async: true,
        type: "POST",
        url: "data.py",
        data: {mymode: "seton", myitem: "myid"},
        dataType: 'html',
        success : function(data) {
            document.getElementById("ajaxAnchor").innerHTML = "Exported data to DB table"
            alert("Hello")
        },
        error:function()
            {alert('ERROR!')}

    });

}

// Fetch the user profile data from facebook
function getFbUserData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
        document.getElementById('facebook_login').setAttribute("onclick","fbLogout()");
        document.getElementById('facebook_login').innerHTML = 'logout';
      //  document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.first_name + '!';
        //document.getElementById('userData').innerHTML = '<p><b>FB ID:</b> '+response.id+'</p><p><b>Name:</b> '+response.first_name+' '+response.last_name+'</p><p><b>Email:</b> '+response.email+'</p><p><b>Gender:</b> '+response.gender+'</p><p><b>Locale:</b> '+response.locale+'</p><p><b>Picture:</b> <img src="'+response.picture.data.url+'"/></p><p><b>FB Profile:</b> <a target="_blank" href="'+response.link+'">click to view profile</a></p>';
        var id=response.id;
        var first_name=response.first_name;
        var last_name=response.last_name;
        var email=response.email;
        var pictureUrl=response.picture.data.url;

        //array={"id":"test","name":"test","2nd":"test","3rd":"test"};

        my_array=[response.id,response.first_name,response.email,response.picture.data.url];

        //document.getElementById('fbuser').innerHTML= "FB-- id="+id+"  name="+first_name+" email="+email+"picture="+pictureUrl;
        console.log("hello from js");
        console.log("id="+my_array[0]+"  name="+my_array[1]+" email="+my_array[2]+"picture="+my_array[3]);


      //document.getElementById('').innerHTML= "id="+id+"  name="+name+" email="+email+"picture="+pictureUrl;
    });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('facebook_login').setAttribute("onclick","fbLogin()");
        document.getElementById('facebook_login').innerHTML = '<i class="fa fa-facebook fa-fw"></i>';
        //document.getElementById('userData').innerHTML = '';
        //document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
    });
}
