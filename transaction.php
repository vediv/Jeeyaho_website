<?php
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', TRUE);
  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<style type="text/css">
    .w3-striped tbody tr:nth-child(2n) {
    background-color:rgba(128,128,128, 0.4);    color: white; font-weight: normal;}
    .w3-bordered tr, .w3-table-all tr {    border-bottom: 0px solid #ddd; font-weight: normal;}
    .w3-table th:first-child,  .w3-table-all th:first-child   {
    padding: 16px !important; font-weight: normal; font-size: 1.2em}
      .w3-table th,  .w3-table-all th {
    padding: 20px 12px; font-weight: normal; font-size: 1.2em}
    table.w3-table td { padding: 20px 12px; font-size: 1.1em !important}
     .w3-table td:first-child { padding: 16px !important; font-size: 1.1em}
     .margn-left28 {    margin-left: 8% !important;}
     .w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th { vertical-align: initial;}
     @media (min-width:200px) and (max-width:760px) { table.w3-table td { padding: 0px 4px 0px 4px;}
      .w3-table th,  .w3-table-all th { padding:0px 4px 0px 4px; border: 0px !important}
       .margn-left28 {    margin-left: 0% !important;}
     }
</style>
<body onload="inittrans_history()" id="get_token">

   
   <?php require_once 'includes/navigation.php';?>  
<div class="container fullHeight">
<div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
      <!-- sliderimage--> 
<div class="w3-seprator-top"></div>
 <header class="w3-container w3-graywood">
                <h3 class=" w3-text-white w3-center">Transaction History</h3>
                </header>
      <!-- <h3 class="w3-center">Transaction History</h3>-->
       <div class="w3-row " style="">
        <div class="w3-col s12 m10 l10 w3-row-padding margn-left28" style="">
         <div class="w3-card-4 w3-bluewood">                 
         <div class="w3-responsive">
         <div id="transaction_history"> 
         </div>
         </div></div>
       </div>
       </div>
    <!-- Transaction history---->
    </div> 
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
 </body>