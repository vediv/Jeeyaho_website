<?php
$result=array();
$entryId= $_REQUEST["entryID"];
if (!isset($_SESSION["metaData"])){$_SESSION["metaData"]=false;}
if($_SESSION["metaData"]!=$entryId)
{
	if(isset($_REQUEST["entryID"]))
	{
		 $ch = curl_init();
		 $curlConfig = array(
		 CURLOPT_URL => $apiUrl."/videoinfo",
		 CURLOPT_POST=> true,CURLOPT_RETURNTRANSFER => true,
		 CURLOPT_POSTFIELDS=> array('partnerid' => $partnerId,'entryid' => $entryId, 'userid' => '0','countrycode' => 'IN'),
		 CURLOPT_HTTPHEADER => array("token: $tokenKey"),
		 );
		curl_setopt($ch, CURLOPT_ENCODING, 'identity');
		curl_setopt_array($ch, $curlConfig);
		$jsonResult = curl_exec($ch);
		curl_close($ch);
		$result=json_decode($jsonResult,true);
		if( $result["Video"][0]["status"]== "5" ||  $result["Video"][0]["status"]== 5 )
		{
		    $_SESSION["metaData"]=false;
		}
		else
		{
		    $_SESSION["metaData"]=$entryId;
		}
      $_SESSION["metaResult"]=$jsonResult;
   }
}
 else
{
   $result=json_decode($_SESSION["metaResult"],true);
}
function getMetaInfo($prop)
{
    global $result ;
    switch($prop)
    {
        case "image":
            echo $result["Video"][0]["thumbnailurl"]."/width/100/height/100/quality/40/img.jpg";
				 break;

        case "title":
           echo $result["Video"][0]["name"]; //print_r($output);//echo $output["Video"][0]["name"]."pam".$output["token_status"];
        break;

        case "description":
            echo substr($result["Video"][0]["longdescription"],0,60);
        break;
    }
}
?>
