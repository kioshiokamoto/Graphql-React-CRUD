import { gql } from 'apollo-server';

const typeDefs = gql`
	type Todo {
		id: String
		text: String
		completed: Boolean
	}
	type Query {
		todos: [Todo]!
	}
	type Mutation {
		createTodo(text: String!): String
		removeTodo(id: String!): String
	}
`;

export default typeDefs;
