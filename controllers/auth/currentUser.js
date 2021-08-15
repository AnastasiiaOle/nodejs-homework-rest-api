const jwt = require('jsonwebtoken')
require('dotenv')
const { user: servise } = require('../../services')

const currentUser = async (req, res, next) => {

    try {

        if (!req.user) {

            return res.status(409).json({
                status: 'error',
                code: 409,
                message: "Not authorized",
            })
        }
        const id = req.user.id;
        const currentUser = await servise.findById(id);

        return res.status(200).json({
            status: "success",
            code: 200,
            data: {
                email: currentUser.email,
                subscription: currentUser.subscription,
            },
        });
    } catch (error) {
        next(error)
    }
};

module.exports = currentUser