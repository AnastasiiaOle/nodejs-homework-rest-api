const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const { auth: ctrl } = require('../../controllers');
const { authenticate } = require('../../middlewares')

const routerAuth = express.Router();

const tempDir = path.join(process.cwd(), "temp");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    limits: {
        fileSize: 10000
    },
    fileFilter(req, file, cb) {
        if (file.mimetype.includes('image')) {
            cb(null, true)
            return
        }
        cb(null, false)
    },
});

const uploadMiddleware = multer({
    storage
});



routerAuth.post('/register', express.json(), ctrl.register);
routerAuth.post('/login', express.json(), ctrl.login);
routerAuth.post('/logout', authenticate, ctrl.logout);
// routerAuth.get('/current', authenticate, ctrl.getProfile)
// routerAuth.post(
//     '/avatars',
//     authenticate,
//     uploadMiddleware.single('avatar'),
//     ctrl.updateAvatar
// )

// routerAuth.post('/avatar', uploadMiddleware.single("avatar"), (req, res, next) => {
//     console.log(req.file)
// });

routerAuth.post(
    '/avatar',
    uploadMiddleware.single('avatar'),
    ctrl.updateAvatar
)



module.exports = routerAuth;