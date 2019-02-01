function replaceImage(el)
{
    console.log("Image loading error : "+el.src);
    console.log("Image url switched to placeholder image");
    el.src=baseUrl+"/images/banners/placeholderL.jpg";

}

function initHome()
{
     getMenu();
     getCarouselOnly();
     getHome();
     getleftMenu();

     //getCategory(); moved inside buildmenu function
    // getfeatured(0,8);
}

function initwallet()
{
    getMenu();
    getleftMenu();

}
function initCategory()
{

        catID = sessionStorage.getItem("original_id");
        getMenu();
        getCarouselOnly();
        getCategory(catID,'category-home');
        //alert(catID);
        getleftMenu();
       //getCategoryTree();
       //getCategoryInCategorypage(categoryIDD);
}

function initSubCategory(patid)
{
	//alert(patid);
    getMenu();
    catID = sessionStorage.getItem("original_id");
    sessionStorage.setItem("pat_id",patid);
    getCategory(catID,'category-image');
    sessionStorage.setItem("subID",catID);
    //alert(catID);
    //getsubcategory(patid);
    getleftMenu();
}

/* function initSeason(patid) {
    getMenu();
    catID= sessionStorage.getItem("original_id");
    sessionStorage.setItem("pat_id",patid);
    getCategory(catID,'category-image');
    //alert(catID);
    //getsubcategory(patid);
    getleftMenu();
}*/
    

function initEpisode(patid) {
	//alert(patid);
    getMenu();
    catID= sessionStorage.getItem("subID");
    sessionStorage.setItem("pat_id",patid);
    getCategory(catID,'category-image_epi');
   // alert(catID);
    //getsubcategory(patid);
    getleftMenu();
}

function initMusic()
{
     getMenu();
     getCarouselOnly();
     catID= sessionStorage.getItem("music_id");
     getmusic(catID,"buildMusicMenu");
      getleftMenu();
    //console.log(catID);
}
function initKids()
{
     getMenu();
     getCarouselOnly();
     catID= sessionStorage.getItem("kids_id");
     //getkids(catID);
     getleftMenu();
     console.log(catID);
}

function initaboutus()
{
     getMenu();
    // getCarouselOnly();
   //  catID= sessionStorage.getItem("kids_id");
     //getkids(catID);
     getleftMenu();
   //  console.log(catID);
}

function initbazar()
{
     getMenu();
     getCarouselOnly();
     catID= sessionStorage.getItem("bazaar_id");
     //getbazarLoadMore(catID);
     getleftMenu();
     //console.log(catID);
} 

function initaward()
{
     getMenu();
     getCarouselOnly();
     catID= sessionStorage.getItem("award_id");
     //getbazarLoadMore(catID);
     getleftMenu();
     //console.log(catID);
}

function initMyAccount()
{
    getMenu();
    getMyProfile();
    getleftMenu();
   
}



function initMovies()
{
    getMenu();
   // getCarouselOnly();
    catID= sessionStorage.getItem("movies_id");
    getMovies(catID,'movies-result');
    getleftMenu();
}

function initMovieSubCategory(patid)

{
    getMenu();
    catID= sessionStorage.getItem("movies_id");
    sessionStorage.setItem("pat_id",patid);
    getMovies(catID,'category-title');
    getMoviesubcategory(patid);
    console.log(patid);
     getleftMenu();
}
function initLiveTv()
{
     getMenu();
     getCarouselOnly();
    getLiveTv();
}

function initWatchVideo()
{
    getMenu();
    getVideoInfo(entryID,Userid);
     getleftMenu();
      getsuggestededVideo();
    //getRelatedVideo(0,6);
    //getRecommended();

}

function initSearchPage()
{
	    getMenu();
	    getVideoFromSearch(searchTag);
	    getleftMenu();

}

function  initWatchList()
{
       getMenu();
       //getContinueWatching();
       //getShowFavourite("favourite");
       //getUserHistory();
       getleftMenu();
} 

function initicket()
{
    getMenu();
    getleftMenu();
}
function payclick(eid)
{
    getMenu();
    getleftMenu();
    getVideoInfoOnlyPrice(eid,Userid);
    //getuserwallet(eid,Userid);
    //getuserwallet_trans();

} 
function initicket_history()
{
    getMenu();
    getleftMenu();
    getticket_history();
}
function initSubscribe(){
	  getMenu();
	  getleftMenu();
	   getSubscriptionPlans();
}



function initpolicy()
{
    getMenu();
    getleftMenu();

}
function inittrans_history()
{
	getMenu();
    getleftMenu();
    gettrans_history();
}
function getFaqs()
{
	getMenu();
    getleftMenu(); 
}