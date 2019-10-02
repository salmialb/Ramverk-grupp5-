const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen(8081,function() {
	var host = server.address().address
	var port = server.address().port
	
	console.log("Example app listening att http://%s:%s", host, port)

})

app.post('/update', update)
app.get('/data', function(req, res){
	const courses = fs.readFileSync('./app/data.json');
	res.send(JSON.parse(courses));
})
app.get('/:pageName', visitPage)




function visitPage(req, res) {
	let pageFile = getPageFile(req, res);
	if(pageFile) res.sendFile(pageFile);
	else sendError(req, res, 404);
}

function getPageFile(req, res) {
	let pageName = req.params.pageName.toLowerCase();
	let lang = req.query.lang;
	let file = pageName;
	
	return path.join(__dirname,'website',file);
}

function update(req, res){
	var data = JSON.stringify(req.body);
	fs.writeFile(__dirname+"/data.json", data, function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
	}); 
	
}
