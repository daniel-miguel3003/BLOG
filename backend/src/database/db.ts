import { Sequelize } from "sequelize"

const dbName = "blog_db"
const dbUser = "root"
const dbHost = "localhost"
const dbPassword = "123456"

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
  port: 3306,
})
