<!DOCTYPE html>
<html>
<head>
<title><?php getTitle();?></title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="layouts/css/style.css">
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="icon" href="<?php echo $baseUrl; ?>/images/placeholder.png" sizes="26x26">

<!--script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"  ></script-->
<!--<script type="text/javascript">
         var ip_country; var ip_country_code;
         $.ajax({
            url: "https://geoip-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {
            //$('#country').html(location.country_name);
            //$('#country_code').html(location.country_code);
            ip_country=location.country_name;
            ip_country_code=location.country_code;

            }
       });
   console.log(ip_country+"----"+ip_country_code);
</script>-->

<div id="preloader">
<div id="status">&nbsp;</div>
</div>
<script type="text/javascript">


        var countrycode="IN";
        //var countrycode=geoplugin_countryCode();
        var movieCatId=sessionStorage.getItem("movies_id");
        var opacNav="<?php echo $opacNav; ?>";
        var search_request="<?php echo isset($search_request)?$search_request:""; ?>";
        var pageName="<?php echo $ppname; ?>";
        var ondemond_id=localStorage.getItem("ondemond_id");
        var ytcase_id=localStorage.getItem("ytcase_id");
        var pollyw_id=localStorage.getItem("pollyw_id");
        var view_type_4_id=sessionStorage.getItem(pageName+"_id");
        var shows_id=localStorage.getItem("shows_id");
       var loginStatus="<?php echo $loginflag; ?>";
    	 var Username="<?php echo $UserName; ?>";
       var token="<?php echo $tokenKey;?>";
       var CurrentPagename="<?php echo $pageName; ?>";
    	 var Userid="<?php echo $UserID; ?>";
       var UserIDName="<?php echo $UserIDName; ?>";
       var sessionID="<?php echo $uuid; ?>";
    	 var deviceType="web";
    	 var user_browser="<?php echo $user_browser; ?>";
    	 var user_os="<?php echo $user_os; ?>";
        var logoType="<?php echo $logoType; ?>";
        var applicationName="<?php echo $applicationName; ?>";
        var apiUrl="<?php echo $apiUrl; ?>";
        var partnerId="<?php echo $partnerId; ?>";
        var baseUrl="<?php echo $baseUrl; ?>";
        var cdn="<?php echo $cdn; ?>";
        var pageView="<?php echo $pageView; ?>";

</script>
<?php

if($pageName=="watch.php") :?>
<?php $entryId=$_REQUEST['entryID'];?>
<?php require_once 'setMeta.php';?>
<meta property="og:type" content="website">
<meta property="fb:app_id" content="2254756181470508">
<meta property="og:image" content="<?php getMetaInfo("image"); ?>">
<meta property="og:title" content="<?php getMetaInfo("title");  ?>">
<meta property="og:description" content="<?php getMetaInfo("description"); ?>">
<!--<meta property="og:url" content="<?php echo "$protocol://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>">-->
<link rel="stylesheet" href="<?php echo $cdn;?>/layouts/css/flowplayer.css"/>
<script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/flowplayer.js"></script>
<script type="text/javascript" src="http://www.google-analytics.com/ga.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl ?>/layouts/js/flowplayer.hlsjs.light.min.js"></script>
<script src="<?php echo $baseUrl ?>/layouts/js/jquery.magnific-popup.js" type="text/javascript"></script>
<!--script type="text/javascript" src="http://releases.flowplayer.org/hlsjs/flowplayer.hlsjs.js"></script-->

<script>
var playListId=sessionStorage.getItem("pid");
var playListName=sessionStorage.getItem("pname");
var entryID="<?php echo $entryId; ?>";
</script>
<?php endif; ?>
<?php if($pageName=="liveTv.php") :?>
<?php $entryID_from_url=$_REQUEST['entryID'];$entryId = $entryID_from_url;?>
<link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/css/flowplayer.css"/>
<script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/flowplayer.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/flowplayer.hlsjs.light.min.js"></script>

<script>
var entryID="<?php echo $entryId; ?>";
</script>
 <?php endif; ?>

<?php if($pageName=="ondemand.php") { ?>
<script>
    var categoryIDD=<?php echo $categoryIDD; ?>;
    if(categoryIDD==0) {  categoryIDD=sessionStorage.getItem("ondemand_id");}
    var subCatID="<?php echo $subCatID ?>";
    var catName="<?php echo $catName; ?>";
    var catVideoID="<?php echo $vcatID; ?>";
</script>
<?php } ?>
<?php if($pageName=="search.php") :?>
<script>
     var searchTag="<?php echo $search_request;?>";
</script>
<?php endif; ?>
<?php if( $pageName=="ytwatch.php") :?>
<script>
var entryID="<?php echo $entryId; ?>";
 </script>
 <?php endif; ?>
<?php if($pageName=="index.php" || $pageName=="view_type_4.php" )  :?>
 <link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/css/jquery.bxslider.min.css" />
 <script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/jquery.bxslider.js"></script>
<?php endif; ?>


 <?php if($pageName=="listing.php") :?>
