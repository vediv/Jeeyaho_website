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
[type="checkbox"], [type="radio"] {
    padding: 0;
}
 
 input[type="text"]
{    background: transparent ;    border: none;}

  input[type="date"]
{    background: transparent !important;    border: none;}
 input[type="country"]
{    background: transparent !important;    border: none;}
.btn{ border-radius: 50%; width:32px; height:32px; line-height:18px;  }

</style>
<body onload="initMyAccount();" id="get_token" >
<?php require_once 'includes/navigation.php';?> 
<div class="w3-seprator-top"></div> <div class="w3-seprator"></div>
   <!-- !seprater-->    
<!-- Tab Container--> 
<div class="w3-row channel-container" style="min-height: 100%;">
  
          <div class="w3-col s12 m5 l5 w3-row-padding w3-margin-left_n">
         <div class="w3-card-4 w3-bluewood">

<div class="w3-center">
            <div class="card hovercard">
               <header class="w3-container w3-graywood">
 <h3 class="w3-bold w3-text-white">PROFILE</h3>
                </header>
                <div class="avatar w3-margin-top">
                    <img alt="" src="images/user.png">
                </div>
  <h5>John Doe</h5>
</div>

<form action="" class="w3-container w3-text-white w3-margin">
<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-user"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd" name="first" type="text" placeholder="First Name">
    </div>
</div>


<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-envelope-o"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd" name="email" type="text" placeholder="Email">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-phone"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd" name="phone" type="text" placeholder="Phone">
    </div>
</div>


<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-calendar"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="date" name="bday" placeholder="Message">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-map-marker"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="country" name="country" placeholder="country">
    
      <input class="w3-input w3-input-padd w3-padding-no"  type="country" name="country" placeholder="city">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-map-marker"></i></div>
    <div class="w3-rest w3-rest2 " style="padding-left: 13%">
 <input class="w3-input  w3-input-wid w3-input-padd"  type="radio" name="name" checked="checked">Male
      <input class="w3-input  w3-input-wid w3-input-padd"  type="radio" name="name" checked="checked">Female
</div></div>
 
 <div class="w3-row">
   <div class="w3-third w3-container"></div>
   <div class="w3-third w3-container">
<button class="w3-button w3-center  w3-green1  padding-both" style="margin-left: 8%;">Submit</button>
</div>
 <div class="w3-third w3-container"></div></div>
 </form></div></div>
    <!------------------------reset password---------->
       
         <div class="w3-card-4 w3-bluewood">
<div class="w3-center">
    <h4 class="w3-left-align w3-padding-left">Reset Password</h4> <br /></div>
<form action="" class="w3-container w3-text-white w3-margin">
<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-lock"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="text" name="" placeholder="Current Password">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-lock"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="text" name="" placeholder="New Password">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-lock"></i></div>
    <div class="w3-rest w3-rest2">
      <input class="w3-input w3-input-padd"  type="text" name="" placeholder="Confirm New Password">
    </div>
</div>
 <div class="w3-third w3-container"></div>
   <div class="w3-third w3-container">
<button class="w3-button w3-center  w3-green1  padding-both" style="margin-left: 8%;">submit</button>
</div>
 <div class="w3-third w3-container"></div>
</div>

</div> </div> 
        
        </form> 
  
                    
       
    
 
    
  

<?php require_once 'includes/footer.php';?>  


   

</body>