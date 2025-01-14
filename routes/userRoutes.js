const express = require('express');
const { body } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

const validateRegistration = [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

router.post('/register', validateRegistration, registerUser);

router.post('/login', loginUser);

module.exports = router;
