import Joi from "joi";

export const AuthDto = Joi.object({
  name: Joi.string().trim().min(2).required(),
  role: Joi.string().trim().min(2).required(),
  email: Joi.string().trim().min(4).required(),
});
