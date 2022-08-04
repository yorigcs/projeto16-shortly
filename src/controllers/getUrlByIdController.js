import connection from '../database/postgressSQL.js'

const getUrlById = async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    return res.status(422).send('Digite um valor númerico!')
  }
  try {
    const { rows: url } = await connection.query('SELECT * FROM links WHERE id = $1', [id])
    if (!url[0]) {
      return res.sendStatus(404)
    }
    const dataURL = {
      id: url[0].id,
      shortURL: url[0].short_url,
      url: url[0].url
    }
    res.send(dataURL)
  } catch (err) {
    return res.sendStatus(500)
  }
}
export default getUrlById
