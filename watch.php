<?php  require_once 'config/auth.php'; ?>
<?php $entryID_from_url=$_REQUEST['entryID'];$entryId = $entryID_from_url;  ?>
<?php require_once 'includes/header.php'; ?>
<style type="css/text">
	.w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {
    vertical-align: calc !important;}
    #boxscroll {padding: 40px;	height: 220px;	width: 300px;	border: 2px solid #354859;	overflow: auto;  margin-bottom:20px;}
/*.nicescroll-cursors{background-color:#000000 !important}*/
#showcontent {  position:absolute;  width:100%;  height:100px;  bottom:0;  left:0;  z-index:999;
  background-color: rgba(90%, 90%, 90%, 0.8);}
</style>

<body onload="initWatchVideo()" >
<?php require_once 'includes/navigation.php';?>
<div class="w3-row darkBar w3-hide-medium w3-hide-small">
        <!--
        <div class="main-container w3-row-padding ">
                    <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl?>">HOME</a> / </li><li><a id="category_name" href="">CATEGORY</a> / </li> </ol>
                </div>  -->

  </div>

<div class="w3-seprator w3-hide-large"></div>
<div class="w3-seprator-top"></div>
 <div class="w3-row ">
        <div class="main-container w3-row-padding">
            <!-- left area-->
            <div class="w3-col l9 s12 m9" style="position: relative; margin-top: 10px;">  <!-- PLAYER-->
                <div class="w3-card-2 player w3-animate-opacity  hero-image" id="watch-video" id="showcontent" style="min-height: 51%" style="">
                    <img src="<?php echo $baseUrl?>/images/placeholder@3x.png" class="w3-images" />
                </div>
                <span  onclick="document.getElementById('id01').style.display='block'" class="" id="price_detail" style="cursor: pointer;"></span>
                <div class="w3-text-white w3-bold video-title-text"  id="video-title" style="">  </div>
                <div class="w3-col l9 s11 m9 time-dur-video width_40" style=" border: 0px solid red; display: inline-flex">

                <div class="w3-center w3-hide-small"  style="width:auto !important;"><i class="fa fa-clock-o"></i></div>

                <div class="w3-button w3-button-watch w3-round-xlarge w3-right" id="time-durvideo" style="cursor: default; width:auto !important;"> </div>

                <div class="w3-button w3-button-watch w3-round-xlarge" id="cat_n" style="margin:0px 0 0 9px; width:auto !important;"> </div>

                <div class="w3-button w3-button-watch w3-round-xlarge" id="plan_F" style="text-transform: uppercase; margin: 0px 10px; width:auto !important;"> </div>

                </div>

                <div class="w3-col l12 s12 m12 ">
                 <div class="w3-content w3-responsive marg-neg-top" style="">
                  <table class="w3-table" id="boxscroll" >
                         <tr class="video-user-action">
                         <td>
              <div class="w3-row add_bar">
                  <table style=" ">
                      <tr><td width="10%"  class=""><div class="w3-heart  w3-pointer" id="resultlike" onclick="likeDislike('L')" style="display: flex; "></div>
                      	<span id="likes" style=" display: flex; padding: 3px 0px;"></span></td>
                          <td width="14%"  class=" " style="padding-right: 20%; "><div class="w3-heart-break w3-pointer" id="resultdislike"  onclick="likeDislike('D')" style=" "></div>
                          	<span id="dislikes" style=" display: flex; padding: 3px 0px;"></span></td>
                       <td width="65%"  class=""><div class="w3-addto w3-pointer w3-tooltip tooltip  w3-right" onclick="addFavroiteVideo('<?php echo $entryId; ?>')" style="margin-left: 21px">
                          	<span class="w3-text w3-tag w3-small w3-round tooltiptext">Favourite </span></div></td>
                       <td width="4%" > <div class="w3-addto-watch w3-pointer w3-tooltip tooltip" onclick="addwatchlatervideo('<?php echo $entryId; ?>')"  style=" ">
                         	<span class="w3-text w3-tag w3-small w3-round tooltiptext">Watchlater </span></div> </td>
                         <td width="15%"  class=""> <span class="w3-pointer">
                       <div class="dropdown" style="margin : 0px; "><span class="w3-addto-share"></span>
                         <div class="dropdown-content">
						<a  id="fbShare" href="javascript:" title="Facebook share" ><img src='<?php echo $baseUrl?>/images/icons/fb.png'  width="32"></a>
						<a target="_blank" onclick="return !window.open(this.href, <?php echo $applicationName?>, 'width=500,height=500,width=500,height=500,left=500, top=100, scrollbars, resizable')" href="https://twitter.com/share?url=<?php echo "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>&amp;text=Watch video &amp;hashtags=<?php echo $applicationName?>" title="Twitter share" target="_blank"><img src='<?php echo $baseUrl?>/images/icons/twitter.png' width="32"></a>
						<a target="_blank" target="_blank" onclick="return !window.open(this.href, <?php echo $applicationName?>, 'width=500,height=500,left=500, top=100, scrollbars, resizable')" href="https://plus.google.com/share?url=<?php echo "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>" title="Google Plus Share" target="_blank"><img src='<?php echo $baseUrl?>/images/icons/g.png'  width="32"></a>
                         </div>
                         </div>
                         </span> </td>
                      </tr>
                  </table>

              </div>
                                  <br />

                                <!--
                                 <div class="w3-row" style="background-color: #1d2832; border-radius: 50px;">
                                      <table style="margin-top: 10px;">
                                          <tr><td width="20%"><div class="" id="a" ></div>  </td>
                                              <td width="20%" style=""><div class=" " id="b"></div>  </td>
                                              <td  width="20%" ><div id="c"  style=""> </div></td>
                                             <td width="20%"> <div id="d" > </div> </td>
                                          </tr>
                                      </table>
                                 </div>   -->


                               </td>
                         </tr>

                     </table>

                </div>






                <div class="w3-seprator10px"></div> <!-- 20px margin-->
                <div class="w3-content  description ">
               <h2 class=" font10">Storyline</h2>
                   <!--         <p id="short_discription" class="w3-bold w3-text-white">Loading...</p>  <br>-->
                    <p id="long_discription"  class="w3-text-white">Loading...</p>
                      <p id="demo"  class="w3-text-white  font-size1 "></p>

                </div>

                 <div class="w3-col l3 s12 m3" style="display: inline-flex">
                 	 <div class="w3-col l4 s3 m4" style="">
                 <div id="SubGenreName" class="w3-bold  font10"></div></div>
                 <div class="w3-col l8 s9 m8" style="">
                 <div id="SubGenre"  class="w3-text-white   font10" style=""></div> </div></div>

                 <div class="w3-col l3 s12 m3" style="display: inline-flex">
                 	 <div class="w3-col l4 s3 m4" style="">
                 <div id="DirectorName" class="w3-bold  font10"></div> </div>
                  <div class="w3-col l4 s9 m4" style="">
                 <div id="Director" class="w3-text-white    font10" style=" "></div></div></div>

                 <div class="w3-col l3 s12 m3" style="display: inline-flex">
                 	 <div class="w3-col l3 s3 m4" style="">
                <div id="CastName" class="w3-bold  font10"></div></div>
                 <div class="w3-col l4 s9 m4" style="">
                 <div id="Cast"class="w3-text-white    font10" style=" "></div> </div></div>
                <div class="w3-seprator"></div> <!-- 20px margin-->


            </div>
           </div>   <!-- !left area-->


             <!-- right area-->
              <!-- <div class="w3-col l1 s1 m1" style="">&nbsp;</div>-->
            <div class="w3-col l2 s12 m2" style="">
                <div class="w3-content posi_rela niceScroll "  id="" style="overflow-y: scroll; overflow-x: hidden; height: 90%; position: absolute; top: 9px">
                      <div class="w3-col l10 s12 m12 w3-content w3-text-white w3-bold  margin-left35 w3-container" style=" background: #18b5e0 !important; ">
                     <!-- PLAYLIST ITEMS-->
                        <h2 class=" font-size">Suggested Videos</h2>
                      </div>
                    <br>
             <div id="suggested-video" class="" style="">
             <span id="related-placeholder">
                 <?php for($i=0;$i<3;$i++) : ?>

                                  <div class="w3-col s12 m10 l10" style="margin-left: 40px">
                                  <div class="w3-card-2 vidThumb">
                                       <img class="" src="<?php echo $baseUrl?>/images/placeholder@3x.png">
                                   </div>
                                  </div>
                              <?php endfor;?>

                </span>
                </div>
                    <p>&nbsp;</p>
                 <!-- !PLAYLIST ITEMS-->
                 </div>

                </div>
            </div>
            <!-- right area-->

        </div>

  <!--<div id="id01" class="w3-modal w3-modal2">

    <div class="w3-modal-content w3-animate-zoom w3-card-4">  <div>
      <header class="w3-container">

        <h2 class="w3-center w3-text-black w3-bold">Biocine</h2>
      </header>
      <div class="w3-container">
        <p class="w3-text-gray w3-center">For single video please click on PAYPERCLICK otherwise click on Subscribe.</p>

      </div>
      <div class="w3-seprator"></div>
      <div class="w3-container">
           <a href="<?php echo $baseUrl ;?>/subscription"><div  class="w3-button w3-blue w3-left">SUBSCRIBE</div></a>
           <a href="<?php echo $baseUrl ;?>/payclick"><div  class="w3-button w3-blue w3-right">PAY PER CLICK</div></a>
      </div>
         <span onclick="document.getElementById('id01').style.display='none'"
         class="w3-button w3-display-topright">&times;</span>
    </div>
  </div></div> -->

  <div id="id01" class="w3-modal w3-modal2">

    <div class="w3-modal-content w3-animate-zoom w3-card-4 w3-modal-content1" style="top:36%;background-image: url(<?php echo $baseUrl ;?>/loginbg1.jpg); background-position:83% 114%">  <div>
      <header class="w3-container">

        <h2 class="w3-center w3-text-white w3-bold font-size1">Jeeyaho</h2>
      </header>
      <div class="w3-container w3-text-center " style="text-align: center">
        <p class="w3-text-gray  font-size" style="color: #d1d1d1 !important;">For single video please click on PAYPERCLICK otherwise click on Subscribe.</p>

      </div>
      <div class="w3-seprator"></div>
      <div class="w3-container">


          <form method="post" action="<?php echo $baseUrl ;?>/subscription">
         <!-- <input type="text" id="price_val_sub" name="price_val">-->
          <input type="hidden" id="entryid_sub" name="entry_id_val" >
           <div class="w3-col s6 m6 l6 w3-container">
   <button   type="submit"  class="w3-button w3-left  w3-green1 font-form  padding-both w3-round">Subscribe</button>
   </div>

           </form>
 <div class="w3-col s6 m6 l6 w3-container  w3-right">
           <form method="post">
           <!--<input type="hidden" id="price_val_pay" name="price_val" >-->
           <input type="hidden" id="entryid_pay" name="entryID">

  <button   type="button" onclick="PayPerClick()" class="w3-green1 w3-button  w3-right padding-four font-form w3-round">PAY PER CLICK</button> <br />

           </form>
      </div></div>
         <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright" style="background: #949393 !important;">&times;</span>
    </div>


    <div class="w3-seprator"></div>
   </div></div>
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
  <!--<script type="text/javascript" src="layouts/js/app.js"></script>-->
    <script>
    function DisplayPriceModal(price_data, entryid_video,modalopenid)
    {
        // alert(entryid_video+"--"+modalopenid);
          $("#price_val_sub").val(price_data);
          $("#price_val_pay").val(price_data);
           $("#entryid_sub").val(entryid_video);
          $("#entryid_pay").val(entryid_video);
 document.getElementById(modalopenid).style.display='block';

    }
    </script>
 <script>
var url="<?php echo "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>";

document.getElementById('fbShare').onclick = function() {
  FB.ui({
    method: 'share',
    display: 'popup',
    href: url,
  }, function(response){});
}
 </script>


<!--
<script>
  $(document).ready(function() {
	var nice = $("html").niceScroll();
	$("#div1").html($("#div1").html()+' '+nice.version);
    $("#boxscroll").niceScroll({cursorborder:"",cursorcolor:"#1d2832",boxzoom:true,touchbehavior:true}); // First scrollable DIV
  });
</script>-->

<script>
function PayPerClick()
 {
     var entryid=$("#entryid_pay").val();
     //alert(entryid+"--"+baseUrl);
     //window.location.href="<?php echo $baseUrl ;?>/payclick?"
     document.location ="<?php echo $baseUrl ;?>/payclick/"+entryid;
 }
    </script>
