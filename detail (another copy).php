<?php
$catID=isset($_GET['catID'])?$_GET['catID']:'';
$pcatname=isset($_GET['catname'])?$_GET['catname']:'';
?>
<?php  require_once 'config/auth.php'; ?>
<?php require_once 'includes/header.php';?>
<body onload="initMusic(<?php echo $catID; ?>)" id="get_token" class="">
<?php require_once 'includes/navigation.php';?>
<?php //$parentcatid=isset($_GET['pcatid'])?$_GET['pcatid']:''; ?>
<style type="text/css">
.tab_data{
  display: none;
}
label {font-size: 15px;
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;  /*font-weight: 600;*/
  text-align: center;
  color: #abc;
  border: 1px solid transparent;
}
label:before {  font-family: fontawesome;  font-weight: normal;  margin-right: 10px;}
label:hover {  color: #789;  cursor: pointer;}
input:checked + label {  color: #dd137b; /* border: 1px solid #abc;*/  border-bottom: 2px solid #dd137b;  /*border-bottom: 1px solid #3b4350;*/
}
</style>
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
            <div id="music-result" class="tabs" style="margin-top:20px;">
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


            <div class="main-container w3-row-padding top_div" id="catgory_with_data_film">

              </div>
             <div class="w3-col s12 m12 l12 w3-center" id="button_load">
                <button class="load_more w3-button w3-center  w3-green1 font-form  padding-both w3-round" id="load_more_button">load more</button>
             </div>

   </div>
</div>
</div>
<a href="javascript:void(0);" id="scroll" title="Scroll to Top" style="display: none;">Top<span></span></a>
<?php require_once 'includes/footer.php';?>
<script type="text/javascript">
var catID="<?php echo $catID; ?>";
function buildMusicTabItems(JSONobject)
{
   var len=JSONobject.category_info.length;
   if(len>0)
   {
     var datan=JSONobject.category_info[0];
     var Parent_id=datan.Parent_id;
     var subCount=datan.sub_count;


     var tab='';
     var j='';
     for(var i = 0; i < len ; i++)
      {
         j=i+1;
         var data=JSONobject.category_info[i];
         var Parent_name=data.Parent_name;
         var Parent_id=data.Parent_id;
         var subCount=data.sub_count;
         //if(Parent_id==pcatid){ var cl="active-bar";  }else{ var cl='';}
         var active='';
         if(i===0){ active="checked"  }
         tab+='<input id="tab'+j+'" onclick="getTabData(\''+Parent_id+'\',\''+subCount+'\')" type="radio" name="tabs" '+active+' class="tab_data"><label for="tab'+j+'">'+Parent_name+'</label>';
       }
       _("w3-bar").innerHTML=tab;
       if(subCount>0)
       {
          $("#button_load").hide();
          getDataWithCategory(Parent_id,"music-result"); var containerNew="music-result";
       }
       else
       {
          $("#button_load").show();
          getDataFilmMusic1(Parent_id);
       }

   }
}
function getTabData(ParentCatid,categoryCount)
{
     if(categoryCount>0)
     {
       $("#button_load").hide();
       $("#catgory_with_data_film").html('');
       getDataWithCategory(ParentCatid,"music-result");
       var containerNew="music-result";

     }
     else{

     $("#button_load").show();
       getDataFilmMusic1(ParentCatid);
     }
}
function getDataFilmMusic1(pcid)
{
   var page=0;var limit=8;
   var track_click = 0; //track user click on "load more" button, righ now it is 0 click
   var total_pages =0;
   $("#button_load").hide();
   $("#music-result").html('');
   $.ajax({
    url:GET_CATEGORY_DATA,
    type:'POST',
    data: {page: track_click,partnerid:PARTNER_ID,categoryid:pcid,limit:limit,countrycode:countrycode,userid:Userid },
    headers: { 'token':token },
    success: function (JSONresponse) {
      var JSONobject = JSON.parse(JSONresponse);
      var kids_total_video= JSONobject.total_video;
      var paging=JSONobject.paging;
      if(paging==null)
      {  _('load_more_button').style.visibility = 'hidden'; }
      total_pages=Math.ceil(kids_total_video/limit);
      var loader='<div id="preloader1" style="margin-top:7%"><div id="status1">&nbsp;</div></div>';
      $("#catgory_with_data_film").html(loader);
      setTimeout(()=>loader_x(),200);
      function loader_x()
      {
        var resultShow=buildCategoryWithDatafilm(JSONobject);
        $("#catgory_with_data_film").html(resultShow);
        $("#button_load").show();
        track_click++;
      }
     }
      });
      $(".load_more").click(function (e) {
      alert(track_click +"---"+ total_pages);
      $(this).hide();
       if(track_click <= total_pages) //make sure user clicks are still less than total pages
       {
            $.ajax({
             url:GET_CATEGORY_DATA,
             type:'POST',
             data: {page: track_click,partnerid:PARTNER_ID,categoryid:pcid,limit:limit,countrycode:countrycode,userid:Userid },
             headers: { 'token':token },
             success: function (JSONresponse) {
               var JSONobject = JSON.parse(JSONresponse);
               var resultShow=buildCategoryWithDatafilm(JSONobject);
               $(".load_more").show();
               $("#catgory_with_data_film").append(resultShow);
               $("html, body").animate({scrollTop: $("#load_more_button").offset().top}, 500);
               track_click++;
               }
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
