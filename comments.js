// Create web server
// ----------------

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const commentsCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');

// Create routes
router.post('/:postId', auth, commentsCtrl.createComment);
router.get('/:postId', auth, commentsCtrl.getAllComments);
router.delete('/:commentId', auth, commentsCtrl.deleteComment);

// Export routes
module.exports = router;