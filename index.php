<?php
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<script type="text/javascript">
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
</script>
<body onload="initHome()"  id="get_token">
<!-- <body onload="login()" onbeforeunload="return initHome()"  id="get_token"> --->

     <?php require_once 'includes/navigation.php';?>

   <!-- <div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>-->
      <!-- Carousel-->
   <div class="container fullHeight">
   	 <div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
    <div class="w3-row height-carousal">
    	  <div class="s12 m12 l12 " id="carousel_only">
          <!--<img class="w3-image" width="100%" src="images/logo_header_sm.png"> -->
       </div>

   </div>
   <!-- End Carousel----->

    <!-- Home Related ,Recommanded---->
    <div class="w3-row ">
        <div class="main-container w3-row-padding  ">
            <div class="s12 m12 l12 card-holder w3-row-padding darkBg card-holder " id="home-setting">
            <!--   <p class="w3-content w3-container heading font-size">&nbsp;</p>-->
                <div class="w3-row-padding bxslider1" >
                 <?php for($i=0;$i<4;$i++) :?>
                  <div class="w3-col s12 m3 l3 lazy-container">
                    <!-- <div class="w3-card-2">
                     <img  src="<?php echo $baseUrl?>/images/placeholder.png" /> </a>
                    </div> -->
                </div>
                      <?php endfor; ?>
                </div>
            </div>
        </div>
    </div>
    </div>


     <!-- End Home Related ,Recommanded---->


  <div class="w3-seprator"></div>

<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>

<script type="text/javascript">
$(document).ready(function(){sliderIntrvl=setInterval(slider,5000); })
$(window).resize(function(){getCarouselOnly()});

</script>

</body>
