<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<?php 
$parentcatid=isset($_GET['pcatid'])?$_GET['pcatid']:'';

 ?>
<body onload="initDrama()" id="get_token" class="">
<?php require_once 'includes/navigation.php';?>

 <div class="container fullHeight">
 	 <div class="w3-hide-large w3-hide-medium" style="height: 50px;"> </div>
     <div class="w3-row">
               <div class="s12 m12 l12" id="carousel_only">      
              <img class="w3-image" width="100%" src="images/placeholderjeeoguru.png">              
       </div>
   </div>
   

 
<div class="w3-row header header-menu barSubItems1" style="margin-top: 29px;">
    <div class="main-container w3-row-padding" id="w3-bar" >
</div>

</div>
<div class="w3-row channel-container darkBg ">
    <div class="main-container w3-row-padding" >
             <div id="drama-result" class="tabs" style="margin-top:20px;">
                  <div class="w3-row-padding bxslider" >
                 <?php for($i=0;$i<4;$i++) :?>
                <div class="w3-col s12 m3 l3 lazy-container">
                    <div class="w3-card-2">
                   <img src="images/banners/placeholder@.png" class="w3-image"></a>

                     <div class="card-text ">
                       <h4 class="w3-center" ></h4>
                     </div>
                    </div>
                </div>
                      <?php endfor; ?>
                </div>

             </div>

                <div class="tabs">
               <div class="main-container w3-row-padding" id="catgory_with_data_film">
               	
               </div>
              <div class="w3-col s12 m12 l12 w3-center">
                 <button class="load_more w3-button w3-center  w3-green1 font-form  padding-both w3-round" id="load_more_button">load more</button>
             </div> 
                 </div>






    </div>
</div>
 

</div>




<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
<script type="text/javascript">
var pcatid="<?php echo $parentcatid; ?>";
/*alert(pcatid);*/
function buildDramaTabItems(JSONobject)
    {
        var len=JSONobject.category_info.length;
        if(len>0)
        {
        	var datan=JSONobject.category_info[0];
        	var Parent_id=datan.Parent_id;
        	var subCount=datan.sub_count;
        	console.log("cat Sub Count="+subCount);
        	if(Parent_id==pcatid){ getDataWithCategory(Parent_id,"drama-result"); $("#load_more_button").hide();
        	  var containerNew="drama-result";
             }
            if(pcatid=='' && subCount>0)
            {
            	
            	$("#load_more_button").hide();
            	getDataWithCategory(Parent_id,"drama-result"); var containerNew="drama-result";
                var functionName="getDataWithCategory";  
            }
            if(pcatid=='' && subCount==0)
            {
            	
            	$("#drama-result").hide();
            	getDataFilmMusic1(Parent_id); 
            }
            if(Parent_id!=pcatid && pcatid!='')
            {
            
            	$("#drama-result").hide();
            	getDataFilmMusic1(pcatid);            	
            }
              
        var tab='<div>';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.category_info[i];
            var Parent_name=data.Parent_name;
            var Parent_id=data.Parent_id;
            //else{ var containerNew="catgory_with_data_film"; var functionName="getDataFilmMusic"; }
            //tab+='<div class="baritem-container"><span class="bar-item" id="TAB'+Parent_id+'" onclick=MusicTabFilm(\''+Parent_id+'\'\''+functionName+'\') >'+Parent_name+'</span></div>';
         //call
         if(Parent_id==pcatid){ var cl="active-bar";  }else{ var cl='';}
         if(pcatid=='' && i==0)
         { var cl="active-bar"; }
         tab+='<div class="baritem-container"><span class="bar-item '+cl+'" id="TAB'+Parent_id+'" onclick=callTab(\''+Parent_id+'\',\''+Parent_name+'\') >'+Parent_id+''+Parent_name+'</span></div>';
        }
        tab+='</div>';
        var activeId="";
        _("w3-bar").innerHTML=tab;
        //_("TAB"+JSONobject.category_info[0].Parent_id).classList.add("active-bar") ;
    }
    }
function callTab(cid,cname)
{
	//alert(cid+"--"+cname);
	// /window.location=baseUrl+'/music?pcid='+cid;
	var ncname=cname.toLowerCase();
    document.location = baseUrl+"/drama/"+ncname+"/"+cid; 
    //return false;
}  
 function getDataFilmMusic1(pcid)
 {
 var page=0;var limit=8;	
   var track_click = 0; //track user click on "load more" button, righ now it is 0 click
   var total_pages =0;
   $.post(GET_CATEGORY_DATA, {page: track_click,partnerid:PARTNER_ID,categoryid:pcid,limit:limit,countrycode:countrycode}, function(JSONresponse){
   var JSONobject = JSON.parse(JSONresponse);
   var kids_total_video= JSONobject.total_video;
   total_pages=Math.ceil(kids_total_video/limit);
   var resultShow=buildCategoryWithDatafilm(JSONobject);
   $("#catgory_with_data_film").html(resultShow);
   track_click++;
   });
 $(".load_more").click(function (e) { 
        $(this).hide();
         //hide load more button on click
        //$('.animation_image').show(); //show loading image
        if(track_click <= total_pages) //make sure user clicks are still less than total pages
        {
                $.post(GET_CATEGORY_DATA, {page: track_click,partnerid:PARTNER_ID,categoryid:pcid,limit:limit,countrycode:countrycode}, function(JSONresponse){
                var JSONobject = JSON.parse(JSONresponse);
                var resultShow=buildCategoryWithDatafilm(JSONobject);
                $(".load_more").show(); //bring back load more button
                $("#catgory_with_data_film").append(resultShow); //append data received from server
                //scroll page to button element
                $("html, body").animate({scrollTop: $("#load_more_button").offset().top}, 500);
                //hide loading image
                //$('.animation_image').hide(); //hide loading image once data is received
                track_click++; //user click increment on load button

                 }).fail(function(xhr, ajaxOptions, thrownError) {
               // alert(thrownError); //alert any HTTP error
                 $(".load_more").show(); //bring back load more button
                //$('.animation_image').hide(); //hide loading image once data is received
             });


             if(track_click >= total_pages-1)
            {
                  //reached end of the page yet? disable load button
                 _('load_more_button').style.visibility = 'hidden';


            }
         }

        });
 }
</script>

