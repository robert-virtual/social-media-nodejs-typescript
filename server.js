require('dotenv').config()
const { 
    ApolloServer 
} = require("apollo-server");
const resolvers = require("./resolvers/resolvers");
const typeDefs = require("./resolvers/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({port:8000}).then(({url})=>{
    console.log(`server running on ${url}`);
})

