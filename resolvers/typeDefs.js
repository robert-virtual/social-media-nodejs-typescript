const { gql } = require("apollo-server-core");

const typeDefs = gql`
  # Queries
  type Query {
    hello: String!
    getUsers:[User!]!
    getPosts:[Post!]!
  }

  # Mutaciones
  type Mutation {
      register(input:UserInput):registerRes
      login(input:loginData):LoginRes!
      createPost(input:postInput):Post!
      deleteNullUsers:[User!]!
  }
  # tipos
  type registerRes {
    user:User! 
    token:String!
  }

  type LoginRes {
    match:Boolean!
    token:String!
  }
  type User{
    id:String!
    username:String
    # password:String
    email:String
    createAt:String
  }
  type Post {
    id: ID!
    body:String!
    username:String!
    createdAt:String!
  }
  # inputs
  input postInput {
    body:String!
    username:String!
  }

  input UserInput{
    username:String!
    email:String!
    password:String!
  }
  input loginData{
    email:String!
    password:String!
  }
  

`;

module.exports = typeDefs;
