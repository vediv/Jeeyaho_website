<?php
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<body onload="initHome()"  id="get_token">
<!-- <body onload="login()" onbeforeunload="return initHome()"  id="get_token"> ---> 

     <?php require_once 'includes/navigation.php';?>  

    <div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
      <!-- Carousel-->
   <div class="container fullHeight">
   <!--
    <div class="w3-row ">
             <div class="s12 m12 l12" id="carousel_only">
             <img class="w3-image" width="100%" src="images/banners/placeholder@3x.png">              
          </div>
    
      </div>-->
   
   <!-- End Carousel-----> 
     
    <!-- Home Related ,Recommanded---->
    <div class="w3-row ">
        <div class="main-container w3-row-padding  ">
            <div class="s12 m12 l12  w3-row-padding darkBg " id="">
                
   
   
                
            </div> 
        </div>
    </div>
    </div>
    
    
     <!-- End Home Related ,Recommanded---->
      
   
  <div class="w3-seprator"></div>
 
  

<?php require_once 'includes/footer.php';?>
<script type="text/javascript">

$(document).ready(function(){sliderIntrvl=setInterval(slider,5000); }) 
$(window).resize(function(){getCarouselOnly()});

</script>
</body>