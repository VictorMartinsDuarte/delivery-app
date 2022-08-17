const express = require('express');
const { CreateByAdmin } = require('../controller/UserController');
const { validateJWT } = require('../auth/jwt');
const { createByAdminValidation } = require('../middwares/validateUser');

const router = express.Router();

router.post('/', validateJWT, createByAdminValidation, CreateByAdmin);

module.exports = router;
