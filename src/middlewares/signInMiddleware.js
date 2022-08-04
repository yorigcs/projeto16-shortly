import signInSchema from '../schemas/signInSchema.js'

const signInMiddleware = async (req, res, next) => {
  const { email, password } = req.body
  try {
    await signInSchema.validateAsync({ email, password })

    next()
  } catch (err) {
    const { message } = err.details[0]
    console.log(message)
    return res.status(422).send(err)
  }
}

export default signInMiddleware
