exports.add = function (req, res, vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Simple Adder</title>
    </head>
    <body>
      <h1>Simple Adder</h1>
      <p>The sum is: ${sum}</p>
    </body>
  </html> `);
    return res.end();
  };
  