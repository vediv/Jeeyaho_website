function authenticate()
{

              var userEmail=$("#login_email").val();
              var UserPass=$("#loginpassword").val();

                     //var pass=CryptoJS.AES.encrypt(UserPass, "useonlymysecretkeyonplanetcast17");
//pass=encodeURI("V9ZIdwnoCQnD4mg+XuaDyQ==");
                       // alert(pass);
                       //userlogin(userEmail,pass);



                if(!inputValidation("email",userEmail))
               {

               _("login_fail").innerHTML="<span class='  class='w3-center error-msg font-size1 required mail-font'>Please enter valid email id.</span>";
               $("#login_email").focus();
               return false;
              }
                  $.ajax({
                 url: baseUrl+"/config/login_core.php",
                data:'userpassword='+UserPass+'&loginType=passencrypt',
                 type: "POST",
                  success:function(encryptPass){
                   userlogin(userEmail,encryptPass);
               },
               error:function (){}
                 });


}




function requestPassReset()
{


    var newpass=$("#newpass").val();
    var cnfpass=$("#cnfpass").val();
    var userEmail=$("#userEmail").val();
    var userId=$("#userId").val();
    var Container = "submitNewPass";_(Container).innerHTML="";

    var passFormat=CheckPassword(newpass);
    if(!passFormat)
    {

        _(Container).innerHTML="<span class='w3-text-red  mail-font error-msg font-size1'>Password must contain(uppercase,digit,special) <br /> alphanumeric 8 to 32 characters. </span>";
        $("#newpass").focus();
        return false;
    }
         if(newpass!=cnfpass){_(Container).innerHTML="<p class='w3-text-red error-msg font-size1'>Enter same password in both fields</p>";return false;}


                $.ajax({
                url: baseUrl+"/config/login_core.php",
data:'userpassword='+newpass+'&loginType=passencrypt',
              type: "POST",
              success:function(encryptPass){
SubmitNewPassword(userId,userEmail,encryptPass,Container);
               },
               error:function (){}
                 });


}

function NewPassSubmitted(JSONobject, Container)
{
    var status=JSONobject.status;
    var Message=JSONobject.Message;
    switch(status)
    {
        case "0":case 0:
            _(Container).innerHTML="<p class='w3-text-red error-msg font-size1'>"+Message+"</p>";
            break;
        case "2":case 2:
                    _(Container).innerHTML="<p class='w3-text-red error-msg font-size1'>"+Message+"</p>";
        break;
        case "1":case 1:
            _(Container).innerHTML="<p class='w3-text-green succ-msg font-size1'>"+Message+"</p><p class=''><button onclick=login() class='adore-btn btn-sm'>Login</button></p>";
            break;
    }
}

function userlogin(userEmail,userpassword,authprovider,type,os,uuid,name)
{

     var Container = "login_fail";
          var pass=userpassword.trim();

          var type=deviceType; name=user_browser;os=user_os;authprovider='Application';
          var uuid=localStorage.getItem('uniqid');
          var apiBody='partnerid='+PARTNER_ID+'&userEmail='+userEmail+'&userpassword='+pass+'&authprovider='+authprovider+'&type='+type+'&os='+os+'&uuid='+uuid+'&name='+name+'&country='+countrycode;
          //var apiBody='partnerid='+PARTNER_ID+'&userEmail='+userEmail+"&userpassword="+pass+'&authprovider='+authprovider+'&type='+type+'&country='+countrycode;

     runAjax(GET_LOGIN, apiBody, Container);
}

function userloginFB(userEmail,auth_uid,authprovider,age,lname,gender,type,os,uuid, name)
 {
         var Container = "login_fail";
         var pass=userpassword.trim();
          type=deviceType; name=user_browser;os=user_os; uuid=token;authprovider='Facebook';
         var apiBody='partnerid='+PARTNER_ID+'&userEmail'+userEmail+'&authuid='+auth_uid+'&authprovider='+authprovider+'&age='+age+'&newsletter='+newsletter+'&type='+type+'&os='+os+'&uuid='+uuid+'&name='+name+'&country='+countrycode;
     runAjax(GET_LOGIN, apiBody, Container);
 }


