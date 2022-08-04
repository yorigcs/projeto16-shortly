import connection from '../database/postgressSQL.js'

const getMyUrlsController = async (req, res) => {
  const { myId } = res.locals
  try {
    const query = `
    select u.id as user_id, u.name, u.visit_count, l.id as url_id ,l.short_url ,l.url ,l.views 
    from users u 
    join links l  
    on u.id =l.user_id 
    and u.id = $1`

    const { rows: url } = await connection.query(query, [myId])
    if (!url[0]) {
      return res.sendStatus(404)
    }
    console.log(url)
  } catch (err) {
    return res.sendStatus(500)
  }
}

export default getMyUrlsController
