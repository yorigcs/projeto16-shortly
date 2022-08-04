import Joi from 'joi'

const shortenURLSchema = Joi.object({
  url: Joi.string().uri().required()
})

export default shortenURLSchema
