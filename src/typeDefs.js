import { gql } from 'apollo-server-express'

export const typeDefs = gql`
type Podcast {
    id: ID!
    name: String!,
    artist: String!
}

type Query {
    podcasts: [podcast]
}
`