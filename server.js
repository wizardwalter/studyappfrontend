const express = require('express');
const path = require('path');
// var enforce = require('express-sslify');
const app = express();
// app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(express.static(__dirname + '/dist/sysops-practice'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/sysops-practice/src/index.html'));});
app.listen(process.env.PORT || 4200);

