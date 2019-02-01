
//var tokFlag = 1;

function runAjax(apiURL, apiBody, Container)
{
    var httpObject = null;
    if(window.ActiveXObject)
        httpObject  = new ActiveXObject("Microsoft.XMLHTTP");
    else if(window.XMLHttpRequest)
        httpObject = new XMLHttpRequest();
    else
    {
        alert("Your browser does not support AJAX.");
        return null;
    }


    switch(Container)
    {
            case "navMain":
            case "resultlike":
            case "resultdislike":
            case "createplaylsit":
            case "ShowWatchLater":
            case "ShowFavourite":
            case "removeFavourite":
            case "payment_process":
            case "ticket_history":
            case "getonly_price": 
            case "logout_user": 
                     if(_(Container)){ _(Container).innerHTML = "";}

        break;
        case "home-setting":
                if(_(Container))

                         _(Container).innerHTML += '<center><div class="slice" > <div data-loader="spinner"></div></div></center>';

        break;

                case "results_featured":
                if(_(Container))

                         _("featured-placeholder").innerHTML += '<center><div class="slice" > <div data-loader="spinner"></div></div></center>';

        break;
                 case "movies-result":
        if(_(Container))
            //if(moviePg<1)_(Container).innerHTML = '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';
            _(Container).innerHTML = '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';
        break;

                case "related-video":
                if(_(Container))

                         _("related-placeholder").innerHTML += '<center><div class="slice" > <div data-loader="spinner"></div></div></center>';

        break;

        case "carousel-example": case "carousel_only":
        if(_(Container))

                           _(Container).innerHTML += '<div class="slice"> <div data-loader="spinner"></div></div>';

        break;

                case "movie-carousel":
        if(_(Container))

                           _(Container).innerHTML += '<div class="slice" > <div data-loader="spinner"></div></div>';

        break;

                 case "getViewAll":
        if(_(Container))

                           _("getViewAllPlaceholder").innerHTML += '<div class="slice" > <div data-loader="spinner"></div></div>';

        break;

                case "Search-data":
        if(_(Container))
            _(Container).innerHTML = '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';
        break;

                case "watchListResult":
        if(_(Container))
            _(Container).innerHTML = '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';
        break;

                case "liveTv":
        if(_(Container))
            _(Container).innerHTML = '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';
        break;

                case "watch-video":
        if(_(Container))
                  _(Container).innerHTML += '<center><div class="slice borderRed"> <div data-loader="spinner"></div></div></center>';

        break;
        
             
                   case "categorie_result":  case "categorie_result1":
                    if(catVidPg<1)
                      _("categorie_result").innerHTML += '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';

         break;


                case "ShowPlaylistInPlaylistPage":
                    _("ShowPlaylistInPlaylistPage").innerHTML = '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';

                   break;


              
               
                  case "login_fail": case "registration_msg":
               if(_(Container))
               _(Container).innerHTML = '<center><div class="slice" > <div data-loader="spinner"></div></div></center>';
                    break;
                 case "getPaymentInfo":
                    console.log("sonam="+Container);
                 _("load").style.display='block';
                 _(Container).style.opacity = "0.1";
                 break;




        default:
     /*
        if(_(Container))
                 _(Container).innerHTML += '<center><div class="slice borderRed" > <div data-loader="spinner"></div></div></center>';*/

    }


    httpObject.open("POST", apiURL, true);//alert(apiURL+"--"+ apiBody+"--"+ Container);

        if(Container=="registration_msg" || Container=="login_fail" || Container=="successAndFailChangePassword" || Container=="submitNewPass" )
        {
           //alert("in reg="+Container);
           httpObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        //httpObject.setRequestHeader("authorization","Basic " + window.btoa(user + ":" + pass));
        //httpObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');

       // var user='PlanetCastM'; var pass = 'p1@netc@$t';
        //console.log("Basic " + window.btoa(user + ":" + pass));
       // httpObject.setRequestHeader("Authorization", "Basic UGxhbmV0Q2FzdE06cDFAbmV0Y0AkdA==");
        //httpObject.setRequestHeader("Authorization","Basic " + window.btoa(user + ":" + pass));
        httpObject.send(apiBody);
        httpObject.onreadystatechange = function()
         {
               if(httpObject.readyState == 4 && httpObject.status==200)
                {
                    parseJSON(httpObject.responseText,apiBody, Container);


                }
                else if(httpObject.status==0)
                {
                   console.log("Log "+httpObject.statusText+" container "+Container);
                }
         };
}

function parseJSON(JSONresponse,apiBody, Container)
{//console.log("DEV_PRINT:login__"+JSONresponse+"__"+Container);
    console.log(apiBody);
    if(!JSONresponse)return;
    var JSONobject = JSON.parse(JSONresponse);
     if(!_(Container))
    console.log("DEV_PRINT: Invalid Container__"+Container+"__");


    /*var TokenStatus=JSONobject.token_status;
    switch(TokenStatus)
    {
        case "False":
        tokFlag = 0;
        //alert(tokFlag+"--"+TokenStatus);
window.location="sessionDestroy.php?tokFlag="+TokenStatus;

        break;
        case "True":
            tokFlag = 1;
        break;
    }*/
        //alert(Container);
    switch(Container)
    {
             case "Guest_user":
                    buildGuestMsg(JSONobject, Container);
                    break;

             case "get_token":

              BuildToken(JSONobject, Container); // this function called in js/functions.js
              break;
        case "countrylist":

              buildcountrylist(JSONobject, Container); // this function called in js/functions.js
              break;

        case "navMain":
          //sessionStorage.setItem("navMenu",JSON.stringify(JSONobject));
         buildMenu(JSONobject,Container,pageName,loginStatus,Username);  // this function called in js/functions.js
         break;


              case "home-setting":
              buildHomeSetting(JSONobject, Container); // this function called in js/functions.js
              break;

               case "carousel_only":
               buildCaruselonly(JSONobject, Container); // this function called in js/functions.js

            break;
                 case "subcategory-image":
               buildsubcategory(JSONobject, Container); // this function called in js/functions.js

           break;
                 case "subcategory-image":
                 case "category-image_epi":
                 build_episode(JSONobject, Container); // this function called in js/functions.js
  
            break;

             case "movie-carousel":
             buildMovieCarusel(JSONobject, Container); // this function called in js/functions.js

        break;



              case "category-home":
              case "category-image":
              buildcategory(JSONobject, Container); // this function called in js/functions.js
        break;
        //buildcategory(JSONobject, Container); // this function called in js/functions.js
        //break;

                case "watchListResult":
              buildWatchResult(JSONobject, Container); // this function called in js/functions.js
        break;

                 case "watchHistory":
                 buildUserHistory(JSONobject, Container); // this function called in js/functions.js
        break;

               case "Plansubscription":
                   buildPlanBoxes(JSONobject, Container);
               break;

              case "footer-data":
              buildFooter(JSONobject, Container); // this function called in js/functions.js
        break;

                case "subscription":
                   buildPlanBoxes_subs(JSONobject, Container);
               break;


                case "liveTv":
              buildliveTv(JSONobject, Container); // this function called in js/functions.js
        break;

               case "getYtCase":
              buildYtCase(JSONobject, Container); // this function called in js/functions.js
        break;

                case "getViewAll":
              buildViewAll(JSONobject, Container); // this function called in js/functions.js
        break;




                case "view_type_4_container":
                buildView_type_4(JSONobject, Container); //this function called in js/functions.js
          break;
             case "buildMusicMenu":
                buildMusicTabItems(JSONobject, Container);
           break;

            case "catgory_with_data":
                buildCategoryWithData(JSONobject, Container);
            break;
            case "music-result":
                buildMusicHtml(JSONobject, Container);
            break;
           case "catgory_with_data_film":
                buildCategoryWithDatafilm(JSONobject, Container);
            break;
            case "kids_result":
                buildKidsCategory(JSONobject, Container);
            break;

            case "livechannel_result":
                buildliveChannel(JSONobject, Container);
            break;

            case "bazar_result":
                buildBazarCategory(JSONobject, Container);
            break;


            case "buildMovieMenu":
                buildMoviesTabItems(JSONobject, Container);
            break;
            case "buildMovieSubMenu":
                buildMovieSubMenu(JSONobject, Container);
            break;

            case "movies-result":
            case "category-title":
                buildMoviesHtml(JSONobject, Container);
            break;
          case "subcategoryMovies":
                buildMoviesCategoryHtml(JSONobject, Container);
            break;

          case "categorie_result":
                  buildCategoryInCategoryPage(JSONobject, Container,categoryIDD,catName,subCatID,catVideoID); // this function called in js/functions.js
          break;
          case "categorie_result1":
              buildgetVideoIncategory(JSONobject, "categorie_result",catName); // this function called in js/functions.js
          break;
           case "sidebar":
sessionStorage.setItem("sideMenu",JSON.stringify(JSONobject));
                      buildCategoryTree(JSONobject, Container,catName,subCatID,catVideoID); // this function called in js/functions.js
          break;
           case "login_fail":
              userloginDetail(JSONobject, Container); // this function called in js/functions.js
          break;
         /*case "login_failGoogle":
              userloginGoogle(JSONobject, Container); // this function called in js/functions.js
          break;*/

           case "reset_pass":
              userForgotPassword(JSONobject, Container); // this function called in js/functions.js
           break;

           case "LEFT_MENU":
              buildLeft_Menu(JSONobject, Container); // this function called in js/functions.js
           break;

                    case "successAndFailChangePassword":
                   userChangedPassword(JSONobject, Container); // this function called in js/functions.js
           break;

                 case "submitNewPass":
                       NewPassSubmitted(JSONobject, Container);
                 break;
            case "registration_msg":



            var n = apiBody.lastIndexOf("=");  apiBody =apiBody.substring(n); console.log("enpass",apiBody);
            var userpass= apiBody;
            registration_msg(JSONobject,userpass, Container); //
            break;
             case "watch-video":
             buildVideoInfo(JSONobject, Container); // this function called in js/functions.js
            break;
            case "getonly_price":
            buildVideoPrice(JSONobject, Container); // this function called in js/functions.js
            break; 
            case "fp-dash":
            buildVideoMetaData(JSONobject, Container); // this function called in js/functions.js
            break;
            /* case "playlist-video":
             buildPlaylistInPlayer(JSONobject, Container); // this function called in js/functions.js
                    break;*/

            case "ShowPlaylist":
            buildShowPlaylist(JSONobject, Container); // this function called in js/functions.js
                    break;
                     case "ShowPlaylistInPlaylistPage":
              buildShowPlaylistinPlayListPage(JSONobject, Container); // this function called in js/functions.js
                    break;


             case "createplaylsit":
              getShowPlaylist("whenAdd");      // this function called in js/functions.js
            break;

                    case "ShowWatchLater":
            buildShowWatchLater(JSONobject, Container); // this function called in js/functions.js
            break;

            case "resultlike":
              buildLikeDislike(JSONobject, Container); // this function called in js/functions.js
            break;
                    case "playlistMeta":
                        buildPlaylistInfo(JSONobject, Container);
                    break;

                   case "removeFavourite":
                        var statusC=JSONobject.status;
                        var Vmsg=JSONobject.Message;
                        notification(Vmsg);

                    break;

                    case "ShowFavourite":
                        buildShowFavourite(JSONobject, Container);
                    break;

                     case "favouriteList":
                        buildFavouriteList(JSONobject, Container);
                    break;

                    case "continue-watching":
                    buildcontinueWatching(JSONobject, Container);
                    break;

                    case "remove-continue-watching":
                    var statusC=JSONobject.status;
                    var Vmsg=JSONobject.Message;
                    notification("Deleted successfully.");
                    break;
                    /*case "dob_check":
                    var status_dob=JSONobject.Result;
                    if(status_dob==true)
                    builddobHtml();
                    break;*/ 



           case "resultdislike":
              buildLikeDislike(JSONobject, Container); // this function called in js/functions.js
          break;
           case "Search-data":
              buildSearchVideo(JSONobject, Container); // this function called in js/functions.js
          break;
           case "results_featured":
             buildFeaturedVideo(JSONobject, Container); // this function called in js/functions.js
           break;
           case "NORES_CheckUncheck":
            var statusC=JSONobject.status;
            var Vmsg=JSONobject.Mesage;
                    if(statusC==0) notification("Deleted successfully.");
                    else  notification(Vmsg);
            break;
                    case "NORES_CheckUncheckWatchList":
                    var wmsg=JSONobject.Message;
                    notification(wmsg);
                    break;
                    case "insertWatchLater":
                    var wmsg=JSONobject.Message;
                    notification(wmsg);
                    break;
                    case "insertFavourite":
                    var wmsg=JSONobject.Message;
                    notification(wmsg);

                    break;
                    case "related-video":
                    buildRelatedVideo(JSONobject, Container);
                    break;
                    case "recommended_result":
                    buildRecommended(JSONobject, Container);
                    break;
                     case "NORES_MyProfile":
                    buildMyProflie(JSONobject, Container);
                    break;
                    case "NORES_ProfilePic":
                    buildMyPicture(JSONobject, Container);
                    break;

                    case "NORES_EditSaveProfile":
                    var wmsg=JSONobject.Message;
                     // alert(wmsg);
                   // notification(wmsg);
                      _("pass_details").innerHTML='<p class="w3-text-green">'+wmsg+'</p>';
                    break;
                    case "NORES_State":
                    buildState(JSONobject, Container,stateName);

                    break;
                    case "payment_process":
                    builtPaymentStatus(JSONobject, Container);
                    break;
                    case "getPaymentInfo":
                    buildPaymentInfo(JSONobject, Container);
                    break;
             case "suggested-video":
               buildsuggestedVideo(JSONobject, Container);
               /*$(".spinner").show();
               setTimeout(function () {
               buildsuggestedVideo(JSONobject, Container);
               $('.spinner').hide();
               }, 1000);*/
              // this function called in js/functions.js
              break;
             case "ticket_respons_msg":
                    buildTicket(JSONobject, Container); // this function called in js/functions.js
                    break;
                    case "ticket_history":
                    buildTicket_history(JSONobject, Container); // this function called in js/functions.js
                    break; 
                    //case "user_wallet":
                    //buildUser_wallet(JSONobject, Container); // this function called in js/functions.js
                    //break;
                    case "coupan_code":
                    buildCoupan_code(JSONobject, Container);
                    var coupan_msg=JSONobject.Message;
                    //if(status==0)
                    //notification(coupan_msg);
                    break;
                    case "transaction_history":
                    buildTrans_history(JSONobject, Container); // this function called in js/functions.js
                    break;
                    case "subscription_code":
                    buildSubs_Code(JSONobject, Container); // this function called in js/functions.js
                    break;
                    case "logout_user":
                    buildlogout(JSONobject, Container); // this function called in js/functions.js
                    break;

    }
}


