import todoResolvers from './todo.js'
const resolvers = {
    Query:{
        ...todoResolvers.Query
    },
    Mutation:{
        ...todoResolvers.Mutation
    }


}

export default resolvers;