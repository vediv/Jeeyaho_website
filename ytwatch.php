<?php  require_once 'config/auth.php'; ?>
<?php $entryId = $_REQUEST['entryID'];?>
<?php require_once 'includes/header.php';?>


<body onload="watchYtCase()" id="get_token">
<?php require_once 'includes/navigation.php';?> 
    
    <div class="w3-seprator-top"></div> <!-- 60px top-->
    
     <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="index.php">HOME</a> / </li><li><a href="ytcase.php">Ytcase</a> / </li><li><a href="" class="last">video</a></li></ol>
        </div>    
  </div>
    
     <div class="w3-seprator"></div> <!-- 20px margin-->
    
 
  <div class="w3-row fullHeight">
        <div class="main-container w3-row-padding">
            <!-- left area-->
            <div class="w3-col l8 s12 m8">
                 <!-- PLAYER-->
                <div class="w3-content w3-card-2 player w3-animate-opacity" id="watch-ytcase">
                    <!--<img src="images/banners/placeholderL.jpg" class="w3-images" />-->
                </div>
                 <!-- !PLAYER-->
                 
               
                
                <div class="w3-seprator10px"></div> <!-- 20px margin-->
                <div class="w3-content w3-card-2 w3-hover-shadow card-holder w3-row-padding">
                    
                     <div class="w3-responsive">
                         <br>
                     <table class="w3-table">
                         <tr><td class="video-title " id="video-title">...</td></tr>
                          
                     </table>
                         <br>
                     </div> 
                         
                </div>
                
                
                
                <div class="w3-seprator10px"></div> <!-- 20px margin-->
                <div class="w3-content card-holder  w3-container description">
                    <h2>Description</h2> 
                    <hr>
                    <p id="discription">Loading...</p>  
                    
                    
                    
                    <!--<p class="w3-center"><button class="w3-btn w3-button w3-gray w3-small">Show more</button></p>-->
                    
                </div>
                
                
                
                <div class="w3-seprator10px"></div> <!-- 20px margin-->
                
                 
                <div class="w3-content card-holder relative w3-container description">
                    <h2>Related Videos</h2> 
                    <hr>
                     <span id="related-video">
                     <span id="related-placeholder">
               
                
                 <?php for($i=0;$i<3;$i++) : ?>
                   
                    <div class="w3-col s12 m4 l4 ">
                    <div class="w3-card-2 vidThumb">
                         <img class="w3-image" src="images/banners/placeholderS.jpg" >
                         
                     </div>
                    </div>
                <?php endfor;?> 
                    
               
                </span>
                </span>
                    <p>&nbsp;</p>
                  <div class="w3-center w3-col s12 m12 l12">
                      <button class="adore-btn " id="load_more_button">Load more</button>
                  </div>
                    
                    
                </div>
                
            
            </div>
            <!-- !left area-->
              
             <!-- right area-->
            <div class="w3-col l4 s12 m4 ">
                <div class="w3-content ">
                <div class="card-holder w3-row-padding ">
                        <h4 >Recommended Videos</h4>
                        <hr>
                        <div class="w3-container">
                            
                            
                            <div class="w3-row-padding w3-center" >
                                <div class="w3-col s12 m12 l12 ">
                                    <div class=" " style="padding-left: 24px; padding-right: 24px;">
                                        <?php include_once 'includes/adConfig.php';?>
                                     </div>
                                </div>
                                    
                                <div id="recommended_result"  >     
                
                                </div>    
                            </div>
                                
                                
                        </div>
                            
                            
                            
                            
                    </div>
                
                </div>
                <div class="w3-seprator"></div>
                <div class="card-holder w3-row-padding ">
                     <h4 >Social Fans</h4>
                        <hr>      
                   
                        
                        <?php include 'includes/socialfans.php';?>
                        
                        <br>
                    
                </div>
            
                        
            
            </div>
            <!-- right area-->
            
        </div> 
  </div>
  
  
  
 
  
  
  
  
  
  
  <div class="w3-seprator"></div>
   <div class="w3-seprator"></div>
    <div class="w3-seprator"></div>
  

<?php require_once 'includes/footer.php';?>
  <!--<script type="text/javascript" src="layouts/js/app.js"></script>-->
    <script>
    var track_page =0; 
$("#load_more_button").click(function (e) { //user clicks on button
    
	 $("#load_more_button").html('<center><div class="slice" > <div data-loader="spinner"></div></div></center>');
          //page number increment everytime user clicks load button
         var page_size=8;
         track_page=track_page+page_size;
	 getRelatedVideo(track_page,page_size); //load content
         
          if(track_page>0)
                { 
                  $("html, body").animate({scrollTop: $("#load_more_button").offset().top}, 800);
                }
});
    </script>
    
    
