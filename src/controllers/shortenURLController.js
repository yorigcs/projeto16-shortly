import connection from '../database/postgressSQL.js'

const shortenURLController = async (req, res) => {
  const { shortenData } = res.locals
  const query = 'INSERT INTO links(user_id,url,short_url) values($1,$2,$3)'
  const bindParams = [shortenData.userId, shortenData.url, shortenData.shortURL]
  try {
    await connection.query(query, bindParams)
    res.status(201).json({ shortURL: shortenData.shortURL })
  } catch (err) {
    res.status(500).send('Houve um erro interno ao criar a URL')
  }
}
export default shortenURLController
