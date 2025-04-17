const express = require('express');

// router class
const router = express.Router();

// importing posts array
const posts = require('../posts');

// get all posts
router.get('/', (req, res) => {
    res.send(posts);
});

// get post by id
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`post con id ${postId}`);
});

// create a new post
router.post('/', (req, res) => {
    res.send(`Creazione nuovo post`);
});

// update post by id
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} aggiornato`);
});

// modify post by id
router.patch('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} modificato`);
});

// delete post by id
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} eliminato`);
});

// export the router
module.exports = router;
