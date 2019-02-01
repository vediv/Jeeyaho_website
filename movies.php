
<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<body onload="initMovies()" id="get_token" class="">
<?php require_once 'includes/navigation.php';?> 
    
   <div class="w3-seprator-top"></div> 
  <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl?>/index">HOME</a> / </li><li><a href="movies" class="last">Movies</a></li></ol>
        </div>    
  </div>
  
    <!-- slider--> 
   <!--  <div class="w3-row">
        <div class="s12 m12 l12 w3-col" id="carousel_only">
      
            <img class="w3-image" width="100%" src="images/banners/placeholderL.jpg">
              
       </div>
  
   </div>-->
   <!-- !slider--> 


 <!-- Tab Container--> 
<div class="w3-row darkBg fullHeight">
    <div class="main-container" > 
             <div  id="movies-result" style="bottom: 100px" >
               <div class="w3-row-padding bxslider1" >   
                 <?php for($i=0;$i<3;$i++) :?>
                  <div class="w3-col s12 m4 l4 lazy-container"> 
                    <div class="w3-card-2"> 
                     <img  src="<?php echo $baseUrl?>/images/banners/placeholderS.png" /> </a> 
                    </div>
                </div>
                      <?php endfor; ?>  
                </div>
             </div>
         <div class="w3-col s12 m12 l12 w3-center w3-hide" id="loadMore"><button class="adore-btn" onclick="getMovies(movie_Parent_id,'movies-result','mediaInfo',moviePg,12)">Load More</button></div>
          
    </div>
</div>
<!-- !Tab Container-->      
    
 
  
    
  <br /><br />
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>    
    
 