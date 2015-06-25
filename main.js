var fs = require("fs"),
    http = require("http"),
    url = require('url'),
    marked = require('Marked');

http.createServer(responseHandler).listen(8887);

function responseHandler(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  if (req.url.match("fav")) {
    res.end("");
    return;
  }
  else if (req.url.match("/markdown")) {
    var input = req.url.match(/markdown\/(.*)/)[1];
    var output = markdown.toHTML(decodeURI(input));
    res.end(data);
    console.log(input, req.url)
  }
  else {
    fs.readFile("index.html", "utf8", function(err, data) {
      console.log("data:" + data);
      var input = req.url.match(/markdown\/(.*)/)[1];
      var output = markdown.toHTML(decodeURI(input));
    });
  }

  res.end();
}

//(req.url === "/")
