// import Blogs from "models/blogs.js";
const Blogs = require("./models/blogs.js");
const express = require("express");
const cors = require("cors");
const mongo = require("mongoose");
const User=require("./models/users.js");
const Msg=require("./models/msg.js")

app=express();
app.use(cors());
app.use(express.json());

// const mongo=mongodb();

mongo.connect("mongodb://localhost:27017/finalproject").then(console.log("Database connected"));

app.get("/allblogs", async (req, res, next)=>{
	const blogs= await Blogs.find();
	res.json(blogs);
});

app.get("/blog/:slug", async (req, res, next)=>{
	const id=req.params.slug;
	const blog= await Blogs.find({"_id":id});
	console.log(`Get request for blog id: ${id}`)
	res.json(blog);
});

app.post("/login", async (req, res, next)=>{

	
	const {Email, Password}=req.body;
	console.log(`Request with ${Email} ${Password}`)
	user=await User.find({"Email":Email, "Password": Password})
	console.log(user);


	if (user.length==1){
		res.json(user)
		console.log("Correct Credentials");
	}
	else{
		console.log("Incorrect")
	}

});

app.post("/uploadPost", async (req, res, next)=>{
	const {Heading, Subheading, Article, PosterName, PosterId}=req.body;
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1; 
	const day = currentDate.getDate();
	const date=`${day}-${month}-${year}`;
	const img="technology.png";
	console.log("Upload Post request")

	const blog= await Blogs.create({
		Heading: Heading,
		Subheading:Subheading,
		Date: date,
		PosterName:PosterName,
		PosterId:PosterId,
		Article: Article,
		Image: img
	}).then(res.send("Your post has been successfully uploaded"));
})

app.post("/sendmsg", async (req, res, next) => {
	const {Name, Email, Phone, msg}=req.body;
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1; 
	const day = currentDate.getDate();
	const date=`${day}-${month}-${year}`;
	console.log(`Name: ${Name}, Email: ${Email}, Msg: ${msg}`);
	const mymsg=Msg.create({
		Name: Name,
		Email: Email,
		Phone: Phone,
		Msg:msg,
		Date:date,
	})
	res.send("Your message has been recieved. Thanks!")
})


app.get("/getmessages", async (req, res, next) => {
	const msg=await Msg.find();
	console.log(`Request on getmessages route.`)
	res.json(msg);
})

console.log("Server is listening at 4444 port");
app.listen(4444)
