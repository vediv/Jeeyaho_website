<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';
$entryIdNew=$_REQUEST['entryID'];
?>
<script>
 var entryIDnew1="<?php echo $entryIdNew; ?>";
 if(loginStatus=="N"){ window.location=baseUrl+'/home';   }
</script>
<style type="text/css"> 
</style>
<body onload="setInterval(payclick('<?php echo $entryIdNew; ?>'),3000)">
<?php require_once 'includes/navigation.php';?>
<div class="w3-seprator-top"></div> <div class="w3-seprator"></div>
<div class="w3-row channel-container" style="min-height: 100%;">
    <div class="w3-col s12 m1 l1 w3-row-padding">&nbsp;</div>
          <div class="w3-col s12 m10 l10 w3-row-padding">
            <div class="w3-card-4 w3-bluewood">

             <div class="w3-center">
                <div class="card hovercard">
                <header class="w3-container w3-graywood w3-margin-bottom">
                   <h3 class="w3-text-white font-size1">PAY PER CLICK </h3>
                </header>

                <div class="w3-responsive">

                    <table class="w3-table w3-graywood " style="">
                        <!-- <tr><td width="50%" class="w3-padding-sm w3-text-offwhite w3-center"><h5>Video Price</h5></td> <td width="50%" class="w3-padding-sm w3-center" id="price_detail"><h5><span class="w3-text-white"> &#8377;</span> 80</h5></td></tr>-->
                         <tr><td width="50%" class="w3-padding-sm w3-text-offwhite w3-center  font-size14 font-size1" style="padding: 10px 12px 0 0 !important">
                             <p>Video Price</p></td> <td width="50%" class="w3-padding-16  font-size14 font-size1 w3-center" ><p>
                             <span class="w3-text-white"><span id="video_price"></span><span class="w3-text-white"> <i class="fa fa-inr"></i></span> </span></p>

                             </td>
                             </tr>
                         <tr><td width="50%" class="w3-padding-sm w3-text-offwhite w3-center  font-size14 font-size1" style="padding: 10px 8px !important;"><p>Video validity</p></td>
                             <td width="50%" class="w3-padding-sm  w3-center w3-center w3-text-white   font-size14   font-size1" ><p id="video_validty" style="display: inline-flex"></p> <span class="w3-text-white" >hour </span> </td></tr>
                              <tr style="display: none;"><td width="50%"  class="w3-padding-sm w3-text-offwhite w3-center  font-size14 font-size1"><p>conversion</p></td>
                              <td width="50%" class="w3-padding-sm  w3-center w3-center w3-text-white" id="conversion_rate"> </td></tr>

                    </table>
                </div>


               <!-- videPrice--><input type="hidden" id="videPrice" name="videPrice" >
                <!-- Wallet_Point_Used_text--><input type="hidden" id="Wallet_Point_Used_text" value="0">
                <!-- Coupon:--><input type="hidden" id="coupoun_value" value="0">
                <!-- Discount:--><input type="hidden" id="discount_text" value="0">
                <!-- Total Pay amount--><input type="hidden" id="total_pay_amount_text">
                 <!--setConvertionRat--><input type="hidden" id="setConvertionRate_text" >
                 <!--remaining-point:--><input type="hidden" id="remainingPoint_text" value="0">
                 <!--exp_days: from wallet info--> <input type="hidden" id="exp_days" >
                                     
                
                 
             <input type="hidden" name="partnerid"  id="partnerid_pay" value="<?php echo $partnerId; ?>">
              <input type="hidden" name="userid"  id="userid_pay" value="<?php echo $UserID; ?>">
              <input type="hidden" name="amount" id="amount_pay">
              <input type="hidden" name="currency"  id="currency_pay">
              <input type="hidden" name="email" id="email_pay">
              
               


                  <div class="w3-seprator"></div>

                            <table class="w3-table w3-graywood w3-margin-top">
                          <tr><td  class="w3-center" > <input class="w3-input-pay w3-padding-sm w3-left font-size7" type="text" minlength ="5" maxlength ="10" id="promo_code" placeholder="PROMO CODE" style="margin-left: 42%;"></td>


                          <td  width="50%" class="w3-center">
                          <button class="w3-button w3-padding-sm w3-center w3-text-white  font-size14 font-size1" style="background: #38cef8 !important; padding: 4px 10px !important;" onclick=" return coupan_apply();">Apply</button>
                          </td></tr>
                          <span class="error" id="error-promomessage"></span>

                    </table>


                   <!--
                    <table class="w3-table  w3-margin-top">                     
                                       <tr class=" "><td width="50%" class="w3-text-white w3-center">  <div class="checkbox"> <input type="checkbox"  id="myCheck" onclick="check_walletpoint()" > <i class="input-helper"></i>
                                           <span class="w3-text-white used_pt font-size14 font-size1" style=" ">Used from JeeoGuru Wallet </span></div></td>
                   
                                        <td  width="50%" class="w3-center" id="setConvertionRate"><span class="w3-text-white"><span class="w3-text-white"> <i class="fa fa-inr"></i></span> </span></td></tr>
                   
                                        <br />
                                       <tr class=""><td class="w3-text-white w3-center font-size14 font-size1 baritem-container"  style="padding-left: 68px;">Remaining Wallet Point :
                                           <span style="color:#38cef8" id="remainingPoint" class="  font-size14 font-size1">  </span> point</td></tr>
                                       <tr><td><div class="w3-col s12 m3 l3">&nbsp;</div>
                                        <div class="w3-col s12 m9 l9 w3-hide-medium w3-hide-small" style="margin-top: 4%;margin-left: 48%; border-bottom: 1px solid #38cef8 !important; position: relative; width: 100%;"> </div>
                                        <div  class="w3-col s12 m2 l2">&nbsp;</div>
                                       </td></tr>
                                       
                                       </table>-->
                   

                   <div class="w3-row" style=" margin-left: 9%; margin-top: 4% !important;">
                    <div class="w3-col s12 m7 l7  w3-padding" style=""><span class="w3-text-skyblu font-size14 w3-text-left w3-bold">Total Amount Payable </span></div>
                    <div class="w3-col s12 m12 l12" style=" margin-bottom: -19px !important;">
                    <div class="w3-col s12 m3 l3">&nbsp;</div>
                     <div class="w3-col s8 m4 l4  w3-text-left w3-text-offwhite w3-padding-24 font-size14 font-size1" style="position: relative;  "> Video Price </div>
                     <div  class="w3-col s4 m4 l4  w3-text-left w3-text-white w3-padding-24  font-size14 font-size1" style="  display: inline-block" >
                     <p id="video_price_t" style="display: -webkit-inline-flex;"><span class="w3-text-white"> </span> </p>
                     <span class="w3-text-white"> <i class="fa fa-inr"></i></span>
                     </div>
                     <div class="w3-col s12 m2 l2">&nbsp;</div>
                    </div>

                   <!--
                    <div class="w3-col s12 m12 l12" style=" ">
                                       <div class="w3-col s12 m3 l3">&nbsp;</div>
                                        <div class="w3-col s8 m4 l4  w3-text-left w3-text-offwhite font-size1 font-size14" style="position: relative; display: -webkit-inline-flex;"> Wallet Point Used </div>
                                        <div  class="w3-col s4 m4 l4 w3-text-left w3-text-white font-size1  font-size14" style="" id="Wallet_Point_Used" style="">0 <span class="w3-text-white"> <i class="fa fa-inr"></i></span></div>
                                        <div  class="w3-col s12 m2 l2">&nbsp;</div>
                                       </div>-->
                   

                    <div class="w3-col s12 m12 l12" style=" ">
                    <div class="w3-col s12 m3 l3">&nbsp;</div>
                     <div class="w3-col s8 m4 l4  w3-text-left w3-text-offwhite font-size1 font-size14" style="position: relative;" id="price_detail"> Coupon Applied </div>
                     <div  class="w3-col s4 m4 l4 w3-text-left  w3-text-white font-size1 font-size14" style="" id="discount_div"> 0
                     	 <span class="w3-text-white"> <i class="fa fa-inr"> </i></span>
                     	</div>
                     <div  class="w3-col s12 m2 l2">&nbsp;</div>
                    </div>

                    <div class="w3-col s12 m2 l2">&nbsp;</div>
                     <div class="w3-col s6 m6 l6 " style="margin: 0% 0 1% 5px;  border-bottom: 1px solid #38cef8 !important; position: relative; width: 55%;">  </div>
                     <div  class="w3-col s6 m2 l2">&nbsp;</div>

                     <div class="w3-col s12 m12 l12" style=" ">
                    <div class="w3-col s12 m3 l3">&nbsp;</div>
                     <div class="w3-col s8 m4 l4 w3-text-left font-size14  font-size1 w3-text-offwhite" style="position: relative; "> Total Amount</div>
                     <div class="w3-col s4 m4 l4 w3-text-left font-size14 font-size1 w3-bold w3-text-white" style="" id="total_pay_amount"><span class="w3-text-white">  </span>  </div>
                     <div class="w3-col s12 m2 l2">&nbsp;</div>
                    </div>
                   </div>

         <form method="post" name="redirectsend" id="myForm_pay" action="http://www.jeeoguru.com/requestSend">
                <input type="hidden" name="orderid" id="orderid_pay"  value=""/>
                <input type="hidden" name="txnAmount" id="txnAmount_pay"   value=""/>
                <input type="hidden" name="CurrencyType"  id="CurrencyType_pay" value=""/>
                <input type="hidden" name="userid" id="userid_new_pay"   value=""/>
                <input type="hidden" name="userEmail" id="userEmail_pay" value=""/>
                <input type="hidden" name="payment_for"  value="wallet"/>
                <input type="hidden" name="partnerid" id="partnerid_new_pay" />
                <input type="button" value="PAY NOW" id="" class="w3-button w3-text-white w3-green1 font-form w3-round"   onclick="return send_payclick_payment();">
         </form>
        
      	
          </div>
                  
                 <div class="w3-seprator"></div>

                </div>
               </div>


              </div>
            </div>

     </div>

  </div>
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>

