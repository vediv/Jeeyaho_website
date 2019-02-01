 
 
function openBrowse()
{
    _('fileUpload').click(); 
}


function buildMyPicture(JSONobject, Container)
{
    var dp=JSONobject.image_url;
    if(dp!="" && dp!="Null" && dp!="None")
    _("userDp").src=dp;

}

function buildMenu(JSONobject, Container,pagename,loginstatus,userid)
{       
    var mobileOutput='';
    
    var output = '<li><a href="javascript:void(0)" class="w3-left w3-hide-large w3-hide-medium" onclick="w3_open()"> <i class="fa fa-bars w3-padding-right w3-padding-left"></i></a> </li><li style="  border-bottom:0px !important" class="logo-right"> <a href="'+baseUrl+'/home" class="logo">';
         /*  if(logoType=="text")output+=applicationName;*/
           /*else*/ output+='<img src="'+baseUrl+'/images/logo_header_sm.png" class="img-responsive" style=" ">';
           output+='</a></li> '; 

    var items= JSONobject.Menu.length;
    for ( var i = 0; i < items ; i++)
    {
        
        
        var catID = JSONobject.Menu[i].catID;
        //console.log("pm ", i ,CurrentPagename ,JSONobject );
       // alert(catID);
        var menu_icon = JSONobject.Menu[i].menu_icon;
        var catname1 = JSONobject.Menu[i].catName.toLowerCase();
        var cat=catname1.split(" ");
        var catLen=cat.length;
        var catSm=cat[0];
        if(catLen>1)
        {for(var j=1;j<catLen;j++){catSm+=cat[i]} }
        var catname = catname1.toUpperCase();
        var menu_icon = JSONobject.Menu[i].menu_icon;
       // alert(menu_icon);
        var priority=JSONobject.Menu[i].Priority;
        var viewType=JSONobject.Menu[i].view_type;
        var url="#";
        if (catname=="ABOUT US") continue;
        if (catname=="FAQs" || catname=="FAQS") continue;
        
        if(viewType==0 || viewType=="0")
        {
        	 
            url=baseUrl+"/channels"; 
        }
        else if(viewType==1 || viewType=="1")
        {
        	
            url=baseUrl+"/home";
            
        }
        else if(viewType==2 || viewType=="2")
        {
            url=baseUrl+"/originals";
            //console.log("pk ",CurrentPagename ,catID );
            sessionStorage.setItem("original_id",catID);
            //if(CurrentPagename=="originals.php")
            //getCategory(catID);
        }
        else if(viewType==3 || viewType=="3")
        {
            url=baseUrl+"/movies";
            sessionStorage.setItem("movies_id",catID);
          // console.log("pk ",CurrentPagename ,catID );
        }
        else if(viewType==4 || viewType=="4")
        {
             url=baseUrl+"/music";
            sessionStorage.setItem("music_id",catID);//console.log("pk ",CurrentPagename ,catID );
        }
        else if((viewType==5 && catname=='KIDS') || (viewType=="5" && catname=='KIDS'))
        {
            url=baseUrl+"/kids";
            sessionStorage.setItem("kids_id",catID);
            //sessionStorage.setItem("bazar_id",catID);
        }
        else if((viewType==5 && catname=='BAZAAR') || (viewType=="5" && catname=='BAZAAR'))
        {
            url=baseUrl+"/bazaar";
            sessionStorage.setItem("bazaar_id",catID);
            //sessionStorage.setItem("bazar_id",catID);
        }
          else if((viewType==5 && catname=='AWARDS') || (viewType=="5" && catname=='AWARDS'))
        {
            url=baseUrl+"/awards";
            sessionStorage.setItem("award_id",catID);
            //sessionStorage.setItem("bazar_id",catID);
        }
        else if(viewType==6 || viewType=="6")
        {
            
            //url=baseUrl+"/bazar";
            //sessionStorage.setItem("music_id",catID);
        }
        else if(viewType==7 || viewType=="7")
        {
            
        }
        
        
       /*if(catname1=="HOME"){ url="index.php";}
        if(catname1=="YT CASE"){ url="ytcase.php"; localStorage.setItem("ytcase_id",catID); }
        if(catname1=="POLLYWOOD"){ url="pollywood.php"; localStorage.setItem("pollyw_id",catID); }
        if(catname1=="SHOWS"){ url="shows.php"; localStorage.setItem("shows_id",catID); }
        if(catname1=="ON DEMAND"){ url="category.php"; localStorage.setItem("ondemond_id",catID); if(CurrentPagename=="index.php")getCategory(catID);}
        if(catname1=="MOVIES"){ url="movies.php";localStorage.setItem("movieCatId",catID);}
        if(catname1=="LIVE TV"){ url="channels.php";}*/
        
        // alert(pagename+"--"+catSm);
        var act = (pagename==catSm || (pagename=="index" && catSm=="home")) ? "w3-active":""; 
        //console.log(menu_icon);
        //output += '<li class="w3-left w3-hide-small nav-menu"> <a href='+url+' class='+act+'><img  src="'+menu_icon+'" height="20"></a> </li>';
        output += '<div style="float:left; margin:0 -40px 0 50px"><li class="w3-left w3-hide-small nav-menu"> <a href='+url+' class='+act+'><img  src="'+menu_icon+'"   class="height15"> '+catname+'</a> </li></div>';
       
        mobileOutput+='<a href='+url+' class='+act+'>'+catname+'</a>';
        }
        
        output +='<div style="float:left; margin:0 -40px 0 50px"><li class="w3-hide-small w3-left nav-menu" style="line-height: 18px !important; "><a class="w3-search "  title="Search" style=""><form action="' +baseUrl+ '/search" method="get"><input type="search"  required style="border-radius: 0px !important; margin:0px  !important; border-bottom: 1px solid #EEEEEE !important;;" name="searchtext" class="nav-search " value="' +search_request+ '"  /><button type="submit" class="nav-button"><i class="fa fa-search"></i></button></form></a></li></div>';
        output +=loginArea();
        _(Container).innerHTML =output+'<span id="notification" class="w3-text-shadow"></span>';
       
        //mobileOutput += '<li class="  "><a  class="w3-search"  title="Search"><form action="' + baseUrl + '/search" method="get"><input type="search" name="searchtext" class="nav-search" style="width:60%; border-radius: 0px;" required/><button type="submit" class="nav-button"><i class="fa fa-search"></i></button></form></a></li>';
         mobileOutput+=mobileLoginArea();
	  _("mySidenav").innerHTML=mobileOutput;
	  
       
	  $('input[type=search]').change(function(){
    $(this).val($.trim($(this).val().replace(/\t+/g,' ')));
    });
}

