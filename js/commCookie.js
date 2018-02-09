
<script type="text/javascript" src="/sites/gta/SiteAssets/code/jquery/jquery-2.2.0.min.js"></script>

<script>
    var currentUrl =  "https://dorsp13.fdor.dor.state.fl.us/sites/gta";
    var commListName = "Key Communications";

  jQuery.ajax({
    url: currentUrl + "/_api/web/lists/getbytitle('" + commListName + "')/items?$top=1&$orderby=Created desc&$select=Created",
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      $.each(data.d.results, function (i, item) {
        var publishDate = new Date(data.d.results[i].Created);
        var d = new Date();
        var exdays = 365;
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        //document.cookie = "commViewed = " + publishDate + ";expires= " + expires +";path=/";
        document.cookie = "commViewed = " + publishDate + ";" + expires +";path=/";
    });

    },
  
    error: function (data) {
      console.log('failure');
      console.log(data);
    },
  
  });
  </script>