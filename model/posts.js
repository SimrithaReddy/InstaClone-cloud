const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const postSchema = new mongoose.Schema({
    name:{
        type: String
    },
    location:{
        type:String
    },
    description:{
        type: String
    },
    likes:{
        type:Number,
        default: Math.floor(Math.random()*100)
    },
    date:{
        type: String,
        default: new Date().toLocaleDateString()
    },
    PostImage:{
        type: String
    }
})


const posts = mongoose.model("posts", postSchema);

module.exports = posts;