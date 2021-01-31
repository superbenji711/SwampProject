const node_env = process.env.NODE_ENV || "development";
const config = {
  development: {
    baseUrl: "localhost",
    port: process.env.PORT || 8080,
    uri: 'mongodb+srv://AlvinGator:epicer34ii23@swamphacksrecipe.aldkz.mongodb.net/testing?retryWrites=true&w=majority'
  },
  production: {
    // port: process.env.
  }
}
module.exports = config[node_env];