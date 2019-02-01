<div id="Guest_user"></div>
<?php
//error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
 <style>
 	  .playBtn, .playBtn:hover {
                width: 40px;
                height: 40px;
                background-size: 40px 40px;
                left: 15%;
                bottom: 5%;z-index: 2;
            }
 </style>
<body onload="guest();" >

     <?php require_once 'includes/navigation.php';?>
     <script>
     
    
     
function  guest(){
   //alert("hii");
   var  html= '';
    //html+='<div id="dialog" style="display: none">';
   html+='<div id="id01" class="w3-modal">';
   html+='<div class="w3-modal-content skip_modal" style="">';
   html+='<div class="w3-container w3-center">';
   html+='<img src="images/welcome.png" style=" width: 100%;  height: auto; position: relative;z-index: -1;" class="lazy">';
   html+='<form action="javascript:"  onsubmit="return skip()" style="margin-top: -11px; ">';
  // html+='<div class="w3-col s4 m4 l4" style="width:100px">&nbsp</div>';
   html+='<div class="w3-container">'; 
   //html+='<div class="w3-col s12 m12 l7">';
   html+='<button type="submit" class="lazy butn_skip w3-text-white w3-button w3-center  w3-border" style="margin-top: -36px !important;"><span  onsubmit="return skip()"  class="w3-button" style="color: #4b4848;">Skip</span></button> <br />';
   html+='</div>';
  // html+='<div class="w3-col s4 m4 l4">&nbsp</div>';
   html+='</div>';
   html+='</form>';
    
     
     // html+='<tr><td style="" colspan="2" id="dobupdate_details"></td></tr>';
  
   html+='</div>';
   html+='</div>';
   html+='</div>';
            document.getElementById("Guest_user").innerHTML=html;
            document.getElementById('id01').style.display='block';
    
}
</script>
 
 </body> 