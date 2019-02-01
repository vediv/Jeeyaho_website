<?php
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';
$patID= $_REQUEST['catid'];

?>
<body onload="initMovieSubCategory(<?php echo $patID; ?>)" id="get_token">
    <style>
        @media (min-width:100px) and (max-width:600px)
         {
            .arrowR, .arrowR:hover {  width: 32px;   height: 32px;  background-size: 32px 32px; }
             .arrowL, .arrowL:hover {  width: 32px;  height: 32px;  background-size: 32px 32px;    } 
            .playBtn, .playBtn:hover { width: 40px;height: 40px;background-size: 40px 40px;left: 15%;bottom: 5%;z-index: 2;  }
            .header{z-index: 3;} }
    </style>
   <?php require_once 'includes/navigation.php';?>   
  <div class="w3-seprator-top"></div> 
  <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl?>/index">HOME</a> / </li><li><a href="movies" class="last">Movies</a> </li><!--<li><a href="Moviesall" class="last">Moviesall</a></li>--></ol>
        </div>    
  </div>
  <div class="container fullHeight">    
  <div class="w3-col m12 s12 l12 w3-center font-size " id="category-title">
   <!-- <img class="w3-image" width="100%" src="images/banners/placeholderL.jpg">-->
   </div>     
       <div class="w3-row"> 
            <div class= "" id="subcategoryMovies">
            	   <?php for($i=0;$i<3;$i++) :?>
                  <div class="w3-col s12 m3 l3 lazy-container"> 
                    <div class="w3-card-2"> 
                    <img  src="<?php echo $baseUrl?>/images/banners/placeholder@.png" /> 
                     <div class="card-text">
                      <h4 class="w3-center" ></h4>
                     </div>
                    </div>
                </div>
                      <?php endfor; ?>              	
           <div class="card-text ">
                 <h4 class="w3-center" ></h4>
            </div> 
        </div>
    </div>   
    </div>
   
   
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>

