const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
const { validate, registerValidation, loginValidation } = require('../middleware/validation');

router.post('/register', validate(registerValidation), authController.register);
router.post('/login', validate(loginValidation), authController.login);
router.post('/reset-password', authController.resetPassword);

module.exports = router;