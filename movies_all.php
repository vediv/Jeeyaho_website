<?php
$catID=isset($_GET['catID'])?$_GET['catID']:'';
$pcatname=isset($_GET['catname'])?$_GET['catname']:'';
require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<body onload="initCategoryData(<?php echo $catID; ?>)">
    <style>
        @media (min-width:100px) and (max-width:600px)
        {
            .arrowR, .arrowR:hover {  width: 32px;   height: 32px;  background-size: 32px 32px; }
             .arrowL, .arrowL:hover {  width: 32px;  height: 32px;  background-size: 32px 32px;    }

            .playBtn, .playBtn:hover { width: 40px;height: 40px;background-size: 40px 40px;left: 15%;bottom: 5%;z-index: 2;            }
            .header{z-index: 3;}        }
    </style>
<?php require_once 'includes/navigation.php';?>
<!--<div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
<div class="w3-row">
          <div class="s12 m12 l12" id="carousel_only">
         <img class="w3-image" width="100%" src="images/placeholder2.png">
  </div>
</div>-->


      <div class="w3-row fullHeight ">

        <div class="s12 m12 l12" width="100%" id="category-image">
           <!-- <img class="w3-image" width="100%" src="images/banners/placeholderL.jpg">-->
      </div>
      <div class="w3-seprator-top"></div>
        <!-- <div class="w3-seprator"></div> -->
      <div class="w3-row darkBg fullHeight">
          <div class="main-container" >
            <div><p class="w3-content w3-container heading"><h4 style="margin-left:2%"><b><?php echo strtoupper($pcatname); ?></b></h4> </p>  </div>
                   <div  id="category_data" style="bottom: 100px" >
                     <!--<div class="w3-row-padding bxslider1" >
                       <?php for($i=0;$i<3;$i++) :?>
                        <div class="w3-col s12 m4 l4 lazy-container">
                          <div class="w3-card-2">
                           <img  src="<?php echo $baseUrl?>/images/placeholder1.png" /> </a>
                         </div>
                      </div>
                            <?php endfor; ?>
                      </div>-->
                   </div>

                   <div class="w3-col s12 m12 l12 w3-center" id="button_load">
                      <button class="load_more w3-button w3-center  w3-green1 font-form  padding-both w3-round" id="load_more_button">load more</button>
                   </div>
          </div>
      </div>


  <div class="w3-seprator"></div>
  <div class="w3-col s5 m5 l5 w3-center">&nbsp;</div>
  <!--<div class="w3-col s1 m1 l1 w3-center padd_cont">
   <button class="load_more w3-button w3-left  w3-green1 font-form  padding-both w3-round" id="load_more_button" >load more</button>
  </div> -->
   <div class="w3-col s5 m5 l5 w3-center">&nbsp;</div>
</div>
<div class="w3-seprator-top"></div>
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
<script type="text/javascript">
var pcid="<?php echo $catID; ?>";

$(document).ready(function(){sliderIntrvl=setInterval(slider,5000); })
function getMoviesubcategory(pcatid,Container){
 var page=0;var limit=12;
  var track_click = 0; //track user click on "load more" button, righ now it is 0 click
  var total_pages =0;
   $("#button_load").hide();
   //$("#music-result").html('');
   $.ajax({
    url:GET_CATEGORY_DATA,
    type:'POST',
    data: {page: track_click,partnerid:PARTNER_ID,categoryid:pcid,limit:limit,countrycode:countrycode,userid:Userid },
    headers: { 'token':token },
    success: function (JSONresponse) {
      var JSONobject = JSON.parse(JSONresponse);
      var total_video= JSONobject.total_video;
      var paging=JSONobject.paging;
      if(paging==null)
      {  _('load_more_button').style.visibility = 'hidden'; }
      total_pages=Math.ceil(total_video/limit);
      var resultShow=buildCategoryWithDataWithFirstImage(JSONobject);
      $("#category_data").html(resultShow);
      $("#button_load").show();
      track_click++;
    }
   });

$(".load_more").click(function (e) {

       $(this).hide();
       if(track_click <= total_pages) //make sure user clicks are still less than total pages
       {
            $.ajax({
             url:GET_CATEGORY_DATA,
             type:'POST',
             data: {page: track_click,partnerid:PARTNER_ID,categoryid:pcid,limit:limit,countrycode:countrycode,userid:Userid },
             headers: { 'token':token },
             success: function (JSONresponse) {
               var JSONobject = JSON.parse(JSONresponse);
               var resultShow=buildCategoryWithDataWithFirstImage(JSONobject);
               $(".load_more").show();
               $("#category_data").append(resultShow);
               $("html, body").animate({scrollTop: $("#load_more_button").offset().top}, 500);
               track_click++;
               }
            });

            if(track_click >= total_pages-1)
           {
                 //reached end of the page yet? disable load button
                _('load_more_button').style.visibility = 'hidden';


           }
        }

       });

}
</script>
