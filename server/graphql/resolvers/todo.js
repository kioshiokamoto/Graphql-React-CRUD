let todos = [
	{
		id: 0,
		text: 'Hello from GraphQL',
		completed: false,
	},
];


const Querys = {
	Query: {
		todos: () => todos,
	},
	Mutation: {
		createTodo: (parent, args, context, info) => {
			return todos.push({
				id: Date.now().toString(),
				text: args.text,
				completed: false,
			});
		},
		removeTodo: (parent, args, context, info) => {
			for (let i in todos) {
				if (todos[i].id === args.id) {
					todos.splice(i, 1);
				}
			}
			return args.id;
		},
	},
};

export default Querys;