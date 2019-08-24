/*Defining variables and assigning them the required libraries needed to run the application */
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


// Setting the app to use the different libraries
app.use(morgan("short"));
app.use(parser.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(session({
  // This helps to not expose one's information to another person
  secret: 'secret',
  // This keeps saving sessions and can tell how many times someone has logged into the system
  resave: true,
  // This listens and saves even sessions that are not successfully logged in.
  saveUninitialized: true
}));

// Route to fetch the index page
app.get('/', function (req, res) {
  res.sendfile(html_dir + 'index.html');
});

// Route to fetch the register page
app.get('/register', (req, res) => {
  res.sendfile(html_dir + 'register.html');
});

// Route to fetch the login page
app.get('/login', (req, res) => {
  res.sendfile(html_dir + 'login.html');
});

// Route to fetch the home page
app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    // Response/ message that one sees when they have successfully logged in
    res.send('Welcome back, ' + req.session.username + '!');
  } else {
    // Response/ message that one sees when they want to access the home page
    // but have not successfully logged in
    res.send('Please login to view this page!')
  }
  // Ending of session
  res.end();
});

// Creating connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'registration',
  password: 'Sweetmom1844.'
});

// Message to show connection status
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// Route to capture and post data using the registration form
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
    //Hashing/encrypting the password entered at signup
    hash: crypto.createHash('md5').update(req.body.password).digest('hex')
  };

  //Inserting data into the database 
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

  //Printing out the object in a json format
  console.log("All the form inputs are" + JSON.stringify(object));
  //Redirecting the user to the login page after registering
  res.redirect('/login')
  //Ending the session
  res.end();
});

//Route to post login data
app.post("/auth", (req, res) => {

  // Requesting the username and password and assigning them to variables
  // usernam and passw respectively
  var usernam = req.body.username;
  var passw = req.body.password;

  //Hashing or encrypting the password as it is being typed at login
  var hash = crypto.createHash('md5').update(req.body.password).digest('hex')

  //Defining a varible querrystring to store the sql query 
  // 'SELECT * FROM register WHERE name =? AND pass=?'
  let querrystring = 'SELECT * FROM register WHERE name =? AND pass=?'

  //Condition to loop through users to find that with the specified username and password
  if (usernam && passw) {
    //Creating a query on the database 
    connection.query(querrystring, [usernam, hash], (error, results, fields) => {
      // Condition to loop through users to find one with the specified username and password
      if (results.length > 0) {
        //In case one has logged in
        req.session.loggedin = true;
        //Request the username
        req.session.username = usernam;
        //Redirect to the home page
        res.redirect('/home')
        //Statement executed only if the user has not provided the right credentials
      } else {
        res.send('incorrect username and /or password')
      }
      //Ending session
      res.end();
    });
    //Statement executed if the user has not entered a username and/password
  } else {
    res.send('please enter username and password')
    //Ending session
    res.end();
  }
  //Printing the username and hashed password to the console
  console.log('captured ' + usernam + " " + hash)

});

// Port at which the app is running
app.listen(3002);

//Printing a message to the console to show on which port the app is running
console.log("App running at Port 3002");