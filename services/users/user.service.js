const bcrypt = require("bcryptjs");
const db = require("../../helpers/db");
const User = db.User;

module.exports = {
    authenticate,
    create,
    update,
    delete: _delete,
    getById,
};

async function update(id, userParam) {
    const user = await User.findById(id);
  
    // validate
    if (!user) throw "User not found";
    if (
      user.phone !== userParam.phone &&
      (await User.findOne({ phone: userParam.phone }))
    ) {
      throw 'The phone number "' + userParam.phone + '" is already taken';
    }

    if (
        user.email !== userParam.email &&
        (await User.findOne({ email: userParam.email }))
      ) {
        throw 'The Email ID "' + userParam.email + '" is already taken';
      }
  
    // hash password if it was entered
    if (userParam.password) {
      userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }
  
    // copy userParam properties to user
    Object.assign(user, userParam);
  
    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}

async function getById(id) {
    return await User.findById(id).select("-hash");
}

async function authenticate({email,password}) {
    const user = await User.findOne({
        email
    });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const {
            hash,
            ...userWithoutHash
        } = user.toObject();
        return {
            ...userWithoutHash
        };
    }
}

async function create(userParam) {

    // validate
    if (await User.findOne({ email: userParam.email })) {
      throw "The Email " + userParam.email + " is already taken";
    }

    const user = new User(userParam);
    // hash password
    if (userParam.password) {
      user.hash = bcrypt.hashSync(userParam.password, 10);
    }
  
    // save user
    await user.save(); 
}