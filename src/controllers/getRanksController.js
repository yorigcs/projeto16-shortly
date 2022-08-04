import connection from '../database/postgressSQL.js'

const getRanksController = async (req, res) => {
  const query = `
  SELECT u.id, u.name, COUNT(l.views) AS "linksCount", COALESCE(SUM(l.views),0) AS "visitCount"
  FROM users u 
  LEFT JOIN 
  links l 
  ON u.id = l.user_id
  GROUP BY u.id 
  ORDER BY "visitCount" DESC 
  LIMIT(10)`

  try {
    const { rows: rank } = await connection.query(query)
    res.send(rank)
  } catch (err) {
    res.sendStatus(500)
  }
}
export default getRanksController
