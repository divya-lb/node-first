const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use((bodyParser.urlencoded({extended: true})))
app.use(bodyParser.json())

var connection = mysql.createConnection({
    host:'173.194.107.65',
    user: 'appup',
    password: 'appup_rocks',
    database: 'ui_contact'
})

connection.connect(function(err){
    if(err) throw err
    console.log('now u r connected with db ....')
})

app.get('/contacts', function(req, res){
    connection.query('select * from contact', function(err, ressults, fields){
        if(err) throw err;
        res.end(JSON.stringify(ressults))

    })
})

app.get('/contacts/:id', function(req, res){
    connection.query('select * from contact where id = ?', [req.params.id],function(err, ressults, fields){
        if(err) throw err;
        res.end(JSON.stringify(ressults))

    })
})

app.post('/contacts', function(req, res){
    var params = req.body;
    console.log(params)
    connection.query('insert into contact set ?', params, function(err, ressults, fields){
        if(err) throw err;
        //console.log(fields)
        res.end(JSON.stringify(ressults.insertId));

    })
})
 
app.put('/contacts', function(req, res){
    connection.query('update contact set first_name=?, last_name=? where id=? ',[req.body.first_name,req.body.last_name, req.body.id], function(err, result, fileds){
        if(err) throw err;
        res.end(JSON.stringify(result))
    })
})

app.delete('/contacts', function(req, res){
    connection.query('delete from contact where id = ?', [req.body.id], function(err, result, fields){
        if(err) throw err;
        res.end(`${req.body.id} has been deleted ${result}`)
    })
})

app.get('/', function(req, res){
    res.render("index")
})

app.get('/index', function(req, res){
    res.render("index")
})

app.post('/',function(req, res){
    res.render('index');
    console.log(req.body)
})

app.listen(3000, function(){
    console.log('App runing on port 3000')
})