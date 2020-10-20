var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();

// App Config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});
var Blog = mongoose.model("Blog", blogSchema);
Blog.create({
    title: "Test Blog",
    image: "https://i.imgur.com/OC0bwphb.jpg",
    body: "Hello, this is a blog post"
});

// RESTful Routes 



// Start the Server
app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("SERVER IS RUNNING!");
});