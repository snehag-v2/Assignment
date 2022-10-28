const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/',function(req,res,next){

    res.render('index',{ date : req.session.date , newListItems : req.session.items });
})

app.post('/addtask/',function(req,res){

        // req.session.items.push(item);
        // req.session.date.push(new Date().toLocaleString());
    const taskobj = {
        taskname : req.body.taskName,
        date : new Date().toLocaleString(),
        del: req.body.remove
    }
    req.session.items.push(taskobj);

    res.redirect('/');
})

app.post('/removetask/:taskname',function(req,res){
    let del = req.body.remove;
    let {taskname} = req.params;
    console.log('del',taskname);
    req.session.items.splice((del),1);
    // req.session.items.splice(items[i],1);s
    res.redirect('/');
})

app.listen(port,function(){
    console.log(`Listening to server:${port}`);
});
