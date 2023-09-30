const renderRestaurant = async () => {
  const requestedId = parseInt(window.location.href.split("/").pop())

  const response = await fetch("/restaurants")
  const data = await response.json()

  const restaurantContent = document.getElementById("restaurant-content")

  const restaurant = data.find((restaurant) => restaurant.id === requestedId)
  if (restaurant) {
    const image = document.getElementById("image")
    const name = document.getElementById("name")
    const address = document.getElementById("address")
    const description = document.getElementById("description")

    image.src = restaurant.image
    name.textContent = restaurant.name
    address.textContent = restaurant.address
    description.textContent = restaurant.description

    document.title = `CampusEats - ${restaurant.name}`

    console.log("Here")
  } else {
    const message = document.createElement("h2")
    message.textContent = "Could Not Find Restaurant 🍽️"

    restaurantContent.appendChild(message)
    console.log(data)
  }
}

renderRestaurant()
