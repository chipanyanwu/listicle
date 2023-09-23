const renderRestaurants = async () => {
  const mainContent = document.getElementById("main-content")

  const response = await fetch("/restaurants")
  const data = await response.json()

  if (data) {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("container", "card-container")

    data.map((restaurant) => {
      const card = document.createElement("article")
      card.classList.add("card")

      // Image
      const cardHeader = document.createElement("header")
      cardHeader.classList.add("card-header")
      cardHeader.style.backgroundImage = `url(${restaurant.imageUrl})`
      cardHeader.style.backgroundSize = "cover"
      cardHeader.style.backgroundRepeat = "no-repeat"
      cardHeader.style.backgroundPosition = "center center"
      cardHeader.style.height = "250px"

      // Details (Name + Address + Description)
      const cardTitles = document.createElement("hgroup")

      const restaurantName = document.createElement("h2")
      restaurantName.textContent = restaurant.name

      const restaurantAddress = document.createElement("h3")
      restaurantAddress.textContent = restaurant.address

      const restaurantDescription = document.createElement("p")
      restaurantDescription.textContent = restaurant.description

      cardTitles.appendChild(restaurantName)
      cardTitles.appendChild(restaurantAddress)

      // Read More Button
      const cardFooter = document.createElement("footer")

      const link = document.createElement("a")
      link.textContent = "Read More >"
      link.setAttribute("role", "button")
      link.href = `/restaurants/${restaurant.id}`

      cardFooter.appendChild(link)

      card.appendChild(cardHeader)
      card.appendChild(cardTitles)
      card.appendChild(restaurantDescription)
      card.appendChild(cardFooter)

      cardContainer.appendChild(card)
    })

    mainContent.appendChild(cardContainer)
  } else {
    const message = document.createElement("h2")
    message.textContent = "No Restaurants Found 🍽️"

    mainContent.appendChild(message)
  }
}

const requestedURL = window.location.href.split("/").pop()
if (requestedURL) {
  window.location.href = "/404.html"
} else {
  renderRestaurants()
}
