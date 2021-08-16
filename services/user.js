const { User } = require('../model/user')

const getByEmail = async (email) => {

    return await User.findOne({ email });
};

const getById = async (id) => {

    return await User.findOne({ _id: id })
};

const getOne = (filter) => {
    return User.findOne(filter)
}

const add = ({ email, password }) => {
    const newUser = new User({ email })
    newUser.setPassword(password)
    return newUser.save()
}

const updateById = (id, updateInfo) => {
    return User.findByIdAndUpdate(id, updateInfo)
}

module.exports = {
    getByEmail,
    getById,
    getOne,
    add,
    updateById
}
