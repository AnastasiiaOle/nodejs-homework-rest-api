const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const { user: service } = require('../services')

const settings = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
};

const jwtStrategy = new Strategy(settings, async (payload, done) => {
    try {
        const user = await service.getById(payload.id);
        if (!user) {
            throw new Error('Not found');
        }
        done(null, user);
    }
    catch (error) {
        done(error)
    }

    done(null, payload)
});

//req, settings = Strategy

/*1 извлекает токен из запроса 
2 рассшивровывает его с помощью ключа 
3 если токен поддельный - (рассшифровка неудачна) - отправляет отчет с 401 кодом и словом Unautorized
4 если токен валиден(успешно рассшифрован) - передает управления колбеку который указан вторым аргументом
5 извлекаем пользователя с _id === payload.id из базы
*/
passport.use('jwt', jwtStrategy)