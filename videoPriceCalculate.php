<?php
$action=$_POST['action'];
switch($action)
{
	case "firstLoad":
		
$json = array(); 

$getVprice=$_POST['vvprice']; $walletLimit=$_POST['walletLimit'];
$wconversion_currency_rete=$_POST['wconversion_currency_rete'];
$userdWalletAmount=($getVprice/2);
$setConvertionRate=$userdWalletAmount*$wconversion_currency_rete;
if($userdWalletAmount>100)
{
	$walletPointrs=$userdWalletAmount-$walletLimit;
	$remainingPoint=0;
}
else {
	$walletPointrs=$walletLimit-$userdWalletAmount;
	$remainingPoint=$walletPointrs;
}




$json['video_price'] =$getVprice;
$json['setConvertionRate'] =$setConvertionRate;
$json['walletPointrs'] =$walletPointrs;
$json['remainingPoint'] =$remainingPoint;
echo (json_encode($json));
break;
	case "check":
		$json = array();
		$Vprice=$_POST['vvprice']; $setConvertionRate_text=$_POST['setConvertionRate_text'];
		$addval=$_POST['addval']; $totalDiscount_val=$_POST['totalDiscount_val'];
		//$json['success']=$Vprice;
		//echo (json_encode($json));
        
		if($addval=="added")
		{
		   if($totalDiscount_val==0)
		   {
		   	$json['video_price'] =$Vprice; 
            $json['Wallet_point_userd'] =$setConvertionRate_text;
			$json['total_pay_amount']=$Vprice-$setConvertionRate_text;
			echo (json_encode($json));
		   }
		   else
		   {
		   	   $json['video_price'] =$Vprice; 
			   $json['Wallet_point_userd'] =$setConvertionRate_text;
               $total_dis=$setConvertionRate_text+$totalDiscount_val;
			   $json['total_pay_amount']=$Vprice-$total_dis;
			   echo (json_encode($json));
		   }
		
		
			
			
		}
       if($addval=="remove")
		{
		   if($totalDiscount_val==0)
		   {
		   	$json['video_price'] =$Vprice;
            $json['Wallet_point_userd'] =0;
			$json['total_pay_amount']=$Vprice;
			echo (json_encode($json));
		   }
         else
           {
           	  $json['video_price'] =$Vprice; 
			  $json['Wallet_point_userd'] =0;
              //$total_dis=0+$totalDiscount_val;
			  $json['total_pay_amount']=$Vprice-$totalDiscount_val;
			  echo (json_encode($json));
           }		
			
		}
    break; 	
	case "coupon_apply":
		$json = array(); 
		$Vprice=$_POST['vvprice']; $discount=$_POST['discount']; 
		$wallet_point=$_POST['wallet_point'];
		if($wallet_point==0)  // only coupoun apply not wallet point
		{
			//(30/100) x 70 calculate discount
			$totalDiscount_after_coupon=$Vprice*($discount/100);
			$wallet_point_new=0;
			$json['totalDiscount_after_coupon'] =$totalDiscount_after_coupon;
		$json['total_pay_amount']=$Vprice-$totalDiscount_after_coupon;
		$json['Wallet_point_userd'] =$wallet_point_new;
		//$json['walletPointrs'] =$walletPointrs;
		echo (json_encode($json));
		}
		else{
			$totalDiscount_after_coupon=$Vprice*($discount/100);
			$wallet_point_new=$wallet_point;
			$json['totalDiscount_after_coupon'] =$totalDiscount_after_coupon;
			$total_dis=$wallet_point_new+$totalDiscount_after_coupon;
		   $json['total_pay_amount']=$Vprice-$total_dis;
		  $json['Wallet_point_userd'] =$wallet_point_new;
		//$json['walletPointrs'] =$walletPointrs;
		echo (json_encode($json));
		}	
		
		break;
		
}




?>