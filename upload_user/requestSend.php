<?php 
require_once 'config/auth.php'; 
// error_reporting(0);
$msg=0;
if($_SERVER['REQUEST_METHOD']!== 'POST') {
     $status=1;
}
?>
<html>
<head>
<title><?php getTitle();?></title>
</head>
<body>
<center>
<?php if($status==1){ echo $msg="you are unauthorized person ,with request unauthorized method to access data..."; exit;  } ?>    
<?php 
$orderID=isset($_POST['orderid'])?$_POST['orderid']:'';
$TxnAmount=isset($_POST['txnAmount'])?$_POST['txnAmount']:'';
$CurrencyType=isset($_POST['CurrencyType'])?$_POST['CurrencyType']:'';
$userid=isset($_POST['userid'])?$_POST['userid']:'';
$userEmail=isset($_POST['userEmail'])?$_POST['userEmail']:'';
$payment_for=isset($_POST['payment_for'])?$_POST['payment_for']:'NA';
$partnerid=isset($_POST['partnerid'])?$_POST['partnerid']:'ott503';
$MerchantID='PLANETC';
//echo  $orderID."-".$TxnAmount."-".$CurrencyType."-".$userid."-".$userEmail."-".$payment_for."-".$partnerid;
//exit;
//$CustomerID='w1517555752n54zt';
//$TxnAmount='2';
//$CurrencyType='INR';
$url="http://www.jeeoguru.com/responsegdata";
//$url="http://ott.planetcast.in:6086/responsebsavedata";
$newData = "$MerchantID|$orderID|NA|$TxnAmount|NA|NA|NA|$CurrencyType|NA|R|planetc|NA|NA|F|$userid|$userEmail|$payment_for|$partnerid|NA|NA|NA|$url";
$checksum = hash_hmac('sha256',$newData,'c8tXLHQAB8Oh', false);
$checksum = strtoupper($checksum);
$dataWithCheckSumValue = $newData."|".$checksum;
$msg = $dataWithCheckSumValue;
sleep(1);
?>
<form method="post" name="redirect" action="https://pgi.billdesk.com/pgidsk/PGIMerchantPayment">
<?php
echo "<input type=hidden name=msg value=$msg>";
//echo "<input type=hidden name=access_code value=$access_code>";
?>
</form>
</center>
<script language='javascript'>document.redirect.submit();</script>
</body>
</html>

