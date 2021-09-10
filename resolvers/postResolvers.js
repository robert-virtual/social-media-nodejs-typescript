const Post = require("../models/Post");

module.exports = {
    Query:{
        async getPosts(){
            try {
              const posts = await Post.find()
              return posts
            } catch (error) {
              throw error
            } 
        }
    },
    Mutation:{
        async createPost (_, { input }){
            try {
              const post = await Post.create(input)
              return post
            } catch (error) {
              throw error
            } 
        }
    }
}