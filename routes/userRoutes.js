const express = require('express');
const { registerUser, loginUser, addFavorite, getFavorites, deleteFavorite } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/favorites', auth, addFavorite);
router.get('/favorites', auth, getFavorites);
router.delete('/favorites/:id', auth, deleteFavorite);

module.exports = router;
