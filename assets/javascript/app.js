


$("#searchBtn").on("click", function() {

    var query = $("#search-input").val();
    var numRecords = $("#num-records-input").val();

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "?page=" + numRecords + "&api-key=e7a9301ff4a845c0bad25f903a300d6e";
    console.log("query url: " + queryUrl);
    
    $.ajax({
        url: queryUrl,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
        
    
    }).fail(function(err) {
        throw err;
    });

})

