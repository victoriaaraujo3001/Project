const Joi = require("joi");

async function ValidadeUser(req, res, next) {
  try {
    const authSchema = Joi.object({
      login: Joi.string()
        .empty()
        .required()
        .messages({
          "string.empty": `"Login" cannot be empty`,
          "any.required": `"Login" is required`,
        }),
      password: Joi.string().empty().required().messages({
        "string.empty": `"Password" cannot be empty`,
        "any.required": `"Password" is required`,
        }),
    });
    const { error } = authSchema.validate({ abortEarly: false });
    if (error) {
      console.log(error);
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
}

module.exports = ValidadeUser;