function userloginGoogle(userEmail,auth_uid,authprovider,name,picture)
{
         var checkdob='partnerid='+PARTNER_ID+'&authuid='+auth_uid;
         runAjax(GET_DOB_CHECK, apiBody, 'dob_check');
         var Container = "login_fail";
         authprovider='Google';
         type=deviceType; name=user_browser;os=user_os; uuid=token; var userpassword='';authprovider='Google';
         var apiBody='partnerid='+PARTNER_ID+'&userEmail='+userEmail+"&userpassword="+userpassword+'&authuid='+auth_uid+'&authprovider='+authprovider+'&name='+name+'&type='+type+'&os='+os+'&uuid='+uuid+'&country='+countrycode;
         //runAjax(GET_LOGIN, apiBody, Container);
}


function userloginDetail(JSONobject, Container)
{
        var loginStatus=JSONobject.status;
        var loginMsg=JSONobject.msg;

       // _(Container).innerHTML ='';
       switch(loginStatus)
       {

            case "1":
              var UserID=JSONobject.userid;    // var UserName=JSONobject.uname; var user_idName=JSONobject.user_id;
              console.log(JSONobject);
              jQuery.ajax({
              url:  baseUrl+"/config/login_core.php",
                    data:'UserID='+UserID+'&loginType=login',
              type: "POST",
              success:function(data){
              if(data==1)
                  {

                        //var img="<h4><img src='img/image_process.gif'/> Loading.............</h4>";
                       _(Container).innerHTML ='<span class="w3-text-green  succ-msg">Successful..</span>';
                        if(pageName=="password-reset")
                      {
                           window.location.href= baseUrl + "/index";
                           //console.log("if ", baseUrl);
                      }
                      else
                      {

                            window.location.reload(true);
                           //console.log("else load");
                      }
                  }
              },
               error:function (){}
                 });
            break;
            case "2":
             _(Container).innerHTML ='<span style="color:red">Your '+loginMsg+'</span>';
            break;
            case "3":
            _(Container).innerHTML ='<span style="color:red">'+loginMsg+'</span>';
            break;

            case "4":
             _(Container).innerHTML ='<span style="color:red">'+loginMsg+'</span>';
             break;


               case 5: case "5": case "6": case 6:
               var UserID=JSONobject.userid;     var UserName=localStorage.getItem("userName"); var user_idName=localStorage.getItem("userName");
                      jQuery.ajax({
                url:  baseUrl+"/config/login_core.php",
                 // data:'UserID='+UserID+'&UserName='+UserName+'&user_idName='+user_idName+'&loginType=login',
                 data:'UserID='+UserID+'&loginType=login',
              type: "POST",
              success:function(data){

              if(data==1)
                  {
                        //var img="<h4><img src='img/image_process.gif'/> Loading.............</h4>";
                        _(Container).innerHTML ="<span class='w3-text-green  succ-msg'>Successful...</span>";



if(pageName=="password-reset")
                                          {
window.location.href= baseUrl + "/index";
                                          }
                                          else
                                          {
window.location.reload(true);
                                          }

                  }
              },
               error:function (){}
                 });
            break;
            case "7":
            Alert.render("Maximum 3 logins are allowed  with same ID");
            document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alertok()" style="background: #333; border: 0px !important; color:#fff; font-size:1.3em;">OK</button>';
            //window.location.href= baseUrl + "/index";


           // _(Container).innerHTML ='<span style="color:red"> '+loginMsg+'</span>';
            break;


        }

}

function SaveEditUserProfile()
{
            var firstName=$("#fullname").val();
            var email=$("#email").val();
            var usrmobile=$("#mobile").val();
            var dob =$("#dob").val();
            var country=$("#country").val();
            var gender=$("#userGender").val();
            //var state=$("#state").val();


              if(!inputValidation("text",firstName))
                 {

                   _("pass_details").innerHTML="<span class='  mail-font error-msg font-size1' style='color: #f82e2e !important;'>Please enter valid username.</span>";
                   $("#fullname").focus();
                   return false;
                 }

              if(!inputValidation("email",email))
                 {

                   _("pass_details").innerHTML="<span class='mail-font error-msg font-size1' style='color: #f82e2e !important;''>Please enter valid email id.</span>";
                   $("#email").focus();
                  return false;
                 }


       if(!inputValidation("mobile",usrmobile))
                 {
                   _("pass_details").innerHTML="<span class='mail-font error-msg font-size1' style='color: #f82e2e !important;'' style='color: #f82e2e !important;'>Please enter valid mobile No.</span>";
                   $("#mobile").focus();
                   return false;
                 }
			_("pass_details").innerHTML='';
            var Container = "NORES_EditSaveProfile";
            var apiBody = new FormData();
            apiBody.append("partnerid", PARTNER_ID);
            apiBody.append("tag","insert");
            apiBody.append("userid",Userid);
            apiBody.append("name",firstName);
            //apiBody.append("email",email);
            apiBody.append("dob",dob);
            apiBody.append("gender",gender);
            apiBody.append("mobile",usrmobile);
            apiBody.append("country",country);
            //apiBody.append("state",state);
            //apiBody.append("interest","Null");
            runAjax(GET_MYPROFILE, apiBody, Container);



}



