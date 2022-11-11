
// The GraphQL schema
export const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
export const resolvers = {
  Query: {
    hello: () => 'world',
  },
};