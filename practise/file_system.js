// Create a Node.js file that reads the HTML file, and return the content


// var http=require('http');
// var fs=require('fs');
// http.createServer(function (req, res) {
//     fs.readFile('demo.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
// }).listen(2999);




//Create a new file using the appendFile() method


// var fs=require('fs');
// fs.appendFile('new file.html' , 'systum h bhai' , function(err){
//     if (err) throw err;
//     console.log('saved');
// });



//Create a new, empty file using the open() method:


// var fs = require('fs');

// fs.open('newfile2.html' , 'w' ,function (err,file){
//     if (err) throw err;
//     console.log('saved!');
// });




//Create a new file using the writeFile() method:

// var fs = require('fs');

// fs.writeFile('newfile2.html' , 'elvish bhaiii' , function (err){
//     if (err) throw err;
//     console.log('saved');
// });






//update file text

// var fs = require('fs');
// fs.appendFile('update.html' , 'ye islie h hum ko update kr slkte h' , function (err){
//     if (err) throw err;
//     console.log('updated');
// })




//write file mtlb hum jo text ko replaced karna cha te h

// var fs = require('fs');
// fs.writeFile('newfile.txt' , 'rom rom bhaiyoo' , function(err)
// {
//     if (err) throw err;
//     console.log('replaced');
// });


//delete file
// var fs = require('fs');

// fs.unlink('delet.html', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });



//rename file

// var fs  = require('fs');
// fs.rename('newfile.txt', 'file.txt' ,function (err){
//     if (err) throw err;
//     console.log('file renamed');
// });