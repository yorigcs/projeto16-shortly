import connection from '../database/postgressSQL.js'

const goToShortUrlController = async (req, res) => {
  const { shortUrl } = req.params
  try {
    const query = `
    SELECT l.views, l.url
    FROM links l 
    JOIN users u 
    ON l.user_id = u.id 
    AND l.short_url = $1`

    const { rows: url } = await connection.query(query, [shortUrl])
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