function Change_Password() {

var opass=$("#oldpass").val();
var npass=$("#newpass").val();
var cpass=$("#cnfpass").val();
//alert(opass+"--"+ npass +"--"+cpass);
if(npass!=cpass)
{
      //notification("New password and Confirm password Does Not match");
       _("passResponse").innerHTML="<span class='w3-text-red error-msg font-size1'>New password and Confirm password Does Not match</span>";
      return false;
}
       $.ajax({
        url:  baseUrl+"/config/login_core.php",
data:'oldpass='+opass+'&newpass='+npass+'&loginType=passencryptandchangepassword',
            type: "POST",
            success:function(encryptPass){
            var encryptOLDNEW = encryptPass.split("oldandpass");
                var oldp=encryptOLDNEW[0];
                var newp=encryptOLDNEW[1];
                getChangePassword(oldp,newp);
          },
         error:function (){}
          });

}




function getChangePassword(oldpass,newpass)
{
         var Container = "successAndFailChangePassword";
         var oldpassword=oldpass.trim();
         var newpassword=newpass.trim();
         var apiBody='partnerid='+PARTNER_ID+'&userid='+Userid+'&oldpass='+oldpassword+'&newpass='+newpassword+'&token='+token;
         /*var apiBody = new FormData();
         apiBody.append("partnerid", "101");
         apiBody.append("userid",uid);
         apiBody.append("oldpass",oldpass);
         apiBody.append("newpass",newpass);
         apiBody.append("token",token); */
      runAjax(GET_CHANGEPASSWORD,apiBody, Container);

}
function ChangePassword() {
$(".error-msg").html('');
//__("error-msg").innerHTML('');
var opass=$("#oldpass").val();
var npass=$("#newpass").val();
var cpass=$("#cnfpass").val();
//var passFormat = CheckPassword(npass);
if(opass=='')
     {
         //_("error-userName").innerHTML="<span class='w3-text-red  mail-font' style='margin-bottom: 42px;'>User Name should not be blank.</span>";
         _("error-oldpass").innerHTML="Current password should not be blank";
         $("#oldpass").focus();
         return false;
     }
//alert(opass.length);
if(opass.length>0)
{
	if(!CheckPassword(opass))
     {
         _("error-oldpass").innerHTML="Password must contain(uppercase,digit,special) alphanumeric 8 to 32 characters. ";
         $("#newpass").focus();
         return false;
     }
}
if(npass=='')
     {
         //_("error-userName").innerHTML="<span class='w3-text-red  mail-font' style='margin-bottom: 42px;'>User Name should not be blank.</span>";
         _("error-newpass").innerHTML="New Password should not be blank";
         $("#npass").focus();
         return false;
     }
if(npass.length>0)
{
	if(!CheckPassword(npass))
     {
         _("error-newpass").innerHTML="Password must contain(uppercase,digit,special) alphanumeric 8 to 32 characters. ";
         $("#newpass").focus();
         return false;
     }
}
 if(cpass=='')
     {
         //_("error-userName").innerHTML="<span class='w3-text-red  mail-font' style='margin-bottom: 42px;'>User Name should not be blank.</span>";
         _("error-cnfpass").innerHTML="Confirm password should not be blank";
         $("#cpass").focus();
         return false;
     }
if(cpass.length>0)
{
	if(!CheckPassword(cpass))
     {
         _("error-cnfpass").innerHTML="Password must contain(uppercase,digit,special) alphanumeric 8 to 32 characters. ";
         $("#cpass").focus();
         return false;
     }
}
if(npass!=cpass)
{
    //notification("New password and Confirm password Does Not match");
    _("error-cnfpass").innerHTML="New password and Confirm password Does Not match";
    return false;
}
       $.ajax({
		url:  baseUrl+"/config/login_core.php",
		data:'oldpass='+opass+'&newpass='+npass+'&loginType=passencryptandchangepassword',
	        type: "POST",
	        success:function(encryptPass){
	        var encryptOLDNEW = encryptPass.split("oldandpass");
                var oldp=encryptOLDNEW[0];
                var newp=encryptOLDNEW[1];
                getChangePassword(oldp,newp);
	      },
	     error:function (){}
	      });



}
/*
function dob_check()
 {
    var Container = "dob_check";
    var apiBody = new FormData();
    apiBody.append("partnerid",PARTNER_ID);
    apiBody.append("authuid","asdff");
    runAjax(GET_DOB_CHECK, apiBody, Container);
 }*/



