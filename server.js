const bodyParser = require ('body-parser')
const express = require ('express')
const db = require('./db')

// set port
const port = process.env.PORT || 9000
const app = express()

// load types and resolvers
const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql', {encoding: 'utf-8'})
const resolvers = require('./resolvers')

// create executable graphql schema by passing types and resolvers
const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs, resolvers})

// 
app.use(bodyParser.json())

// mapping the endpoint
const {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
app.use('/graphql', graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({endpointURL:'/graphql'}))

// as the server is up print a msg
app.listen(
    port, ()=> console.info(
        `server started on port ${port}`
    )
)

