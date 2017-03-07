const admins = require('../data/admin');

module.exports = {
  postMatchingAdmin: postMatchingAdmin,
  logoutAdmin: logoutAdmin,
  getCurrentAdmin: getCurrentAdmin
};

function postMatchingAdmin(req, res) {
  const admin = req.body;
  for (let i = 0; i < admins.admin.length; i++) {
    if (admin.name === admins.admin[i].name) {
      if (admin.password === admins.admin[i].password) {
        req.session.admin = admins.admin[i];
      }
    }
  }
  res.status(200).send(req.session.admin);
}

function logoutAdmin(req, res) {
  req.session.admin = null;
  console.log('LOGGING OUT');
  console.log(req.session);
  res.status(200).send('LOGGED OUT');
}

function getCurrentAdmin(req, res) {
  res.status(200).send(req.session.admin);
}
