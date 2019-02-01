<?php
// Date in the past
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache");
header("Pragma: no-cache");

?>
<?php  require_once 'config/auth.php'; ?>
<?php if(empty($_SESSION['user_id'])){   header("Location:index.php");}
unset($_SESSION['paystatus']);
?>
<?php require_once 'includes/header.php';
$tabs=isset($_GET['tabs'])?$_GET['tabs']:'profile';
?>
<style type="text/css">
.card.hovercard .avatar img {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255,255,255,0.5);
}


select option:checked,
select option:hover {
    box-shadow: 0 0 10px 100px #000 inset; background-color:transparent; color:black
}


select option {
    box-shadow: 0 0 10px 100px #000 inset; background-color:transparent; color:black
}

/*
input:required {
  border:2px solid  #000 !important;
  border-width: 3px;
}*/

input:focus:required:invalid {border: 0px solid black !important;}
input:required:valid {none !important;}
 
 input[type="text"] 
{    background: transparent ;    border: none;}
input[type="password"]
{    background: transparent ;    border: none;}

  input[type="date"]
{    background: transparent !important;    border: none;}
 input[type="country"]
{    background: transparent !important;    border: none;}
.btn{ border-radius: 50%; width:32px; height:32px; line-height:18px;  }
.profileImg{width:64px;height:64px;border-radius:50%;border: 1px solid}
</style>

<script>
function chooseFl(){

	_("fileUpload").click();

}

</script> 
<body onload="initMyAccount();" id="get_token" >
<?php require_once 'includes/navigation.php';?> 
<div class="w3-seprator-top"></div> <div class="w3-seprator"></div>
   <!-- !seprater-->    
<!-- Tab Container--> 
<div class="w3-row channel-container" style="min-height: 100%;">
  
          <div class="w3-col s12 m8 l5 w3-row-padding margn-left28" style="">
         <div class="w3-card-4 w3-bluewood">

<div class="w3-center">
    <div class="card hovercard">
               <header class="w3-container w3-graywood">
                <h3 class="w3-bold w3-text-white">PROFILE</h3>
                </header>
                 <div class="avatar w3-margin-top">
                 <div class="w3-text-red pro-det w3-large">PROFILE DETAILS</div></div>
               <!--  <div class="w3-col s12 m12 l12 avatar w3-margin-top">
                    <img alt="" src="images/user.png">
               </div>-->
 <form id="upload_form"  enctype="multipart/form-data" type="POST" action="javascript:" onsubmit="saveImgeProfile()" style="margin-top:30px;" >   
    <img class="profileImg" alt="loading.." src="images/img_user.png" id="image-holder" onerror="checkForDpUpload()">
       <div class="w3-col s12 m12 l12 ">
            <p style="padding-top: 3px; cursor: pointer;"><span onclick="chooseFl()">Edit Photo</span></p></div>
            <input type="file" id="fileUpload"  class="w3-hide">
     </form>
   </div>

<form action="javascript:" class="w3-container w3-text-white w3-margin"  onsubmit="return SaveEditUserProfile()">
<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-user"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd" style="margin-top: 1px !important" name="first" type="text" id="fullname"  placeholder="Full Name" required>
    </div>
</div>



<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-envelope-o"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  disabled="" style="margin-top: 1px !important" name="email" type="text" placeholder="Email" id="email" required>
    </div>
</div>



<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-phone"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd" style="margin-top: 1px !important" name="phone" type="text" placeholder="Phone" id="mobile" required>
    </div>
</div>
<!--
<table style="min-width:60%">
 <tr><td> <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-user"></i></div></td><td>
 	<select id="userGender" required="" style="" class="gender-ss w3-text-white font-size1 font-size14 w3-left"><option>Female</option><option>Male</option></select></td></tr>
</table>
-->


<table style="min-width:60%">
 <tr><td><i class="fa  fa-id-badge fa-2x" style="padding-left: 4px"></i></td><td>
 	   <div class="w3-rest w3-rest2" style="margin-left: 68px;">
         <label class="gender" style="">
         <select  id="userGender" required="" class="gender-ss w3-text-white font-size1 font-size14 w3-left" style="padding: 1px 11px; border-radius: 6px; "><option>Female</option><option>Male</option>
         </select>
             </label><//div>
     </td></tr>