function skip()
{

    var Container = "Guest_user";
    var apiBody = new FormData();
    apiBody.append("userid",Userid);
    apiBody.append("partnerid",PARTNER_ID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("name",user_browser);
    apiBody.append("os",user_os);
    apiBody.append("uuid",sessionID);
    apiBody.append("type",deviceType);
    runAjax(GET_GUEST_USER, apiBody, Container);

}


function buildGuestMsg(JSONobject, Container)
 {
     var status =JSONobject.status; 
      if(status=='1')
      document.location = baseUrl + "/home";

 } 


function mobileLoginArea()
{
    switch(loginStatus)
    {
        case "Y":
          // var mLogin='<a style="float:right;" href="'+baseUrl+'/logout.php" class=" w3-right-align w3-search mobileUser-btn" ><i class="fa fa-2x  fa-power-off w3-hover-text-red font10  style="padding-bottom: 0px !important;"" title="Logout"></i></a>';
           var mLogin='<a style="float:right;" href="javascript:" class=" w3-right-align w3-search mobileUser-btn" onclick="Logout();" ><i class="fa fa-2x  fa-power-off w3-hover-text-red font10  style="padding-bottom: 0px !important;"" title="Logout"></i></a>';

           mLogin+='<a href="'+baseUrl+'/myaccount" onclick=" " class="font10 w3-right-align w3-search  mobileUser-btn" title="View Profile" style="padding: 10px 14px 11px 14px !important;"><span class="user_login_mob"></span>'+UserIDName+'</a>';
           mLogin+='<a  href="'+baseUrl+'/watchlist" class="font10 w3-right-align w3-search mobileUser-btn" title="View Playlist">Watchlist</a>';
           mLogin+='<a  href="'+baseUrl+'/transaction" class="font10 w3-right-align w3-search  mobileUser-btn" title="View Watch Later">Transaction</a>';
           mLogin+='<a  href="'+baseUrl+'/subscription" class="font10 w3-right-align w3-search  mobileUser-btn" title="View Playlist">Plan</a>';
           //mLogin+='<a  href="'+baseUrl+'/wallet" class="w3-right-align w3-search  mobileUser-btn" title="View Watch Later">Wallet</a>';
           mLogin+='<a  href="'+baseUrl+'/ticket" class="font10 w3-right-align w3-search  mobileUser-btn" title="View Playlist">Ticket</a>';
           mLogin+='<a  href="'+baseUrl+'/contactus" class="font10 w3-right-align w3-search mobileUser-btn" title="View Watch Later">Contact us</a>';
           mLogin+='<a  href="'+baseUrl+'/faqs" class="font10 w3-right-align w3-search  mobileUser-btn" title="View Watch Later">FAQ</a>';
            return mLogin;
            break;
        default:
        var logint="log_in";
            return '<a  href="javascript:" class="w3-left-align w3-left " onclick="login()"><i class="fa fa-user-circle-o"></i> Login&nbsp;</a>';
            break;
    }
}
 


function loginArea()
{
    switch(loginStatus)
    {
        case "Y":
            return '<li class=" w3-right nav-menu w3-text-capitalize float-none" id="menu"><a  href="javascript:" onclick="showHideLeftMenu(this)" class="padding-login"><div class="user_login "></div></a></li>';
            break;
        default:
             var logint="log_in";
             return '<li class="nav-menu w3-right   float-none"><a  href="javascript:" onclick="login()"  class="padding-login ">LOGIN</a></li>';
            break;
    }
    
}
function  showHideLeftMenu()
{
	var dispStatus=_("LEFT_MENU").style.display;
    if(dispStatus=="none"){_("LEFT_MENU").style.display="block";}else{_("LEFT_MENU").style.display="none";}
}

function  buildLeft_Menu(JSONobject, Container)
   {
  	 var html='';
  	 var url='#';
  	 var items= JSONobject.leftMenu.length;
  	 
  	 html+='<ul class="header-menu header-menu-right">';
     for ( var i = 0; i < items ; i++)
     {
        var catID = JSONobject.leftMenu[i].catID;
        var Priority = JSONobject.leftMenu[i].Priority;
        var menu_icon = JSONobject.leftMenu[i].menu_icon;
        var Priority= JSONobject.leftMenu[i].Priority;
        var catName= JSONobject.leftMenu[i].catName;
        
        if(catID==001 || catID=="001")
        {
          url=baseUrl+"/home";

        }
        else if(catID==007 || catID=="007")
        {
          url=baseUrl+"/myaccount";
        }
        else if(catID==008 || catID=="008")
        {
          url=baseUrl+"/watchlist";
        }
         else if(catID==009 || catID=="009")
        {
          url=baseUrl+"/subscription";
        }
         else if(catID==010 || catID=="010")
        {
          url=baseUrl+"/wallet";
        }
         else if(catID==002|| catID=="002")
        {
          url=baseUrl+"/contactus";
        }
        else if(catID==003|| catID=="003")
        {
          url=baseUrl+"/faqs";

        } 
        
        else if(catID==011|| catID=="011")
        {
          url=baseUrl+"/ticket";

        }
        
        else if(catID==012|| catID=="012")
        {
          url=baseUrl+"/transaction";

        }
        
       if(catID==013|| catID=="013")
        {
          menu_icon='';catName='';	
          html+='';
         }
        else{ 
         html+='<li class="" > <a href='+url+' class="" style=""><img  src="'+menu_icon+'" height="15" style=""><span style=" padding-left:12px">'+catName+'</span></a> </li>';
        }
     }
     //html+=' <li ><a href="'+baseUrl+'/logout"><i class="fa fa-power-off" style="color:#38cef8; font-size:15px;padding-right:10px;"  onclick="Logout();"></i>Logout</a></li> ';
     html+=' <li ><a href="javascript:" onclick="Logout();"><i class="fa fa-power-off" style="color:#38cef8; font-size:15px;padding-right:10px;"  ></i>Logout</a></li> ';
     
     html+='</ul>';
     _("LEFT_MENU").innerHTML=html;
  }
  
  
  
function notification(str)
{    
    var toolTip='<div class="message-inner message-tip "> </div>';
    $("#notification").css({display:"block"});$("#notification-sm").css({display:"block"});
    $( "#notification" ).stop(); $( "#notification-sm" ).stop();
    $( "#notification" ).html(toolTip+str).animate({opacity:1, top: "76px"}, 1000, function() { $( "#notification" ).animate({opacity: 0,display:"none"}, 8000)});
    $( "#notification-sm" ).html(toolTip+str).animate({opacity:1, top: "35px"}, 1000, function() { $( "#notification-sm" ).animate({opacity: 0,display:"none"}, 8000)});
                   
}



function viewMedia(obj,planID,pid,pname,event)
{ 
    if(planID==1)
    { 
        
          //alert(obj+"-"+planID+"--"+pid+"---"+pname);
          //notification("This video is premium");
          if(loginStatus=='N')
          {
           //notification("login required");
           document.location = baseUrl+"/watch/"+obj; 
            //document.location = baseUrl+"/subscription/";
          }
          
          if(loginStatus=='Y')
          //{document.location = baseUrl+"/myaccount?tabs=plan";} 
          document.location = baseUrl+"/watch/"+obj; 
          }

    else{
        
        if(obj=="" || obj==null || obj=="null" || obj=="Null" || obj=="NULL" || obj== undefined)
        {notification("No entryId found..");console.log("No entryId found... Unable to load metadata without entryId");return false;}
        
        if(pid!=undefined)
        {
            sessionStorage.setItem("pid",pid);
            sessionStorage.setItem("pname",pname);
        }
            document.location = baseUrl+"/watch/"+obj; 
        return true;
    }
} 

function buildMovieCarusel(JSONobject, Container)
{
   
    var items_carosel=JSONobject.Carousel.length;
  
    var control='<div class="w3-display-container">';
   
    control+='<div class="carousel-inner">';
                 
    for (var i = 0; i < items_carosel ; i++)
    {  
        var imgUrlType= getImageDim(i); 
        var imgurl =JSONobject.Carousel[i].imgurl;
        control+='<img class="mySlides w3-image  w3-animate-left" width="100%" src="'+imgurl+'" >';
    }
    
    control+='<div class="w3-center w3-section w3-large w3-text-white w3-display-middle slideControls" style="width:100%">';
    control+='<div class="w3-left  arrowL"  onclick="slider(-1)"> </div>';
    control+='<div class="w3-right  arrowR" onclick="slider()"></div>';
    control+='</div>';
    
    control+='<div class="w3-center w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">';
    for (var i = 0; i <items_carosel ; i++)
    {
        control += '<span class="w3-badge demo  w3-transparent w3-hover-white" onclick="slider('+i+')"></span>';
    }
     
    control +='</div></div>';     
              
    _(Container).innerHTML =control;
  
    var dots = __("demo");
    dots[0].classList.add("w3-white") ;
    
}
           


function buildHomeSetting(JSONobject, Container)
{ 
	   // related recommanded video  home
    //loadjscssfile("layout/js/jquery.bxslider.js");
    var items= JSONobject.home.length;
    console.log(items);	
    //if(items<=0)_(Container).innerHTML ="";
    var row = "";
    for(var i=0 ; i<items ; i++)
    {
        var title_tag_name = JSONobject.home[i].title_tag_name.toUpperCase();
        var search_tag_array = JSONobject.home[i].search_tag;    
        if(search_tag_array==null)
        continue; 
        //console.log(title_tag_name);
        row+='<p class="w3-content w3-container heading  ">'+title_tag_name+'</p>';
        var search_tag_array_length = JSONobject.home[i].search_tag.length; 
        //console.log("itemLength="+search_tag_array_length);	
        var slide='<div class="w3-row-padding bxslider" >';
        for(j=0;j<search_tag_array_length;j++)
        {
           var search_tag_array=JSONobject.home[i].search_tag;
                var tumnail_height_width="/width/500/height/300/quality/75";
                var thumburl=search_tag_array[j].thumburl+tumnail_height_width;
                var vname=search_tag_array[j].name;
                 var des="";
               var strlen= vname.length; 
	           var dot="";
	           if(strlen>'30') {  dot="...";}
	            //var vname_vew = vname.substring(0, 30)+dot;
                var plan=search_tag_array[j].ispremium;
                var entryid=search_tag_array[j].entryid;
                var duration=search_tag_array[j].duration;
                var plandetail=(plan==0) ? "Free" : "Premium";
                var planClass=plan==0 ? "planF" : "planP";
                
                //var lang= search_tag_array[j].language;                
          
                slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                slide+='<div class="w3-card-2 vidThumb item">';  
                slide+='<a href="javascript:" title="'+name+'" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\',event)">'; 
                slide+=' <img class="w3-image lazy  " data-src="'+thumburl+'">';
                slide+='<span class="'+planClass+' price_tag" style="position:absolute; bottom: 39px;">'+plandetail+'</span>';
                slide+='<span class="duration">'+msToTime(duration)+'</span>';
                slide+='<div class="card-text" style=" display: inline-block;">'; 
                slide+='<h4 class="" title="'+vname+'" style="padding-bottom:0px !important; text-align: left;">'+vname+'</h4></a>';
              //  slide+='<h5 class="vidlanguage">'+lang+'</h5>';
                slide+='</div>';
                slide+='</div>';
                slide+='</div>';
                /*if(search_tag_array_length<4)
			     {
			        console.log("santosh");
			        var k = 4 - search_tag_array_length;
	                for (var jj = 0; jj < k; jj++) {
	                slide+='<div class="w3-col s12 m3 l3 lazy-container">';
	                slide+='<div class="w3-card-2 vidThumb">';
	                slide+='<a><img src="'+baseUrl+'/images/banners/placeholderS.jpg" class="w3-image " ></a>';
	                //slide+='<span class="duration">'+msToTime(duration)+'</span>';
	                slide+='<div class="card-text ">';
	                slide+='<h4 class="" ></h4>';
	                slide+='</div>';
	                slide+='</div>';
	                slide+='</div>';
			         }
			
			      } */
                
                
                
        }
        row+=slide+"</div>";
        
    } 	
 _(Container).innerHTML =row;
    $('.bxslider').bxSlider({
        slideWidth: 325,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin:0,
       // auto: true, 
    });
  
    $('img.lazy').loadScroll(100); 
} 
   function loadjscssfile(filename){
   var fileref=document.createElement('script');
  fileref.setAttribute("type","text/javascript");
  fileref.setAttribute("src", filename);
  if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

function buildCaruselonly(JSONobject, Container)
{
    localStorage.setItem("caruselObj",JSON.stringify(JSONobject.Carousel)); 	
    var items_carosel=JSONobject.Carousel.length;
    var control='<div class="w3-display-container">';
    control+='<div class="carousel-inner">';
                 
    for (var i = 0; i < items_carosel ; i++)
    {  
    	 
        var imgUrlType= getImageDim(i); 
        var imgurl =JSONobject.Carousel[i].extralarge_imgurl;
        var entryid = JSONobject.Carousel[i].entryid;
		// msg = (msg == "None") ? "" : msg;
		// alert(entryid);
     	control += '<div class="mySlides"><img class="w3-image  w3-animate-left" width="100%"  href="watch/'+entryid+'" src="' + imgurl + '" >';
		 if(entryid!=''|| entryid!="")
		{
			//control += '<span class="playText w3-text-shadow-white ">' + msg + '</span>';
		    control += '<span class="playBtn"   onCLick="viewMedia(\'' + entryid + '\',\'' + 0 + '\')"></span>';
		}
		control += '</div>';
    }
    
   
     
  
    control+='<div class="w3-center  w3-large w3-text-white w3-display-middle w3-display-middle1 slideControls" style="width:100%">';
    control+='<div class="w3-left  arrowL"  onclick="slider(-1)"></div>';
    control+='<div class="w3-right  arrowR" onclick="slider()"></div>';
    control+='</div>';
    
    control+='<div class="w3-center   w3-large w3-text-white w3-display-bottommiddle" style="width:100%">';
    for (var i = 0; i <items_carosel ; i++)
    {
        control += '<span class="w3-badge demo  w3-transparent w3-hover-white" onclick="slider('+i+')"></span>';
    }
     
    control +='</div>';     
              
    _(Container).innerHTML =control;
  
    var dots = __("demo");
    dots[0].classList.add("w3-white") ;
  }
  
  
   
    
     
  function buildCategoryWithDatafilm(JSONobject){
  	

        control='<div class="w3-display-container w3-row-padding">';
          var Category_data_len= JSONobject.Category_data.length;
          var entryid = JSONobject.Category_data.entryid;
        for(var i=0; i < Category_data_len; i++)
         {
         var thumburl = JSONobject.Category_data[i].thumburl;
         var tumnail_height_width="/width/300/height/200/quality/75";
         var thumburl=thumburl+tumnail_height_width;
         var name = JSONobject.Category_data[i].name;
        var language = JSONobject.Category_data[i].language;
        var entryid = JSONobject.Category_data[i].entryid;
        var duration = JSONobject.Category_data[i].duration;
        var plan = JSONobject.Category_data[i].ispremium;

        var plandetail=(plan==0) ? "Free" : "Premium";
        var planClass=plan==0 ? "planF" : "planP";
        control+='<div class="w3-col s12 m3 l3 lazy-container">';
        control+='<div class="w3-card-2">';

        control+='<a onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')"><img class="w3-image lazy"  src="'+thumburl+'" src="'+baseUrl+'/images/banners/placeholder@.png"></a>';
        //control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<span class="'+planClass+' price_tag" style="position: absolute; margin: 0 0 20px 0;">'+plandetail+'</span>';
        control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<div class="card-text text-ellipse">';
        control+='<h4 class="" title="'+name+'">'+name+'</h4></a>';
        control+='</div>';
        control+='</div>';
        control+='</div>';
         }
        
         control +='</div>';
         return control; 
         //control+='<div class="w3-col s12 m12 l12 w3-center">';
         //control+='<button class="load_more w3-button w3-center  w3-green1 font-form  padding-both w3-round" id="load_more_button">load more</button>';
         //control+='</div>'; 
       // _(Container).innerHTML =control;

      } 
    
 function buildCategoryWithData(JSONobject, Container)
  {
    var items= JSONobject.category_subdata.length;
    if(items<=0)_(Container).innerHTML ="";
    var row = "";
    for (var i = 0; i < items ; i++)
    {
        var title_tag_name = JSONobject.category_subdata[i].title_tag_name.toUpperCase(); 
        var search_tag_array_length = JSONobject.category_subdata[i].search_tag.length;    
      
        if(search_tag_array_length>0)
        {
            row+='<p class="w3-content w3-container heading  ">'+title_tag_name+'</p>';
       
            var slide='<div class="w3-row-padding bxslider" >';
            for (var j = 0; j < search_tag_array_length ; j++)
            {
                var search_tag_array=JSONobject.category_subdata[i].search_tag;
                var tumnail_height_width="/width/300/height/200/quality/75";
                var thumburl=search_tag_array[j].thumburl+tumnail_height_width;
                var name=search_tag_array[j].name;
                var plan=search_tag_array[j].ispremium;
                var entryid=search_tag_array[j].entryid;
                var duration=search_tag_array[j].duration;
                var plandetail=(plan==0) ? "Free" : "Premium";
                var planClass=plan==0 ? "planF" : "planP";
               // var lang= search_tag_array[j].language;     
                slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                slide+='<div class="w3-card-2 vidThumb"> <span class="plan '+planClass+'"></span>';
                slide+='<a href="javascript:" title="'+name+'" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')"><img  class="w3-image lazy" data-src="'+thumburl+'"  src="'+baseUrl+'/images/placeholder@2x.png">';

                //slide+="<a href='javascript:' title='"+name+"' onCLick='viewMedia(\""+entryid+"\",\""+plan+"\")'><img data-src="+thumburl+" src='"+baseUrl+"/images/banners/placeholderS.jpg' class='w3-image lazy' >";
                slide+='<span class="duration">'+msToTime(duration)+'</span>';
                slide+='<div class="card-text ">';
                //slide+='<h4 class="" title="'+name+'">'+textWrap(name,32)+'</h4>';
                slide+='<h4 class="" title="'+name+'">'+name+'</h4></a>';
                //slide+='<h5 class="vidlanguage">'+lang+'</h5>';
                slide+='</div>';
                slide+='</div>';
                slide+='</div>';
          
                if(search_tag_array_length<4)
                {
                    slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                    slide+='<div class="w3-card-2 vidThumb">';
                   // slide+='<a><img src="'+baseUrl+'/images/banners/placeholderS.jpg" class="w3-image " ></a>';
                    //slide+='<span class="duration">'+msToTime(duration)+'</span>';
                    slide+='<div class="card-text ">';
                    slide+='<h4 class="" ></h4>';
                    slide+='</div>';
                    slide+='</div>';
                    slide+='</div>';
              
                }
         
          
            }
      
            row+=slide+"</div>";
        }
        _(Container).innerHTML =row;
    }
    $('.bxslider').bxSlider({
 
        slideWidth: 325,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin:0,
       // auto: true,
       
    });
  
    $('img.lazy').loadScroll(100);        
         
       
}



 function buildKidsCategory(JSONobject, Container){
 	
      	var control='<div class="w3-display-container w3-row-padding">';
      	var Category_data_len= JSONobject.Category_data.length;
      	var entryid = JSONobject.Category_data.entryid;
        for(var i=0; i < Category_data_len; i++)
         {
      	var thumburl = JSONobject.Category_data[i].thumburl;
      	var tumnail_height_width="/width/300/height/200/quality/75";
        var thumburl=thumburl+tumnail_height_width;
      	var vname = JSONobject.Category_data[i].name;
      	  var des="";
               var strlen= vname.length; 
	           var dot="";
	           if(strlen>'30') {  dot="...";}
	           var vname_vew = vname.substring(0, 30)+dot;
        var language = JSONobject.Category_data[i].language;
        var entryid = JSONobject.Category_data[i].entryid;
        var duration = JSONobject.Category_data[i].duration;
        var plan = JSONobject.Category_data[i].ispremium;
                
        var plandetail=(plan==0) ? "Free" : "Premium";
        var planClass=plan==0 ? "planF" : "planP";
        control+='<div class="w3-col s12 m3 l3 lazy-container">';
        control+='<div class="w3-card-2">';
       
        control+='<a onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')" style="cursor: pointer"><img  class="w3-image lazy"  src="'+thumburl+'"  src="'+baseUrl+'/images/banners/placeholder@.png"></a>';
        //control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<span class="'+planClass+' price_tag" style="position: absolute; margin: 0 0 20px 0;">'+plandetail+'</span>';
        control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<div class="card-text text-ellipse font-size">';
        control+='<h4 onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')" class="" title="'+vname+'" style="text-align: left; cursor: pointer">'+vname_vew+'</h4></a>';
        control+='</div>';
        control+='</div>';
         control+='</div>';
         }    
         control +='</div>';   
           return control;             
      }      
  
       function buildBazarCategory(JSONobject, Container){ 	
      	var control='<div class="w3-display-container w3-row-padding">';
      	var Category_data_len= JSONobject.Category_data.length;
      	var entryid = JSONobject.Category_data.entryid;
        for(var i=0; i < Category_data_len; i++)
         {
      	var thumburl = JSONobject.Category_data[i].thumburl;
      	var tumnail_height_width="/width/300/height/200/quality/75";
        var thumburl=thumburl+tumnail_height_width;
      	var vname = JSONobject.Category_data[i].name;
      	 var des="";
               var strlen= vname.length; 
	           var dot="";
	           if(strlen>'30') {  dot="...";}
	           var vname_vew = vname.substring(0, 30)+dot;
        var language = JSONobject.Category_data[i].language;
        var entryid = JSONobject.Category_data[i].entryid;
        var duration = JSONobject.Category_data[i].duration;
        var plan = JSONobject.Category_data[i].ispremium;
        var plandetail=(plan==0) ? "Free" : "Premium";
        var planClass=plan==0 ? "planF" : "planP";
        control+='<div class="w3-col s12 m3 l3 lazy-container">';
        control+='<div class="w3-card-2 ">';
        control+='<a onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')" style="cursor: pointer"><img  class="w3-image lazy"  src="'+thumburl+'"  src="'+baseUrl+'/images/banners/placeholderS.png"></a>';
        //control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<span class="'+planClass+'" style="position:absolute; bottom: 44px;">'+plandetail+'</span>';
        control+='<div class="card-text text-ellipse">';
        control+='<h4 onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')" class="" title="'+vname+'" style="text-align: left; cursor: pointer">'+vname_vew+'</h4></a>';
        control+='</div>';
        control+='</div>';
         control+='</div>';
         }
         
            
         control +='</div>';  
        //_(Container).innerHTML =control;
           return control; 
      }
      
 	
 	