<script type="text/javascript">
var videoPrice='';
function buildVideoPrice(JSONobject, Container)
{
     var getVideoData=JSONobject.Video[0];
     //var entryid = getVideoData.entryid;
     var price   = getVideoData.price;
     var Currency_name   = getVideoData.Currency_name;
     if(price!="0"){
          if(Currency_name=="INR")
          {
               $("#video_price").html(price);
               $("#videPrice").val(price);
               jQuery.ajax({
               url:GET_USER_WALLET,  
	           data:'partnerid='+PARTNER_ID+'&userid='+Userid+'&countrycode='+countrycode,
			   type: "POST",
			   success:function(JSONresponse){
			   var JSONobject = JSON.parse(JSONresponse);
               var wallet_len=JSONobject.Wallet_Info.length;
               var wallet_exp_days=JSONobject.Wallet_Info[0].exp_days;
			   var wallet_name=JSONobject.Wallet_Info[0].name;
			   var wallet_email_id=JSONobject.Wallet_Info[0].email_id;
			   var wallet_currency=JSONobject.Wallet_Info[0].currency;
			   var wallet_conversion_rate=JSONobject.Wallet_Info[0].conversion_rate;
			   var wconversion_currency_rete=wallet_conversion_rate; 
			    _("video_validty").innerHTML=wallet_exp_days; 
			    _("currency_pay").value=wallet_currency; 
			    _("email_pay").value=wallet_email_id;  
			    $("#exp_days").val(wallet_exp_days);
			    getcalculatVideoData(price,wconversion_currency_rete);
			   },
				   error:function (){}
				     });
			              
          }
          if(Currency_name=="USD")
          {
               _("price_detail").innerHTML="<div class='price'>BUY<span class=' vidMsg'>"+price+"</span>  $ </div>";
          }
         }
  }
 /*var wconversion_currency_rete='';
 function buildUser_wallet(JSONobject, Container)
 {
     var wallet_len=JSONobject.Wallet_Info.length;
     var wallet_exp_days=JSONobject.Wallet_Info[0].exp_days;
     var wallet_name=JSONobject.Wallet_Info[0].name;
     var wallet_email_id=JSONobject.Wallet_Info[0].email_id;
     var wallet_currency=JSONobject.Wallet_Info[0].currency;
     var wallet_conversion_rate=JSONobject.Wallet_Info[0].conversion_rate;
     wconversion_currency_rete=wallet_conversion_rate; 
     _("video_validty").innerHTML=wallet_exp_days; 
     _("currency_pay").value=wallet_currency; 
     _("email_pay").value=wallet_email_id; 
     
 }*/
