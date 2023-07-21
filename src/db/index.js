const mongoose = require('mongoose');

module.exports = function () {
  return mongoose
    .connect('mongodb://127.0.0.1:27017/hw9', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB ga ulandi.');
    })
    .catch((err) => {
      console.log('DB da xatolik: ', err);
    });
};