function buildliveChannel(JSONobject, Container)
 {



        var len=JSONobject.LiveFeed.length;
        // _("srchResCount").innerHTML=len;

        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.LiveFeed[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumb=data.thumbnailurl;
            var msg=data.msg;
            var thumburl=thumb+tumnail_height_width;
            var plan=0;
            var entryid=data.entryid;
            var downloadurl=data.downloadurl;
            var description=data.description;
            //var added_date=data.added_date;
            //var datetime = added_date.split(" ");
            // var date=datetime[0]; var time=datetime[1];
            // var plandetail=(plan==0) ? "Free" : "Premium";
            //var duration=data.duration;
            var name=data.name;
            //var planClass=plan==0 ? "planF" : "planP";

            watch+='<div class="w3-col s12 m3 l3">  ';
            watch+=' <div class="w3-card-2 vidThumb" ><span class="plan "></span>';
            watch+='<a    title="'+name+'">';
            watch+='<img class="w3-image lazy " data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholder@.png" >';
            watch+='</a>';
            //watch+='<span class="duration-sm">'+msToTime(duration)+'</span>';
            watch+='<div class="card-text w3-text-white w3-uppercase">';
            watch+='<h4 class="w3-center" title="'+name+'">'+textWrap(name,35)+'</h4>';

            watch+='</div>';
            watch+= '</div>';
            watch+= '</div>';


        }
        _(Container).innerHTML=watch;
        $('img.lazy').loadScroll(100);
    } 

 function closeAlert()
 {
 	 document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
    login();    
 	
 }
     
 function buildVideoInfo(JSONobject, Container)
     {
     var getVideoData=JSONobject.Video[0];
     var titleName=getVideoData.name;
     var category_name = getVideoData.category;
     var cat_name = category_name.split(">").splice(-1);  
	 var played_duration = getVideoData.played_duration;
	 var total_duration = getVideoData.duration;
	 var thumbnailurl = getVideoData.thumbnailurl;
     var status_video = getVideoData.status;
     var SubGenre = getVideoData.SubGenre;
     var Director = getVideoData.Director;
     var Cast = getVideoData.Cast;

     if((SubGenre!=null) && (SubGenre!=""))
     { 
        _('SubGenreName').innerHTML="SubGenre :";
        _('SubGenre').innerHTML=SubGenre;
     }
     if((Director!=null) && (Director!=""))
     {
            _('DirectorName').innerHTML="Director :";
            _('Director').innerHTML=Director;
     }
     if((Cast!=null) && (Cast!=""))
     {      _('CastName').innerHTML="Cast :";
           _('Cast').innerHTML=Cast;
     }

      if(status_video==4)
      {
      var Message = getVideoData.Message;
      Alert.render(Message); 
      document.getElementById('dialogboxfoot').innerHTML = '<button onclick="closeAlert()" style="background: #333; border: 0px !important; font-size:1.3em; color:#fff">OK</button>';
      /*this.ok = function()
      {
      	alert("ashvdh");
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
      //login();
      } */
      //login();
      }
      if(status_video==2)
      {
      var Message = getVideoData.Message;
      //alert(Message);
      }
 
     // alert(played_duration);
     var entryid = getVideoData.entryid;
     var price   = getVideoData.price;
     var age_code   = getVideoData.age_code;
     var age_tag   = getVideoData.age_tag;
     var age_msg   = getVideoData.age_msg;
     
     
  /*
    if((age_tag==0 && age_code=="UA")||(age_tag==0 && age_code=="UA"))
      {
          ageG_image = '<img class=" "  src="' + baseUrl + '/images/icons/G@2x.png" >';
         _('age_image').innerHTML = ageG_image;
      }*/
  
    /*
    if((age_tag==0 && age_code=="A")||(age_tag==0 && age_code=="A"))
        {
            //notification(age_msg);
            ageG_image = '<img class=" "  src="' + baseUrl + '/images/icons/G@2x.png" >';
           _('age_image').innerHTML = ageG_image;
        }*/
    
    if((age_tag==1 && age_code=="UA")||(age_tag==1 && age_code=="UA"))
    {
    	
        // notification(age_msg); 
       
          Alert.render(age_msg);
                document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alertok()" style="background: #333; border: 0px !important; color:#fff; font-size:1.3em;">OK</button>';
               
        }
        
    if((age_tag==1 && age_code=="A")||(age_tag==1 && age_code=="A"))
    
    {
       // notification(age_msg); 
      
        Alert.render(age_msg);
                document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alertok()" style="background: #333; border: 0px !important; color:#fff; font-size:1.3em;">OK</button>';
          
       
       } 
    if((age_tag==2 && age_code=="UA")||(age_tag==2 && age_code=="UA"))
    {
        
         // $("#watch-video").bind( "click", function() {
              Alert.render(age_msg); 
              document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" style="background: #333; border: 0px !important; color:#fff;  padding:3px 6px" class="font-size font-size14">Sign In</button>';
              this.ok = function(){
               document.getElementById('dialogbox').style.display = "none";
               document.getElementById('dialogoverlay').style.display = "none";
             //login();
              } 
             login();
                  _(Container).innerHTML = "<div><img src='" + thumbnailurl + "'></div>";
                // }); 
       
        
    }
    if((age_tag==2 && age_code=="A")||(age_tag==2 && age_code=="A"))
    {
           //$( "#watch-video" ).bind( "click", function() {
           Alert.render(age_msg);
          document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" style="background: #333; border: 0px !important; color:#fff; padding:3px 6px">Sign In</button>';
     
      login(); 
      _(Container).innerHTML = "<div><img src='" + thumbnailurl + "'></div>";
          //});
         
    }
       
     var entryid = getVideoData.entryid;
     var price   = getVideoData.price; 
     var plan   = getVideoData.ispremium; 
     var plandetail=plan==0 ? "Free" : "Premium";
     var planClass=plan==0 ? "planF" : "planP";
      var Currency_name   = getVideoData.Currency_name;
     /*
      var Cinematography   = JSONobject.Video[0].custom_data.Cinematography;
          var Singer   = JSONobject.Video[0].custom_data.Singer;
          var Production   = JSONobject.Video[0].custom_data.Production;
          var Lyricist   = JSONobject.Video[0].custom_data.Lyricist;
          
          _('a').innerHTML=Cinematography;
          _('b').innerHTML=Singer;
          _('c').innerHTML=Production;
           _('d').innerHTML=Lyricist;*/
     
     for (var key in JSONobject.Video[0].custom_data)
      { if (!JSONobject.Video[0].custom_data.hasOwnProperty(key))
        { continue; }
        document.getElementById("demo").innerHTML += key + ' - ' +  JSONobject.Video[0].custom_data[key] + '<br />';
      }; 
     var ldescription=getVideoData.longdescription; 
      var sdescription=getVideoData.ShortDescription; 
     _('long_discription').innerHTML=ldescription;
    /* _('short_discription').innerHTML=sdescription;*/
     _('plan_F').innerHTML=plandetail;
      _('cat_n').innerHTML=cat_name;
      _('time-durvideo').innerHTML='<span>'+msToTime(total_duration)+'</span>';
   
       //fea+='<span class="'+planClass+' w3-bold">'+plandetail+'</span>';
    // var Music_Director   = JSONobject.Video[0].custom_data.Music Director; 
    // console.log(price);
    var userLike=getVideoData.userlike;
  
     if(userLike=="L")
        {
            _("resultlike").classList.add("w3-heartR");
            _("resultdislike").classList.remove("w3-heart-breakR");
      	   
      	   
        } 
        if(userLike=="D")
        {
            _("resultlike").classList.remove("w3-heartR");
            _("resultdislike").classList.add("w3-heart-breakR");
      	   
        } 
  
    
       //var category=categories.split(">")[0];
    var totallike_get=getVideoData.totallike;
    var totaldislike_get=getVideoData.totaldislike;
    var totallike= (totallike_get=="None" || totallike_get=="NULL" || totallike_get=="Null") ? 0 : totallike_get;
    var totaldislike= ( totaldislike_get=="None" || totaldislike_get=="NULL" || totaldislike_get=="Null") ? 0 : totaldislike_get;
    
    
     
 _("video-title").innerHTML=titleName; 
 // _("time-dur").innerHTML=played_duration; 
  

    var downloadUrl=getVideoData.downloadurl;
    
   if(downloadUrl==null || downloadUrl=="Null" || downloadUrl==""){
   if(price!="0"){
          if(Currency_name=="INR")
          {
               //_("price_val").value=price;
               $("#price_val").val(price);
               $("#entry_id_val").val(entryid);
               var id01="id01";
               var inrPrice='<span onCLick="DisplayPriceModal(\''+price+'\',\''+entryid+'\',\''+id01+'\')" style="cursor: pointer;">';
               if(loginStatus=='Y'){
               inrPrice+='<div class="price">BUY<span class="vidMsg">'+price+'</span> <i class="fa fa-inr"></i> </div>';
               }
               inrPrice+='</span>';
             _("price_detail").innerHTML=inrPrice;
          }
          if(Currency_name=="USD")
          {
               _("price_detail").innerHTML="<div class='price'>BUY<span class=' vidMsg'>"+price+"</span>$</div>";
          }
        }
      }

           


   // var playUrl=downloadUrl+"/a.m3u8";
  
    //resDataUrl=downloadUrl;
    var thumbnailUrl=getVideoData.thumbnailurl;
    var tumnail_height_width="/width/840/height/475/quality/75";
      var getAds=JSONobject.Adv_Info;
      var  adCount=getAds.length;
          var jsonArr = [];

          for(var i=0;i<adCount;i++) {
           jsonArr.push({
           time: parseInt(getAds[i].cue_point/1000),
           adTag: getAds[i].url ,

            });
           }

             var jsonString= JSON.stringify(jsonArr);
             //console.log(jsonArr);
             //console.log(jsonString);  
    var thumburl=thumbnailUrl+tumnail_height_width;//log(thumburl);

    if(downloadUrl=="NULL" || downloadUrl=="null" || downloadUrl=="Null" || downloadUrl=="")
    {
        _(Container).innerHTML="<div><img src='"+thumburl+"'><span class='vidMsg'>"+msg+"</span></div>";
        
    }
    else
    {
        //console.log(resDataUrl);
        _(Container).innerHTML='';
       //_(Container).style.backgroundImage='url('+thumburl+')';
       var api=flowplayer("#watch-video", {
            splash: false,
            ratio: 9/16,
            autoplay:true,
            keyboard:false,
            autobuffering:false,
            analytics: 'UA-117831717-1',
            label:entryID+"|"+titleName+"|"+PARTNER_ID+"|"+Userid,
            // stream only available via https:
            // force loading of Flash HLS via https
            swfHls: "https://releases.flowplayer.org/7.0.4/flowplayerhls.swf",
             ima: {
                  ads: jsonArr ,
                  },  
           //swf: "//releases.flowplayer.org/5.4.3/flowplayer.swf",
            clip: {
           //eventCategory:'VideoStatistics','eventLabel':titleName+"|"+entryID+"|"+PARTNER_ID+"|"+Userid,
                // enable hlsjs in desktop Safari for manual quality selection
                // CAVEAT: may cause decoding problems with some streams!
                hlsjs: {
                    safari: true,
                    /*autoLevelCapping:false,
                    startLevel:0*/
                },
                /*live: true,*/
                sources: [
                       { 
                       	//type: "application/x-mpegurl",
                         type: " application/vnd.apple.mpegurl",
                         
                         src: downloadUrl }
                ]
            }

          });

        }
        api.bind("ready", function(e, api) {
        api.seek(played_duration);
       });
        api.on('progress', function() {
        var curr = parseInt(api.video.time);
        var dur = parseInt(api.video.duration);
       // console.log('sec ', dur, 'curr ', curr);

        //alert(curr+"--"+dur);
        if (curr > dur * 10 / 100 && curr < dur * 90 / 100) {
            var inRange = true;
        } else {
            inRange = false;
        }

        window.onbeforeunload = function(e) {
            if (inRange == true)
                return setContinueWatching(curr);
        };

    }); 
 
        //if(categories!="")
       // _("video-cat").setAttribute("href",baseUrl+"/category/"+category.toLowerCase());
       // _("publish").innerHTML=PublishDate;
           totallike=totallike;
        _("likes").innerHTML=totallike;
        //_("views").innerHTML=totalView;
        _("dislikes").innerHTML=totaldislike; 

    }

function Alertok(){
        document.location = baseUrl + "/home";
    }
     
    
    function setContinueWatching(currPos)
    {
 
        var data="userid="+Userid+"&partnerid="+PARTNER_ID+"&entryid="+entryID+"&countrycode="+countrycode+"&played="+currPos+"&tag=insert";
        $.ajax({type: 'POST',data:data,async: false,url: GET_CONTWATCHING,success:function(){} });
         
    }

 
   /*
   
     
       function buildPlaylistInPlayer(JSONobject)
       {  
           
           
           var playlistObject=JSONobject.UserView;
           var len=playlistObject.length;
           
           var playList='<h4 >Playlist</h4><hr>  <div class="w3-col s12 m12 l12"><h5 class="w3-text-white">'+playListName+' - <small>'+len+' Videos</small>';
           playList+='</h5></div>';
           playList+='<div class="scrollHider"></div>';
           playList+='<table class="plTable" cellspacing=0>';
           for(var i=0;i<len;i++)
           { 
               var thumbUrl=playlistObject[i].thumbnail+"/width/350/height/200/quality/75";
               var duration=playlistObject[i].Duration;
               var name=playlistObject[i].name;
               var entry_id=playlistObject[i].entry_id;
               playList+='<tr onCLick="viewMedia(\''+entry_id+'\',0,\''+playListId+'\',\''+playListName+'\')"><td class="plThumb">';
               
               playList+='<a href="javascript:" title="'+name+'" >';
               playList+='<img class="w3-image w3-animate-opacity" src="'+thumbUrl+'" /></a></td>';
               playList+='<td class="plTitle" >';
               playList+=''+name+'';
               playList+='</td>';
               playList+='</tr>';
              
           }
               playList+='</table>';
           _("playlist-video").innerHTML=playList;
           
          
                      
       }*/
   
 
