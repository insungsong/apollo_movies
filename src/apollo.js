import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql-master-1f2uccd8v.now.sh/",
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  }
});

export default client;
