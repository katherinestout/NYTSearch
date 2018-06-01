


$("#searchBtn").on("click", function() {

    var query = $("#search-input").val();
    var numRecords = $("#num-records-input").val();

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=e7a9301ff4a845c0bad25f903a300d6e";
    console.log("query url: " + queryUrl);

    $.ajax({
        url: queryUrl,
        method: 'GET',
    }).done(function(result) {
        console.log(result);

        // store docs in docs array
        var docsArray = result.response.docs;

        for (var i = 0; i <= numRecords; i++) {
            // create an enclosing block for each article
            var elemArticle = $("<div>");
            
            // create div for number
            var elemNum = $("<div>").text(i + 1); 

            // create a header element for title
            var elemTitle = $("<h1>").text(docsArray[i].headline.main);

            // create an paragaraph element for author, section, date
            var elemAuthor = $("<p>").text(docsArray[i].byline.original);
            var elemSection = $("<p>").text(docsArray[i].section_name);
            var elemDate = $("<p>").text(docsArray[i].pub_date);
            // create an a element for link
            var elemLink = $("<a>").attr("href", docsArray[i].url);

            // insert all elements into article element
            elemArticle.append(elemNum, elemTitle, elemAuthor, elemSection, elemDate, elemLink);

            // insert article into top-articles div
            $('#top-articles').prepend(elemArticle);
        }
        
    
    }).fail(function(err) {
        throw err;
    });

})

