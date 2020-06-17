import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import mongoose from "mongoose";
import path from "path";

const PORT = 8000;

const app = express();

mongoose.connect('mongodb://devon:devon123@ds147821.mlab.com:47821/graphql-free-code-camp');
mongoose.connection.once('open', () => {
    console.log('connected to mlab');
});

app.use('/api/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});