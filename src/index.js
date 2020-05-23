import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
require('dotenv').config();


const startServer = async () => {
	
	const app = express();

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});
	
	server.applyMiddleware({ app });
	
	// replace <process.env.CONNECTION_STRING> with your value here
	await mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	)
}

startServer();

mongoose.connection.once('open', () => console.log('CONNECTED'))