/*   var videoPrice='';
function buildVideoPrice(JSONobject, Container)
{

     var getVideoData=JSONobject.Video[0];
     //var entryid = getVideoData.entryid;
     var price   = getVideoData.price;
     var Currency_name   = getVideoData.Currency_name;
     if(price!="0"){
          if(Currency_name=="INR")
          {
               //_("price_val").value=price;
               $("#video_price").html(price);
               //$("#video_price_t").html(price);
               $("#videPrice").val(price);
               alert(price);
               getcalculatVideoData(price);
               //videoPrice=price;
               //alert("in setter:"+videoPrice);
          }
          if(Currency_name=="USD")
          {
               _("price_detail").innerHTML="<div class='price'>BUY<span class=' vidMsg'>"+price+"</span>  $ </div>";
          }
         }
  }
*/
    function addFavroiteVideo(entryidget)

    {

        switch(loginStatus)
        {
            case "Y":
                addFavroite(entryidget);
                break;
                case "N":
                login();
                break;
        }
    }
  function addwatchlatervideo(entryidget)
    {
        switch(loginStatus)
        {
            case "Y":

                insertADDVideoInWatchlist(entryidget);

                break;

                case "N":
                login();
                break;
        }




    } 




    /*
    function buildShowPlaylist(JSONobject, Container)
        {
            getShowWatchLater();
            getShowFavourite();
                        var plist=JSONobject.UserView.length;
            if(plist==0){ 
                var Plistview='';
                Plistview+='<label id="ShowWatchLater"></label>';
                Plistview+='<label id="ShowFavourite"></label>';
                            Plistview+='';
                     }
            else{
                var Plistview='<label id="ShowWatchLater"></label>';
            Plistview+='<label id="ShowFavourite"></label>';
                                for(var i = 0; i < plist ; i++)
                { 
                    var Playlist_name=JSONobject.UserView[i].Playlist_name;
                    var entryid=JSONobject.UserView[i].entry_id;
                    var PlaylistID=JSONobject.UserView[i].Playlist_id;
                   
                    var checked=entryid==entryID ? "checked" :"";
                    var ChekedUncheked=entryid==entryID ? "added" :"notadded"; 
                   
                    Plistview+='<label for="add_in_watchlist'+i+'"><input  type="checkbox" id="add_in_watchlist'+i+'" '+checked+'  onchange="RemoveADDVideoInPlaylsit(\''+PlaylistID+'\',\''+Playlist_name+'\',\''+entryid+'\',this)"  name="checkplaylist1">'+Playlist_name+'</label>';
            }
                            } 	
            Plistview+='<div class="w3-row "><div class="w3-col m12 l12 s12 w3-border-top"><form action="javascript:" method="post" onsubmit=CreateNewPlaylist("new")>';
                 
            
            Plistview+='<input type="text" class="w3-input w3-small" id="Playlistname"  placeholder="Enter playlist Name" size="40" required>';
                            Plistview+='<center><button type="submit" class="adore-btn btn-sm " >Create New</button></center></form>';    
                
                
            Plistview+='<p id="createplaylsit" class="w3-text-green" style="padding:5px;"></p> </div></div>'; 
    
            _(Container).innerHTML=Plistview; 
    
        }
    
    */
    

  /*
    function  buildShowFavourite(JSONobject, Container) 
      {
          var wlist=JSONobject.Favourite.length;
      
          if(wlist==0){ 
              var  Wlistview='<label><input  type="checkbox"  class="checkbox" onchange="RemoveFavourite(this)"  > Favourite</label>';
      }
          else{ 
              var entryid=JSONobject.Favourite[0].entryid;
              var Wchecked=entryid==entryID ? "checked" :"";       
              Wlistview='<label><input  type="checkbox"  '+Wchecked+' onchange="RemoveFavourite(this)" class="checkbox"  > Favourite</label>';
                         }
          if(_(Container))
              _(Container).innerHTML=Wlistview;
      } 
  
  */
  
    function buildFavouriteHtml(JSONobject, Container)
    {
   
        var len=JSONobject.Watchlater.length;
        if(len<=0){ _(Container).innerHTML="<center><span class='w3-prussian_blue ' style='margin-top:10%;font-size:19px;'> &nbsp;You have not added any video in watch later. &nbsp;<span></center>";return false;}
     
        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.Watchlater[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumburl=data.thumburl+tumnail_height_width;
            var plan=data.ispremium;
            var entryid=data.entryid;
            var description=data.description; 
            var added_date=data.added_date;
            var datetime = added_date.split(" ");
            var date=datetime[0]; var time=datetime[1];
            var plandetail=(plan==0) ? "Free" : "Premium";
            var duration=data.duration;
            var name=data.name;
            var planClass=plan==0 ? "planF" : "planP";
                          
            watch+='<div class="w3-col s12 m3 l3">  ';
            watch+='<div class="w3-card-2 vidThumb" ><span class="plan '+planClass+'"></span>'; 
            watch+='<a   href="javascript:" title="'+name+'"  onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')">';
            watch+='<img class="w3-image lazy "   data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholder@.png" >';
            watch+='<span class="duration-sm">'+msToTime(duration)+'</span>';
            watch+='<div class="card-text ">';
            watch+='<h4 class="w3-center font-size1" title="'+name+'">'+textWrap(name,30)+' </a><i class="fa fa-trash w3-hover-text-red w3-link w3-right" title="Remove watchLater video" onclick=removeWatchItem("'+entryid+'")></i></h4>';
            watch+='</div>';
            watch+= '</div>';
            watch+= '</div>';
        
        }
        _(Container).innerHTML=watch;
        $('img.lazy').loadScroll(100);
       
       
       
    }


    function buildremoveFavourite(JSONobject, Container)
    {
        var wmsg=JSONobject.Message;
        notification(wmsg);
    }
    



    function  buildShowWatchLater(JSONobject, Container) 
    {
        var wlist=JSONobject.Watchlater.length;
    
        if(wlist==0){ 
            var  Wlistview='<label><input  type="checkbox"  class="checkbox" onchange="RemoveADDVideoInWatchlist(this)"  name="checkplaylist1"> Watch Later</label>';
	}
        if(wlist==1){ 
            var entryid=JSONobject.Watchlater['0'].entryid;
            var Wchecked=entryid==entryID ? "checked" :"";       
    	    Wlistview='<label><input  type="checkbox"  '+Wchecked+' onchange="RemoveADDVideoInWatchlist(this)" class="checkbox"  name="checkplaylist1"> Watch Later</label>';
	    
        }
        if(_(Container))
            _(Container).innerHTML=Wlistview;
    } 
 


    function buildLikeDislike(JSONobject, Container)
    {
	var total_like=JSONobject.total_like;
	var total_dislike=JSONobject.total_dislike;
	var user_choice=JSONobject.user_choice;
        if(user_choice=="L")
        {
            _("resultlike").classList.add("w3-heartR");
            _("resultdislike").classList.remove("w3-heart-breakR");
      	   
      	   
        } 
        if(user_choice=="D")
        {
            _("resultlike").classList.remove("w3-heartR");
            _("resultdislike").classList.add("w3-heart-breakR");
      	   
        } 
    
        _("likes").innerHTML=total_like;
       
        _("dislikes").innerHTML=total_dislike; 
    
   
    }

    function likeDislike(vlike)
    {
    
        switch(loginStatus)
        { 
            case "Y":
                like_unlike(entryID,Userid,vlike);
                break;
            case "N":
                var api = flowplayer();
                api.unload();
                login();
               
                break;
        }
    
    
    
  
    }



 



      function buildRecommended(obj,container)
        {
    
        //console.log(obj);
        var len=obj.Recommendation[0].search_tag.length;
        var html="";
        if(len>0)
        {
            var i=0;
            for(i=0;i<len;i++)
            {
                var data=obj.Recommendation[0].search_tag[i];
                var duration=data.duration;
                var ispremium=data.ispremium;
                var thumburl=data.thumburl+"/width/350/height/200/quality/75";
                var entryid=data.entryid;
                var name=data.name;
                var plandetail=ispremium==0 ? "Free" : "Premium";
                var planClass=ispremium==0 ? "planF" : "planP";
            
                   
                html+='<div class="w3-col s12 m12 l12">';
                html+='<div class=" vidThumb w3-card-2"><span class="plan '+planClass+'"></span>';
                html+='<a href="javascript:" title="'+name+'" onCLick="viewMedia(\''+entryid+'\',\''+ispremium+'\')"><img data-src="'+thumburl+'"  src="'+baseUrl+'/images/banners/placeholder@.png" class="w3-image lazy">';
                //html+='<span class="duration">'+msToTime(duration)+'</span>';
                html+='<div class="card-text">';
                               
                html+='<h4 class="" title="'+name+'">'+name+'</h4></a>';
                              
                html+='</div>';
                html+='</div>';
                html+='</div>';          
                       
                         
            }           
          
             
             
          
        }
    
        _(container).innerHTML=html;$('img.lazy').loadScroll(100);
    }

    function viewCategories(subCatID,CatName) 
    {  
        var c=CatName.split(" ");
        var cl=c.length;
        var fullCat='';
        for(var i=0;i<cl;i++)
        {   fullCat+=c[i];if(i<(cl-1)){ fullCat+="-";}}
        CatName=fullCat.toLocaleLowerCase();
        
        
        
        if(CatName=='all')
        {   document.location = baseUrl+"/ondemand"; }
        else{  
            document.location = baseUrl+"/ondemand/"+subCatID+"/"+CatName;
       	}
    }
    function viewSubCategories(subCatID,CatName,vcatID)
    { 
         var c=CatName.split(" ");
        var cl=c.length;
        var fullCat='';
        for(var i=0;i<cl;i++)
        {   fullCat+=c[i];if(i<(cl-1)){ fullCat+="-";}}
        CatName=fullCat.toLocaleLowerCase();
        document.location = baseUrl+"/ondemand/"+subCatID+"/"+CatName+"/"+vcatID;
		 
    }

