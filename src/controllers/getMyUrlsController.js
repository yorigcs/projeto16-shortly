import connection from '../database/postgressSQL.js'

const getMyUrlsController = async (req, res) => {
  const { myId } = res.locals
  try {
    let query = `
    SELECT u.id, u.name, SUM(l.views) AS "visitCount"
    FROM users u 
    JOIN links l  
    ON u.id = l.user_id 
    AND u.id = $1
    GROUP by u.id`

    const { rows: user } = await connection.query(query, [myId])
    if (!user[0]) {
      return res.sendStatus(404)
    }
    query = `
    SELECT l.id, l.short_url as "shortUrl" ,l.url ,l.views as "visitCount"
    FROM links l where l.user_id = $1
    `
    const { rows: shortenedUrls } = await connection.query(query, [myId])

    const userInfo = user[0]
    const userData = {
      id: userInfo.id,
      name: userInfo.name,
      visitCount: userInfo.visitCount,
      shortenedUrls
    }

    res.send(userData)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

export default getMyUrlsController
