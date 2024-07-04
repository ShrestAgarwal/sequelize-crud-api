const User = require('../models/User');

// Service to create a new user
exports.createUser = async (payload) => {
  const { username, password } = payload;
  return await User.create({ username, password });
};

// Service to get all users
exports.getAllUsers = async () => {
  return await User.findAll();
};

// Service to get a user by ID (UUID)
exports.getUserById = async (id) => {
  return await User.findByPk(id);
};

// Service to update a user by ID (UUID)
exports.updateUser = async (payload) => {
  const user = await User.findByPk(payload.id);
  if (user) {
    if (payload.userData.username) {
      user.username = payload.userData.username;
      await user.save({ fields: ['username'] });
    }
    if (payload.password) {
      user.password = payload.userData.password;
      await user.save({ fields: ['password'] });
    }
    return user;
  }
  return null;
};

// Service to delete a user by ID (UUID)
exports.deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};