function buildcategory(JSONobject,Container)
{
	 var control='';
	  if(Container=='category-home'){
	     control+='<div class="w3-display-container w3-text-white" style="">';
	     //control+='<div class="carousel-inner">';
	     var catinfo_len= JSONobject.category_info.length;
	     
	     for(var i=0; i < catinfo_len; i++)
	     {
			//	console.log(JSONobject.category_info[i]);
		     var Parent_name = JSONobject.category_info[i].Parent_name;
		     var Parent_id = JSONobject.category_info[i].Parent_id;
		     var imgurl =JSONobject.category_info[i].t_original_url;
		     var sub_count =JSONobject.category_info[i].sub_count;
		    // alert(Parent_id);
		     var tumnail_height_width="/width/500/height/200/quality/75";
             var thumburl=imgurl+tumnail_height_width;
		     control+='<div class="w3-third  w3-center w3-row-padding " style="margin-top: 4%; position:relative">';
		     //control+='<a href="subcategory?catid='+Parent_id+'"><img class="img-res zoom" style=" box-shadow: 3px 3px 20px rgba(0, 0, 0, .5); border-bottom: 1px solid #D0BB57;"  src="'+imgurl+'" ></a>';
		     if(sub_count>0){
		     control+='<a href="series/'+Parent_id+'"><img class="img-res zoom" style=" box-shadow: 3px 3px 20px rgba(0, 0, 0, .5); border-bottom: 1px solid #D0BB57;"   src="'+imgurl+'" ></a>';
		     control+='<div class="w3-display-middle w3-large"  style="border-bottom: 2px solid #3498db;"><a href="series/'+Parent_id+'"><h6 style="font-weight: 700 !important;" title="'+name+'">'+Parent_name+' </h6></a> </div> <br />';
		     }
		     if(sub_count==0){
		     control+='<a href="episode/'+Parent_id+'"><img class="img-res zoom" style=" box-shadow: 3px 3px 20px rgba(0, 0, 0, .5); border-bottom: 1px solid #D0BB57;"   src="'+imgurl+'" ></a>';
		     control+='<div class="w3-display-middle w3-large"  style="border-bottom: 2px solid #3498db;"><a href="episode/'+Parent_id+'"><h6 style="font-weight: 700 !important;" title="'+name+'">'+Parent_name+' </h6></a> </div> <br />';
		     }
		     control+='</div>';
	     }
	     control +='</div>';
	}
	 else if(Container=='category-image')
	 {
		var catinfo_len= JSONobject.category_info.length;
		var pat_id= sessionStorage.getItem("pat_id");
		//console.log('patid ',pat_id);
		for(var i=0; i < catinfo_len; i++)
	      { 
		     var Parent_name = JSONobject.category_info[i].Parent_name;
		     var Parent_id = JSONobject.category_info[i].Parent_id;
		     var imgurl =JSONobject.category_info[i].t_original_url;
		     var tumnail_height_width="/width/300/height/200/quality/75";
             var thumburl=imgurl+tumnail_height_width;
		     if(pat_id==Parent_id ){
		      control+='<div class="w3-display hero-image  relative">';
		      control+='<img class="bgimgOrg" style=" "  src="'+imgurl+'" >';
		      control+='<h1 class="w3-text-white text-shadow w3-bold w3-display-middle font-size" title="'+name+'">'+Parent_name+'</h1>'; }
		      control+='</div>';
	       }
		
			}

           _(Container).innerHTML =control;

} 
     
      
     

      function buildsubcategory(JSONobject,Container)
      {

          var control='<div class="w3-display-container w3-row-padding">';
          var Category_data_len= JSONobject.category_info.length;
          //var entryid = JSONobject.category_info.entryid;
          
         
          for(var i=0; i < Category_data_len; i++)
          { 
              
         
           var thumburl = JSONobject.category_info[i].t_small_url;
              
              var sub_count = JSONobject.category_info[i].sub_count;
           
           //var tumnail_height_width="/width/300/height/250/quality/75";
           //var thumburl=t_small_url+tumnail_height_width;
           var vname = JSONobject.category_info[i].Parent_name;
           var Parent_id = JSONobject.category_info[i].Parent_id;
           var des="";
           var strlen= vname.length; 
	       var dot="";
	       if(strlen>'30') {  dot="...";}
	       var vname_vew = vname.substring(0, 30)+dot;
	           
        var language = JSONobject.category_info[i].language;
        var plan = JSONobject.category_info[i].ispremium;
        var entryid = JSONobject.category_info[i].entryid;
        var duration = JSONobject.category_info[i].duration;
       // var plandetail=(plan==0) ? "Free" : "Premium";
        //var planClass=plan==0 ? "planF" : "planP";
        control+='<div class="w3-col s12 l3 m6 w3-center relative  w3-row-padding">';
        //control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<div class="w3-card-2 vidThumb" >';
        if(sub_count>0){
        	
        control+='<a href="../season/'+Parent_id+'"><img class="w3-image"  src="'+thumburl+'"></a>';
        //control+='<a href="season/'+Parent_id+'"><img class="w3-image"  src="'+thumburl+'" style=" " src="'+baseUrl+'/images/placeholder.png"></a>';
        //control+='<div class="w3-display-middle w3-large"  style="border-bottom: 2px solid #3498db;"><a href="season/'+Parent_id+'"></a> </div> <br />';
        }
        if(sub_count==0)
        
        control+='<a href="../episode/'+Parent_id+'"><img class="w3-image"  src="'+thumburl+'"></a>';
        //control+='<span class="duration">'+msToTime(duration)+'</span>';
        //control+='<span class="'+planClass+'" style="bottom: 27%; z-index: 1; position: absolute;">'+plandetail+'</span>';
        control+='<div class="opacity w3-text-white">';
        control+='<h5 class="font-size " title="'+vname+'" style="padding-left:2px; text-align: left;">'+vname_vew+'</h5>';
        control+='</div>';
        control+='</div>';
        control+='</div>';

         }


       control +='</div>';
        //_(Container).innerHTML =control;
       return control;
      }
      
     function build_episode(JSONobject,Container)
      {
         
          var control='<div class="w3-display-container w3-row-padding">';
          var Category_data_len= JSONobject.Category_data.length;
          if(Category_data_len<=0){ _(Container).innerHTML="<center><span class='w3-prussian_blue' style='margin-top:10%;font-size:19px;'> &nbsp;No videos in continue watching.. &nbsp;<span></center>";return false;}

          
          
          var entryid = JSONobject.Category_data.entryid;
          for(var i=0; i < Category_data_len; i++)
         {
           var thumburl = JSONobject.Category_data[i].thumburl;
           var tumnail_height_width="/width/300/height/250/quality/75";
           var thumburl=thumburl+tumnail_height_width;
           var vname = JSONobject.Category_data[i].name;
        //alert(vname);
          var des="";
               var strlen= vname.length;
               var dot="";
               if(strlen>'30') {  dot="...";}
               var vname_vew = vname.substring(0, 30)+dot;

        var language = JSONobject.Category_data[i].language;
        var plan = JSONobject.Category_data[i].ispremium;
        var entryid = JSONobject.Category_data[i].entryid;
        var duration = JSONobject.Category_data[i].duration;
        var plandetail=(plan==0) ? "Free" : "Premium";
        var planClass=plan==0 ? "planF" : "planP";
        control+='<div class="w3-col s12 l3 m6 w3-center relative  w3-row-padding">';
        //control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<div class="w3-card-2 vidThumb" >';
        control+='<a href="javascript:" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')"><img class="w3-image"  src="'+thumburl+'" style=" " src="'+baseUrl+'/images/placeholder.png"></a>';
        control+='<span class="duration">'+msToTime(duration)+'</span>';
        control+='<span class="'+planClass+'" style="bottom: 27%; z-index: 1; position: absolute;">'+plandetail+'</span>';
        control+='<div class="opacity w3-text-white">';
        control+='<h5 class="font-size " title="'+vname+'" style="padding-left:2px; text-align: left;">'+vname_vew+'</h5>';
        control+='</div>';
        control+='</div>';
        control+='</div>';

         }
       control +='</div>';
       // _(Container).innerHTML =control;
       return control;
      }




    function buildCategoryInCategoryPage(JSONobject,Container) 
    {
    	
    	localStorage.setItem("caruselObj",JSON.stringify(JSONobject.Carousel));
   
        var items_carosel= JSONobject.Carousel.length;
    
       var control='<div class="w3-display-container">';
   
       control+='<div class="carousel-inner ">';
                 
     for (var i = 0; i < items_carosel ; i++)
    {  
        var imgUrlType= getImageDim(i); 
        //var msg=JSONobject.Carousel[i].slider_msg;msg=(msg=="None")?"":msg;
        var entryid=JSONobject.Carousel[i].entryid;
        var imgurl =imgUrlType;
        control+='<div class="mySlides"><img class=" w3-image  w3-animate-left" width="100%" src="'+imgurl+'" ><span class="playText w3-text-shadow-white "></span></div>';
    }
   
              
  
   // control+='<div class="w3-center w3-section w3-large w3-text-white w3-display-middle slideControls" style="width:100%">';
    //control+='<div class="w3-left  arrowL"  onclick="slider(-1)">&nbsp;</div>';
    //control+='<div class="w3-right  arrowR" onclick="slider()">&nbsp;</div>';
    //control+='</div>';
    
    control+='<div class="w3-center w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">';
    for (var i = 0; i <items_carosel ; i++)
    {
        control += '<span class="w3-badge demo  w3-transparent w3-hover-white" onclick="slider('+i+')"></span>';
    }
            
    control +='</div></div>';     
              
 
       
    _("categorie_result").innerHTML =control;
 
  
    
    var dots = __("demo");
    if(dots.length>0)
    dots[0].classList.add("w3-white") ;
  

      
        
    }



    function buildCategoryTree(JSONobject,Container,catname,subcatid,cat_video_id)
    {
    
        var category_tree_Item= JSONobject.category_tree.length;
        var rmenu='<nav class="w3-sidenav  w3-card-2">';
      
        for (var j = 0; j < category_tree_Item ; j++)
        {
            var CatName=JSONobject.category_tree[j].Parent_name;
            var CatID=JSONobject.category_tree[j].Parent_id;
            var child_name_length=JSONobject.category_tree[j].child_name.length;
		 	
            var selected=CatID==subcatid ? "" : "w3-hide";
            var faIcon=CatID==subcatid ? "fa-minus" : "fa-plus";
            var bgcolor_main_cat=CatID==subcatid ? "w3-active" :"";
            //rmenu+='<li class="'+selected+'">';
           // rmenu+='<a class="'+bgcolor_main_cat+'" href="javascript:" onclick="myAccFunc('+j+')"><span onCLick="viewCategories('+CatID+',\''+CatName+'\')">'+CatName+'</span> <i class="fa '+faIcon+' w3-right" id="plus'+j+'"></i></a>';
           rmenu+='<a class="'+bgcolor_main_cat+'" href="javascript:" onclick="myAccFunc('+j+')"><span onCLick="viewCategories(\''+CatName+'\')">'+CatName+'</span> <i class="fa '+faIcon+' w3-right" id="plus'+j+'"></i></a>';

            rmenu+='<div id="accord'+j+'" class="'+selected+'  w3-card-4">';
            for(var c=0; c < child_name_length; c++)
            {
                var Childname=JSONobject.category_tree[j].child_name[c].name;
                var ChildID=JSONobject.category_tree[j].child_name[c].SID;
		          
                var bgcolor_sub=ChildID==cat_video_id ? "class='sidenav-active-subitem'" :""; 
		           
                rmenu+='<a '+bgcolor_sub+' href="javascript:" onCLick="viewSubCategories('+CatID+',\''+Childname+'\','+ChildID+')"><i class="fa fa-play-circle"></i>'+Childname+'</a>';  
				   
            }
		        
            rmenu+='</div>';
        }	
	       
         rmenu+='</nav>';            
        _(Container).innerHTML =rmenu; 
	
    }
 
 