</table>
<p class="w3-left w3-text-skyblu   w3-padding font-size1 font-size16" style="padding-top: 34px !important">Personal Information</p>
<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-calendar"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd "  style="margin-top: 0px !important" type="text" name="bday" placeholder="dob" readonly='true' id="dob_user"  disabled="">
    </div>
</div>




<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-map-marker"></i></div>
    <div class="w3-rest w3-rest2">
     
     <div class="dropdown dropdown1">
		<!--<select  class="w3-input w3-input1 w3-input-padd" type="text"  name="country" id="country" placeholder="Country"></select>-->
	<input  class="w3-input w3-input-padd " style="margin-top: 0px !important" type="text"  name="country" id="country" placeholder="Country" readonly='true' disabled=""></input>
	</div>
    </div>
</div>



 <div class="w3-row">
   <div class="w3-col s6 m6 l6 w3-container">
   <button   type="submit" id="save_profile" class="w3-button w3-left  w3-green1 font-form  padding-both w3-round">Update</button>
   </div>
 <div class="w3-col s6 m6 l6 w3-container">
 <div onclick="myFunction('Demo1')" class="w3-green1 w3-button  w3-right padding-four font-form w3-round">Reset Password</div> <br /></div>
</div>
 <div id="pass_details" class="w3-center"></div>
</form>

<form action="javascript:" autocomplete="off" class="w3-container w3-text-white w3-margin form1" onsubmit="return ChangePassword()">
    <!------------------------reset password---------->
    
<div id="Demo1" class="w3-hide w3-container">
<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-lock"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="password" name=""   placeholder="Current Password" id="oldpass" title="space not allowed" autocomplete="new-password">
      <span toggle="#oldpass" class="fa fa-fw fa-eye field-icon toggle-password"></span>
      </div><br />
      <span class="w3-col l12 m12 error-msg" id="error-oldpass" style="color: #f82e2e !important;"></span> 
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-lock"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="password" name=""   placeholder="New Password" id="newpass" title="space not allowed" autocomplete="off">
        <span toggle="#newpass" class="fa fa-fw fa-eye field-icon toggle-password"></span></div><br />
      <span class="w3-col l12 m12  error-msg" id="error-newpass" style="color: #f82e2e !important;"></span> 
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xlarge fa fa-lock"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="password" name="" placeholder="Confirm New Password" id="cnfpass" title="space not allowed" autocomplete="off">
       <span toggle="#cnfpass" class="fa fa-fw fa-eye field-icon toggle-password"></span></div><br />
      <span class="w3-col l12 m12  error-msg" id="error-cnfpass" style="color: #f82e2e !important;"></span> 
    </div>
 
 <div class="w3-third w3-container"></div>
   <div class="w3-third w3-container">
<button type="submit" class="w3-button w3-left  w3-green1 font-form  padding-both w3-round">Update</button>
</div>
<div class="w3-row w3-section">
<div id="passResponse" class="w3-center"></div>
</div>
</div>

<script type="text/javascript">
	  $('input[type=password]').blur(function(){
         $(this).val($.trim($(this).val().replace(/\t+/g,' ')));
</script>

        </div>
        
        </form>
          </div>
         </div> 
                    
     </div>                  
   
   

<?php require_once 'includes/footer.php';?>  


    <script>
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace("w3-black", "w3-red");
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace("w3-red", "w3-black");
    }
}
</script>

<script type="text/javascript">
var tagName="country" ; //track user click as page number, righ now page number 1
load_contents_country_state(tagName); //load content

//Ajax load function
function load_contents_country_state(tagName){
         //var user = "PlanetCastM";  var pass = "p1@netc@$t";
         $.ajax({
                url: GET_REGION,
                
                method: 'POST',
                dataType: 'json', 
                data:{ 'tag':tagName,'partnerid':PARTNER_ID},
                    success: function(jsonResult){
                    var clen=jsonResult.Countrylist.length;
                    var options_str = "";
                    options_str += '<option value="">Select Country</option>';
                    for (var i = 0; i < clen; i++) 
                    {
                       var countryName=jsonResult.Countrylist[i].country;
                       var countryCode=jsonResult.Countrylist[i].code;  
                       options_str += '<option value="' + countryName + '">' + countryName + '</option>';
                    }    
                document.getElementById("country").innerHTML=options_str; 
            }
      });	
}
  
