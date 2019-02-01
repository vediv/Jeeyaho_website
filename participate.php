<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<?php
$parentcatid=isset($_GET['pcatid'])?$_GET['pcatid']:'';

 ?>
 <style type="text/css">
 	.tblResetPass {
    margin-left: auto;
    margin-right: auto;
    min-width: 35%;}

 </style>
<body onload="initDrama()" id="get_token" class="">
<?php require_once 'includes/navigation.php';?>

 <!-- <div class="container fullHeight" style="margin-bottom: 50px;">
 	 <div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
     <div class="w3-row">
               <div class="s12 m12 l12" id="carousel_only">
              <img class="w3-image" width="100%" src="images/placeholder2.png">
       </div>
   </div> -->


 <div class="w3-seprator-top"></div> <!-- 20px margin-->
<div class="main-container w3-row-padding" >

                 <div class="w3-seprator"></div> <!-- 20px margin-->
     <div class="w3-row fullHeight" style="padding-top: 1%">

         <div class="main-container w3-row-padding w3-center w3-text-black" id="watchListResult">
    <div id="presponse" style="padding-top: 1%;font-size:15px;color:white"></div>
             <form >
             <table  class="  w3-container border-radius4 tblResetPass"  style="background-image: url(<?php echo $baseUrl?>/loginbg1.jpg); background-position:53% 38%;">
                 <tr><td><p class="font-size16" style=" "> </p></td></tr>
                  <tr><td><input type="text" required="" id="par_name" placeholder="NAME" class="w3-input"></td></tr>
                   <tr><td><input type="text" required="" id="par_dob" placeholder="Your DOB" class="w3-input" disabled></td></tr>
                 <tr><td><input type="text"  required  id="par_mobile" placeholder="Mobile No." class="w3-input"></td></tr>
                  <!-- <tr><td><input type="text" required="" id="par_location" placeholder="Location" class="w3-input"></td></tr> -->
                  <tr><td> <select id="par_location" class="w3-input">
                                <option value="Delhi">Delhi</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Patna">Patna</option>
                                <option value="Ranchi">Ranchi</option>
                          </select>
                  </td></tr>

                 <tr><td>&nbsp;</td></tr>
                 <tr><td><button type="button" class="w3-green1 w3-button  w3-center padding-four font-form w3-round" onclick="submit_participate()" id="pbutton">Submit</button></td></tr>


             </table>
            </form>

        </div>
     </div>

    </div>

</div>





<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
<script type="text/javascript">
function submit_participate()
{

  var name=_('par_name').value;
  var dob=_('par_dob').value;
  var mobile=_('par_mobile').value;
  var location=_('par_location').value;
  var apiBody = new FormData();
  apiBody.append("partnerid", PARTNER_ID);
  apiBody.append("userid",Userid);
  apiBody.append("uuid",uuid);
  apiBody.append("name",name);
  apiBody.append("mobile",mobile);
  apiBody.append("location",location);
  runAjax(SUBMIT_PARTICIPATE_DATA,apiBody, 'presponse');
}
</script>
