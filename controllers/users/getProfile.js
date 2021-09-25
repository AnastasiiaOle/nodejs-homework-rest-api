const jwt = require('jsonwebtoken');
require('dotenv').config()

/*
/profile

1. Извлечь токен из заголовка Authorization
2 Проверить его на валидность 
3 Если все ок - найти в базе польщователя с нужным id  и отправить часть его данных в ответ
4 Если нет  - отправить статус 401(токен не верный) 
*/

const getProfile = async (req, res, next) => {

    const userProfile = {
        email: req.user.email,
        _id: req.user._id
    };
    res.json({
        status: "success",
        code: 200,
        data: {
            result: userProfile
        }
    })
};

module.exports = getProfile;