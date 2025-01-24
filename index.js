const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Node Server is running. Nodejs is the best of best of all the time Yay!! 🌟');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