function userChangedPassword(JSONobject, Container)
 {
          var cStatus=JSONobject.status;
          var cmsg=JSONobject.Message;
          if(cStatus==0)
          {
             var msgn='<div class="w3-text-red"><strong>Somthing wrong please conatct customer Support</strong></div>';
          }
          if(cStatus==1)
          {
              msgn='<div class="w3-text-green succ-msg"><strong>'+cmsg+'</strong></div>';
              _('oldpass').value = "";  _('newpass').value = "";  _('cnfpass').value = "";
          }
          if(cStatus==2)
          {
              msgn='<div class="w3-text-red"><strong>'+cmsg+'</strong></div>';
              //_("error-oldpass").innerHTML=cmsg;
          }

         //notification(msgn);
        _("passResponse").innerHTML=msgn;
 }

function CheckPassword(inputtxt)
  {
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*:;.])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*.:;]{8,32}$/;
     if(inputtxt.match(passw))
     {

         return true;
     }
     else
     {

         return false;
     }
  }

function inputValidation(type,value)
 {


   switch(type)
   {
    case "email":
     var pat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    value=value.trim();
    var atpos = value.indexOf("@");
    var dotpos = value.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=value.length) {

        return false;
    }
    else if(!value.match(pat))
    {
        return false;
    }
    else
    {
      return true;
    }

       break;

       case "text":
          pat=/^[A-Za-z0-9 ]{2,32}$/;

            if(value.match(pat))
             {
                 return true;
             }
             else
             {
                 return false;
             }

       break;

       case "mobile":
            pat=/^[0-9]{4,14}$/;

           if(value.match(pat))
             {
                 return true;
             }
             else
             {
                 return false;
             }

       break;

   }



 }



 function createAccount() {
    $(".error-msg").html('');
    var user_id=$("#userName").val();
    var userEmail=$("#user_email").val();
    var user_dob=$("#dob_singup").val();
    var userpassword=$("#user_password").val();
    //var age=$("#age").val();
    var country=$("#countrylist").val();
    var cpassword=$("#cnf_password").val();
    var user_id_length=user_id.length;
     //alert(user_id_length);
    if(user_id=='')
     {
         //_("error-userName").innerHTML="<span class='w3-text-red  mail-font' style='margin-bottom: 42px;'>User Name should not be blank.</span>";
         _("error-userName").innerHTML="User Name should not be blank";
         $("#user_id").focus();
         return false;
     }
      if(user_id_length>0)
    {
        if(!user_id.match(/^[A-Za-z0-9 ]+$/)) {
        $("#error-userName").html("(Special Character not allowed)");
                return false;
    }
    }


     else if(user_id_length>0)
         {
    //alert(user_id_length);
       if((user_id_length <4) && (user_id_length<32))
       {
         //_("error-userName").innerHTML="<span class='w3-text-red  mail-font' style='margin-bottom: 42px;'>User Name should not be blank.</span>";
        _("error-userName").innerHTML="User Name should be min 4 char and 32 max";
        $("#user_id").focus();
        return false;
        }

       }

    if(userEmail=='')
    { var mess="Email should not be Blank"; $("#error-user_email").html(mess); return false;}
    else if(userEmail.length>0)
    {
        if(!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#error-user_email").html("(email ID invalid..)");
                return false;
    }
    }
    if(user_dob=='')
    { var mess="Dob should not be Blank"; $("#error-dob").html(mess); return false;}

     if(userpassword=='')
    { var mess="Password should not be Blank"; $("#error-user_password").html(mess); return false;}


   /*if(!inputValidation("email",userEmail))
     {

                   _("registration_msg").innerHTML="<span class='w3-text-red  mail-font' style='margin-bottom: 42px;'>Please enter valid email id.</span>";
                   $("#user_email").focus();
         return false;
     }*/

     var passFormat=CheckPassword(userpassword);
     if(!passFormat)
     {

                   _("registration_msg").innerHTML="<span class='w3-text-red  mail-font error-msg font-size1' style='margin-bottom: 42px;'>Password must contain(uppercase,digit,special) alphanumeric 8 to 32 characters. </span>";
                   $("#user_password").focus();
         return false;
     }


       //var input=$("#newsletter").val();
        //var input = $('.newsletter');
        if($("#newsletter").attr('type') == "checkbox") {
        var newsletter = $("#newsletter").prop('checked') == false ? 0: 1;
        }


         //alert(  newsletter  );
       if(userpassword!=cpassword)
        {
          // notification("Confirm Password does not matched.");
           _("registration_msg").innerHTML="<span class='error-msg font-size1'>Confirm Password does not matched.</span>";
           return false;
        }

       $.ajax({
       url:  baseUrl+"/config/login_core.php",
       data:'userpassword='+userpassword+'&loginType=passencrypt',
              type: "POST",
              success:function(encryptPass){
                     UserSignUp(user_id,userEmail,encryptPass,countrycode,newsletter,user_dob);
               },
               error:function (){}
                });

  }





 function setcountrylist()
   {
    var Container = 'countrylist';
    var apiBody = new FormData();
    apiBody.append("tag","country");
    runAjax(GET_REGION, apiBody, Container);
   //console.log("setcoun",countrycode);
  }
