import express from 'express';
import expressGraphQL from 'express-graphql';

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log('Listening port ' +  PORT);
});

app.use('/graphql', expressGraphQL({}));