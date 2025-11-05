const express = require ('express')
const router = express.Router()


//Import posts controller
const postController = require('../controllers/postController')

//Index (R)
router.get("/",postController.index)

//Show (R)
router.get("/:id",postController.show)

//Store (C)
router.post('/', postController.store)

//Update (U)
router.put('/:id', postController.update)

//Modify (U)
router.patch('/:id', postController.modify)


//Destroy (D)
router.delete('/:id', postController.destroy)

module.exports = router