function buildcountrylist(JSONobject, Container)
{
     var html='';
    //console.log("build",countrycode);
     var country_len=JSONobject.Countrylist.length;
     for(var i=0; i<country_len;i++)    {
        var country=JSONobject.Countrylist[i].country;
        var code=JSONobject.Countrylist[i].code;
        if (countrycode==code){

            html+='<option value=\''+code+'\' selected>'+country+'</option>';
        }
         else
         {
             html+='<option value=\''+code+'\'>'+country+'</option>';
         }
       }


     _("countrylist").innerHTML=html;
 }

function UserSignUp(userName,userEmail,userPassword,code,newsletter,userDob)
{
    var Container = "registration_msg";
    var password=userPassword.trim();
    var type=deviceType; name=user_browser;os=user_os;
   var apiBody='partnerid='+PARTNER_ID+'&username='+userName+'&email='+userEmail+'&country='+code+'&newsletter='+newsletter+'&type='+type+'&name='+name+'&os='+os+'&uuid='+uuid+'&dob='+userDob+'&password='+password;
    //var apiBody='partnerid='+PARTNER_ID+'&username='+userName+'&email='+userEmail+'&country='+code+'&newsletter='+newsletter+'&type='+type+'&name='+name+'&os='+os+'&dob='+userDob+'&password='+password;
     runAjax(POST_SIGNUP, apiBody, Container);
 }

 function resetPassword()
 {
     var email=$("#reg_email").val();
     var Container = "reset_pass";
     var apiBody = new FormData();
     apiBody.append("partnerid", PARTNER_ID);
     apiBody.append("email",email);
     apiBody.append("token",token);
     runAjax(GET_FORGOT_PASSWORD,apiBody, Container);
}


function SubmitNewPassword(userId,email,password,Container)
{
     var pass=password.trim();
     var apiBody='partnerid='+PARTNER_ID+'&email='+email+'&password='+pass+'&userid='+userId;
     runAjax(GET_RESETPASSWORD,apiBody, Container);
}


function userForgotPassword(JSONobject, Container)
{
      var fStatus=JSONobject.status;
      var fmsg=JSONobject.Message;
      if(fStatus==1 || fStatus==500)
      { var mcolor='red'; amsg=" ";}
      if(fStatus==0)
      { var mcolor='green';
            var amsg=", Check your Mail";
      }


     _(Container).innerHTML ='<span style="color:'+mcolor+'">'+fmsg+''+amsg+' </span>';
}


function registration_msg(JSONobject,encryptPass, Container)
{
      var signStatus=JSONobject.status;
      var signmsg=JSONobject.Message;
       var signmsg_regis=JSONobject.Message;

       var userEmail= _("user_email").value;
      switch(signStatus)
      {
          case "0":
          _(Container).innerHTML ='<span style="color:red">This '+signmsg+'</span>';
          break;
                case "1":
                  //alert(signmsg_regis);


          _(Container).innerHTML ='<span class="w3-text-green"> </span>';
          _("userName").value = ""; _("user_email").value = ""; _("user_password").value = ""; _("cnf_password").value = "";
           //alert(signmsg_regis);
           Alert.render(signmsg_regis);
           document.getElementById('dialogboxfoot').innerHTML = '<button onclick="userlogin(\''+userEmail+'\',\''+encryptPass+'\')" style="background: #38cef8; border: 0px !important;">OK</button>';


          //userlogin(userEmail,encryptPass);

          break;
          case "2":
          _(Container).innerHTML ='<span style="color:red">'+signmsg+'</span>';
          break;
          case "3":
          _(Container).innerHTML ='<span style="color:red; ">'+signmsg+'</span>';
          break;
      }

}




