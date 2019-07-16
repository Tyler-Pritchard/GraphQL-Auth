const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID
} = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyfield: {
      type: GraphQLID
    }
  }
});

module.exports = RootQueryType;