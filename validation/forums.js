const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'A name for your forum is required!';
  }
  //validation to make sure we're not making a forum with the name of an existing forum is in the api call

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}