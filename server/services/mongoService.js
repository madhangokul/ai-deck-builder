const History = require('../models/historyModel');

const saveHistory = async (data) => {
  const history = new History(data);
  return await history.save();
};

module.exports = { saveHistory };
