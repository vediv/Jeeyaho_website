<?php
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<style type="text/css">

</style>

<body onload="initicket()" id="get_token">


   <?php require_once 'includes/navigation.php';?>
      <div class="w3-container fullHeight">
      <div class="w3-row" style="margin-top: 8%">
      <div class=" w3-margin-top  w3-col s12 m12 l12">
        <p class="font-size1 font-size16 w3-center">ABOUT US</p><br />
		 <div class="w3-container w3-content" style="max-width:800px">
        <p class="w3-text-white font-size1  letter-spacing  w3-justify" style="letter-spacing: 0.021em;">
        Jeeyaho is the India's leading subscription service & streaming popular movies, exclusive web series, exclusive short films, songs and many more exclusive videos along with a live channel with varieties of shows anywhere in world and anytime with a free subscription for most of the videos.
         </p>
		</div>
      <br />
          <hr class="hrstyle">
<div class="w3-col s12 m3 l3"> </div> <br />
          <div class="w3-container w3-content" style="max-width:800px">
          <p class="w3-text-white font-size1 font-size16 w3-bold"  style="text-align: center">Write to us</p>
          <div class="w3-col s12 m12 l12" style="display: inline-block; text-align: center">
              <form class=""  action="javascript:" method="post" >
              <div class="  w3-col s12 m12 l4">
              <label class="container padd_cont">
              <input type="radio" checked="checked" name="ticket" id="ticket" value="s" required="" class=" font-size1 font-size14">Support and Contact us
              <span class="checkmark"></span>
              </label>
              </div>
               <div class="  w3-col s12 m12 l4">
             <label class="container">
               <input type="radio" name="ticket" id="ticket" value="b" required="" class="font-size1 font-size16">Business
               <span class="checkmark"></span>
               </label>
               </div>
                <div class="  w3-col s12 m12 l4">
               <label class="container">
               <input type="radio" name="ticket" id="ticket" value="f" required="" class="font-size1 font-size16">Feedback
               <span class="checkmark"></span>
               </label>
               </div>

            <div class="w3-col s12 m12 l12  w3-margin-top w3-margin-bottom" style="display:block; text-align: center;font-size: 15px;">
            <textarea id="message" placeholder="How can we help you ?"  maxlength="200" class="w3-text-white font-size1" title="maximum 200 character allowed"></textarea><br />
            <span class="error contctus_msg" id="error-message" style=""></span>
            </div>


             <div class="w3-col s12 m12 l12  w3-margin-top w3-margin-bottom" style="display:block; text-align: center">
                 <div class="w3-col s6 m3 l3" style="width: 25%"> </div>
            <div class="w3-col s12 m6 l6" style=" ">
           <button type="reset"  class="w3-button w3-text-white w3-green1 font-form  w3-round" >cancel</button>
           </div>
           <div class="w3-col s12 m6 l6">
            <button  type="button" onclick="sendTicket()" class="w3-green1 w3-button   w3-text-white margin-top20  padding-four font-form w3-round" style=" ">Submit</button> <br />

          </div>

            </form>
          </div>
           <div  class="w3-center error contctus_msg" id="ticket_respons_msg" style=""></div>
           <!--       <div class="w3-center error contctus_msg" id="ticket_respons_no"></div>-->


          </div>
       </div>
       <div class="w3-col s12 m6 l3"></div>
       </div>
   <!-- !slider----->
      </div>    </div>
    <!-- Kids Container---->

<script>
function sendTicket()
{
     $(".error").html('');
     var selectedticket = $("input:radio[name=ticket]:checked").val();
     var msg=$("#message").val();
     if(msg==''){ $("#error-message").html("message required"); return false;  }
     var Container="ticket_respons_msg";
     var apiBody = new FormData();
     apiBody.append("partnerid", PARTNER_ID);
     apiBody.append("userid",Userid);
     apiBody.append("msg",msg);
     apiBody.append("tag",selectedticket);
     runAjax(GET_TICKET, apiBody, Container);

}
</script>

<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
