const node_env = process.env.NODE_ENV || "development";
const config = {
  development: {
    baseUrl: "localhost",
    port: process.env.PORT || 8080,
    uri: 'mongodb+srv://superbenji711:BenjiPrime711@benjicluster-3iz70.mongodb.net/test?retryWrites=true&w=majority'
  },
  production: {
    // port: process.env.
  }
}
module.exports = config[node_env];