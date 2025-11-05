//Import posts data
const posts = require('../data/posts')

//Import connection
const connection = require('../data/connections')

function index(req, res) {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message })
        console.log(result);

        res.status(200).json(result);
    })
}

function show(req, res) {

    const post_id = parseInt(req.params.id)
    const post = posts.find(post => post.id == post_id)
    if (!post) {
        res.status(404)
            .json({
                error: true,
                message: "Post not found"
            })
    }

    res.status(200)
        .json({
            post
        })

}

function store(req, res) {

    const newId = posts[posts.length - 1].id + 1

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag
    }

    posts.push(newPost)
    res.status(201)
        .json(newPost)
}

function update(req, res) {
    const post_id = parseInt(req.params.id)
    const post = posts.find(post => post.id == post_id)

    if (!post) {
        res.status(404)
            .json({
                error: true,
                message: "Post not found"
            })
    }

    const { title, content, tag } = req.body
    post.title = title
    post.content = content
    post.tag = tag

    res.status(204)
        .json(post)
}

function modify(req, res) {
    res.send("Partial update the single post with ID:" + req.params.id)
}


function destroy(req, res) {

    const sql = 'DELETE FROM posts WHERE id = ?';

    const id = req.params.id

    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message })
        if (result.affectedRows === 0) return res.status(404).json({ error: "Post non trovato" })

        res.status(204).end()
    })

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}