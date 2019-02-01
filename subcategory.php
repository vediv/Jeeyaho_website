<?php
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';
$patID= $_REQUEST['catid'];

?>
<body onload="initSubCategory(<?php echo $patID; ?>)" id="get_token">

    <style>
        @media (min-width:100px) and (max-width:600px)
        {
            .arrowR, .arrowR:hover {  width: 32px;   height: 32px;  background-size: 32px 32px; }
             .arrowL, .arrowL:hover {  width: 32px;  height: 32px;  background-size: 32px 32px;    }

            .playBtn, .playBtn:hover { width: 40px;height: 40px;background-size: 40px 40px;left: 15%;bottom: 5%;z-index: 2;            }
            .header{z-index: 3;}        }
    </style>
   <?php require_once 'includes/navigation.php';?>

  <div class="w3-seprator"></div> 
<!--
  <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl?>/home">HOME</a> / </li><li><a href="originals" class="last">Originals</a>  </li>-->
<!--<li><a href="subcategory" class="last">subcategory</a></li>--></ol>
      <!--
        </div>    
        </div>-->
      

   

    <!-- Home setting---->
      <div class="w3-row fullHeight ">
    
        <div class="s12 m12 l12" width="100%" id="category-image">  
           <!-- <img class="w3-image" width="100%" src="images/banners/placeholderL.jpg">-->
      

   </div>

   <div class="w3-seprator-top"></div>
       <div class="w3-row ">
      
            <div class="s6 m6 l6  w3-row-padding " id="subcategory-image">
          <div class="w3-row-padding">   
                 <?php for($i=0;$i<4;$i++) :?>
                  <div class="w3-col s12 m3 l3 lazy-container"> 
                    <div class="w3-card-2"> 
                     <img  src="<?php echo $baseUrl?>/images/banners/placeholderL.png" /> </a> 
                    </div>
                </div>
                      <?php endfor; ?>  
                </div>

            </div>
      
    </div> 

      <div class="w3-row" id="category-home">

      </div> 
  <div class="w3-seprator"></div>
  <div class="w3-col s5 m5 l5 w3-center">&nbsp;</div>
  <div class="w3-col s1 m1 l1 w3-center padd_cont">
   <button class="load_more w3-button w3-left  w3-green1 font-form  padding-both w3-round" id="load_more_button" >load more</button>
  </div> 
   <div class="w3-col s5 m5 l5 w3-center">&nbsp;</div>
</div>
<div class="w3-seprator-top"></div>
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
<script type="text/javascript">
$(document).ready(function(){sliderIntrvl=setInterval(slider,5000); })
$(document).ready(function() {
var page=0;var limit=8;
var catIdNew=<?php echo $patID; ?>;
//alert(catIdNew);
var track_click = 0; //track user click on "load more" button, righ now it is 0 click
var total_pages =0;
$.post(GET_CATEGORY_DATA, {page: track_click,partnerid:PARTNER_ID,categoryid:catIdNew,limit:limit,countrycode:countrycode}, function(JSONresponse){
  var JSONobject = JSON.parse(JSONresponse);
  var total_video= JSONobject.total_video;
  total_pages=Math.ceil(total_video/limit);
  var resultShow=buildsubcategory(JSONobject);
  $("#subcategory-image").html(resultShow);
  track_click++;
 });


$(".load_more").click(function (e) { //user clicks on button
        $(this).hide();
         //hide load more button on click
        //$('.animation_image').show(); //show loading image
        if(track_click <= total_pages) //make sure user clicks are still less than total pages
        {
                $.post(GET_CATEGORY_DATA, {page: track_click,partnerid:PARTNER_ID,categoryid:catIdNew,limit:limit,countrycode:countrycode}, function(JSONresponse){
                var JSONobject = JSON.parse(JSONresponse);
                var resultShow=buildsubcategory(JSONobject);
                $(".load_more").show(); //bring back load more button
                $("#subcategory-image").append(resultShow); //append data received from server
                //scroll page to button element
                $("html, body").animate({scrollTop: $("#load_more_button").offset().top}, 500);
                //hide loading image
                //$('.animation_image').hide(); //hide loading image once data is received
                track_click++; //user click increment on load button

                 }).fail(function(xhr, ajaxOptions, thrownError) {
               // alert(thrownError); //alert any HTTP error
                 $(".load_more").show(); //bring back load more button
                //$('.animation_image').hide(); //hide loading image once data is received
             });


             if(track_click >= total_pages-1)
            {
                  //reached end of the page yet? disable load button
                 _('load_more_button').style.visibility = 'hidden';
            }
         }

        });

//});

});



</script>
