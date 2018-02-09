
<script type="text/javascript" src="/sites/gta/SiteAssets/code/jquery/jquery-2.2.0.min.js"></script>

<script>
    var currentUrl =  "https://dorsp13.fdor.dor.state.fl.us/sites/gta";
    var recognitionListName = "Monthly GTA Achievement";

  jQuery.ajax({
    url: currentUrl + "/_api/web/lists/getbytitle('" + recognitionListName + "')/items?$top=1&$orderby=Published%5Fx0020%5FDate desc&$select=Published%5Fx0020%5FDate",
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      $.each(data.d.results, function (i, item) {
        var publishDate = new Date(data.d.results[i].Published_x0020_Date);
        var d = new Date();
        var exdays = 365;
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        //document.cookie = "recognitionViewed = " + publishDate + ";expires= " + expires +";path=/";
        document.cookie = "recognitionViewed = " + publishDate + ";" + expires +";path=/";
        console.log('publish date' + publishDate);
    });

    },
  
    error: function (data) {
      console.log('failure');
      console.log(data);
    },
  
  });
  </script>