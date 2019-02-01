<?php 
$result=array();

if(!isset($_SESSION["metaData".$entryId]))
{
if(isset($_REQUEST["entryID"]))
{
$entryId= $_REQUEST["entryID"];
$ch = curl_init();
$curlConfig = array(CURLOPT_URL => $apiUrl."/videoinfo", CURLOPT_POST=> true,CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_POSTFIELDS=> array('partnerid' => $partnerId,'entryid' => $entryId, 'userid' => '0','countrycode' => 'IN')
                   );
curl_setopt($ch, CURLOPT_ENCODING, 'identity');
curl_setopt_array($ch, $curlConfig);
$jsonResult = curl_exec($ch);
curl_close($ch);

echo "Hi";

$result=json_decode($jsonResult,true);
if( $result["Video"][0]["downloadUrl"]== "NULL" &&  $result["Video"][0]["dataurl"]== "NULL" )
{
    $_SESSION["metaData".$entryId]=false;
}  
else
{
    $_SESSION["metaData".$entryId]=true;
}

$_SESSION["metaResult"]=$jsonResult;

//print_r($result);
}

}
 else 
{
   $result=json_decode($_SESSION["metaResult"],true); 
}

print_r($result);exit;

function getMetaInfo($prop)
{ 
    global $result ;
    switch($prop)
    {
        case "image":
            echo $result["Video"][0]["thumbnailUrl"]."/width/465/height/265/quality/40/img.jpg";
        break; 
    
        case "title":
           echo $result["Video"][0]["name"]; //print_r($output);//echo $output["Video"][0]["name"]."pam".$output["token_status"];
        break; 
        
        case "description":
            echo substr($result["Video"][0]["description"],0,60);
        break; 
    
       
    }
}

?>