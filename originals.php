
<?php
//error_reporting(E_ALL & ~E_NOTICE);
//ini_set('display_errors', TRUE);
require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<body onload="initCategory()" id="get_token">
   <?php require_once 'includes/navigation.php';?>
    <div class="container fullHeight">
    <div class="w3-hide-large w3-hide-medium" style="height: 50px;"></div>
    <div class="w3-row">
        <div class="s12 m12 l12" id="carousel_only">
         <img class="w3-image" width="100%" src="images/placeholderjeeoguru.png">              
       </div>
   </div>

  <div class="w3-row w3-row-padding" id="category-home"> 
  	    <div class="w3-row-padding">   
                 <?php for($i=0;$i<3;$i++) :?>
                  <div class="w3-col s12 m4 l4 lazy-container"> 
                    <div class="w3-card-2"> 
                     <img src="<?php echo $baseUrl?>/images/banners/placeholderS.png"/> </a> 
                    </div>
                 </div>
                 <?php endfor; ?>  
        </div>
  </div> 
   </div> 
  <!-- !FEATURED VIDEO---->  
  <div class="w3-seprator"></div>
  <div class="w3-seprator"></div>
  <div class="w3-seprator"></div>
  
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
<script type="text/javascript">
$(document).ready(function(){sliderIntrvl=setInterval(slider,5000); }) 
$(window).resize(function(){getCarusel()});
var track_page = 0; 
$("#load_more_button").click(function (e) { //user clicks on button
	 $("#load_more_button").html('<center><div class="slice borderRed" style="position:static"> <div data-loader="spinner"></div></div></center>');
         track_page+=8; //page number increment everytime user clicks load button
	 getfeatured(track_page,8); //load content
});
</script>
 