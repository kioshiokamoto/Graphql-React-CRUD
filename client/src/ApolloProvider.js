import App from './App';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from "@apollo/react-hooks";


const httpLink = createHttpLink({
    uri: 'http://localhost:5000',
})
const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache(),
})

export default (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
