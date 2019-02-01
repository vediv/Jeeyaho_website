<?php  require_once 'config/auth.php'; ?>
<?php $viewAllId=isset($_REQUEST["cid"])?$_REQUEST["cid"]:""; $redirect=isset($_REQUEST["redirect"])?$_REQUEST["redirect"]:$baseUrl; if($viewAllId=="") header("Location:index.php"); ?>
<?php require_once 'includes/header.php';?>


<body onload="initListing()" id="get_token">
<?php require_once 'includes/navigation.php';?> 
    
    <div class="w3-seprator-top"></div> <!-- 60px top-->
    
     <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl."/category/".$redirect; ?>">HOME</a> / </li><li><a href="" class="last"> <?php echo $_REQUEST["category"]?></a></li></ol>
        </div>    
  </div>
    
     <div class="w3-seprator"></div> <!-- 20px margin-->
    
     
     
     <div class="w3-row " style="min-height: 100%;">
        
         <div class="main-container w3-row-padding darkBg card-holder" id="getViewAll" style="min-height: 100vh">
            
            
            
           
            
         
        </div>
         <div class="w3-col s12 m12 l12 w3-center" id="getViewAllPlaceholder"></div>
         <div class="w3-col s12 m12 l12 w3-center w3-hide" id="loadMore"><button class="adore-btn" onclick="loadMore()">Load More</button></div>
     </div>    
     
     
     
     
     
     
     
     
     
      <div class="w3-seprator"></div>
   <div class="w3-seprator"></div>
    <div class="w3-seprator"></div>

        
    <script>
        function loadMore()
        {
            getViewAll(20,ViewAllPgCount)
        }
    
    </script> 
    

<?php require_once 'includes/footer.php';?>

    
