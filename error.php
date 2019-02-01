<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>


<body onload="getMenu()" id="get_token">
<?php require_once 'includes/navigation.php';?> 
    
    <div class="w3-seprator-top"></div> <!-- 60px top-->
    
     <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl?>index">HOME</a> / </li><li><a href="<?php echo $baseUrl?>error" class="last">Page not found</a></li></ol>
        </div>    
  </div>
    
     <div class="w3-seprator"></div> <!-- 20px margin-->
    
     
     
     <div class="w3-row " style="min-height: 100%;padding-top: 10%">
        
         <div class="main-container w3-row-padding" id="watchListResult">
            
            
             <h1 class="w3-center"><i class="fa fa-4x fa-exclamation-triangle w3-text-red" ></i></h1>
             <h4 class="w3-center w3-text-shadow "><span class="w3-prussian_blue w3-padding">Error : Page not found.</span></h4>
            
         
        </div>
     </div>    
     
     
     
     
     
     
     
     
     
      <div class="w3-seprator"></div>
   <div class="w3-seprator"></div>
    <div class="w3-seprator"></div>
  

<?php require_once 'includes/footer.php';?>

    
