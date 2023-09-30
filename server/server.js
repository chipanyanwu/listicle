import express from "express"
import "./config/dotenv.js"

import restaurantsRouter from "./routes/restaurants.js"

const PORT = process.env.PORT || 3001
const app = express()

app.use("/public", express.static("./public"))
app.use("/scripts", express.static("./public/scripts"))
app.use("/restaurants", restaurantsRouter)

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1 style="text-align: center; margin-top: 50px;">Listicle API</h1>')
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
