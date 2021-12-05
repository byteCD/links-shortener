const ErrorService = require("./ErrorService");
const { validationResult } = require("express-validator");
const { body } = require("express-validator");

class ValidationService {
  checkErrors(req) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new ErrorService(400, errors.array()[0].msg);
    }
  }

  linkValidation() {
    return [
      body("link")
        .isURL({ protocols: ["http", "https"] })
        .withMessage("Некорректная ссылка"),
    ];
  }
}

module.exports = new ValidationService();
