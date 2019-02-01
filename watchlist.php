<?php
// Date in the past
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache");
header("Pragma: no-cache");

?>
<?php  require_once 'config/auth.php'; ?>
<?php if(empty($_SESSION['user_id'])){ header("Location:index.php");}
unset($_SESSION['paystatus']);
?>
<?php require_once 'includes/header.php';
//$tabs=isset($_GET['tabs'])?$_GET['tabs']:'profile';
$tag=isset($_GET['tag'])?$_GET['tag']:'continue_watching';

?>
<style type="text/css">
body{background: #334a60 !important;}

</style>


<body onload="initWatchList();" id="get_token" >
<?php require_once 'includes/navigation.php';?>
<div class="w3-seprator-top"></div> <div class="w3-seprator"></div>
   <!-- !seprater-->
<!-- Tab Container-->
<div class="w3-row channel-container" style="min-height: 100%;">

          <div class="w3-col s12 m10 l10 w3-row-padding w3-margin-left_n">
<div class="w3-center">
    <div class="card hovercard">
             <!--
               <header class="w3-container w3-graywood">
                             <h3 class="w3-bold w3-text-white">PROFILE</h3>
                             </header>-->



 <div class="w3-bar w3-bar1 w3-team w3-text-center w3-col s12 m12 l12">
   <?php //echo $tag; ?>
     <div class="w3-col s2 m2 l2">&nbsp;</div>
 <div class="w3-col s12 m3 l3">
  <button class="w3-bar-item w3-bar-item1 w3-button font-size tablink <?php echo $tag=='continue_watching'?'w3-red':''  ?>" onclick="openlist('continue_watching')" style=" ">Continue Watching</button></div>
  <div class="w3-col s12 m2 l2">
  <button class="w3-bar-item w3-bar-item1 w3-button  font-size tablink <?php echo $tag=='history'?'w3-red':''  ?>" onclick="openlist('history')" style=" ">History</button></div>
  <div class="w3-col s12 m2 l2">
  <button class="w3-bar-item w3-bar-item1 w3-button  font-size tablink <?php echo $tag=='favorite'?'w3-red':''  ?>" onclick="openlist('favorite')" style="">Favourite</button></div>
  <div class="w3-col s12 m2 l2">
  <button class="w3-bar-item w3-bar-item1 w3-button  font-size tablink <?php echo $tag=='watchlater'?'w3-red':''  ?>"  onclick="openlist('watchlater')">Watch Later</button>
</div></div>

<div class=" w3-margin-top  w3-col s12 m12 l12">
  <div class=" ">
  <?php
  switch($tag)
  {
   case "continue_watching":
   include_once 'continue_watching_template.php';
   break;
  case "history":
   include_once 'history_template.php';
   break;
   case "favorite":
   include_once 'favorite_template.php';
   break;
   case "watchlater":
   include_once 'watchlater_template.php';
   break;
  }

   ?>
  </div>

 </div>


          </div>
         </div>

     </div>
   </div>


 
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>



<script type="text/javascript">
   
    function openlist(listName) {
            window.location.href="watchlist?tag="+listName; 
       
      
    }
    
</script>
