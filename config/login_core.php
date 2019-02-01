<?php
session_start();
function aes256_cbc_encrypt($key, $data, $iv) {
    $padding = 16 - (strlen($data) % 16);
    $data .= str_repeat(chr($padding), $padding);
    return $encrypted = openssl_encrypt($data, 'AES-256-CBC', $key, OPENSSL_RAW_DATA, $iv); 
    //return mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $data, MCRYPT_MODE_CBC, $iv);

}
$login_type=$_POST['loginType'];
switch ($login_type) {
         case "login":
	      $_SESSION['user_id']=$_POST['UserID'];
         //$_SESSION['user_name']=$_POST['UserName'];
         // $_SESSION['user_idName']=$_POST['user_idName'];
	  echo 1;
	 break;
         case "GetToken":
	 $_SESSION['tokenKey']=$_POST['GetToken'];
	 echo 1;
	 break;
         case "passencrypt":
	     $userpassword=trim($_POST['userpassword']);
         $key="useonlymysecretkeyonplanetcast17";
         $ivSize='16';
		 $ivv = str_repeat("\0", $ivSize);
         $encoded=aes256_cbc_encrypt($key,$userpassword,$ivv);
         $password=trim(base64_encode($encoded));
         echo urlencode($password);
	 break;
         case "passencryptandchangepassword":
	     $oldpass=trim($_POST['oldpass']);
         $newpass=trim($_POST['newpass']);
         $key="useonlymysecretkeyonplanetcast17";  $ivv='16';
         $encoded_old=aes256_cbc_encrypt($key,$oldpass,$ivv);
         $oldpassword=trim(base64_encode($encoded_old));
         $encoded_new=aes256_cbc_encrypt($key,$newpass,$ivv);
         $newpassword=trim(base64_encode($encoded_new));
         echo urlencode($oldpassword)."oldandpass".urlencode($newpassword);
	 break;

}

?>
