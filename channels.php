<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<body onload="initLiveTv()" id="get_token" style="background:url('<?php echo $baseUrl ?>/images/banners/channelBg.png') center fixed">
<?php require_once 'includes/navigation.php';?>


    <!-- slider-->
      <div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
      <!-- sliderimage-->
    <div class="w3-row ">
        <div class="s12 m12 l12" id="carousel_only">
          <img class="w3-image" width="100%" src="images/placeholder2.png">              
       </div>
   </div>
   <!-- !slider-->

  <!-- Tab Buttons-->
<div class="w3-row header header-menu">
    <div class="main-container w3-row-padding" id="w3-bar">

        <!--- Tab item will appear here from function  tabItems() -->

        </div>
</div>
<!-- !tab Buttons-->

 <!-- Tab Container-->
<div class="w3-row channel-container">
    <div class="main-container w3-row-padding" >

             <div id="liveTv" class="tabs">

               </div>











    </div>


    <!--- ads --->
    <div class="w3-seprator-top "><h1>&nbsp;</h1><h1>&nbsp;</h1></div> <!-- 20px margin-->
    <div class="w3-seprator-top "><h1>&nbsp;</h1><h1>&nbsp;</h1></div> <!-- 20px margin-->

 <div class="w3-row-padding w3-center">



        <div class="w3-col s12 m12 l12">

            <?php include_once 'includes/adConfig.php';?>
       </div>
 </div>
 <!--!ads--->

</div>
<!-- !Tab Container-->






<?php require_once 'includes/footer.php';?>

<script>

tabItems("liveTv");


function tabItems(activeId)
{


    var tab='<button class="w3-bar-item " id="tabliveTv" onclick=openTab("liveTv") >Entertainment</button>';


        _("w3-bar").innerHTML=tab;
        _("tab"+activeId).classList.add("active-bar");

}

function openTab(tabID) {

    _("w3-bar").innerHTML=""
    tabItems(tabID);
    var i;
    var x =__("tabs");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    _(tabID).style.display = "block";
}
</script>