function buildMyProflie(JSONobject, Container)
    {

        var fullname1=JSONobject.name;

        var mobile=JSONobject.mobile;
        var useremail=JSONobject.useremail;
        var gender=JSONobject.gender; 
        var dob=JSONobject.DOB;
        var countrycode=JSONobject.country;
        var image_url=JSONobject.image_url;
        if(fullname1=='None')
        {
        _("fullname").value = '';
        }
        else
        _("fullname").value = fullname1;

        _("email").value=useremail;

        if(mobile=='None')
         {
          _("mobile").value = '';
         }

         else
         _("mobile").value = mobile;

        _("dob_user").value=dob;
       // _("userGender").value = gender;
        _("country").value = countrycode;

         if(gender!='' || gender!='None'){
            var genindex=gender=='Female' ? "0":"1";
            _("userGender").selectedIndex = genindex;
          }
        if(image_url=='' || image_url=='None')
        {  imgUrl="upload_user/user_default.jpg"; }
        else
        { imgUrl=image_url;}
        _('image-holder').src=imgUrl;
    } 


    function buildSearchVideo(JSONobject, Container) 
    {
        var len=JSONobject.SearchResult.length;
        _("srchResCount").innerHTML=len;
     
        var search='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.SearchResult[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumburl=data.thumburl+tumnail_height_width;
            var plan=data.ispremium;
            var entryid=data.entryid;
            var plandetail=(plan==0) ? "Free" : "Premium";
            var duration=data.duration;
            var vname=data.name;
             var des="";
            var strlen= vname.length;
	           var dot="";
	           if(strlen>'30') {  dot="...";}
	           var vname_vew = vname.substring(0, 30)+dot;
	           
            var lang=data.language;
            lang=(lang==undefined)?"":lang;
            lang=(lang=="NULL")?"":lang;
            var planClass=plan==0 ? "planF" : "planP";
            search+='<div class="w3-col s12 m3 l3 w3-row-padding ">  ';
            search+=' <div class="w3-card-2 vidThumb" >'; 
            search+='<a   href="javascript:" title="'+name+'"  onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')">';
            search+='<img class="w3-image lazy "  data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholder.png" >'; 
          search+='<span  class="'+planClass+' price_tag" style="position: absolute; margin-bottom:4% !important">'+plandetail+'</span>'; 
            search+='<span class="duration">'+msToTime(duration)+'</span>';
            search+='<div class="card-text ">';
            search+='<h4 class="" title="'+vname+'">'+vname_vew+'</h4></a>';
         //   search+='<h5 class="subs_now" onclick=login();>subscribe Now</h5>';
            //search+='<h5 class="vidlanguage">'+lang+'</h5>';
             
            search+='</div>';
            search+= '</div>';
            search+= '</div>';
        
        
    
        }
        _(Container).innerHTML=search;
        $('img.lazy').loadScroll(100);
    }


    function buildShowPlaylistinPlayListPage(JSONobject, Container)
    {
        var plength=JSONobject.UserView.length;
        if(plength<=0){ _(Container).innerHTML="<center><span class='w3-prussian_blue ' style='margin-top:10%;font-size:19px;'> &nbsp;You have not created any playlist. &nbsp;<span></center>";return false;}
   
     
        var splaylist='';
     
        for(var j = 0; j < plength ; j++)
        {
            var totalVideo=JSONobject.UserView[j].count;
            totalVideo=(totalVideo>0)?totalVideo:0;
            var videoCountTitle=(totalVideo>1)?"VIDEOS":"VIDEO";    
            var pid=JSONobject.UserView[j].Playlist_id;
            var entryid=JSONobject.UserView[j].entry_id;
            var Playlist_name=JSONobject.UserView[j].Playlist_name;
            var Pthumbnail=JSONobject.UserView[j].thumbnail;
            var tumnail_height_width="/width/400/height/300/quality/75";
            if(Pthumbnail=='' || Pthumbnail=='NULL')
            { 
                var  thumbnail=""+baseUrl+"/images/banners/placeholderS.png"; 
             
            
            }
            else
            {  thumbnail=Pthumbnail+tumnail_height_width;}
        
            splaylist += '<div class="w3-col l3 m3 s12">';
            splaylist += '<div class="playlist ">';
            splaylist += '<div class="w3-card-2 card-holder w3-text-white w3-center w3-row-padding">';
            splaylist +='<span id="playlistInfo'+j+'"></span>';
            splaylist += '<span class="playlist-items"><h1>' + totalVideo + '</h1><p> '+videoCountTitle+'</p><p><i class="fa fa-indent fa-2x"></i></p></span>';
            if(totalVideo>0)
                splaylist += '<a onCLick="viewMedia(\''+entryid+'\',0,\''+pid+'\',\''+Playlist_name+'\')"><span class="playall"><h2><i class="fa fa-play"></i>PLAY ALL</h2></span></a>';
            splaylist += '<img class="w3-image" src="' + thumbnail + '" >';
            splaylist += '<h4 class="w3-left-align  w3-text-capitalize">' + Playlist_name + '<span class="w3-right"><i class="fa fa-info-circle w3-hover-text-green" data-pid="'+pid+'" data-pindex="'+j+'" data-pname="'+Playlist_name+'" onclick=playlistInfo(this) title="View all items" aria-hidden="true"></i>&nbsp;<i class="fa fa-trash w3-hover-text-red" title="Delete playlist" onclick="DeletePlaylist('+pid+')"></i></span></h4>';
            splaylist += '</div>';
            splaylist += '</div>';
            splaylist += '</div>';
         }
        _(Container).innerHTML=splaylist;
     
     
    }




    function playlistInfo(el)
    {
        
        var pid=el.dataset.pid,index=el.dataset.pindex,name=el.dataset.pname
        
        var cls=_("playlistInfo"+index).classList;localStorage.setItem("playlistIndex",index);localStorage.setItem("pid",pid);localStorage.setItem("pname",name);
        if(cls=="")
        {
            playlistMeta(pid);
            _("playlistInfo"+index).classList.add("playlistInfo");
        }
        else
        {
            _("playlistInfo"+index).classList.remove("playlistInfo");  
            _("playlistInfo"+index).innerHTML="";
        }
    
    }




    function buildPlaylistInfo(JSONobject, Container)
    {
        var data=JSONobject.UserView;
        var len=data.length;
        var index=localStorage.getItem("playlistIndex");
        var pid=localStorage.getItem("pid");
        var Playlist_name=localStorage.getItem("pname");
        
        if(len>0)
        {
            var html="<table style='max-width:100%;color:#fff' >";
            for(var i=0;i<len;i++)
            {
                var entry_id=data[i].entry_id;
                var thumbnail=data[i].thumbnail;
                var name=data[i].name;
                html+='<tr><td><img src="'+thumbnail+'" width="64"></td><td class="textwrap"><a href="javascript:" onCLick="viewMedia(\''+entry_id+'\',0,\''+pid+'\',\''+Playlist_name+'\')">'+textWrap(name,25)+'</a></td><td><i class="fa fa-trash w3-hover-text-red w3-link" title="Remove playlist video" onclick=removePlaylistItem("'+pid+'","'+entry_id+'")></i></td></tr>';
            }
            html+='</table>';
            _("playlistInfo"+index).innerHTML=html;
        }
        else
        {
        
        }
    
    
    }








    
  function buildWatchResult(JSONobject, Container)
    {
        var len=JSONobject.Watchlater.length;
        if(len<=0){ _(Container).innerHTML="<center><span class='w3-prussian_blue ' style='margin-top:10%;font-size:19px;'> &nbsp;You have not added any video in watch later. &nbsp;<span></center>";return false;}


        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.Watchlater[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumburl=data.thumburl+tumnail_height_width;
            var plan=data.ispremium;
            var entryid=data.entryid;
            var description=data.description;
            var added_date=data.time;
           // var datetime = added_date.split(" ");
           // var date=datetime[0]; var time=datetime[1];
            var duration=data.duration;
            var name=data.name;
            var plandetail=(plan==0) ? "Free" : "Premium";
            var planClass=plan==0 ? "planF" : "planP";

            watch+='<div class="w3-col s12 m3 l3" id="'+i+'" style="padding:10px 10px">';
            watch+='<div class="w3-card-2 vidThumb">';
            watch+='<a href="javascript:" title="'+name+'" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')">';
            watch+='<img class="w3-image lazy " data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholderS.png">';
            watch+='<span class="'+planClass+' font-size1" style="position:absolute; bottom:1%;">'+plandetail+'</span>';
            watch+='<span class="duration">'+msToTime(duration)+'</span>';
            watch+='<div class="card-text w3-col s12 m12 l12">';
             watch+='<div class="w3-col s11 m11 l11">';
            watch+='<h6 class="w3-left w3-text-white text-wrap font-size1 font-size14" title="'+name+'"  onclick="removeWatchItem(\''+entryid+'\',\''+i+'\')" style="text-align:left;">'+textWrap(name,30)+'</a>';
            watch+='</div>';
            watch+='<div class="w3-col s1 m1 l1"><i class="fa fa-trash " style="  padding-top: 10px; display:block !important; position:relative !important;" title="" onclick="removeWatchItem(\''+entryid+'\',\''+i+'\')"></i></h6>';
            watch+='</div>';
            watch+='</div>';
            watch+= '</div>';
            watch+= '</div>';

        }
        _(Container).innerHTML=watch;
        $('img.lazy').loadScroll(100);
    }

    function buildFavouriteList(JSONobject, Container)
    {

        var len=JSONobject.Favourite.length;
        if(len<=0){ _(Container).innerHTML="<center><span class='w3-prussian_blue  font-size1 font-size16' style='margin-top:10%;'> &nbsp;You have not added any video in favourite list. &nbsp;<span></center>";return false;}


        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.Favourite[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumburl=data.thumburl+tumnail_height_width;
            var plan=data.ispremium;
            var entryid=data.entryid;
            var plandetail=(plan==0) ? "Free" : "Premium";
            var duration=data.duration;
            var name=data.name;
            var planClass=plan==0 ? "planF" : "planP";

            watch+='<div class="w3-col s12 m3 l3" id="'+i+'" style="padding:5px 5px">';
            watch+='<div class="w3-card-2 vidThumb">';
            watch+='<a href="javascript:" title="'+name+'" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')">';
            watch+='<img class="w3-image lazy" data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholderS.png" >';
            watch+='<span class="'+planClass+' font-size1" style="position:absolute; bottom: 0%;">'+plandetail+'</span>';
            watch+='<span class="duration">'+msToTime(duration)+'</span>';
            watch+='<div class="card-text w3-col s12 m12 l12">';
            watch+='<div class="w3-col s11 m11 l11" style="">'; 
            watch+='<h6 class="w3-left w3-text-white text-wrap font-size1 font-size14" title="'+name+'" style="text-align:left;white-space: nowrap; width: 170px; overflow: hidden; text-overflow: ellipsis;">'+textWrap(name,35)+'</a></div>';
            watch+='<div class="w3-col s1 m1 l1"><i class="fa fa-trash  w3-hover-text-red w3-link w3-right w3-margin-left  font-size1 font-size16" style="margin-top: 9px;" title=" " onclick=removeFavItem("'+entryid+'","'+i+'")></i></h6></a>';
            watch+='</div>';
            watch+='</div>';
            watch+= '</div>';
            watch+= '</div>';
        }
        _(Container).innerHTML=watch;
        $('img.lazy').loadScroll(100);


    }

   function buildcontinueWatching(JSONobject, Container)
    {

        var len=JSONobject.ContinueWatching.length;
        if(len<=0){ _(Container).innerHTML="<center><span class='w3-prussian_blue' style='margin-top:10%;font-size:19px;'> &nbsp;No videos in continue watching.. &nbsp;<span></center>";return false;}


        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.ContinueWatching[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumburl=data.thumburl+tumnail_height_width;
            var plan=data.ispremium;
            var entryid=data.entryid;
            var plandetail=(plan==0) ? "Free" : "Premium";
            var duration=data.total_duration;
            var name=data.name;
            var planClass=plan==0 ? "planF" : "planP";

              watch+='<div class="w3-col  s12 m3 l3" style="padding: 0px 5px 0 5px;">';
              watch+='<div class="w3-card-2 vidThumb">';  
              watch+='<a href="javascript:" title="'+name+'"  onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')">';
              watch+='<img class="w3-image lazy " data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholderS.png" >';
              watch+='<span class="'+planClass+' " style="position:absolute; bottom: 1%;">'+plandetail+'</span>';
              watch+='<span class="duration">'+msToTime(duration)+'</span>';
              
              watch+='<div class="card-text w3-col s12 m12 l12">';
              watch+='<div class="w3-col s11 m11 l11">'; 
              watch+='<h6 class="w3-left w3-text-white text-wrap font-size1 font-size14" title="'+name+'"  style="text-align:left;">'+textWrap(name,30)+'</a></div>';
              watch+='<div class="w3-col s1 m1 l1 font-size1"><i class="fa fa-trash  w3-hover-text-red w3-link w3-right w3-margin-left  font-size1 font-size16" style="margin-top:9px" title=" " onclick=removeContWatchingItem("'+entryid+'")></i></h6></a>';
	            watch+='</div>';
	            watch+='</div>';
	            watch+= '</div>';
	            watch+= '</div>'; 

        }
        _(Container).innerHTML=watch;
        $('img.lazy').loadScroll(100);


    }


 

 function buildUserHistory(JSONobject, Container)
    {

        var len=JSONobject.UserHistory.length;
        // _("srchResCount").innerHTML=len;

        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.UserHistory[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumburl=data.thumburl+tumnail_height_width;
            var plan=data.ispremium;
            var entryid=data.entryid;
            var plandetail=(plan==0) ? "Free" : "Premium";
            var duration=data.duration;
            var name=data.name;
            
            
            var planClass=plan==0 ? "planF" : "planP";

            watch+='<div class="w3-col s12 m3 l3" id="'+i+'" style="padding: 0px 5px 0 5px;">  ';
            watch+='<div class="w3-card-2 vidThumb" >';
            watch+='<a href="javascript:" title="'+name+'" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')"  >';
            watch+='<img class="w3-image lazy " data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholder@.png" >';
            watch+='<span class="'+planClass+' font-size1" style="position:absolute; bottom: 1%; left: 1%;">'+plandetail+'</span>';
            watch+='<span class="duration">'+msToTime(duration)+'</span>'; watch+='<div class="card-text w3-col s12 m12 l12">';
            watch+='<div class="w3-col s11 m11 l11">';
            watch+='<h6 class="w3-left w3-text-white text-wrap font-size1 font-size14" title="'+name+'"  style="text-align:left; ">'+textWrap(name,30)+'</a></div>';
           // watch+='<div class="w3-col s11 m1 l1"><i class="fa fa-trash  w3-hover-text-red w3-link w3-right w3-margin-left" style="font-size:19px" title="Remove favourite video" onclick=removeFavItem("'+entryid+'","'+i+'")></i></h6></a>';
            watch+='</div>';
            watch+='</div>';
            watch+= '</div>';
            watch+= '</div>';
        }
        _(Container).innerHTML=watch;
        $('img.lazy').loadScroll(100);
    } 

    function loadChannel(entryid,downloadurl,thumb,description,name)
    {
        localStorage.setItem("entry"+entryid,entryid);
        localStorage.setItem("downloadurl",downloadurl);
        localStorage.setItem("thumb",thumb);
        localStorage.setItem("description",description);
        localStorage.setItem("name",name);
        location.href=baseUrl+"/liveTv/"+entryid;
    }


    function viewChannel()
    {
        if(localStorage.getItem("entry"+entryID)==undefined)location.href=baseUrl+"/channels/live"; 
        getMenu();   
        var poster=localStorage.getItem("thumb")+"/width/840/height/475/quality/75";
        var url=localStorage.getItem("downloadurl");
        var description=localStorage.getItem("description");
        var name=localStorage.getItem("name");
         _("watch-video").innerHTML="";  
        flowplayer("#watch-video", {
            splash: false,
            ratio: 9/16,
            autoplay:false,
            
            // stream only available via https:
            // force loading of Flash HLS via https
            swfHls: "https://releases.flowplayer.org/7.0.4/flowplayerhls.swf",
            
            clip: {
                // enable hlsjs in desktop Safari for manual quality selection
                // CAVEAT: may cause decoding problems with some streams!
                hlsjs: {
                    safari: true
                },
                live: true,
                sources: [
                    { type: "application/x-mpegurl",
                        src: url }
                ]
            }
            
        });
        
       
        _("discription").innerHTML=description;
        _("video-title").innerHTML=name;
        
         
    }


    function buildliveTv(JSONobject, Container)
    {
   
        var len=JSONobject.LiveFeed.length;
        // _("srchResCount").innerHTML=len;
     
        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.LiveFeed[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumb=data.thumbnailurl;
            var thumburl=thumb+tumnail_height_width;
            var plan=0;
            var entryid=data.entryid;
            var downloadurl=data.downloadurl;
            var description=data.description; 
            //var added_date=data.added_date;
            //var datetime = added_date.split(" ");
            // var date=datetime[0]; var time=datetime[1];
            // var plandetail=(plan==0) ? "Free" : "Premium";
            //var duration=data.duration;
            var name=data.name;
            //var planClass=plan==0 ? "planF" : "planP";
                          
            watch+='<div class="w3-col s12 m3 l3">  ';
            watch+=' <div class="w3-card-2 vidThumb" ><span class="plan "></span>'; 
            watch+='<a   href="javascript:" title="'+name+'"  onCLick="loadChannel(\''+entryid+'\',\''+downloadurl+'\',\''+thumb+'\',\''+description+'\',\''+name+'\')">';
            watch+='<img class="w3-image lazy "   data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholder@.png" >';
            watch+='</a>';
            //watch+='<span class="duration-sm">'+msToTime(duration)+'</span>';
            watch+='<div class="card-text w3-text-white w3-uppercase">';
            watch+='<h4 class="w3-center" title="'+name+'">'+textWrap(name,35)+'</h4>';
        
            watch+='</div>';
            watch+= '</div>';
            watch+= '</div>'; 
        }
        _(Container).innerHTML=watch;
        $('img.lazy').loadScroll(100);
    }
    

    function buildMoviesHtml(JSONobject, Container)
   {
	if(Container=='movies-result'){
	     var control='<div class=" w3-display-container w3-text-white padding-200" style=" ">';
	     //control+='<div class="carousel-inner">';
	     var catinfo_len= JSONobject.category_info.length;
	     for(var i=0; i < catinfo_len; i++)
	     {
			 //console.log(JSONobject.category_info[i]);
		     var Parent_name = JSONobject.category_info[i].Parent_name;
		     var Parent_id = JSONobject.category_info[i].Parent_id;
		     var imgurl =JSONobject.category_info[i].t_medium_url;
		    
		     control+='<div class="w3-third  w3-center w3-row-padding margin-top20" style="margin-top: 4%; position:relative">';
		     control+='<a href="moviesall?catid='+Parent_id+'" class=""><img class="img-res zoom"     data-src="'+baseUrl+'/images/banners/placeholder@.png" src="'+imgurl+'" style="box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);"> ';
		     control+='<div class="w3-display-middle w3-large"  style="border-bottom: 2px solid #3498db;"><h4  style="font-weight: 700 !important;" title="'+name+'">'+Parent_name+'</h4> </div> </a><br />';
		   //  control+='<hr class="w3-border-grey" style="margin:auto;">';
		     control+='</div>'; 
	     }
	     control +='</div>';
	}
	else if (Container=='category-title')
	{
		var catinfo_len= JSONobject.category_info.length;
		pat_id= sessionStorage.getItem("pat_id");
		console.log('patid ',pat_id);
		for(var i=0; i < catinfo_len; i++)
	     {
			//	console.log(JSONobject.category_info[i]);
		     var Parent_name = JSONobject.category_info[i].Parent_name;
		     var Parent_id = JSONobject.category_info[i].Parent_id;
		     //var imgurl =JSONobject.category_info[i].t_original_url;
		     if(pat_id==Parent_id ){
		     var control='<div class="w3-display-container w3-row-padding">';
		     //control+='<img class="bgimg" style="opacity: 0.6;"  src="'+imgurl+'" >'; 
		     control+='<h4 class=" w3-jumbo1 w3-display font-size script" >'+Parent_name+'</h4>';}
		     //control+='<hr class="w3-border-grey" style="margin:auto;">';
		     control+='</div>';
	     }
		
			}

           _(Container).innerHTML =control;

} 

 function buildMoviesCategoryHtml(JSONobject, Container)
 {
 	   var control='<div class="w3-display-container w3-text-white padding-200" style=" ">';
      	var Category_data_len= JSONobject.Category_data.length;
      	var entryid = JSONobject.Category_data.entryid;
        for(var i=0; i < Category_data_len; i++)
         {
      	var thumburl = JSONobject.Category_data[i].thumburl;
        var tumnail_height_width="/width/300/height/250/quality/75";
        var thumburl=thumburl+tumnail_height_width;
      	var name = JSONobject.Category_data[i].name;
        var language = JSONobject.Category_data[i].language;
        var entryid = JSONobject.Category_data[i].entryid;
        var duration = JSONobject.Category_data[i].duration;
        var plan=JSONobject.Category_data[i].ispremium;
        var plandetail=(plan==0) ? "Free" : "Premium";
        var planClass=plan==0 ? "planF planF2" : "planP planP2";
        control+='<div class="w3-col l3 m6 s12  w3-center w3-row-padding lazy-container" style="margin-top: 0%; position:relative">';
         
        control+='<div class="w3-card-2">';
        control+='<a ><img class=" w3-image lazy"  data-src="'+thumburl+'"  onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')"></a>';
        control+='<span class="duration">'+msToTime(duration)+'</span>';
         control+='<span class="'+planClass+' bottom_37" style="  z-index: 1; position: absolute;">'+plandetail+'</span>';
        //control+='<div class="w3-display-middle w3-large"  style="border-bottom: 2px solid #3498db;">';
        control+='<div class="opacity w3-text-white ">';
        control+='<h5 class="font-size" title="'+name+'"  style="padding-bottom:0px !important; text-align: left;white-space: nowrap;width: 85%;overflow: hidden; text-overflow: ellipsis;">'+name+'</h5>';
        control+='</div>';
        control+='</div>';
        control+='</div>';
        //control+='</div>';
         }
         
             
          control +='</div>';  
        _(Container).innerHTML =control;
 	    $('img.lazy').loadScroll(100);
 }



