<?php  require_once 'config/auth.php'; ?>
<?php if(empty($_SESSION['user_id'])){   header("");}
unset($_SESSION['paystatus']);
require_once 'includes/header.php';
?>
<style type="text/css">
    .w3-input {padding: 2px 9px !important; border: none !important; border-bottom: 1px solid #000  !important;    color: #686868;
    background-color: transparent !important; border-radius: 0px !important;}
    input, select {font-size:12px !important;    border-radius: 25px;    border: 0px solid #000;    background-color: transparent; color:#534d4d; margin:0;}
.price-selet a {padding: 0.5em 1.5em 0px 1.5em;}
::-moz-placeholder {    color: #8d8d8d; } .w3-btnB {font-size: 12px;}
.price-selet {padding: 4em 0em 0 0;}  
</style> 
<script type="text/javascript">
 if(loginStatus=="N"){ window.location=baseUrl+'/home';   }
</script>
<body onload="initSubscribe(); " id="get_token">
<?php require_once 'includes/navigation.php';?>
<div class="w3-seprator-top"></div> <div class="w3-seprator"></div>
<div class="w3-row channel-container fullHeight" >
    <div class="main-container ">   <div class="priceing-table w3l">   <div class="wrap">
             <div class="w3-uppercase w3-center w3-padding font20 font-size1" style="">Subscribe plan</div>             
            <div class="w3-seprator"></div><div class="w3-seprator-top w3-hide-large"></div><div class="w3-seprator-top  w3-hide-large"></div>
              <div id="Plansubscription"><!-- plans boxes-->               </div>               
        <div style="display: none;">
      	   <form method="post" name="redirect" id="myForm" action="'+baseUrl+'/requestSend">
                <input type="text" name="orderid" id="orderid"  value=""/>
                <input type="text" name="txnAmount" id="txnAmount" value=""/>
                <input type="text" name="CurrencyType"  id="CurrencyType" value=""/>
                <input type="text" name="userid" id="userid_new"   value=""/>
                <input type="text" name="userEmail" id="userEmail" value=""/>
                <input type="text" name="payment_for"  value="plan"/>
                <input type="text" name="partnerid" id="partnerid_new"/>
                <input type="text" name="plandays" id="plandays_new" />
           </form>      	
          </div> 
             <div class="clear"> </div>
              </div>
              </div>
    </div>
</div>
<!-- !Tab Container-->
<script type="text/javascript">
//send_payment(\''+PARTNER_ID+'\',\''+Userid+'\',\''+planPrice+'\',\''+planCurrency_name+'\',\''+planId+'\',\''+email+'\',\''+duration+'\')
function send_payment(Partnerid,Userid,Amount,Currency,Planid,Email,plandays)
{  
	var rString = randomString(9, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var Orderid='W'+rString;
	var Container="payment_Response_bildesk";
    var html='';
    jQuery.ajax({
	  url:GET_PLAN_RESPONSE,  
	  data:'orderid='+Orderid+'&currency='+Currency+'&amount='+Amount+'&partnerid='+Partnerid+'&userid='+Userid
	  +'&planid='+Planid+'&payment_for=plan&countrycode='+countrycode+'&coupon_code=0&entryid=0&point_used=0&remaining_point=0&video_price=0&discount=0&plan_days='+plandays,
	  type: "POST",
	  success:function(JSONresponse){
	  var JSONobject = JSON.parse(JSONresponse);
      var status= JSONobject.status;      
      if(status==1)
	      {
	           send_payment();
	      }
	      if(status==0)
	      {   
	            $("#orderid").val(Orderid);
	            $("#txnAmount").val(Amount);
	            $("#CurrencyType").val(Currency);
	            $("#userid_new").val(Userid);
	            $("#userEmail").val(Email);
	            $("#partnerid_new").val(Partnerid);
	            $("#plandays_new").val(plandays);
	           document.redirect.submit();          
	    }
	   },
	   error:function (){}
	     }); 
}
function subs_code_apply()
{	
  	var rString = randomString(14, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var Orderid='W'+rString;
    var subscode=$("#subscription_code").val(); 
    if(subscode==''){ $("#error-subsmessage").html("Subscription Code Required");  return false;}
    var Container="subscription_code";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("coupon",subscode);
    apiBody.append("orderid",Orderid);
    runAjax(GET_SUBS_CODE, apiBody, Container);
}
function buildSubs_Code(JSONobject, Container)
 {
  	 var status=JSONobject.status;
 	 var subscode_msg=JSONobject.Result;
     notification(subscode_msg);
 }
 </script>
   <?php require_once 'includes/footer.php';?>
</body>
</html>
 