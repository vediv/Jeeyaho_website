function getMenu()
{
    if(sessionStorage.getItem("navMenu")==null)
    {
        var Container = "navMain";
        var apiBody = new FormData();
        apiBody.append("partnerid", partnerId);
        apiBody.append("userid",Userid);
        apiBody.append("token",token);
        apiBody.append("countrycode",countrycode);
        runAjax(GET_MENU, apiBody, Container);

    }
    else
    {

    }

}

function getsuggestededVideo()
{        //alert(PageIndex+"--"+PageSize);
    var Container = "suggested-video";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
  //  apiBody.append("userid",entryID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("entryid",entryID);

    apiBody.append("token",token);
    runAjax(GET_SUGGESTEDVIDEO,apiBody, Container);
}



function getguestuser()
{
    var Container = "Guest_user";
    var apiBody = new FormData();
    apiBody.append("userid",Userid);
    apiBody.append("partnerid",PARTNER_ID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("name",user_browser);
    apiBody.append("os",user_os);
    apiBody.append("token",token);
    apiBody.append("type",deviceType);
    runAjax(GET_GUEST_USER, apiBody, Container);
}





function getHome()
{
    var Container = "home-setting";
    var apiBody = new FormData();
    apiBody.append("userid",Userid);
    apiBody.append("partnerid",PARTNER_ID);
    apiBody.append("limit","10");
    apiBody.append("token",token);
    apiBody.append("countrycode",countrycode);
    runAjax(GET_HOME, apiBody, Container);
}

function getCarouselOnly()
{
    var Container = "carousel_only";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("token",token);
    apiBody.append("countrycode",countrycode);
    runAjax(GET_HOME, apiBody, Container);
}

function getCategory(catID,Container)
{

    //console.log("pks ",catID);
    //var Container = "category-home";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("categoryid", catID);
    apiBody.append("countrycode",countrycode);
    //apiBody.append("categoryid", (catId!=undefined)?catId:sessionStorage.getItem("originals"));
    //console.log(sessionStorage.getItem("original_id"));
    //apiBody.append("countrycode",countrycode);
     //apiBody.append("uuid",GetToken);
    runAjax(GET_INFO, apiBody, Container);
}

/*
 function getsubcategory(Parent_id){ 
   var Container = "subcategory-image";
  var apiBody = new FormData();
  apiBody.append("partnerid", PARTNER_ID);
  apiBody.append("categoryid", Parent_id);
  apiBody.append("countrycode",countrycode);
  apiBody.append("token",token);
 apiBody.append("limit", 10);
  apiBody.append("page", 0);
    
    runAjax(GET_CATEGORY_DATA, apiBody, Container);
}
*/



function getMyProfile()
{
    var Container = "NORES_MyProfile";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("country",countrycode);
    apiBody.append("tag","view");
    apiBody.append("token",token);
    runAjax(GET_MYPROFILE, apiBody, Container);
}

function getMyPicture()
{
    var Container = "NORES_ProfilePic";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("country",countrycode);
    apiBody.append("tag","view");
    apiBody.append("token",token);
    runAjax(GET_MYPROFILE, apiBody, Container);
}

  function getleftMenu()
  {
     var Container = "LEFT_MENU";
     var apiBody = new FormData();
     apiBody.append("userid",0);
     apiBody.append("partnerid", PARTNER_ID);
     apiBody.append("country",countrycode);
     apiBody.append("token",token);
     runAjax(GET_LEFTMENU, apiBody, Container);
  }




function getmusic(catID,Container,extra)
{

     var apiBody = new FormData();

     apiBody.append("partnerid",PARTNER_ID);
     apiBody.append("categoryid",catID);
     apiBody.append("countrycode",countrycode);
     apiBody.append("token",token);
     if(extra!=undefined && extra!=null)
    {
        getDataWithCategory(catID,Container);
    }
    else {
             runAjax(GET_INFO, apiBody, Container);
         }

}

function getDataWithCategory(parentCatid,Container)
{
     console.log(parentCatid);
     var apiBody = new FormData();
     apiBody.append("partnerid",PARTNER_ID);
     apiBody.append("categoryid",parentCatid);
     //apiBody.append("uuid",GetToken);
     apiBody.append("countrycode",countrycode);
     runAjax(GET_CATEGORY_WITH_DATA, apiBody, Container);

}


function MusicTabFilm(parentCatid,Container,functionname)
{
    //alert(parentCatid+"--"+Container+"--"+functionname);
        console.log("cat id",parentCatid);

       var items=document.getElementsByClassName("bar-item");
        var iLength=items.length;

        for(i=0;i<iLength;i++)
        {
            //if(i==0){ getmusic(Parent_id,"music-result","mediaInfo");}

            items[i].classList.remove("active-bar");
        }

       if(_("TAB"+parentCatid))
       _("TAB"+parentCatid).classList.add("active-bar");

    if(functionname=='getDataWithCategory')
    {

        _("catgory_with_data_film").innerHTML='';
       // getDataWithCategory(parentCatid,Container);
    }
    if(functionname=='getDataFilmMusic')
    {
         _("music-result").innerHTML='';
         //getDataFilmMusic(parentCatid,Container);
    }
} 



function getMovies(catID,Container)
{
     console.log(catID);
    // var Container = "movies-result";
     var apiBody = new FormData();
     apiBody.append("partnerid",PARTNER_ID);
     apiBody.append("categoryid",catID);
     apiBody.append("token",token);
     apiBody.append("countrycode",countrycode);
     runAjax(GET_INFO, apiBody, Container);
}


function getMoviesubcategory(Parent_id){
     //console.log('Parent_id ', Parent_id);
     var Container = "subcategoryMovies";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("categoryid", Parent_id);
    apiBody.append("countrycode",countrycode);
    apiBody.append("limit", 10);
    apiBody.append("page", 0);
    //apiBody.append("categoryid", (catId!=undefined)?catId:sessionStorage.getItem("originals"));
    //apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_CATEGORY_DATA, apiBody, Container);
}


function getMetaInfo(entryID,token,userId)
{
    var Container = "metaInfo";
    var apiBody = new FormData();
    apiBody.append("userid",userId);
    apiBody.append("partnerid",PARTNER_ID);
    apiBody.append("entryid",entryID);
    //apiBody.append("uuid",GetToken);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_VIDEOINFO,apiBody, Container);

}

function getVideoFromSearch(tags)  
{
    if(tags=="" || tags=="''" || tags==" " || tags==null || tags=="null"){console.log("Don't make us fool! search properly");return false;};
    var Container = "Search-data";
    var apiBody = new FormData();
    apiBody.append("partnerid",PARTNER_ID);
    apiBody.append("tag",tags);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_SEARCH,apiBody, Container);
}

