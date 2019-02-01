
/*window.addEventListener("scroll",removeOpac);*/

$(document).ready(function(){
    
var topL=top.location;
var selfL=self.location;
var parL=parent.location;

if(topL!=selfL) {
   parent.location = self.location;
}

 //console.log("top.location : "+topL);
 //console.log("self.location : "+selfL);
 //console.log("parent.location : "+parL);

});

/*
 
function removeOpac()
{
    if(!opacNav)return false;
    if(window.pageYOffset!=0)
    _("navBar").classList.remove("opaque-navbar");

     if(window.pageYOffset<=10)
    _("navBar").classList.add("opaque-navbar");
} */


function log(obj)
{
    return console.log("Console log fired : "+obj);
}

function _(id)
{         
    
    return document.getElementById(id);
}

function __(cls)
{
    return document.getElementsByClassName(cls);
}

// Toggle between showing and hiding the sidenav when clicking the menu icon

function w3_open() {
    if (mySidenav.style.display === 'block') {
        mySidenav.style.display = 'none';
    } else {
        mySidenav.style.display = 'block';
    }
}

// Close the sidenav with the close button
function w3_close() {
    mySidenav.style.display = "none";
}


var sliderIntrvl;
currPos=1;
reverse=-1;
function slider(index) {
    if(index==reverse){if(currPos==1)currPos=0;else currPos-=2;}
    if(index!=undefined && index!=reverse){currPos=index;clearInterval(sliderIntrvl,1);sliderIntrvl=setInterval(slider,5000); }
    
  var i;
  var x = __("mySlides");
  var dots = __("demo");
  if(x.length<=0)return;
  
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("w3-green1") ;
  }
 
  if(currPos==x.length){currPos=0;}
  //console.log(index+"index="+currPos);
 
    x[currPos].style.display = "block"; 
    dots[currPos].classList.add("w3-green1") ;
    currPos++;
  
}







 function getDeviceWidth()
{
    var deviceWidth = Math.max( document.documentElement.clientWidth, document.body.clientWidth, window.innerWidth );
    return deviceWidth;
}




function createCookie(cookieName,sessionID) {
    
var expiration_date = new Date();
var cookie_string = '';
expiration_date.setFullYear(expiration_date.getFullYear() + 1);
document.cookie = cookieName + "=" + sessionID + ";" + expiration_date.toUTCString() + ";path=/";
}

function readCookie(name){
   
    var pattern = RegExp(name + "=.[^;]*");
    matched = document.cookie.match(pattern);
    if(matched){
        var cookie = matched[0].split('=');
        return cookie[1];
    }
    return "";
}

function login(loginType)
{
    _("loginModal").style.display="block";
    _("google_fb_container").style.display="block";
    buildLoginHtml("loginBody");
    
    
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
    
}

function closeLogin()
{
   _("loginModal").style.display="none";
   
}
function signUp(loginType)
{
   _("loginModal").style.display="block";
    _("google_fb_container").style.display="none";
   
      buildsignUpHtml("loginBody");

    $("#dob_singup").datepicker({
  maxDate: "-1",
  dateFormat: 'yy/mm/dd',
   changeMonth:true,
         changeYear:true,
         yearRange:"-100:+0",
  readonly: "readonly",
});

}


function forgotPassword()
{

 _("loginModal").style.display="block";
 _("google_fb_container").style.display="none";
 buildPasswordHtml("loginBody");   
}

function ChangePassword()
{
	
	_("loginModal").style.display="block";
	 buildChangePasswordHtml("loginBody");
}

function msToTime(ms){
    var secs = Math.floor(ms / 1000);
    var msleft = ms % 1000;
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    var min = (minutes<10?"0"+minutes:""+minutes);
    var s = (seconds<10?"0"+seconds:""+seconds); 
    var time =(hours>0?hours+":":"")+min+":"+s;
    return time;
    //return hours + ":" + minutes + ":" + seconds ; 
}


function textWrap(str,len)
{  if(str==undefined) return;
     var original=str.length;
     
     var newstr=str.substr(0, len);
         if(original>len)
         newstr+="...";
     
     return newstr;
     
}


function sqlToJsTime(sqlTStamp)
{
    /*2017-04-26 15:42:32   sqlTStamp */  
    
    
    
    var sqlTStampArray=sqlTStamp.split(" ");//log(sqlTStampArray);
    var sqlDate=sqlTStampArray[0];
    var sqlDateArray=sqlDate.split("-");
    var year=sqlDateArray[0];
    var month=getMonthStr(sqlDateArray[1]);
    var day=sqlDateArray[2];
    var jsDate=month+" "+day+" "+year;
    return jsDate;
    
    
}


 

function getMonthStr(monthVal)
{
    switch(monthVal)
    {
        case "01": case 1:
            return "Jan";
        break;
        
        case "02":case 2:
            return "Feb";
        break;
        
        case "03":case 3:
            return "Mar";
        break;
        
        case "04":case 4:
            return "Apr";
        break;
        
        case "05":case 5:
            return "May";
        break;
        
        case "06":case 6:
            return "Jun";
        break;
        
        case "07":case 7:
            return "Jul";
        break;
        
        case "08":case 8:
            return "Aug";
        break;
        
        case "09":case 9:
            return "Sep";
        break;
        
        case 10:
            return "Oct";
        break;
        
        case 11:
            return "Nov";
        break;
        
        case 12:
            return "Dec";
        break;
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

    var showPass = 0;
    $('#user_password').on('click', function(){
    	ALERT("JNKXJKJ");
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('fa-eye');
            $(this).find('i').addClass('fa-eye-slash');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').removeClass('fa-eye-slash');
            $(this).find('i').addClass('fa-eye');
            showPass = 0;
        }
        
    });


function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (370 * .4)+"px";
        dialogbox.style.top = "100px"; 
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        //document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" style="background: #38cef8; border: 0px !important;">OK</button>';
    }
    this.ok = function(){
    	document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        
    } 
}
 
var Alert = new CustomAlert(); 

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}



