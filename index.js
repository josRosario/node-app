const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Node Server is running. This is going to be a good server Yay!! 🌟');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
