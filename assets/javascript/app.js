
var query = "friday";
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=e7a9301ff4a845c0bad25f903a300d6e";


$.ajax({
  url: queryUrl,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});