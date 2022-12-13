const Joi = require("joi");

async function AddRequestValidation(req, res, next) {
  try {
    const authSchema = Joi.object({
      id_manga: Joi.number().empty().required().messages({
        "string.empty": `"id_manga" cannot be empty`,
        "any.required": `"id_manga" is required`,
      }),
      preco_manga: Joi.number().empty().required().messages({
        "string.empty": `"preco_manga" cannot be empty`,
        "any.required": `"preco_manga" is required`,
      }),
      qtde_unidades: Joi.number().min(1).empty().required().messages({
        "string.empty": `"qtde_unidades" cannot be empty`,
        "any.required": `"qtde_unidades" is required`,
      }),
      total_compra: Joi.number().empty().required().messages({
        "string.empty": `"total_compra" cannot be empty`,
        "any.required": `"total_compra" is required`,
      }),
    });
    const { error } = authSchema.validate(req.body, { abortEarly: false });
    if (error) {
      console.log(error)
      throw Error(error);
    }
    return next();
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
}

module.exports = AddRequestValidation;