function loadjscssfile(filename){
  var fileref=document.createElement('script');
  fileref.setAttribute("type","text/javascript");
  fileref.setAttribute("src", filename);
  if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

function buildLoginHtml(container)
{
    // loadjscssfile("https://apis.google.com/_/scs/apps-static/_/js/k=oz.gapi.en_US.pa4EfGZJtyM.O/m=signin2/rt=j/sv=1/d=1/ed=1/am=AQE/rs=AGLTcCNvuMxw8LpLrCWFeoIaET1OMP8dSQ/cb=gapi.loaded_0", "js");
   loadjscssfile("https://apis.google.com/js/platform.js");
   //var logint="log_in"; var sign_in="singn_in";
  var html='';
    html+='<div class="w3-center" style="background-image: url('+baseUrl+'/loginbg1.jpg); background-position:61% 68%;">';
    html+='<div class="w3-col m12 l12 w3-image" style=""><a href="'+baseUrl+'/index" class="w3-wide  logo1 "><img src="'+baseUrl+'/images/logo_header_sm.png"></a>';
    html+='</div>';
    html+='<div class="w3-center w3-col m12 l12" style="margin-bottom: -10px;">';
    html+='<span class="preventLink w3-left w3-text-white padding-left "><a  class="font-size"  href="javascript:" onclick="login()">SIGN IN </a></span>';
    html+=' <span class="  w3-right w3-text-white padding-right"> <a class="font-size" href="javascript:" onclick="signUp()">SIGN UP</a></span><br/> <br/><br />';
    html+='</div>';
    html+='<span onclick="closeLogin()" class="cross_icon w3-text-gray w3-pointer w3-hover-text-red w3-display-topright" title="Close Modal"></span>';
    html+='<img src="'+baseUrl+'/images/img_user.png" width="120"  class="w3-circle  w3-hide-small">';
    html+='<form class="w3-container" action="javascript:" onsubmit="return authenticate()">';
    html+='<div class="w3-section padding-both">';
    html+='<input class="w3-input w3-border w3-margin-bottom" type="text" maxlength="50" placeholder="Email id" id="login_email" required>';
     html+='<div class="w3-center w3-col m12 l12" style="display:inline-block">';
     html+='<span toggle="#loginpassword" class="fa fa-fw fa-eye field-icon toggle-password fa_eye"></span>';
    html+='<input class="w3-input w3-border" type="password" maxlength="50" placeholder="Password" id="loginpassword" required>';
     html+='</div>';
    html+=' <button class="w3-btn-block w3-button w3-left  w3-green1 font-form  padding-both w3-round w3-section w3-padding" type="submit" style="margin-left: 5px;border-radius:30px !important; margin-bottom:0px !important;">LOGIN</button>';
    html+='<div id="login_fail" class="w3-center error-msg font-size1">&nbsp;</div>';
  // html+=' <h3 class="w3-text-white font-size">or</h3> <br />';
   // html+='<span class="w3-left w3-text-white "><a  onclick="checkLoginState()" class="w3-btn w3-button w3-button1 fb w3-text-white w3-hover-white fbLogin " ><i class="fa fa-facebook w3-padding-medium "></i></a></span>';
   // html+='<span class="w3-right w3-text-white g-signin2" onclick="dob_check()"><a class=" google w3-text-white w3-hover-white" data-onsuccess="onSignIn"><i class="fa fa-google-plus w3-padding-medium "></i></a></span>';
    //html+='<div class="w3-col s12 m12 l12"><center> <div id="g" ></div></center></div>';

   // html+='<div id="login_fail"  class="w3-center error-msg font-size1">&nbsp;</div>';
  /*

       html+='<div style="text-align:center !important;  padding-right:20px;">';
       html+='<h3><span class="w3-text-white font-size"><a class="font-size padding-lft-new" href="javascript:" onclick="forgotPassword()">Forgot password?</a></span></h3> ';
       html+='</div>';*/
   html+='</div>';
    html+='</form>';
    //html+='<h3><span class="w3-text-white"> <a href="javascript:" onclick="ChangePassword()">Change password?</a></span></h3></br>';
   _(container).innerHTML=html;

  //_("loginFooter").innerHTML=buidlLoginFooterHtml(0);
}


function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {

      FB.login(function(response){
  testAPI();
});
    }
  }

  function checkLoginState() {
  	 //alert(hiiiiiiiiiii);
    FB.getLoginStatus(function(response) {

      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
  FB.init({
    appId      : '{870112989852498}',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  };



  // Load the SDK asynchronously
  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=870112989852498";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

    function testAPI() {
    FB.api('/me?fields=email,first_name,last_name,gender,locale,picture', function(response) {
        var userEmail=response.email;
        var auth_uid=response.id;
        var authprovider="Facebook";
        var fname=response.first_name; localStorage.setItem("userName",fname);
        var lname=response.last_name;
        var gender=response.gender;
        var locale=response.locale;
        var picture=response.picture.data.url;

        //log(userEmail+"--"+fname+"--"+lname+"--"+gender+"--"+locale+"--"+picture+"--"+auth_uid);
        userloginFB(userEmail,auth_uid,authprovider,fname,lname,gender,locale,picture);
    });
  }

  var g=document.getElementById("g");


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
}



function buildChangePasswordHtml(container)
{
    var html='';
    html+='<div class="w3-center" style="background-image: url('+baseUrl+'/loginbg1.jpg); background-position:61% 68%;">';

    html+='<div class="w3-center" style="background-image: url('+baseUrl+'/loginbg1.jpg); background-position:61% 68%;">';

    html+='<div class="w3-col m12 l12 w3-image" style=""><a href="'+baseUrl+'/index" class="w3-wide  logo1 "><img src="'+baseUrl+'/images/logo_header_sm.png"></a>';
    html+='</div>';
    html+='<div class="w3-center w3-col m12 l12" style="margin-bottom: -31px;">';
    html+='<span class="w3-left w3-text-white padding-right "><a class="font-size" href="javascript:" onclick="login()">SIGN IN </a></span>';
    html+=' <span class="w3-right w3-text-white padding-right"> <a class="font-size" href="javascript:" onclick="signUp()">SIGN UP</a></span>';
    html+='</div>';
    html+='<span onclick="closeLogin()" class="cross_icon w3-text-gray w3-pointer w3-hover-text-red w3-display-topright" title="Close Modal"></span>';
    //html+='<img src="'+baseUrl+'/images/img_user.png" width="120"  class="w3-circle w3-margin-top w3-hide-small">';
    html+='<form class="w3-container" action="javascript:" onsubmit="return Change_Password()">';
    html+='<div class="w3-section padding-both">';
    html+='<input class="w3-input w3-border w3-margin-bottom" type="text"  placeholder="Old Password" id="oldpass" required>';
    html+='<input class="w3-input w3-border" type="password" placeholder="New Password" id="newpass" required>';
    html+='<input class="w3-input w3-border" type="password" placeholder="Confirm Password" id="cnfpass" required>';
    html+=' <button class="w3-btn-block adore-btn w3-section w3-padding" type="submit">Change Password</button>';
    html+='<div class="w3-col s12 m12 l12"><center> <div id="g" ></div></center></div>';
    html+='<div id="login_fail"  class="w3-center error-msg font-size1">&nbsp;</div>';
    html+='</div>';
    _(container).innerHTML=html;
  //_("loginFooter").innerHTML=buidlLoginFooterHtml(0);
}

/*function buidlLoginFooterHtml(id)
{
    var html='';
    html+='</div>';
    html+='</form>';
    html+='<div class="w3-container w3-border-top w3-light-grey" style="margin-bottom: 0px;">';
    if(id==0)
    html+='<span class="w3-left  "><a href="javascript:" onclick="signUp()">New Account?</a></span>';
    else
    html+='<span class="w3-left  "><a href="javascript:" onclick="login()">Login?</a></span>';
    html+=' <span class="w3-right  "> <a href="javascript:" onclick="forgotPassword()">Forgot password?</a></span>';
    html+=' <h3>&nbsp;</h3>';
    html+='</div>';


    return html;
}*/



function buildsignUpHtml(container)
{
    var html='';
     html+='<div class="w3-center" style="background-image: url('+baseUrl+'/loginbg1.jpg); background-position:61% 68%;">';

    html+='<div class="w3-col m12 l12 w3-image" style=""><a href="'+baseUrl+'/index" class="w3-wide  logo1 "><img src="'+baseUrl+'/images/logo_header_sm.png"></a>';
    html+='</div>';
    html+='<div class="w3-center w3-col m12 l12" style="margin-bottom: -10px;">';
    html+=' <span class="  w3-left w3-text-white padding-left "><a  class="font-size" href="javascript:" onclick="login()">SIGN IN </a></span>';
    html+=' <span class="preventLink w3-right w3-text-white padding-right"> <a  class=" font-size" href="javascript:" onclick="signUp()">SIGN UP</a></span><br /><br /><br />';
    html+='</div>';
    html+=' <span onclick="closeLogin()" class="cross_icon w3-text-gray w3-pointer w3-hover-text-blue w3-display-topright" title="Close Modal"></span>';

    html+='<form class="w3-container padding-both" action="javascript:" onsubmit="return createAccount()">';
   // html+='<div class="w3-section">';
    html+=' <input class="w3-input  w3-margin-bottom " type="text" maxlength="32"  placeholder="Enter Username" id="userName" title="single character not allowed" ><span class="error-msg font-size1" id="error-userName"></span>';
    html+=' <input class="w3-input  w3-margin-bottom" type="text"  maxlength="32"  placeholder="Enter email" id="user_email" ><span class="error-msg font-size1" id="error-user_email"></span>';
     html+=' <input class="w3-input  w3-margin-bottom" type="text"  placeholder="Enter dob" id="dob_singup" name="bday" onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off  onkeypress="return false;"  ><span class="error-msg font-size1" id="error-dob"></span>';

    html+=' <input class="w3-input " type="password" placeholder="Enter Password" id="user_password" ><span class="error-msg font-size1" id="error-user_password"></span>';
    html+=' <input class="w3-input " type="password" placeholder="Confirm Password" id="cnf_password" style="margin-top:15px;">';

  // html+='<div class="w3-section" onclick="setcountrylist()"><span id="country"> </span><span id="country_code"></span>';

         $.ajax({
            url: "https://geoip-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {
            $('#country').html(location.country_name);
            $('#country_code').html(location.country_code);
             countrycode  =location.country_code;
            }
       });
       html+='<select class="w3-padding custom-select" id="countrylist" value="" style="width: 100% !important;margin-right:30% !important;  padding: 9px 13px !important; color: aliceblue;">';
       html+='</select>';
       //html+='</div>';
       html+='<h6  class=" w3-text-white" style="font-size:14px;"><input type="checkbox" name="newsletter" id="newsletter" class="newsletter">  Yes, I want to receive the newsletter </h6>';



       html+='<button class="w3-btn-block w3-button w3-left  w3-green1 font-form  padding-both w3-padding" type="submit" style="border-radius: 30px !important;">SIGN UP</button>';

       html+='<div id="login_fail"  class="w3-center error-msg font-size1">&nbsp; </div>';
       html+='<div id="registration_msg"  class="w3-center error-msg font-size1"> &nbsp; </div>';
       _(container).innerHTML=html;
        html+=' </div>';
      //_("loginFooter").innerHTML=buidlLoginFooterHtml(1);
        setcountrylist(location.country_code);
         $('input[type=text]').blur(function(){
         $(this).val($.trim($(this).val().replace(/\t+/g,' ')));
    });
}


function buildPasswordHtml(container)
{
    var html='';
    html+='<div class="w3-center" style="background-image: url('+baseUrl+'/loginbg1.jpg); background-position:61% 68%;"><br>';
    html+='<h3 class="w3-text-white ">Forgot   password</h3>';
    html+='<span class="w3-text-white " style="font-size:12px;">Enter your email below to reset your password</span>';
    html+='<span onclick="closeLogin()" class="cross_icon w3-text-gray w3-pointer w3-hover-text-blue w3-display-topright" title="Close Modal"></span>';

    html+='<form class="w3-container" action="javascript:" onsubmit="return resetPassword()">';
    html+=' <div class="w3-section">';
    html+=' <input class="w3-input w3-border w3-margin-bottom" type="email"  placeholder="Enter registered email" id="reg_email" required>';
    html+=' <button class="w3-btn-block  w3-button w3-left  w3-green1 font-form  padding-both  w3-section w3-padding" type="submit" style="border-radius: 30px !important;">REQUEST PASSWORD</button>';
    html+=' <div id="reset_pass" class="error-msg font-size1"> &nbsp; </div>';
    html+='<div id="login_fail"  class="w3-center error-msg font-size1"> &nbsp; </div>';
    html+=' </div>';
      _(container).innerHTML=html;
     //_("loginFooter").innerHTML=buidlLoginFooterHtml(1);

}
// alert(navigator.userAgent);
