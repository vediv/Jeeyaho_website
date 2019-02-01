<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<meta name="keywords" content="Adosphere,Live TV,Captain TV,Jaihind Tv,Captain News"/>
<body onload="viewChannel()" id="get_token">
<?php require_once 'includes/navigation.php';?> 
    <div class="w3-seprator-top"></div> <!-- 60px top-->
<div class="w3-row darkBar"> <div class="main-container w3-row-padding ">
<ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl?>">HOME</a> / </li><li><a href="<?php echo $baseUrl?>/channels">Channel</a> / </li><li><a href="" class="last">live TV</a></li></ol>
 </div>   </div> <div class="w3-seprator"></div> <!-- 20px margin-->

 <div class="w3-row fullHeight">  <div class="main-container w3-row-padding">
<div class="w3-col l2 s2 m2" style="width: 200px"> &nbsp;</div>
<div class="w3-col l8 s12 m8">      <!-- PLAYER-->
<div class=" w3-content w3-card-2 player   w3-animate-opacity" id="watch-video" style=" ">     <!--<img src="images/banners/placeholderL.jpg" class="w3-images" />-->
</div>
<div class="w3-seprator10px"></div> <div class="w3-content w3-card-2   card-holder w3-row-padding w3-responsive" style="box-shadow: 0 1px 5px 0 rgba(31, 26, 26, 0.5),0 0px 0px 0 rgba(148, 138, 138, 0.6) !important;">
<div class="w3-responsive">   <br> <table class="w3-table"> <tr><td class="video-title " id="video-title">...</td></tr>
 </table>  <br>
</div>  </div>  
 <div class="w3-seprator10px"></div> 
 <div class="w3-content card-holder  description">
<p id="discription" style="color: #fff"> </p> <!--<p class="w3-center"><button class="w3-btn w3-button w3-gray w3-small">Show more</button></p>-->
</div><div class="w3-seprator10px"></div> <!-- 20px margin--> </div>
 <div class="w3-col l2 s2 m2" style="width: 200px"> &nbsp;</div>    <!-- !left area-->
  <!-- right area-->
 <div class="w3-col l4 s12 m4">  <div class="w3-content">   <div class="card-holder w3-row-padding">
 <!--<h4 >Recommended </h4>-->                      
  <div class="w3-container"><div class="w3-row-padding w3-center" >
 <div class="w3-col s12 m12 l12"> <div class=" " style="padding-left: 24px; padding-right: 24px;">
 <?php include_once 'includes/adConfig.php';?>
 </div>  </div>
<div id="recommended_result"> </div> </div></div></div></div>
<div class="w3-seprator"></div>
<!--   <div class="card-holder w3-row-padding ">  <h4 >Social Fans</h4>  <hr>  <?php include 'includes/socialfans.php';?><br>  </div>-->
</div> <!-- right area-->
</div>   </div>
<div class="w3-seprator"></div>  <div class="w3-seprator"></div>  <div class="w3-seprator"></div>
<?php require_once 'includes/footer.php';?>
  <!--<script type="text/javascript" src="layouts/js/app.js"></script>-->
<script>    var track_page =0; 
$("#load_more_button").click(function (e) { //user clicks on button
$("#load_more_button").html('<center><div class="slice" > <div data-loader="spinner"></div></div></center>');
          //page number increment everytime user clicks load button
var page_size=8;
track_page=track_page+page_size;
getRelatedVideo(track_page,page_size); //load contentif(track_page>0){ 
 $("html, body").animate({scrollTop: $("#load_more_button").offset().top}, 800);
 }
});
</script>