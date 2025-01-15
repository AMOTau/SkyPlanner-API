const express = require('express');
const { registerUser, loginUser, addFavorite, getFavorites, deleteFavorite, getUserProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/favorites', auth, addFavorite);
router.get('/favorites', auth, getFavorites);
router.delete('/favorites/:id', auth, deleteFavorite);

router.get('/profile', auth, getUserProfile);

module.exports = router;
