<?php
session_start();
if(isset($_SESSION['user_id']) && !empty($_SESSION['user_id'])){
//session_destroy();
unset($_SESSION['user_id']);
unset($_SESSION['user_name']);
unset($_SESSION['user_idName']);

}

echo "<script>gapi.auth2.getAuthInstance().signOut();log('Google sign-out')</script>";

unset($_SESSION['token']);
//unset($_SESSION['google_data']); //Google session data unset
unset($_SESSION['access_token']);
//$gClient->revokeToken();
unset($_SESSION['userdata']);
unset($_SESSION['tokenKey']);
//session_destroy();
$tokFlag = $_REQUEST['tokFlag'];
if($tokFlag=="False")
{
		
	header("Location:index");
    exit;    
}
else {
/*$last_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
if($last_url!='')

{
	header("Location:$last_url");
}
else
{
	header("Location:home");
}*/

header("location:index");
}

?>
