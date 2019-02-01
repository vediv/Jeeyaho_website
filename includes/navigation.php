<!---<div class="w3-top header w3-hide-large" style="margin-bottom: 20px;">
    <a href=" javascript:void(0)" class="w3-left w3-hover-gray" onclick="w3_open()" style="z-index: 4;padding: 5px;left:0;top:0px; ">
    <i class="fa fa-2x fa-bars "></i></a><a href="<?php echo $baseUrl?>/home" class="logo-min logoMark">
    <img src="<?php echo $baseUrl?>/images/logo_header_lg.png"  class="img-responsive heightlogo"></a>
    <span id="notification-sm" class="w3-text-shadow"></span>
</div>-->

<div class=" w3-top header w3-hide-large w3-col s12 m12 l12 " style="top: -15px;"><br />
    <div class="w3-col s2 m2 l3 w3-left">
    <a href=" javascript:void(0)" class="w3-left w3-hover-gray" onclick="w3_open()" style="z-index: 4;padding: 5px;left:0;top:0px; ">
    <i class="fa fa-2x fa-bars "></i></a>
    </div>
      <div class="w3-col s3 m3 l3 w3-center">
        <a href="<?php echo $baseUrl?>/index" class=" logo-min logoMark" style="z-index: 6;padding: 5px;top:0px;" >
           <img src="<?php echo $baseUrl?>/images/logo_header_lg.png"  class="img-responsive heightlogo"></a>
     </div>

        <div class="w3-col s5 m5 l5 w3-right" style="left: 100px; display: inline-block">
        <a  class="w3-right w3-hide-large w3-search" title="Search">
                <form action="<?php echo $baseUrl?>/search" method="get">
                    <input type="search" name="searchtext" class="nav-search" value="<?php $search_request; ?>" style="border-radius: 0px;"  required/>
                    <button type="submit" class="nav-button"><i class="fa fa-search font-size1"></i></button>
                </form>
        </a>
        </div>


        <span id="notification-sm" class="w3-text-shadow"></span>
</div>

<div class="w3-top header  w3-hide-small w3-hide-medium" id="navBar">
    <div class="main-container" >
     <ul class="w3-navbar header-menu " id="navMain" >
    <!-- Hide right-floated links on small screens and replace them with a menu icon -->
          </ul>
          <div class="login-user-area w3-active" id="LEFT_MENU" style="text-transform: uppercase"></div>
          <!--<li style="color:white;"><a style="color:white; float:right;margin-top: -20px" href="javascript:" class="w3-right-align " onclick="login()"><i class="fa fa-user"></i> Login</a></li> -->
            </div>

</div>
          <!--<li style="color:white;"><a style="color:white; float:right;margin-top: -20px" href="javascript:" class="w3-right-align " onclick="login()"><i class="fa fa-user"></i> Login</a></li> -->


<!-- Side nave on small screens when clicking the menu icon -->
<nav class="w3-sidenav header w3-card-2 w3-animate-fromleft w3-hide-large header-menu mysidenav font10" style="display:none; z-index: 3;width:100%;position: fixed; margin-top: 13%; height: auto;" id="mySidenav">

</nav>

<!--<fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>-->
<style>
	.w3-white, .w3-hover-white:hover { color: #fff !important;
    background-color: transparent !important;}
</style>
<script>
if(sessionStorage.getItem("navMenu")!=null)
{
var obj=JSON.parse(sessionStorage.getItem("navMenu"));
buildMenu(obj,"navMain",pageName,loginStatus,Username);
}
</script>

  <script>
    var url="<?php echo "https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>";

/*
 document.getElementById('fbShare2').onclick = function() {
    alert('hello9');
    FB.ui({
    method: 'share',
    display: 'popup',
    href: url,
  }, function(response){});
}*/



/*
 function abcd() {
    //alert('hello9');
  FB.ui({
    method: 'share',
    display: 'popup',
    href: url,
  }, function(response){});
}*/



</script>

