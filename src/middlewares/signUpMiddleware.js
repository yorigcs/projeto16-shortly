import signUpSchema from '../schemas/signUpSchema.js'

const signUpMiddleware = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body
  try {
    await signUpSchema.validateAsync({ name, email, password, confirmPassword })
    if (password !== confirmPassword) {
      return res.status(422).send('As senhas não conferem')
    }
    next()
  } catch (err) {
    const { message } = err.details[0]
    console.log(message)
    return res.status(422).send(err)
  }
}

export default signUpMiddleware
