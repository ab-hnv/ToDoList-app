const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
const timeCheck=require(__dirname+"/timeRefresh.js");

const app=express();
let workday="";
let workItems=[];


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=[]; // for the new added item in the text box;

var timeChecc=function (){

let time=timeCheck.timeRefresh();
if(time==="00:00")
items=[];

}


app.get("/", function(req,res){

let day =date.getDate();
timeChecc();
res.render("list", {listTitle:day, newItem:items});


});

app.get("/work", function(req,res){
  
    res.render("list", {listTitle:"work", newItem:workItems});
    
})

app.post("/",function(req,res){
let item=req.body.text;

if(req.body.button==="work")
{workItems.push(item);res.redirect("/work");}
else
{
    if(req.body.delete==="delete")
    items=[];
    else
    items.push(item);

res.redirect("/");}


})



app.listen(process.env.PORT||3000,function(){
    console.log("Server running on port 3000");
});