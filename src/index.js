import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'


const startServer = async () => {
	
	const app = express()

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});
	
	server.applyMiddleware({ app });
	
	// replace <connection-string> with your value here

	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	)
}

startServer();

mongoose.connection.once('open', () => console.log('CONNECTED'))