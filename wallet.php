<?php
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<body onload="initwallet()" id="get_token">

   
   <?php require_once 'includes/navigation.php';?>  
       <div class="w3-container fullHeight">
      <div class="w3-row" style="margin-top: 4%">
    <div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
      <!-- sliderimage-->
    <div class="w3-row ">
        <div class="w3-col s12 m12 l12" id="wallet_point">
       <div class="w3-col  s3 m3 l3">&nbsp;</div>
      
     <div class="w3-col s12 m6 l6 w3-text-white" style="margin-left: 2%;  padding: 26px" id=" ">
      <table class="w3-table w3-bordered w3-padding-12" style="width:100%">
    	  <tr> 
            <div class="w3-col s12 m12 l12 w3-padding-48" style="  height: 200px; border-radius: 10px; background-color: #233040;">
            	<div class="w3-center"><h3>Available Balance</h3></div> <br />
            	<div class="w3-center w3-xlarge" style="color: #ff7000">500 Points </div>
            	 
            </div> 
          </tr>
    	</table>
    	<h3 style="padding: 20px 10px 5px 0">Wallet Status</h3>
    	<table class="w3-table w3-bordered w3-padding-12" style="width:100%; border-radius: 10px; background-color: #233040; border-color:#38cef8">
         
        <tr class="border-bottom1">
          <td class="w3-padding-12"><span class="w3-large w3-padding-12" style=" ">Ticket ID: 123456</span> <br /> <span  class="w3-bold w3-medium"  style=" color: #ff7000">25 Dec 2018</span></td>
          <td  class="w3-padding-12"><span  class="w3-large w3-padding-12" style="  ">Transaction Problem</span> <br /> <span class="w3-bold w3-medium" style="color: #9ea5ad">Pending</span></td>
        </tr>
        <tr class="border-bottom1">
          <td class="w3-padding-12"><span  class="w3-large w3-padding-12" style=" ">Ticket ID: 123456</span> <br /> <span class="w3-bold w3-medium" style=" color: #ff7000">25 Dec 2018</span></td>
          <td class="w3-padding-12"><span class="w3-large w3-padding-12" style=" ">Application Crash</span> <br /> <span class="w3-bold w3-medium" style="color: #9ea5ad">Done</span></td>
        </tr>
        <tr class="border-bottom1">
         <td class="w3-padding-12"><span class="w3-large w3-padding-12" style=" ">Ticket ID: 123456</span> <br /> <span  class="w3-bold w3-medium"  style=" color: #ff7000">25 Dec 2018</span></td>
         <td class="w3-padding-12"><span class="w3-large w3-padding-12" style=" ">Subscribe Plan Issue</span> <br /> <span class="w3-bold w3-medium" style="color: #9ea5ad">Pending</span></td>
        </tr>
        
          <tr class="border-bottom0">
         <td class="w3-padding-12"><span class="w3-large w3-padding-12" style=" ">Ticket ID: 123456</span> <br /> <span  class="w3-bold w3-medium"  style=" color: #ff7000">25 Dec 2018</span></td>
         <td class="w3-padding-12"><span class="w3-large w3-padding-12" style=" ">Subscribe Plan Issue</span> <br /> <span class="w3-bold w3-medium" style="color: #9ea5ad">Pending</span></td>
        </tr>
      </table> 
    
   </div>   
   <div class="w3-col s3 m3 l3">&nbsp;</div>        
       </div>
 
   </div>
   <!-- !slider----->
   
   
 </div>
</div>     
    

<?php require_once 'includes/footer.php';?>

