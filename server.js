const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const app = express();

// allow cors origin
app.use(cors());
// app.get('/', (req, res) => {
//   res.send(
//     '<a href="/graphql"><h1>Welcome to GraphQL-Apollo Go to GraphiQL interface</h1></a>'
//   );
// });
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
