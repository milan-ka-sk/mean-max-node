const express = require('express')
const app = express();

app.use('/api/posts', (req, res, next) => {
    const posts = [
        { id: 'kjhkjh', title: 'Title 1', content: 'content 1' },
        { id: 'sggdrgd', title: 'Title 2', content: 'content 2' },
        { id: 'kujhkjhk', title: 'Title 3', content: 'content 3' }
    ];

    res.status(200).json({
        msg: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;