function getcalculatVideoData(vprice,wconversion_currency_rate)
{
    //alert("dashdfh"+vprice+"wconversion_currency_rete="+wconversion_currency_rete);
    var dataString ='vvprice='+vprice+'&wconversion_currency_rete='+wconversion_currency_rate+"&walletLimit=100&action=firstLoad";
      $.ajax({
        url: '../videoPriceCalculate.php',
        type: 'post',
        data: dataString,
        dataType: 'json',
        success: function(json) {
            var vprice_ajax=json['video_price'];
            var setConvertionRate=json['setConvertionRate'];
            var walletPointrs=json['walletPointrs'];
            var remainingPoint=json['remainingPoint'];
            
            $("#video_price_t").html(vprice_ajax); $("#setConvertionRate").html(setConvertionRate);
            $("#setConvertionRate_text").val(setConvertionRate);
            $("#walletPointrs").html(walletPointrs); $("#remainingPoint").html(remainingPoint);
            $("#total_pay_amount").html(vprice_ajax);
            $("#total_pay_amount_text").val(vprice_ajax);
             $("#remainingPoint_text").val(remainingPoint);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            //alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
}
function check_walletpoint()
{
  var checkBox = document.getElementById("myCheck");
  var Wallet_Point_Used = document.getElementById("Wallet_Point_Used");
  var addval='';
  if (checkBox.checked == true){
    var addval='added';
  } else {
        //alert("unchecked");
        var addval='remove';
  }
  var vp=  $("#videPrice").val(); var setCT=$("#setConvertionRate_text").val();
  var discount_text=$("#discount_text").val();
  if(discount_text!='')
  {
       var newDiscountval=discount_text;
  }
  else{  var newDiscountval=0;  }
  //alert(vp+"--"+setCT+"---"+addval);
   var dataString ='vvprice='+vp+'&setConvertionRate_text='+setCT+"&addval="+addval+"&action=check&totalDiscount_val="+newDiscountval;
    $.ajax({
        url: '../videoPriceCalculate.php',
        type: 'post',
        data: dataString,
        dataType: 'json',
        success: function(json) {
            //var vprice_ajax=json['video_price'];

            //alert(json['success']);
            var Wallet_point_userd=json['Wallet_point_userd'];
            var total_pay_amount=json['total_pay_amount'];
            $("#Wallet_Point_Used").html(Wallet_point_userd);
            $("#Wallet_Point_Used_text").val(Wallet_point_userd);
            $("#total_pay_amount").html(total_pay_amount);
            $("#amount_pay").val(total_pay_amount);
            $("#total_pay_amount_text").val(total_pay_amount);

            //$("#setConvertionRate_text").val(setConvertionRate);
            //$("#walletPointrs").html(walletPointrs); //$("#remainingPoint").html(remainingPoint);
        },
            error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

}





function buildCoupan_code(JSONobject, Container)
 {
      var status=JSONobject.status;
      var discount=JSONobject.discount;
      // _("discount_div").innerHTML = discount;
      var coupan_msg=JSONobject.Message;

     notification(coupan_msg);

     if(status==1){
       var vp=  $("#videPrice").val();
       $("#coupoun_value").val(discount); var wallet_point_val=$("#Wallet_Point_Used_text").val();
       if(wallet_point_val=='')
       {
              var wallet_point_val_send=0;
       }
       if(wallet_point_val!=''){   var wallet_point_val_send=wallet_point_val;  }
       var dataString ='vvprice='+vp+"&discount="+discount+"&action=coupon_apply&wallet_point="+wallet_point_val_send;
          $.ajax({
            url: '../videoPriceCalculate.php',
            type: 'post',
            data: dataString,
            dataType: 'json',
            success: function(json) {
                var totalDiscount_after_coupon=json['totalDiscount_after_coupon'];
                var total_pay_amount=json['total_pay_amount'];
                 $("#total_pay_amount").html(total_pay_amount);
                 $("#total_pay_amount_text").val(total_pay_amount);
                 $("#amount_pay").val(total_pay_amount);
                //var vprice_ajax=json['video_price'];
                //var setConvertionRate=json['setConvertionRate'];
                //var walletPointrs=json['walletPointrs'];
                //var remainingPoint=json['remainingPoint'];
                $("#discount_div").html(totalDiscount_after_coupon);
                $("#discount_text").val(totalDiscount_after_coupon);
                //$("#setConvertionRate_text").val(setConvertionRate);
                //$("#walletPointrs").html(walletPointrs); $("#remainingPoint").html(remainingPoint);
            },
                error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }
 }

function coupan_apply()

  {
  	
    var promocode_coupan=$("#promo_code").val();
    //var get_entryid=$("#get_entryid").val();
    if(promocode_coupan==''){ $("#error-promomessage").html("Promo Code Required"); return false;}
    var Container="coupan_code";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("entryid",entryIDnew1);
    apiBody.append("coupon_code",promocode_coupan);
    runAjax(GET_COUPON_CODE, apiBody, Container);
}


function send_payclick_payment()

   { 
   	  
    var rString = randomString(14, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var Orderid='W'+rString;
 	var Userid = _("userid_pay").value;
	var Amount = _("total_pay_amount_text").value;
	var Currency = _("currency_pay").value;
    var Email = _("email_pay").value;
    var Wallet_Point_Used_text = _("Wallet_Point_Used_text").value;
    var discount_text = _("discount_text").value;
    var Partnerid = _("partnerid_pay").value;
    var videoPrice = _("videPrice").value;
    var Coupoun_code_get = _("promo_code").value;
    var Coupoun_code=Coupoun_code_get!=''? Coupoun_code_get:'0';
    var remainingPoint = _("remainingPoint_text").value;
    var exp_days=_("exp_days").value;
    
    var html='';
    jQuery.ajax({
	  url:GET_PLAN_RESPONSE, 
	  data:'orderid='+Orderid+'&currency='+Currency+'&amount='+Amount+'&partnerid='+Partnerid+'&userid='+Userid+'&payment_for=wallet&countrycode='+countrycode+'&coupon_code='+Coupoun_code+'&entryid='+entryIDnew1+'&point_used='+Wallet_Point_Used_text+'&remainingPoint='+remainingPoint+'&video_price='+videoPrice+'&plan_days='+exp_days+'&discount='+discount_text,
	  type: "POST",
	  success:function(JSONresponse){
	  var JSONobject = JSON.parse(JSONresponse);
      var status= JSONobject.status;
      if(status==1)
	      {
	           send_payclick_payment();
	      }
	      if(status==0)
	      {   
                $("#orderid_pay").val(Orderid);
				$("#txnAmount_pay").val(Amount);
				$("#CurrencyType_pay").val(Currency);
				$("#userid_new_pay").val(Userid);
				$("#userEmail_pay").val(Email);
				$("#partnerid_new_pay").val(Partnerid);
				document.redirectsend.submit();
				
          }
	   },
	   error:function (){}
	     });
     
}



</script>
