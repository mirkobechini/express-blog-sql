//Import posts data
const posts = require('../data/posts')

//Import connection
const connection = require('../data/connections')

function index(req, res) {
    let filtered_posts = posts
    if (req.query.tag) {
        filtered_posts = posts.filter(post => post.tag.includes(req.query.tag))
    }

    res.status(200)
    .json({
        filtered_posts
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

    const post_id = parseInt(req.params.id)

    const post = posts.find(post => post.id == post_id)

    if (!post) {
        res.status(404)
        .json({
            error: true,
            message: "Post not found"
        })
    }

    posts.splice(posts.indexOf(post), 1)
    console.log(posts);
    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}