function getRecommended()
{
    var Container = "recommended_result";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid","1");

    runAjax(GET_RECOMMENDED, apiBody, Container);
}


function getlivechannel()
{
     console.log(catID);
     var Container = "livechannel_result";
     var apiBody = new FormData();
     apiBody.append("partnerid",PARTNER_ID);
     apiBody.append("categoryid",catID);
     //apiBody.append("limit", 10);
     //apiBody.append("page", 0);
     runAjax(GET_LIVETV, apiBody, Container);


}


function getLiveTv()
{
    var Container = "liveTv";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("countrycode",countrycode);
    runAjax(GET_LIVETV, apiBody, Container);
}

function getSubscriptionPlans()
{
    var Container = "Plansubscription";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("userid",Userid);
    apiBody.append("token",token);
    runAjax(GET_PLAN_DETAIL, apiBody, Container);
}

function getSubscription()
{
    var Container = "subscription";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("userid",Userid);
    apiBody.append("token",token);
    runAjax(PAYMENT, apiBody, Container);
}




function getCategoryTree()
{
    var catId=sessionStorage.getItem("ondemand_id");
    if(sessionStorage.getItem("sideMenu")==null)
    {
    var Container = "sidebar";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("categoryid", catId);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_CATEGORY_TREE, apiBody, Container);
    }
    else
    {

    }

}

