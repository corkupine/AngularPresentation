
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
    var filePath = path.join(__dirname, '../ui/app/index.html');
    var stat = fileSystem.statSync(filePath);
    
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });
    
    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(res);
};