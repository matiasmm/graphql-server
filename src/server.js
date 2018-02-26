import express from 'express';
import expressGraphQL from 'express-graphql';
import { buildSchema } from 'graphql';

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log('Listening port ' +  PORT);
});


const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true
}));