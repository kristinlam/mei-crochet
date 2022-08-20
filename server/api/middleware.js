const {
  models: { User },
} = require('../db');

const requireToken = async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  if (!req.user.admin) {
    return res.status(403).send("You don't have permission to view this page.");
  } else {
    next();
  }
};

module.exports = { requireToken, isAdmin };
