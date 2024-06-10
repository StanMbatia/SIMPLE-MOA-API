import Joi from "joi";

export const BagDto = Joi.object({
  destination: Joi.string().trim().min(2).required(),
  weight: Joi.number().greater(0).required(),
  units: Joi.string().required(),
  truckId: Joi.string().required(),
})

export default BagDto;