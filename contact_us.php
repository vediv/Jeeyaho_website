<?php  require_once 'config/auth.php'; ?>

<?php require_once 'includes/header.php';?>


<body onload="initaboutus()" id="get_token">
<?php require_once 'includes/navigation.php';?> 
    
    <div class="w3-seprator-top"></div> <!-- 60px top-->
    
    <div class="w3-row darkBar">
        <div class="main-container w3-row-padding ">
            <ol class="w3-breadcrumb"><li><a href="<?php echo $baseUrl?>/home">HOME</a> / </li><li><li><a class="last">Contact Us</a></li></ol>
        </div>    
  </div>
    
     <div class="w3-seprator"></div> <!-- 20px margin-->
     
     <div class="w3-row ">
         <div class="main-container w3-row-padding" style="min-height: 200px;">
             <div class="w3-col darkBg " id="Policy-data">
                  
                 <div class="w3-col s12 m12 l12 w3-text-white footer">
                     <?php include_once 'pages/contact.php';?>
                 </div> 
                 
             </div>    
            
        </div>
         
     </div>
     
     
     
     
     <div class="w3-seprator"></div>
   <div class="w3-seprator"></div>
    <div class="w3-seprator"></div>
  

<?php require_once 'includes/footer.php';?>

    <style>
        .last{font-size: 15px;  }
        #Search-data .w3-col{padding-top: 10px;padding-right: 5px;}
        </style>
