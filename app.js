const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        msg: 'Post added succesfully.'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        { id: 'kjhkjh', title: 'Title 1', content: 'content 1..' },
        { id: 'sggdrgd', title: 'Title 2', content: 'content 2' },
        { id: 'kujhkjhk', title: 'Title 3', content: 'content 3' }
    ];

    res.status(200).json({
        msg: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;