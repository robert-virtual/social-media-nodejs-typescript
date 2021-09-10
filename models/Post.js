const { Schema,model } = require('./db')

const postSchema = new Schema({
    body:String,
    username:String,
    createdAt:{
        type:String,
        default:new Date().toLocaleDateString()
    },
    commets:[{
        body:String,
        username:String,
        createAt: String,
    }],
    likes:[{
        username:String,
        createAt: String,
    }],
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})
const Post = model('Post',postSchema)

module.exports = Post
