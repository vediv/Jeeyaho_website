<?php 
header("Cache-Control: no-cache, must-revalidate");
$url="http://ott.planetcast.in:6083/ticker";
$ch=curl_init();
$conf_ar=array(CURLOPT_URL=>$url,CURLOPT_POST=>true,CURLOPT_RETURNTRANSFER=>true,CURLOPT_POSTFIELDS=>array("partnerid"=>"ott955"));
curl_setopt($ch, CURLOPT_ENCODING,"identity" );
curl_setopt_array($ch, $conf_ar);
$res= curl_exec($ch);
curl_close($ch);
$result=json_decode($res,true);
$len=count($result);
if($len>0)
{
    $data=json_decode($result["content"][0]["content_data"]);
    $content = str_replace(' ', '&nbsp;', $data->t_text);
  echo '<div style="background:'.$data->t_bg.';color:'.$data->t_fg.';font-size: '.$data->t_fsize.'px;padding:10px;font-weight:'.$data->t_fweight.'"><marquee behavior="'.$data->t_behav.'" direction="'.$data->t_dir.'" truespeed="1" loop="'.$data->t_loop.'" scrollamount="'.$data->t_speed.'"><span id="white_space">'.$content.'</span></marquee></div>';
    
}
?>
<!--<style>body{margin: 0px;padding: 0px;} marquee span {white-space:nowrap; font-family: Arial, Helvetica, sans-serif; -webkit-overflow-scrolling: touch;}</style>-->
<style>body{margin: 0px;padding: 0px;} marquee span {white-space:nowrap; font-family: Arial, Helvetica, sans-serif;}</style>
