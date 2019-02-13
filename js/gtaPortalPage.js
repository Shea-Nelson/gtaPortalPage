var currentUrl =  "https://dorsp13.fdor.dor.state.fl.us/sites/gta";
var spotlightListName = "spotlightOn";
var commListName = "News";
var recognitionListName = "Monthly GTA Achievement";

function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    } 

var spotlightOnViewed = new Date(getCookie("spotlightOnViewed"));
var recognitionViewed = new Date(getCookie("recognitionViewed"));
var commViewed = new Date(getCookie("commViewed"));
console.log('comviewed cookie=' + commViewed);
console.log('spotlightOnViewed cookie =' + spotlightOnViewed);
console.log('recognitionViewed cookie =' + recognitionViewed);

$.ajax({
    url: currentUrl + "/_api/web/lists/getbytitle('" + spotlightListName + "')/items?$top=1&$filter=Active eq '1'&$orderby=Published_x0020_Date desc&$select=Published_x0020_Date",
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      console.log(currentUrl + "/_api/web/lists/getbytitle('" + spotlightListName + "')/items?$top=1&$orderby=Published_x0020_Date desc&$select=Published_x0020_Date");
      console.log(data.d.results);
      $.each(data.d.results, function (i, item) {
        console.log(data.d.results[i].Published_x0020_Date);
        var publishDate = new Date(data.d.results[i].Published_x0020_Date);
        var today = new Date(); 
        var daysOld = new Date();
        daysOld = daysBetween(publishDate, today)
        var viewed = daysBetween(publishDate, spotlightOnViewed);       
        console.log(daysOld); 
       // console.log("pastNewDate = " + pastNewDate);
        console.log("publishDate = " + publishDate);
        console.log("spotlightOn viewed value = " + viewed);
        if ((daysOld < 14 && viewed < 0) || (isNaN(viewed))) {
            console.log("new doc");
            var d = document.getElementById("spotlight");
            d.className += " badge";
        } else {
            console.log("old doc");
        }
      });

    },
  
    error: function (data) {
      console.log('failure');
      console.log(data);
    },
  
  });

  $.ajax({
    url: currentUrl + "/_api/web/lists/getbytitle('" + recognitionListName + "')/items?$top=1&$orderby=Published%5Fx0020%5FDate desc&$select=Published%5Fx0020%5FDate",
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      console.log(currentUrl + "/_api/web/lists/getbytitle('" + recognitionListName + "')/items?$top=1&$orderby=Published%5Fx0020%5FDate desc&$select=Published%5Fx0020%5FDate");
      console.log(data.d.results);
      $.each(data.d.results, function (i, item) {
        console.log(data.d.results[i].Published_x0020_Date);
        var publishDate = new Date(data.d.results[i].Published_x0020_Date);
        var today = new Date(); 
        var daysOld = new Date();
        daysOld = daysBetween(publishDate, today)
        var viewed = daysBetween(publishDate, recognitionViewed);       
        console.log(daysOld); 
       // console.log("pastNewDate = " + pastNewDate);
        console.log("publishDateRec = " + publishDate);
        console.log("recognition viewed value = " + viewed);
        if ((daysOld < 14 && viewed < 0) || (isNaN(viewed))) {
            console.log("new doc");
            var d = document.getElementById("recognition");
            d.className += " badge";
        } else {
            console.log("old doc");
        }
      });

    },
  
    error: function (data) {
      console.log('failure');
      console.log(data);
    },
  
  });

  $.ajax({
    url: currentUrl + "/news/_api/web/lists/getbytitle('" + commListName + "')/items?$top=1&$orderby=Created desc&$select=Created",
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      console.log(currentUrl + "/_api/web/lists/getbytitle('" + commListName + "')/items?$top=1&$orderby=Created desc&$select=Created");
      console.log(data.d.results);
      $.each(data.d.results, function (i, item) {
        console.log(data.d.results[i].Created);
        var publishDate = new Date(data.d.results[i].Created);
        var today = new Date(); 
        var daysOld = new Date();
        daysOld = daysBetween(publishDate, today);
        var viewed = daysBetween(publishDate, commViewed);     
        console.log(daysOld); 
       // console.log("pastNewDate = " + pastNewDate);
        console.log("publishDate = " + publishDate);
        console.log("comm viewed value = " + viewed);
        if ((daysOld < 14 && viewed < 0) || (isNaN(viewed))) {
            console.log("new doc");
            var d = document.getElementById("communication");
            d.className += " badge";
        } else {
            console.log("old doc");
        }
      });

    },
  
    error: function (data) {
      console.log('failure');
      console.log(data);
    },
  
  });

  function daysBetween(first, second) {
    
        // Copy date parts of the timestamps, discarding the time parts.
        var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
        var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());
    
        // Do the math.
        var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var millisBetween = two.getTime() - one.getTime();
        var days = millisBetween / millisecondsPerDay;
    
        // Round down.
        return Math.floor(days);
    }

    //added to each page in script editor
    /*function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            document.cookie = cname + "=" + d + ";" +  ";path=/";
        } 

    setCookie("recognitionOnViewed");*/
    
    

            console.log("spotlight cookie value = " + getCookie("spotlightOnViewed"));
            console.log("comm cookie value = " + getCookie("commViewed"));
            console.log("recognition cookie value = " + getCookie("recognitionViewed"));