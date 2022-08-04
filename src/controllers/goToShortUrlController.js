import connection from '../database/postgressSQL.js'

const goToShortUrlController = async (req, res) => {
  const { shortUrl } = req.params
  try {
    const { rows: url } = await connection.query('SELECT * FROM links WHERE short_url =$1', [shortUrl])
    if (!url[0]) {
      return res.sendStatus(404)
    }
    const views = url[0].views + 1
    await connection.query('UPDATE links SET views = $1 WHERE short_url =$2', [views, shortUrl])
    res.redirect(url[0].url)
  } catch (err) {
    return res.sendStatus(500)
  }
}

export default goToShortUrlController
