import connection from '../database/postgressSQL.js'

const deleteUrlController = async (req, res) => {
  const { deleteShortenData } = res.locals
  try {
    const { rows: url } = await connection.query('SELECT * FROM links where id= $1', [deleteShortenData.urlId])
    if (!url[0]) {
      return res.sendStatus(404)
    }
    if (url[0].user_id !== deleteShortenData.userId) {
      return res.sendStatus(401)
    }
    await connection.query('DELETE FROM links where id= $1', [deleteShortenData.urlId])
    res.sendStatus(204)
  } catch (err) {
    res.sendStatus(500)
  }
}
export default deleteUrlController
