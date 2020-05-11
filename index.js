var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.write(`
<!DOCTYPE html>
<html>
	<head>
		<title>Node Testing</title>
	</head>
	<body>
    <div class = container>
      <div class = header>
        <h1 class = modeEditable contenteditable = false>Node.js</h1>
		    <h3 class = modeEditable contenteditable = false>The backend savior</h3>
        <hr />
      </div>
    </div>
		<style>
      html {
        scroll-behavior: smooth;
      }
      body {
        color:#fff; 
        background-color:#282828;
        font-family: Arial, sans-serif;
      }
      .container {
        padding: 1em;
      }
      .header {
        padding: 1em;
        text-align: center;
        font-size: 2rem;
      }
    </style>
	</body>
</html>`);

  var q = url.parse(req.url, true).query;
  mode = q.mode;
  if (q.mode == "development") {
    res.end("Dev Mode");
    setDevMode();
  } else if (q.mode == "active") {
    res.end();
  } else {
    res.end("404 Error: Mode not defined or Invalid Mode");
  }
  
}).listen(8080);
function setDevMode() {
  querySelectorAll(".modeEditable").setAttribute("contenteditable", "true");
}