function getCategoryInCategorypage(categoryid)
{
    var Container = "categorie_result";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("categoryid", categoryid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_CATEGORY, apiBody, Container);
}

function getVideoIncategory(catvideoid,page,limit)
{
    var Container = "categorie_result1";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("category_id", catvideoid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("page",page);
     apiBody.append("limit",limit);
    runAjax(GET_MEDIAINFO, apiBody, Container);
}

function getImageDim(i)
{

    var JSONobject=JSON.parse(localStorage.getItem("caruselObj"));
    var deviceWidth=getDeviceWidth();
    switch(true)
    {
        case (deviceWidth<=480):
            //alert("deviceWidth<=480");
            return JSONobject[i].small_imgurl;
            break;

        case (deviceWidth>480 && deviceWidth<=640):
            //alert("deviceWidth>480 && deviceWidth<=640");
            return JSONobject[i].medium_imgurl;
            break;

        case (deviceWidth>640 && deviceWidth<=720):
            //alert("deviceWidth>640 && deviceWidth<=720");
            return JSONobject[i].large_imgurl;
            break;

        case (deviceWidth>720 && deviceWidth<=1080):
            //alert("deviceWidth>720 && deviceWidth<=1080");
            return JSONobject[i].extralarge_imgurl;
            break;

        case (deviceWidth>1080):
            //alert("deviceWidth>1080");
            return JSONobject[i].imgurl;
            break;

        default:
            //alert(1);
            return JSONobject[i].imgurl;
            break;
    }
}

function getVideoInfo(entryID,userId)
{
    var Container = "watch-video";
    var apiBody = new FormData();
    apiBody.append("userid",userId);
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("entryid",entryID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_VIDEOINFO,apiBody, Container);
}


function getVideoInfoOnlyPrice(entryID,userId)
{
	
    var Container = "getonly_price";
    var apiBody = new FormData();
    apiBody.append("userid",userId);
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("entryid",entryID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_VIDEOINFO,apiBody, Container);
}
function getContinueWatching()
{
    var Container = "continue-watching";
    var apiBody = new FormData();
    apiBody.append("userid",Userid);
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","view");
    runAjax(GET_CONTWATCHING,apiBody, Container);

}


function removeContWatchingItem(entryId)
{
    var cnf=confirm("Are you sure to remove video from continue watching?");if(!cnf)return false;
    var Container = "remove-continue-watching";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("entryid",entryId);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    apiBody.append("tag","delete");

runAjax(GET_CONTWATCHING,apiBody,Container);setTimeout(function(){ getContinueWatching();},500);

}

function getShowFavourite()
{
    var Container = "favouriteList";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","view");
    apiBody.append("token",token);
    runAjax(GET_FAVOURITE,apiBody, Container);

}

function addFavroite(get_entryid)
{
    var Container = "insertFavourite";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("entryid",get_entryid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","insert");
    apiBody.append("token",token);
    runAjax(GET_FAVOURITE,apiBody,Container);

}

function removeFavItem(get_entryid,divid)
{
    var cnf=confirm("Are you sure to remove video from favourite list?");if(!cnf)return false;
    var Container = "removeFavourite";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("entryid",get_entryid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","delete");
    apiBody.append("token",token);
    //runAjax(GET_FAVOURITE,apiBody,Container);
    runAjax(GET_FAVOURITE,apiBody,Container);
    setTimeout(function(){
    $("#"+divid).remove();

        },500);

}



function getUserHistory()
{
    var Container = "watchHistory";
    var apiBody = new FormData();
    apiBody.append("userid",Userid);
    apiBody.append("partnerid",PARTNER_ID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_HISTORY,apiBody, Container);

}
/*function removeHIsItem(get_entryid,dividh)
{
    var cnf=confirm("Are you sure to remove video from history list?");if(!cnf)return false;
    var Container = "removeHistory";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("entryid",get_entryid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","delete");
    //apiBody.append("token",token);
    //runAjax(GET_FAVOURITE,apiBody,Container);
    runAjax(GET_HISTORY,apiBody,Container);
    setTimeout(function(){
    $("#"+dividh).remove();

        },500);

}*/

function getShowWatchLater()
{
    var Container = "watchListResult";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    //apiBody.append("entryid",entryID);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","view");
    apiBody.append("token",token);
    runAjax(GET_WATCHLISTVIEW,apiBody, Container);

}




function insertADDVideoInWatchlist(get_entryid)
{

    var Container = "insertWatchLater";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("entryid",get_entryid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","insert");
    apiBody.append("token",token);
    runAjax(GET_WATCHLISTVIEW,apiBody,Container);

}



function removeWatchItem(get_entryid,dividw)
{
    var cnf=confirm("Are you sure to remove video from watch later?");if(!cnf)return false;
    var Container = "NORES_CheckUncheckWatchList";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("entryid",get_entryid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("tag","delete");
    runAjax(GET_WATCHLISTVIEW,apiBody,Container);
    setTimeout(function(){
    $("#"+dividw).remove();

        },500);//setTimeout(function(){getWatchList()},500);

} 
function like_unlike(entryid,user_id,like_delike)
{

    var Container=like_delike=="L" ? "resultlike" : "resultdislike";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",user_id);
    apiBody.append("vlike",like_delike);
    apiBody.append("entryid",entryid);
    apiBody.append("token",token);
    apiBody.append("countrycode",countrycode);

    runAjax(GET_LIKE_DISLIKE, apiBody, Container);


}








function getYtCase()
{
    var Container="getYtCase";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("categoryid",ytcase_id);
    apiBody.append("countrycode",countrycode);
    runAjax(GET_YTCASE, apiBody, Container);
}


function getViewAll(limit,pgNo)
{
    var Container="getViewAll";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("category_id",viewAllId);
    apiBody.append("page",pgNo);
    apiBody.append("limit",limit);
    apiBody.append("countrycode",countrycode);
    //apiBody.append("uuid",GetToken);
    runAjax(GET_MEDIAINFO, apiBody, Container);

}

function getResposeForCcavenue(planid,days,tr_id,order_status,status_msg,payment_mode,currency,amount,order_id,trans_date)
{


    var Container="payment_process";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("planid",_(planid).value);
    apiBody.append("days",_(days).value);
    apiBody.append("tr_id",_(tr_id).value);
    apiBody.append("order_status",_(order_status).value);
    apiBody.append("status_msg",_(status_msg).value);
    apiBody.append("payment_mode",_(payment_mode).value);
    apiBody.append("currency",_(currency).value);
    apiBody.append("amount",_(amount).value);
    apiBody.append("order_id",_(order_id).value);
    apiBody.append("trans_date",_(trans_date).value);
    runAjax(PAYMENT_DETAIL, apiBody, Container);
}

function getResponsePaymentInfo(orderid)
{
    var Container="getPaymentInfo";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("order_id",orderid);
    runAjax(PAYMENT_INFO, apiBody, Container);
}


 function getticket_history()
 {
    var Container="ticket_history";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("token",token);
    runAjax(GET_TICKET_HIS, apiBody, Container);
 }

 function getuserwallet()
 {
     var Container="user_wallet";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("countrycode",countrycode);
    apiBody.append("token",token);
    runAjax(GET_USER_WALLET, apiBody, Container);

 }
 function  gettrans_history()
 {
 	var Container="transaction_history";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("token",token);
    runAjax(GET_TRANS_HISTORY, apiBody, Container);
 }

 
function Logout(){
	var Container="logout_user";
    var apiBody = new FormData();
    apiBody.append("partnerid", PARTNER_ID);
    apiBody.append("userid",Userid);
    apiBody.append("uuid",token);
    runAjax(GET_LOGOUT, apiBody, Container);
}
