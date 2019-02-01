<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<?php  $tree=$_SERVER["QUERY_STRING"]; ?>

<body onload="init_view_type_4()" id="get_token">
<?php require_once 'includes/navigation.php';?> 
    
    <div class="w3-seprator-top"></div> <!-- 60px top-->
    
     <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl ?>/">HOME</a> / </li><li><a href="" class="last"> <?php echo $tree; ?></a></li></ol>
        </div>    
  </div>
    
     <div class="w3-seprator"></div> <!-- 20px margin-->
    
     
     
     <div class="w3-row " style="min-height: 100%;">
        
         <div class="main-container w3-row-padding darkBg card-holder" id="view_type_4_container">
            
            
            
           
            
         
        </div>
     </div>    
     
     
     
     
     
     
     
     
     
      <div class="w3-seprator"></div>
   <div class="w3-seprator"></div>
    <div class="w3-seprator"></div>
  

<?php require_once 'includes/footer.php';?>

    
