import { gql } from 'apollo-server-express'

export const typeDefs = gql`
type Podcast {
    id: ID!
    name: String!,
    description: String!,
    episodes: String!
}

type Query {
    getPodcasts: [Podcast!]!
}

type Mutation {
    createPod(name: String!, description: String!, episodes: String!): Podcast!
}
`