<style>
a.w3-btn:hover{color:#ff!important;background-color:#4867AA !important}
a.w3-button:hover{color:#fff!important;background-color:#4867AA !important}
    .abcRioButtonContents {
    font-family: "myFont";
    font-size: 14px!important;
    font-weight: normal;
    letter-spacing: .21px;
}
</style>


<div id="loginModal" class="w3-modal"   >
    <!--<div class="w3-modal-content w3-card-8 w3-animate-top" style="max-width:350px;">
    <div id="loginBody"></div>
   <div class="w3-col s12 l12 m12 w3-center" id="google_fb_container" style="background-image: url(<?php echo $baseUrl?>/loginbg1.jpg); background-position:61% -20%;">
      <p>OR</p>
        <div class="w3-left w3-text-white">
         <a href="javascript:void(0);" class="w3-btn w3-button w3-button1 fb w3-text-white   fbLogin" onclick="fbLogin()" id="fbLink" >
          <i class="fa fa-facebook w3-padding-medium " style=""></i>
          <span style="padding-left: -69px"> </span></a>
        </div>
        <div class="w3-right w3-text-white" style="margin-top: 8px; margin-right: 8px;"> <a  class="g-signin2"  data-onsuccess="onSignIn"><i class="fa fa-google-plus w3-padding-medium"></i></a></div>

     <div style="text-align:center !important;  padding-right:20px; margin-top: 37px;">
    <h3><span class="w3-text-white font-size"><a class="font-size padding-lft-new" href="javascript:" onclick="forgotPassword()">Forgot password?</a></span></h3>
   </div>

  </div>

    <div id="loginFooter"></div>
  </div>-->
  <div class="w3-modal-content w3-card-8 w3-animate-top" style="max-width:350px;">
  <div id="loginBody"></div>
 <div class="w3-col s12 l12 m12 w3-center" id="google_fb_container" style="background-image: url(<?php echo $baseUrl?>/loginbg1.jpg); background-position:61% -20%;">
    <p>OR</p>
    <div class="w3-col s12 l12 m12 w3-center" style="margin-left: 3px;">
      <!--<div class="w3-left w3-col s12 l4 m4 w3-text-white"> <a class="w3-btn w3-button w3-button1 fb w3-text-white   fbLogin" onclick="fbLogin()" id="fbLink" ><i class="fa fa-facebook w3-padding-medium " style=""></i><span style="padding-left: -69px"> </span></a></div>
      <div class="  w3-col s12 l4 m4 w3-text-white" style="margin-top: 8px;"> <a  class="w3-btn   w3-skyblue1 w3-button1"  data-onsuccess="onSignIn"><i class="fa fa-twitter" style="padding: 6px 13px!important;"></i></a></div>
      <div class="w3-right  w3-col s12 l4 m4 w3-text-white" style="margin-top: 8px;"> <a  class="g-signin2"  data-onsuccess="onSignIn"><i class="fa fa-google-plus w3-padding-medium"></i></a></div>-->
 <div style="text-align:center !important;  padding-right:20px; margin-top: 37px;">
  <h3><span class="w3-text-white font-size"><a class="font-size padding-lft-new" href="javascript:" onclick="forgotPassword()">Forgot password?</a></span></h3>
 </div>
 </div>
      <!--div class="w3-col s12 m12 l12"><center> <div id="g" ></div></center></div>-->
</div>

  <div id="loginFooter"></div>
 </div>
</div>
<script>
/*
 facebook login code
window.fbAsyncInit = function() {

    FB.init({
      appId      : '2254756181470508', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v3.2' // use graph api version 2.8
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
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});
}

function getFbUserData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture,mobile'},
    function (response) {
          var userEmail=response.email;
        var auth_uid=response.id;
        var authprovider="Facebook";
        var fname=response.first_name;
        //localStorage.setItem("userName",fname);
        var lname=response.last_name;
        var gender=response.gender;
        var locale=response.locale;
        var picture=response.picture.data.url;
        alert(userEmail+"--"+fname+"--"+lname+"--"+gender+"--"+locale+"--"+picture+"--"+auth_uid);
//userloginFB(userEmail,auth_uid,authprovider,fname,lname,gender,locale,picture);
});
}
Facebook login end*/
/* google login
function onSignIn(googleUser) {
var auth2 = gapi.auth2.getAuthInstance();
auth2.disconnect();
var profile = googleUser.getBasicProfile();
        var userEmail=profile.getEmail();
        var auth_uid=profile.getId();
        var authprovider="Google";
        var fname=profile.getName(); localStorage.setItem("userName",fname);
        var picture=profile.getImageUrl();
        userloginGoogle(userEmail,auth_uid,authprovider,fname,picture);
       //var auth2 = gapi.auth2.getAuthInstance();
       //auth2.signOut();

} */
</script>

<script>
var url="<?php echo "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>";

</script>