function buildState(countryCode,selectedState)
{
           if(countryCode){
           $.ajax({
                url: GET_REGION,
               
                method: 'POST',
                dataType: 'json', 
                data:{ 'tag':"city",'code':countryCode},
                    success: function(jsonResult){
                    var citylen=jsonResult.Citylist.length;
                    if(citylen=='0')
                    {
                         document.getElementById("state").innerHTML='<option value="">Not State In this Country</option>';
                    }
                    else
                    {    
                        var options_str = "";
                        for (var i = 0; i < citylen; i++) 
                        {
                            
                           var cityName=jsonResult.Citylist[i].city;
                           var sel=(cityName==selectedState) ? "selected" : ""; //alert(sel+""+cityName+""+selectedState);
                           options_str += '<option value="' + cityName + '" '+sel+'>' + cityName + '</option>';
                        }    
                       document.getElementById("state").innerHTML=options_str; 
                  }
            }
      });	
        }
        else{
            $('#state').html('<option value="">Select country first</option>');
          
        }
}

   
 $(document).ready(function(){
    $('#country').on('change',function(){
        var countryCode = $(this).val();
         //buildState(countryCode)
    });        
});



</script>

<script type="text/javascript">  
   $(document).ready(function() {
        // $("#savePhoto").prop("disabled",true);
        // $("#ShowButtons").hide();
         $("#fileUpload").on('change', function() {
        
          //Get count of selected files
          var countFiles = $(this)[0].files.length;
          var imgPath = $(this)[0].value;
          var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
          var imgFileSize = this.files[0].size;
          var image_holder = $("#image-holder");
          //image_holder.empty();
          //$("#savePhoto").prop("disabled",false);
          if(imgFileSize<51200)
          {
          if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof(FileReader) != "undefined") {
             saveImgeProfile();
             /* for (var i = 0; i < countFiles; i++) 
              {
                var reader = new FileReader();
                reader.onload = function(e) {
                  $("<img />", {
                    "src": e.target.result,
                    "class": "thumb-image"
                  }).appendTo(image_holder);
                }
                image_holder.show();
                reader.readAsDataURL($(this)[0].files[i]);
               //  $("#ShowButtons").show();
              
               
              }*/
              
            }
             else {
              alert("This browser does not support FileReader.");
            }
            
            
          } else {
            alert("Invalid file format.");
          }
         }
         else
         {
              alert("Image file size max 50 KB");
              document.getElementById("fileUpload").value="";
         }
          
    
          
        });
      });
</script>
<script>

function saveImgeProfile()
{  
       var imageName=document.getElementById("fileUpload").value; 
       //var useriD=document.getElementById("useridd").value;
       var apiBody = new FormData($('#upload_form')[0]);
       apiBody.append("partnerid",PARTNER_ID);
      // apiBody.append("fileAction","profileimage");
       apiBody.append("userid",Userid);
       apiBody.append('data', $('input[type=file]')[0].files[0]);
       //var user = "PlanetCastM";  var pass = "p1@netc@$t";
	  $.ajax({
                url: GET_UPLOAD_USER_IMAGE,
               
                method: 'POST',
                dataType: 'json', 
                data:apiBody,
                //contentType: 'multipart/form-data',
                processData: false,
                contentType: false,
                    success: function(jsonResult){
                      var image_url=jsonResult.image_url; 
                     // alert(image_url);
                      _('image-holder').src=image_url;
                      notification(jsonResult.Message);
                    }
            });	

}    
</script>

<script> 

function checkForDpUpload(el)
{
    setTimeout(function(){ _('image-holder').src=_('image-holder').src},10000);
   
      //$.ajax({type: 'GET',data:"",async: true,url: url,success:function(){alert("Done")} });
}

$('input[type=password],input[type=text]').blur(function(){
 
         $(this).val($.trim($(this).val().replace(/\t+/g,' ')));
  }); 

</script>

<script type="text/javascript">
	$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
</script>
