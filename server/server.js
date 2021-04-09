import { ApolloServer } from 'apollo-server';
import cors from 'cors';

import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';


const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server
	.listen({ port: 5000 })
	.then((res) => console.log(`Server running at ${res.url}`))
	.catch((e) => console.log(`Error: `, e));
