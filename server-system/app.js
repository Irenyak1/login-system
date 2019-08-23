/*Defining variables and assigning them the required libraries, hte  */
const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const crypto = require("crypto");
const mysql = require("mysql");
const session = require("express-session");

//Creating an app using the express module
const app = express();
// Creating a  variable html_dir that stores the path to the folder with static files
var html_dir = './public/';

app.use(morgan("short"));
app.use(parser.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(session({
  secret: 'secret',// Don't expose this information to another person
  resave: true,// keeps saving sessions and can tell how many times someone has logged into the system
  saveUninitialized: true // listens and saves even sessions that are not successfully logged in.
}));


app.get('/', function (req, res) {
  res.sendfile(html_dir + 'index.html');
});

app.get('/register', (req, res) => {
  res.sendfile(html_dir + 'register.html');
});

app.get('/login', (req, res) => {
  res.sendfile(html_dir + 'login.html');
});

app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.send('Welcome back, ' + req.session.username + '!');
  } else {
    res.send('Please login to view this page!')
  }
  res.end();
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'registration',
  password: 'Sweetmom1844.'
});

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

app.post("/userdetails", (req, res) => {
  let object = {
    userid: req.body.userId,
    password: req.body.password,
    name: req.body.nam,
    address: req.body.address,
    country: req.body.myselect,
    zip: req.body.zipcode,
    mail: req.body.email,
    gender: req.body.myRadios,
    language: req.body.myChecks,
    about: req.body.notes,
    hash:crypto.createHash('md5').update(req.body.password).digest('hex')
  };

  const querrystring = "INSERT INTO register(userid,pass,name,address,country,zip,email,gender,lang,about) VALUES(?,?,?,?,?,?,?,?,?,?)";
  connection.query(querrystring,
    [
      object.userid,
      object.hash,
      object.name,
      object.address,
      object.country,
      object.zip,
      object.mail,
      object.gender,
      object.language,
      object.about
    ]);

  console.log("All the form inputs are" + JSON.stringify(object));
  res.redirect('/login')
  res.end();
});


app.post("/auth", (req, res) => {

  var usernam = req.body.username;
  var passw = req.body.password;

  var hash = crypto.createHash('md5').update(req.body.password).digest('hex')
  
  let querrystring = 'SELECT * FROM register WHERE name =? AND pass=?'

  if (usernam && passw) {
    // connection.query('SELECT * FROM register WHERE name =? AND pass=?', [usernam, passw], (error, results,fields)=>{ // this is a direct querry.
    connection.query(querrystring, [usernam, hash], (error, results, fields) => {
      if (results.length > 0) { /* you can also use if(results) or use if(results.length !== 0)*/
        req.session.loggedin = true;
        req.session.username = usernam;
        res.redirect('/home')
      } else {
        res.send('incorrect username and /or password')
      }
      res.end(); // this can not be put inside the above else because it will terminate the session
    });

  } else {
    res.send('please enter username and password')
    res.end();
  }// res.end(); can also be put after this brace
  console.log('captured ' + usernam + " " + hash)

});

app.listen(3002);

console.log("App running at Port 3002");