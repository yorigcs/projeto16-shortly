import Joi from 'joi'

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required()
})

export default signUpSchema
