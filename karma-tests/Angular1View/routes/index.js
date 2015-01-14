
/*
 * GET home page.
 */
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');
exports.index = function (req, res) {
    //if using jade
    //res.render('index', { title: 'Express' });
    //using static angular index.html
    var filePath = path.join(__dirname, '../ui/app/index.html'),
        stat = fileSystem.statSync(filePath),
        readStream = fileSystem.createReadStream(filePath);
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });
    readStream.pipe(res);
};