import Joi from "joi";

const createTruckDto = Joi.object({
  regNumber: Joi.string().trim().min(2).required(),
  driver: Joi.string().trim().min(2).required(),
  maximumLoad: Joi.number().greater(0).required(),
  destination: Joi.string().trim().min(2).required(),
  // currentCapacity: Joi.number().greater(0).required(),
})

const updateTruckDto = Joi.object({
  destination: Joi.string().trim().min(2).required(),
  currentCapacity: Joi.number().greater(0).required(),
})



export { createTruckDto, updateTruckDto };