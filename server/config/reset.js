import "./dotenv.js"
import { pool } from "./database.js"
import restaurantData from "../data/restaurants.js"

const createRestaurantsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS restaurants;

    CREATE TABLE IF NOT EXISTS restaurants (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL
    )
  `

  try {
    const res = await pool.query(createTableQuery)
    console.log("🎉 restaurants table created successfully")
  } catch (err) {
    console.error("⚠️ error creating restaurants table", err)
  }
}

const seedRestaurantsTable = async () => {
  await createRestaurantsTable()

  restaurantData.forEach((restaurant) => {
    const insertQuery = {
      text: "INSERT INTO restaurants (name, address, description, image) VALUES ($1, $2, $3, $4)",
    }

    const values = [
      restaurant.name,
      restaurant.address,
      restaurant.description,
      restaurant.image,
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting restaurant", err)
        return
      }

      console.log(`✅ ${restaurant.name} added successfully`)
    })
  })
}

seedRestaurantsTable()
