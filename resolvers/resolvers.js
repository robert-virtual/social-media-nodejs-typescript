const postResolvers = require('./postResolvers')
const userResolvers = require('./userResolvers')
const resolvers = {
  // queries
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query
  },
  // mutaciones
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation
  },
};

module.exports = resolvers;
