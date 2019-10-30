const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

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