function buildMusicHtml(JSONobject, Container)
  { 
    var items= JSONobject.category_subdata.length;
     if(items<=0){_(Container).innerHTML ="<center><span class='w3-prussian_blue' style='margin-top:10%;font-size:19px;'> &nbsp;No videos available.. &nbsp;<span></center>";return false;}
    var row = "";
    for (var i = 0; i < items ; i++)
    {
        var title_tag_name = JSONobject.category_subdata[i].title_tag_name.toUpperCase();
        var search_tag_array_length = JSONobject.category_subdata[i].search_tag.length;

        if(search_tag_array_length>0)
        {
            row+='<p class="w3-content w3-container heading">'+title_tag_name+'</p>';

            var slide='<div class="w3-row-padding bxslider" >';
            for (var j = 0; j < search_tag_array_length ; j++)
            {
                var search_tag_array=JSONobject.category_subdata[i].search_tag;
                var tumnail_height_width="/width/300/height/200/quality/75";
                var thumburl=search_tag_array[j].thumburl+tumnail_height_width;
                var vname=search_tag_array[j].name;
                var des="";
               var strlen= vname.length; 
	           var dot="";
	           if(strlen>'30') {  dot="...";}
	           var vname_vew = vname.substring(0, 30)+dot;
                var plan=search_tag_array[j].ispremium;
                var entryid=search_tag_array[j].entryid;
                var duration=search_tag_array[j].duration;
                var plandetail=(plan==0) ? "Free" : "Premium";
                var planClass=plan==0 ? "planF" : "planP";
               // var lang= search_tag_array[j].language;


                slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                slide+='<div class="w3-card-2 vidThumb">';
                slide+='<a href="javascript:" title="'+name+'" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')"><img class="w3-image lazy" data-src="'+thumburl+'" src="'+baseUrl+'/images/banners/placeholder@.png">';

                //slide+="<a href='javascript:' title='"+name+"' onCLick='viewMedia(\""+entryid+"\",\""+plan+"\")'><img data-src="+thumburl+" src='"+baseUrl+"/images/banners/placeholderS.jpg' class='w3-image lazy' >";
                slide+='<span class="'+planClass+' price_tag" style="position: absolute; margin: 0 0 9px 0;">'+plandetail+'</span>';
                slide+='<span class="duration">'+msToTime(duration)+'</span>';
                slide+='<div class="card-text ">';
                //slide+='<h4 class="" title="'+name+'">'+textWrap(name,32)+'</h4>';
                slide+='<h4 class="" title="'+vname+'" style="text-align: left;white-space: nowrap;width: 90%;overflow: hidden;text-overflow: ellipsis;">'+vname_vew+'</h4></a>';
                //slide+='<h5 class="vidlanguage">'+lang+'</h5>';
                slide+='</div>';
                slide+='</div>';
                slide+='</div>';

                if(search_tag_array_length<4)
                {
                    slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                    slide+='<div class="w3-card-2 vidThumb">';
                   // slide+='<a><img src="'+baseUrl+'/images/banners/placeholderS.jpg" class="w3-image " ></a>';
                    //slide+='<span class="duration">'+msToTime(duration)+'</span>';
                    slide+='<div class="card-text ">';
                    slide+='<h4 class="" ></h4>';
                    slide+='</div>';
                    slide+='</div>';
                    slide+='</div>';
                }


            }

            row+=slide+"</div>";
        }
        _(Container).innerHTML =row;
    }
    $('.bxslider').bxSlider({

        slideWidth: 325,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin:0,
       // auto: true,

    });

    $('img.lazy').loadScroll(100);
   } 
   
   
    function buildMoviesTabItems(JSONobject)
    {
        var len=JSONobject.category.length; 
        var tab='<center>';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.category[i];
            var Parent_name=data.Parent_name;var Parent_id=data.Parent_id;
            if(i==0){ getMovies(Parent_id,"buildMovieSubMenu");}
            tab+='<div class="baritem-container"><span class="bar-item" id="TAB'+Parent_id+'"  onclick=getMovies('+Parent_id+',"buildMovieSubMenu",null,null,null,true) >'+Parent_name+'</span></div>';
      
        }
        tab+='</center>';
        var activeId="";
        _("w3-bar").innerHTML=tab;
        _("TAB"+JSONobject.category[0].Parent_id).classList.add("active-bar")   
            
    }

    function buildMovieSubMenu(JSONobject)
    {
        var len=JSONobject.category.length; 
        var tab='';
        for(var i = 0; i < len ; i++)
        {  
         
            var data=JSONobject.category[i];
            var Parent_name=data.Parent_name;var Parent_id=data.Parent_id;
            movie_Parent_id=Parent_id;
            if(i==0){ getMovies(Parent_id,"movies-result","mediaInfo",moviePg,12);movie_Parent_id=Parent_id;}
            tab+='<div class="barsubitem-container"><span class="bar-subitem baritem-sm" id="TAB'+Parent_id+'" onclick=getMovies('+Parent_id+',"movies-result","mediaInfo",'+moviePg+',12,true) >'+Parent_name+'</span></div>';
      
        }
       
      
        _("barSubItems").innerHTML=tab;
        _("TAB"+JSONobject.category[0].Parent_id).classList.add("active-subitem") 
            
    }


  function buildPlanBoxes(JSONobject, Container)
    {
    	 
        var len=JSONobject.Subscription_Plan_Details.length;
        var data=JSONobject.Subscription_Plan_Details;
         var email=JSONobject.email;
        //alert(Userid+"--"+partnerId);
        if(len>0)
        {
            var html='<center>';
            for(var i=0;i<len;i++)
            {
                var planId=data[i].ID;
                var planName=data[i].name;
                var planDur=data[i].duration;
                var planDesc=data[i].description;
                var planOldPrice=data[i].old_price;
                var planPrice=data[i].price;
                var duration=data[i].duration;
                var planCurrency_name=data[i].Currency_name;
                var planDays=data[i].days; 
                var exp_date=data[i].exp_date;
                html+='<div class="priceing-table-main">';
                html+='<div class="price-grid">';
                html+='<div class="price-block agile">';
                html+='<div class="price-gd-bottom">';
                html+='<div class="price-list" style="height:250px;">';
                html+='<form method="post" name="customerData'+i+'">';
                html+='<ul class="w3-text-black">';
                html+='<li class=" w3-margin-bottom "><p class="w3-uppercase w3-bold">'+planDesc+'</p></li>';
                html+='<li class=" w3-btnB w3-margin-bottom ">Most Flexible</li>';
                if(planOldPrice!=null)
                html+='<li class="w3-bold tagB w3-xlarge"><p class="example cross w3-margin-top"> '+planOldPrice+'</p></li>';
                if(planOldPrice==null)
                html+='<li class="w3-bold tagB w3-xlarge" ><p class="example cross w3-margin-top" style="height:35px;"></p> </li>';
                html+='<li class="w3-bold w3-medium font-size1">&#x20B9;  '+planPrice+'</li>';
                html+='</ul>';
                if(planPrice==0)
                {
                html+='<div class="  w3-col l10" style=" display: inline-flex;">';
                //html+='<form class="padd-left" style="position: absolute; display: inline-block;padding-left: 56px;">';
                html+='<div class=" w3-col l10 s16 sub_newc" style="">';
                html+='<input class="w3-input" type="text" id="subscription_code" placeholder="Apply Subscription Code"> </div>';
                html+='<div class="w3-col l1 s16 font-size14  " ><input type="button" value="Apply" onclick="subs_code_apply();" style="cursor:pointer;" class="subs-apply">  </div>';
                html+='<span class="error" id="error-subsmessage" style="padding-left: 38px; position: absolute; padding-top: 26px; padding-bottom: 26px;"></span>';
                //html+='</form>';
                html+='</div>';
                }  
                html+='<input type="hidden" name="partnerid"  id="partnerid" value="'+PARTNER_ID+'"/>';
                html+='<input type="hidden" name="userid"  id="userid" value="'+Userid+'"/>';
                html+='<input type="hidden" name="amount"  id="amount"   value="'+planPrice+'"/>';
                html+='<input type="hidden" name="currency"  id="currency" value="'+planCurrency_name+'"/>';
                html+='<input type="hidden" name="planid"   id="planid" value="'+planId+'"/>';
                html+='<input type="hidden" name="email"    id="email" value="'+email+'"/>';
                html+='<input type="hidden" name="duration"    id="planduration" value="'+duration+'"/>'; 
                html+='<div class="price-selet pric-sclr1">';               
                if(exp_date==null && planPrice!=0)	
                html+='<a class="popup-with-zoom-anim w3-uppercase"><input type="button" value="SUBSCRIBE" onclick=" return send_payment(\''+PARTNER_ID+'\',\''+Userid+'\',\''+planPrice+'\',\''+planCurrency_name+'\',\''+planId+'\',\''+email+'\',\''+duration+'\');" style="cursor:pointer"></a>';
                if(exp_date!=null){
                html+='<a class="popup-with-zoom-anim w3-uppercase" style="background:green""><input type="button" value="SUBSCRIBED"  style="cursor:pointer; background:green"></a></br>';
                html+='<div>&nbsp;</div>';
                html+='<div id="expireplan_duration" style="color:gray; margin-top: -11px; text-align: center;">*This plan will be expired on '  +exp_date+'</div>';
                }
                html+='</div>';
                
                html+=' </form>';
                html+=' </div>';
                html+=' </div>';
                html+=' </div>';
                html+=' </div>';
                html+=' </div>';
            }
            
              html+='</center>';
            _(Container).innerHTML=html;

        }
        
        
        

    }


     /*    function buildPlanBoxes_subs(JSONobject, Container)
      {
        var len=JSONobject.Subscription_Plan_Details.length;
        var data=JSONobject.Subscription_Plan_Details;
        //alert(Userid+"--"+partnerId);           
        if(len>0)
        {
            var html='<center>';
            for(var i=0;i<len;i++)
            {
                var planId=data[i].ID;
                var planName=data[i].name;
                var planValue=data[i].Value;
                var planDur=data[i].duration;
                var planDesc=data[i].description;
                if(planName=="Weekly"){var planClass="silver"; }else if(planName=="Daily"){planClass="bronze";}else if(planName=="Free"){planClass="starter";}
                else if(planName=="Yearly"){var planClass="starter";}else if(planName=="Half-Yearly"){planClass="silver";}else {planClass="gold";}
                html+='<div class="w3-col s12 m3 l3 " style="float:none;display:inline-block">';
                html+='<form method="post" name="customerData" action="">';
                html+='<div class="subs-plans w3-card-2" >';
                html+=' <table class="planBox" >';
               
                html+='<tr class="'+planClass+'"><td>'+planName+'</td></tr>';
                html+='<tr class="bold"><td>'+planDesc+'</td></tr>';
                html+=' <tr class="rs"><td><i class="fa fa-rupee"></i> '+planValue+'</td></tr>';
                html+='<tr class="rs"><td>For '+planDur+' Day(s)</td></tr>';
                html+='<tr class="rs"><td>';
                html+='<input type="hidden" name="amount" value="'+planValue+'"/>';
                html+='<input type="hidden" name="currency" value="INR"/>';
               // html+='<input type="hidden" name="redirect_url" value="http://www.planetcast.in/cResponseHandler?planid%3D'+planId+'%26days%3D'+planDur+'"/>';
                //html+='<input type="hidden" name="cancel_url" value="http://www.planetcast.in/cResponseHandler?planid%3D'+planId+'%26days%3D'+planDur+'"/>';
                html+='<input type="hidden" name="language" value="EN"/>';
                html+='</td></tr>';
                html+='<tr class="rs"><td height=80><input type="submit" class="adore-btn" value="SUBSCRIBE"></td></tr>';
                html+='</table>';
                html+=' </div>';
                html+=' </form>';
                html+=' </div>';
            }
            html+='</center>';
            _(Container).innerHTML=html;
        
        }
    
    }*/
    
function buildYtCase(JSONobject, Container)
{
       var items= JSONobject.qtcase.length;
    var row = "";
    for (var i = 0; i < items ; i++)
    {
        var title_tag_name = JSONobject.qtcase[i].title_tag_name.toUpperCase(); 
        var search_tag_array_length = JSONobject.qtcase[i].search_tag.length;    
      
        if(search_tag_array_length>0)
        {
            row+='<p class="w3-content w3-container heading">'+title_tag_name+'</p>';
       
            var slide='<div class="w3-row-padding bxslider" >';
            for (var j = 0; j < search_tag_array_length ; j++)
            {
                var search_tag_array=JSONobject.qtcase[i].search_tag;
                var tumnail_height_width="/width/300/height/200/quality/75";
                var thumburl=search_tag_array[j].thumburl;
                var name=search_tag_array[j].name;
                var type=search_tag_array[j].type;
                var plan=search_tag_array[j].ispremium;
                var entryid=search_tag_array[j].entryid;
                var duration=search_tag_array[j].duration;
                var plandetail=(plan==0) ? "Free" : "Premium";
                var planClass=plan==0 ? "planF" : "planP";
                var lang= search_tag_array[j].language;  
                lang=(lang==undefined)?"":lang;
                lang=(lang=="NULL")?"":lang;
                var description=search_tag_array[j].description;            
          
                slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                slide+='<div class="w3-card-2 vidThumb">';
                slide+="<a href='javascript:' title='"+name+"' onCLick='ytPlay(\""+entryid+"\",\""+plan+"\",\""+type+"\",\""+name+"\",\""+description+"\",)'><img data-src="+thumburl+" src='"+baseUrl+"/images/banners/placeholder@.png' class='w3-image lazy' >";
                slide+='<span  class="'+planClass+' price_tag" style="position: absolute; margin: 0 0 30px 0;">'+plandetail+'</span>'; 
            slide+='<span class="duration">'+msToTime(duration)+'</span>';
                slide+='<div class="card-text ">';
                //slide+='<h4 class="" title="'+name+'">'+textWrap(name,32)+'</h4>';
                slide+='<h4 class="" title="'+name+'">'+name+'</h4></a>';
                slide+='<h5 class="vidlanguage">'+lang+'</h5>';
                slide+='</div>';
                slide+='</div>';
                slide+='</div>';
          
                if(search_tag_array_length<4)
                {
                    slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                    slide+='<div class="w3-card-2 vidThumb">';
                    slide+='<a><img src="'+baseUrl+'/images/banners/placeholderS.jpg" class="w3-image " ></a>';
                    //slide+='<span class="duration">'+msToTime(duration)+'</span>';
                    slide+='<div class="card-text ">';
                    slide+='<h4 class="" ></h4>';
                    slide+='</div>';
                    slide+='</div>';
                    slide+='</div>';
              
                }
         
          
            }
      
            row+=slide+"</div>";
        }
        _(Container).innerHTML =row;
    }
    $('.bxslider').bxSlider({
 
        slideWidth: 325,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin:0
    });
  
    $('img.lazy').loadScroll(100);
}


function ytPlay(entryid,plan,type,name,description)
{           
          
          
        if(type=="8" && plan==0)
        {
        localStorage.setItem("ytWatchid",entryid); 
        localStorage.setItem("ytDescription",description);
        localStorage.setItem("ytName",name);
        location.href="ytwatch.php?entryID="+entryid;
        }   
        else
        {
            alert("Unable to playe this video.");
            console.log("Ytcase type : "+type);
            console.log("Ytcase plan : "+plan);
        }
                
    
}

