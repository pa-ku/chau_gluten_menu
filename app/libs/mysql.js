import mysql from 'serverless-mysql'

export const mysqlConn = mysql({
  config: {
    host: 'localhost',
    user: 'root',
    password: 'pakudev',
    port: 3306,
    database: 'menu_items',
  },
})
