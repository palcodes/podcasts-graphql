import gql from 'apollo-server-express'

export const typeDefs = gql`
type Podcast {
    name: String!,
    artist: String!
}

type Query {
    podcasts: [podcast]
}
`