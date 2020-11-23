const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.post = validText(data.post) ? data.post : '';

    // if (!Validator.isLength(data.post, { min: 5, max: 140 })) {
    //     errors.post = 'Post must be between 5 and 140 characters';
    // }

    if (Validator.isEmpty(data.post)) {
        errors.post = 'Post field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};