function watchYtCase()
{
     if(localStorage.getItem("ytWatchid")==undefined)location.href="ytcase.php"; 
     getMenu(); 
     
     var watchid=localStorage.getItem("ytWatchid");
     
     var html='<iframe class="ytPlayer" src="https://www.youtube.com/embed/'+watchid+'" frameborder="0" allowfullscreen></iframe>';
     
     _("watch-ytcase").innerHTML=html;
     _("video-title").innerHTML=localStorage.getItem("ytName");
     _("discription").innerHTML=localStorage.getItem("ytDescription");
     
    getRelatedVideo(0,8)  
}



function buildView_type_4(JSONobject, Container)
{
       var items= JSONobject.pollywood.length;
    var row = "";
    for (var i = 0; i < items ; i++)
    {
        var title_tag_name = JSONobject.pollywood[i].title_tag_name.toUpperCase(); 
        var categoryid=JSONobject.pollywood[i].categoryid;
        var catName=JSONobject.pollywood[i].title_tag_name.toLowerCase(); ;
        var search_tag_array_length = JSONobject.pollywood[i].search_tag.length;    
      
        if(search_tag_array_length>0)
        {
            if(search_tag_array_length<5)
            {
            row+='<p class="heading ">'+title_tag_name+' </p>';
            var slide='<div class="w3-row-padding" >'; 
            }
            else
            {
            row+='<p class="heading ">'+title_tag_name+' <span class="viewAll w3-right w3-hover-text-red font14 " ><a class="w3-card-2" style="padding:5px;position:absolute;right:40px;" href="'+baseUrl+'/listing?category='+catName+'&cid='+categoryid+'&redirect='+pageName+'">View All</a></span></p>';
            slide='<div class="w3-row-padding bxslider" >';
            }
            
            
            for (var j = 0; j < search_tag_array_length ; j++)
            {
                var search_tag_array=JSONobject.pollywood[i].search_tag;
                var tumnail_height_width="/width/300/height/200/quality/75";
                var thumburl=search_tag_array[j].thumburl+tumnail_height_width;
                var name=search_tag_array[j].name;
                var type=search_tag_array[j].type;
                var plan=search_tag_array[j].ispremium;
                var entryid=search_tag_array[j].entryid;
                var duration=search_tag_array[j].duration;
                var plandetail=(plan==0) ? "Free" : "Premium";
                var planClass=plan==0 ? "planF" : "planP";
                var lang= search_tag_array[j].language;        
                lang=(lang==undefined)?"":lang;
                lang=(lang=="NULL")?"":lang;
                var description=search_tag_array[j].description;            
          
                slide+='<div class="w3-col s12 m3 l3 lazy-container">';
                slide+='<div class="w3-card-2 vidThumb"> <span class="plan '+planClass+'"></span>';
                slide+="<a href='javascript:' title='"+name+"' onCLick=viewMedia('"+entryid+"','"+plan+"')><img data-src="+thumburl+" src='"+baseUrl+"/images/banners/placeholder@.png' class='w3-image lazy' >";
                slide+='<span class="duration">'+msToTime(duration)+'</span>';
                slide+='<div class="card-text ">';
                //slide+='<h4 class="" title="'+name+'">'+textWrap(name,32)+'</h4>';
                slide+='<h4 class="" title="'+name+'">'+name+'</h4></a>';
                slide+='<h5 class="vidlanguage">'+lang+'</h5>';
               
             
                slide+='</div>';
                slide+='</div>';
                slide+='</div>';
          
                
         
          
            }
      
            row+=slide+"</div>";
        }
        _(Container).innerHTML =row;
    }
    $('.bxslider').bxSlider({
 
        slideWidth: 325,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin:0
    });
  
    $('img.lazy').loadScroll(100);
}



var ViewAllPgCount=0;

    function buildViewAll(JSONobject, Container)
    {
   
        var len=JSONobject.Mediainfo.length;
        var paging=JSONobject.paging;
        
        // _("srchResCount").innerHTML=len;
     
        var watch='';
        for(var i = 0; i < len ; i++)
        {
            var data=JSONobject.Mediainfo[i];
            var tumnail_height_width="/width/350/height/200/quality/75";
            var thumburl=data.thumburl+tumnail_height_width;
            var plan=data.ispremium;
            var entryid=data.entryid;
            var plandetail=(plan==0) ? "Free" : "Premium";
            var duration=data.duration;
            var name=data.name;
            var planClass=plan==0 ? "planF" : "planP";
                          
            watch+='<div class="w3-col s12 m3 l3">  ';
            watch+=' <div class="w3-card-2 vidThumb" ><span class="plan '+planClass+'"></span>'; 
            watch+='<a   href="javascript:" title="'+name+'"  onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')">';
            watch+='<img class="w3-image lazy "   data-src='+thumburl+' src="'+baseUrl+'/images/banners/placeholder@.png" >';
            watch+='<span class="duration">'+msToTime(duration)+'</span>';
            watch+='<div class="card-text ">';
            watch+='<h4 class="w3-center" title="'+name+'">'+textWrap(name,35)+'</h4></a>';
            watch+='</div>';
            watch+= '</div>';
            watch+= '</div>';
        
        
    
        }
        //alert(paging);
        if(paging=='NULL' )
        {
           _("loadMore").classList.add("w3-hide");
           
        }   
        _(Container).innerHTML+=watch;
        _("getViewAllPlaceholder").innerHTML="";
          ViewAllPgCount++;
        $('img.lazy').loadScroll(100);
    }
    
    function builtPaymentStatus(JSONobject, Container)
    {
        var order_id=JSONobject.order_id;
         if(order_id!='')
         {    
             window.location=baseUrl+'/paymentStatus?orderID='+order_id;
          } 
    }

function buildPaymentInfo(JSONobject, Container)
{
    
    var Transcation_id=JSONobject.Transcation_id;
    if(Transcation_id=='' || Transcation_id=='NULL')
    {
        var orderID=orderIDgetFromUrl;
        var amount='';
        var order_status="Security Error. Illegal access detected";
        var Transcation_id_get='';
    }
    else
    {
        var orderID=orderIDgetFromUrl;
        var amount=JSONobject.amount;
        var order_status=JSONobject.order_status;
        var Transcation_id_get=Transcation_id;
        
    }   
     _("load").style.display='none'; 
     _(Container).style.opacity = "1";
     _("SetOrderID").innerHTML = orderID;
     _("SetOrderMsg").innerHTML = order_status;
     _("SetAmount").innerHTML = amount;
     _("SetTransactionID").innerHTML = Transcation_id_get;
     
     
    /*"Transcation_id":"NULL",
    "planid":"NULL",
    "currency":"NULL",
    "amount":"NULL",
    "plan_days":"NULL",
    "order_status":"NULL"
     */
     //SetOrderID SetOrderMsg SetAmount SetTransactionID
    
     
}
function buildsuggestedVideo(JSONobject, Container){
        var flen=JSONobject.SuggestedVideo.length;
        var fea='';
        for (var i = 0; i < flen ; i++)
        {
            var vname=JSONobject.SuggestedVideo[i].name;
            var tumnail_height_width="/width/300/height/430/quality/100";

thumburl=JSONobject.SuggestedVideo[i].thumburl+tumnail_height_width;
            var plan=JSONobject.SuggestedVideo[i].ispremium;
            var entryid=JSONobject.SuggestedVideo[i].entryid;
            var duration=JSONobject.SuggestedVideo[i].duration;
             var type=JSONobject.SuggestedVideo[i].type;
            var lang=JSONobject.SuggestedVideo[i].language;
            lang=(lang==undefined)?"":lang;
            lang=(lang=="NULL")?"":lang;
            var plandetail=plan==0 ? "Free" : "Premium";
            var planClass=plan==0 ? "planF planF1" : "planP planP1";
            var des="";
            var strlen= vname.length;
               var dot="";
               if(strlen>'30') {  dot="...";}
               var vname_vew = vname.substring(0, 30)+dot;

            fea+='<div class="w3-col s12 m12 l10 margin-left35" style="positio:relative;">';
            fea+='<div class="w3-card-2 " style="border-bottom: 0px solid #18b5e0 ; positio:relative;">';

               fea += '<div class="card-text" style=" ">';
            fea+='<a href="javascript:" title="'+vname+'" onCLick="viewMedia(\''+entryid+'\',\''+plan+'\')">';
             fea+='<img  class="w3-image  " src="'+thumburl+'" style="border-bottom: 1px solid #18b5e0 ; height:170px; width: 100% !important; cursor:pointer;"src="'+baseUrl+'/images/placeholder@2x.png">';
           fea+='</div>';
            fea+='<span class="'+planClass+' " style="">'+plandetail+'</span>';
            fea+='<span class="duration" style=" ">'+msToTime(duration)+'</span>';
            fea+='<div class="title-content">';
            fea+='<div class="w3-xlarge w3-display-bottomleft lazy1" id="text-wrap-b" style="left:5% ">';
            fea+='<p class="w3-text-white " style="text-align: left;font-size: 15px; -webkit-animation-delay: 1.5s;-moz-animation-delay: 1.5s;animation-delay: 1.5s" title="'+vname+'">'+vname_vew+'</p></a>';
            fea+='<h5 class="vidlanguage">'+lang+'</h5>';
            fea+='</div>';
            fea+='</div>';
            fea+='</div>';
            fea+='</div>';


        }

        $("#related-placeholder").html("");
        $("#suggested-video").append(fea); //append data into #results element
        $('img.lazy').loadScroll(100);


    }

    
    
    
function  buildTicket(JSONobject, Container)
{
    var smsg=JSONobject.Msg; var Ticket_NO=JSONobject.Ticket_NO;
         $("#ticket_respons_no").html(Ticket_NO);
         $("#ticket_respons_msg").html(smsg);
 }


function buildTicket_history(JSONobject, Container)
 {
     var ticket_len=JSONobject.Ticket_history.length; 
     var ticketHtml='<table class="w3-table w3-bordered w3-text-white " style="width:100%">';
     ticketHtml+='<tr ><p class="font10 font-size14" style="border-bottom: 0px !important; padding-bottom:20px; padding-left: 20px; text-trasform:uppercase">Ticket Status</p></tr>';
     for (var i = 0; i < ticket_len; i++)
        {  
            var ticket_status=JSONobject.Ticket_history[i].status;
            var ticket_date=JSONobject.Ticket_history[i].date;
            var ticket=JSONobject.Ticket_history[i].ticket;
            var subject=JSONobject.Ticket_history[i].subject; 
	        ticketHtml+='<tr style="border-bottom: 2px solid #354859; "><td style="padding-top: 8px !important; " class="font10 font-size14  "><span style=" padding-left: 20px;" class="font10 font-size14">Ticket ID: "'+ticket+'"</span> <br /> <span style="color: red; padding-bottom: 10px; padding-left: 20px;" class="font10 font-size14">"'+ticket_date+'"</span></td>';
	        ticketHtml+='<td class="w3-center font10 font-size14 w3-padding-8" style="padding-left: 11%;"  ><span style="" class="w3-center">"'+subject+'"</span> <br /> <span style="color: #fff; padding-bottom: 10px;" class="w3-center w3-padding-8">"'+ticket_status+'"</span></td>';
	        ticketHtml+=' </tr>';  

      }
      //ticketHtml+='</div>';
        ticketHtml+='</table>'; 
    _(Container).innerHTML=ticketHtml;
 } 
 
/*
 function  builddobHtml(){
    Alert.render("");
       // document.getElementById('dialogboxhead').innerHTML = '<span style=" max-width: 324px; z-index: 10;left: 512px !important;"> </span>'
         document.getElementById('dialogboxhead').innerHTML = 'Please Enter Your Dob';
         document.getElementById('dialogboxbody').innerHTML = '<span style=" max-width: 324px; z-index: 10;padding: 7px 20px  !important;"> <input class="w3-input w3-input-padd"  type="text"  id="dob" style="width:254px"></span>';
         document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" style="background: #333; border: 0px !important; font-size:1.3em; color:#fff">OK</button>';
  
   $("#dob").datepicker({
   maxDate: "-1",
   dateFormat: 'yy/mm/dd',
    changeMonth:true,
          changeYear:true,
          yearRange:"-100:+0",
   readonly: "readonly",
 });
  
    
 } */

  
 
function buildTrans_history(JSONobject, Container) 
{
	var history_len=JSONobject.Result.length; 
	
	var his_Html='';	
	his_Html+='<table class="w3-table w3-bordered w3-striped w3-bordered w3-border">'; 
    his_Html+='<tr class="font8" ><th>Transaction Date</th><th>Order ID</th><th>Plan Type</th> <th>Order Status</th><th>Wallet Point</th> <th>Discount</th><th>Payable Amount</th><th>Video Name</th> </tr>';
     for (var i = 0; i < history_len; i++)
        {   
        	
            
        	
        	var his_orderid=JSONobject.Result[i].orderid;
            var his_coupon_discount=JSONobject.Result[i].coupon_discount;
            var his_payment_for=JSONobject.Result[i].payment_for;
            if(his_payment_for=="subs_code")
            {
            	his_payment_for="Subscribed";
            }
            if(his_payment_for=="wallet")
            {
            	his_payment_for="Pay Per View";
            }
            if(his_payment_for=="plan")
            {
            	his_payment_for="Subscription";
            }            
            var his_planid=JSONobject.Result[i].planid; 
            var his_amount=JSONobject.Result[i].amount;  
            var his_trans_date=JSONobject.Result[i].trans_date; 
            var his_Video_name=JSONobject.Result[i].Video_name; 
            
            if(his_trans_date==null)
            {
            	his_trans_date="-";
            }
            var his_order_status=JSONobject.Result[i].order_status; 
            var his_wallet_point=JSONobject.Result[i].wallet_point; 
             if(his_wallet_point==null)
            {
            	his_wallet_point="-";
            }
            if(his_coupon_discount==null)
            {
            	his_coupon_discount="-";
            }
            if(his_Video_name==null)
            {
            	his_Video_name="-";
            }
            if(his_amount==null)
            {
            	his_amount="-";
            }
            var his_trans_id=JSONobject.Result[i].trans_id; 
           
            
         
            his_Html+='<tr class="font8" style="color:#fff !important"><th>'+his_trans_date+'</th><th>'+his_orderid+'</th><th>'+his_payment_for+'</th> <th>'+his_order_status+'</th><th>'+his_wallet_point+'</th> <th>'+his_coupon_discount+'</th><th>'+his_amount+'</th><th>'+his_Video_name+'</th> </tr>';
           
      }
     
      
           his_Html+='</table>';
            his_Html+='<div class="w3-seprator"></div>';
      
     _(Container).innerHTML=his_Html;
}


function buildlogout(JSONobject, Container)
{
	var status=JSONobject.status;
	 if(status==0){
	 document.location = baseUrl + "/logout";	
	}
	else
	document.location = baseUrl + "/logout";	
}
 
