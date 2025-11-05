function notFoundError(req, res, next){
    res.status(404)
        .json({
            error:true,
            message: "endpoint not found"
        })
}

module.exports = notFoundError