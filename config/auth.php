<?php
error_reporting( E_ALL );
//ob_start("ob_gzhandler");
header('X-Frame-Options: DENY');
session_start();
require_once 'webConfig.php';
require_once 'getSystemDetail.php';
date_default_timezone_set('Asia/Calcutta');

/*if(!isset($_SESSION["bannerAd"]))
{
$ch = curl_init();
$curlConfig = array(CURLOPT_URL => $apiUrl."/advinfo", CURLOPT_POST=> true,CURLOPT_RETURNTRANSFER => true,
CURLOPT_POSTFIELDS=> array('partnerid' => $partnerId));
curl_setopt($ch, CURLOPT_ENCODING, 'identity');
curl_setopt_array($ch, $curlConfig);
$jsonResult = curl_exec($ch);
curl_close($ch);

$result=json_decode($jsonResult,true);
$adConfig=$result["Adv_details"];
$resLen=count($adConfig);
$bannerAd=false;
for($i=0;$i<$resLen;$i++)
{
   if($adConfig[$i]["adv_name"]=="ADSENSE")
    {

      $bannerAd=$adConfig[$i]["banner"];

      break;
    }


}
 $_SESSION["bannerAd"]=$bannerAd;

}
 else

 {
     $bannerAd= $_SESSION["bannerAd"];
 }
*/
$pagenamerequest= basename($_SERVER['REQUEST_URI']);
$pname=explode("?",$pagenamerequest);
$ppname=$pname[0];
$loginflag='N';
$UserName='';
$UserID=0;
$user_browser; $user_os;
$UserIDName=''; $uuID=''; $ip=''; $device=''; $model='';
$pageName = basename($_SERVER['PHP_SELF']);
$pgTitle =($_SERVER['QUERY_STRING']=="")?$ppname:$_SERVER['QUERY_STRING'];

if(!empty($_SESSION['user_id'])) // check user login or not;
{ $loginflag='Y';
 // $UserName=ucwords($_SESSION['user_name']);
  $UserID=$_SESSION['user_id'];
  //echo  $UserIDName=$_SESSION['user_idName'];

}
$tokenKey='';

if(!empty($_SESSION['tokenKey'])) // check user login or not;
{
 $tokenKey=$_SESSION['tokenKey'];
}
else
{
   $ip=$_SERVER['REMOTE_ADDR'];
   //$uuID=session_id();
   $deviceType="web";  $model="No";
   $user_browser; $user_os;
   $UserID=$UserID;
}


if (empty($_COOKIE["uuid"])) {
    $uuid = uniqid();  // or use a real UUID
    setcookie("uuid", $uuid, time()+30*24*60*60, "/");
    }
else {
   $uuid = $_COOKIE["uuid"];
}
//$pageView='';
function getTitle()
{
    global $pageName,$applicationName,$pgTitle,$pcatname;
    $applicationName=  ucfirst($applicationName);
    switch($pageName)
    {
        case "index.php":
            echo $applicationName." | Home";
            break;;
        case "originals.php":
            echo $applicationName." | Originals";
            break;

        case "movies.php": case "movies_viewType6.php":
            echo $applicationName." | Movies " ;
            break;
        case "search.php":
            echo $applicationName." | Search";
            break;

        case "channels.php":case "liveTv.php":
            echo $applicationName." | Live TV";
            break;
        case "watch.php":
            echo $applicationName." | PlayVideo";
            break;
        case "watchlater.php":
            echo $applicationName." | My Watch Later";
            break;

        case "myplaylist.php":
            echo $applicationName." | My PlayList";
            break;

        case "myaccount.php":
            echo $applicationName." | My Account";
            break;

            case "history.php":
            echo $applicationName." | My History";
            break;

         case "continueWatching.php":
            echo $applicationName." | Continue watching";
            break;
            case "payclick.php":
            echo $applicationName." | PayClick";
            break;
           case "movies_all.php":
            echo $applicationName." | Movies All";
            break;
            case "subcategory.php":
            echo $applicationName." | Subcategory";
            break;
         case "password-reset.php":
            echo $applicationName." | Reset Password";
            break;
            case "watchlist.php":
            echo $applicationName." | Watch List";
            break;
        case "music.php": case "detail.php":

            echo $applicationName." | ".ucwords($pcatname);
            break;
			case "drama.php":
            echo $applicationName." | Drama";
            break;
			case "devotional.php":
            echo $applicationName." | Devotional";
            break;
			case "lifestyle.php":
            echo $applicationName." | Lifestyle";
            break;

        default:

            echo $applicationName." | ".$pgTitle;
            break;
    }




}
 switch($pageName)
    {
        case "index.php":
            $pageView='Home';
            break;
        case "detail.php":
            $pageView='Music';
            break;

        case "movies_all.php":
            $pageView='Movies';
            $break;

        case "search.php":
            $pageView='Search';
            break;

        case "channels.php":case "liveTv.php":
            $pageView='LiveTV';
            break;
        case "watch.php":
            $pageView='PlayVideo';
            break;
        case "watchlater.php":
            $pageView='MyWatchLater';
            break;

        case "movies_viewType6.php":
            $pageView='movieviewall';
            break;

        case "myaccount.php":
            $pageView='MyAccount';
            break;
         case "history.php":
             $pageView='MyHistory';
            break;

            case "continueWatching.php":
            $pageView='Continuewatching';
            break;
            case "payclick.php":
            $pageView='PayPerClick';
            break;
           case "moviesall.php":
            $pageView='MoviesAll';
            break;
            case "subcategory.php":
            $pageView='Subcategory';
            break;
            case "password-reset.php":
            $pageView='ResetPassword';
            break;
            case "watchlist.php":
            $pageView='WatchList';
            break;
            case "subscription.php":
            $pageView='SubscriptionPlan';
            break;
            case "music.php":
            $pageView='Music';
            break;
	    default:
            $pageView='Home';
            break;
    }

function subString($str,$len)
{
   echo subStr($str,0, $len) ;
}



$pgList=array("index.php","movies.php","channels.php");
$found= in_array($pageName, $pgList);
if($found)
{
  $opacNav=true;
  //$opacClass="opaque-navbar";
}
else
{
    $opacClass="";
    $opacNav=false;
}


function urlExists($url)
{

$file_headers = @get_headers($url);
if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
    $exists = false;
}
else {
    $exists = true;
}
return $exists;
}
