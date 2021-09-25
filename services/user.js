const { User } = require('../models');
const bcrypt = require('bcryptjs');

/*
email: '', 
*/
const getById = (id) => User.findById(id);

const getOne = (filter) => {
    return User.findOne(filter);
}

const add = ({ email, password }) => {
    const newUser = new User({ email });
    newUser.setPassword(password);
    return newUser.save();
    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // return User.create({ email, password:hashPassword });
}

const udateById = (id, updateInfo) => {
    return User.findByIdAndUpdate(id, updateInfo)
}

module.exports = {
    getOne,
    add,
    getById,
    udateById
}
// const { model } = require('mongoose');
// const { userSchema } = require('./userSchema');

// const User = model('user', userSchema);

// module.exports = User;