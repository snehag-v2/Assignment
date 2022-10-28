// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 5000;

// app.set('view engine' , 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + "/public"));

// let items = [];

// app.get('/',function(req,res){
//     // let today = Date();
//     // res.render("index", {tasktime: today, newListItems: items});
//     res.render('index',{newListItems:items});
//     app.post('/',function(req,res){
//         let item = req.body.taskName;
//         items.push(item);
//         res.redirect('/');
//     });

//     app.post('/',function(req,res){
//         if(req.body.delete);
//             items.pop();
//         res.redirect('/');
//     })
// })


// app.listen(port,function(){
//     console.log(`Listening to server:${port}`);
// });

// session .........................

const express = require("express")
const session = require('express-session')
const app = express()
    

var PORT = process.env.port || 5000
   

app.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true
}))
   
app.get("/", function(req, res){
    req.session.name = 'sneha'
    return res.send("Session Set")
})
   
app.get("/session", function(req, res){   
    var name = req.session.name
    return res.send(name)
    //  req.session.destroy(function(error){
    //     console.log("Session Destroyed")
    // })
})
    
app.listen(PORT, function(error){
    if(error) throw error
    console.log("Server created Successfully on PORT :", PORT)
})

// session


const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use(session({
        secret: 'Your_Secret_Key',
        resave: false,
        saveUninitialized: true
}))

app.use('/',function(req,res,next){
    if(!req.session.items){
        req.session.items = []
    }
    next()
})
// let items = [];

app.get('/',function(req,res,next){
    // let today = Date();
    // res.render("index", {tasktime: today, newListItems: items});
    res.render('index',{newListItems:req.session.items});
})
app.post('/',function(req,res){
        let item = req.body.taskName;
        req.session.items.push(item);
        res.redirect('/');
})

    // app.post('/',function(req,res){
    //     if(req.body.delete);
    //         items.pop();
    //     res.redirect('/');
    // })


app.listen(port,function(){
    console.log(`Listening to server:${port}`);
});

