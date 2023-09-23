const renderRestaurants = async () => {
  const mainContent = document.getElementById("main-content")

  const response = await fetch("/restaurants")
  const data = await response.json()

  if (false) {
  } else {
    const message = document.createElement("h2")
    message.textContent = "No Restaurants Found 🍽️"

    mainContent.appendChild(message)
  }
}

renderRestaurants()
