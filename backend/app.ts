import express from "express"
import bodyParser from "body-parser"
import { routes } from "./src/http/routes"
import { sequelize } from "./src/database/db"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

sequelize.sync()

app.listen(3000, () => console.log("Server running at localhist:3000"))