<script>
    var viewAllId="<?php echo $viewAllId;?>";

</script>

<?php endif;?>


<link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/css/w3.css"/>
<link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/css/loaders.min.css"/><!---- for loading time gif --->
<link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/css/custom.css"/>
<link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/css/overwrite.css"/>
<!--<link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/font-awesome/css/font-awesome.css"/>-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/jQuery.loadScroll.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/core/custom.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/core/initFunctions.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/core/getterFunctions.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/core/setterFunctions.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/core/ajax.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/core/url.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/core/login.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/xml.js"></script>
<script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/aes.js"></script>
<link rel="stylesheet" href="<?php echo $baseUrl?>/config/webStyleConfig.css"/>
<link rel="stylesheet" href="<?php echo $baseUrl?>/layouts/css/jquery.bxslider.min.css" />
<script type="text/javascript" src="<?php echo $baseUrl?>/layouts/js/jquery.bxslider.js"></script>
<script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
<!-- VAST / ads plugin , replace with YOUR plugin-->
<script src="https://releases.flowplayer.org/vast/flowplayer.com/vast.min.js"></script>
<script type="text/javascript">
var uuid='';
if(localStorage.getItem('uniqid'))
{
  uuid=localStorage.getItem('uniqid');
}
else
{
  uuid=gen_uniq_id();
}
function gen_uniq_id()
{
  var agent=navigator.userAgent;
  var fields = agent.split('/');
  var random=Math.random().toString(36).substring(2, 35);
  var uniqid='w'+fields[0].charAt(0)+random;
  localStorage.setItem('uniqid',uniqid);
  return uniqid;
}
var apiBody = new FormData();
apiBody.append("device_id",uuid);
apiBody.append("partnerid", PARTNER_ID);
runAjax(GET_CRM, apiBody, 'crm_no');
</script>
<script type="text/javascript">
   if(token=='')
		{
			//alert("no token");
			getToken();
		}
		function getToken()
		{

		    var Container = "get_token";
		    var apiBody = new FormData();
		    //apiBody.append("countrycode",countrycode);
		    apiBody.append("userid",Userid);
		    apiBody.append("partnerid", PARTNER_ID);
		    runAjax(GET_TOKEN, apiBody, Container);
		}

		function BuildToken(JSONobject, Container)
		{
		        //_(Container).innerHTML ="token create";
		        var GetToken=JSONobject.Token;
		        //alert(JSONobject+"--"+GetToken);
		        var TokenStatus=1;
		        switch(TokenStatus)
		        {
		           case 1:
		              jQuery.ajax({
		              url: "config/login_core.php",
		              data:'GetToken='+GetToken+'&loginType=GetToken',
		              type: "POST",
		              success:function(data){
		              if(data==1)
		                  {
		                       window.location.reload(true);
		                  }
		               },
		                 error:function (){}
		                 });
		             break;
		           case 2:
		          // Here The code For exit;

		          break;
		        }


		}

</script>

<style type="text/css">
.ui-widget-overlay {
    background: #1d1c1c url(images/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x;
    opacity: .9;
    filter: Alpha(Opacity=30);
}
 input, select { border-radius: 0px;  border:1px solid #58595a;  background-color: #a1a4a9;}
 .ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button { font-size: 1.1em;  padding: 5px 7px;}
/*
 .ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {
    border-bottom-right-radius: 4px;    background-color: #6ccde8;}
.ui-dialog .ui-dialog-content {  background-color: #6ccde8;}*/

</style>
</head>





<div id="dialogoverlay" style="display: none; opacity: .6;  position: relative; top: 0px; left: 0px !important; background: #000; width: 100%; z-index: 10;"></div>
<div id="dialogbox" style="display: none;    position: fixed; font-size:12px; background: #283848;  border-radius:7px;   width:300px;    z-index: 10;">
  <div>
    <div id="dialogboxhead" style="background: #1d2832; font-size:14px; color:#fff;"></div>
    <div id="dialogboxbody" style="background:#333; padding:7px 16px; color:#FFF; font-size: 1em;"></div>
    <div id="dialogboxfoot" style="background: #666; padding:10px; text-align:center; "></div>
  </div>
</div>


<div class="overlay"></div>
<div id="dialog" style="display: none" class="ui-widget-overlay">
    <table border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td>

            </td>
            <td style="alignment-adjust: central">
                <input type="text" id="dob" value="" placeholder="dd/mm/yyyy" style="margin-left: 26px !important;" />
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <img id="imgLoader" alt="" src="loading.gif" style="visibility: hidden" />
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <input type="button" id="btnSubmit" value="Submit" />
            </td>
        </tr>
    </table>
</div>
<script type="text/javascript">
       $(window).on('load', function() { // makes sure the whole site is loaded
         	setTimeout(()=>loader(),50);
         })
         function loader()
         {
         $('#status').fadeOut(); // will first fade out the loading animation
         $('#preloader').delay(650).fadeOut('slow'); // will fade out the white DIV that covers the website.
         $('body').delay(350).css({'overflow':'visible'});}

</script>
