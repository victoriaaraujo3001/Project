const Joi = require("joi");

async function ValidadeRegistration(req, res, next) {
  try {
    const authSchema = Joi.object({
      login: Joi.string().empty().required().messages({
        "string.empty": `"Login" cannot be empty`,
        "any.required": `"Login" is required`,
      }),
      email: Joi.string().email().empty().required().messages({
        "string.empty": `"Email" cannot by empty`,
        "any.required": `"Email" is required`,
        "string.email": `"Email" is not valid`
      }),
      password: Joi.string().min(4).max(10).empty().required().messages({
        "string.empty": `"Password" cannot be empty`,
        "any.required": `"Password" is required`,
      }),
    });
    const { error } = authSchema.validate(req.body, { abortEarly: false });
    if (error) {
      throw Error(error);
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
}

module.exports = ValidadeRegistration;
