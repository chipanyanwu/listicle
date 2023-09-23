const header = document.querySelector("header")

const headerContainer = document.createElement("div")
headerContainer.classList.add("container", "header-container")

// Logo + Title
const headerLeft = document.createElement("div")
headerLeft.className = "header-left"

const headerLogo = document.createElement("img")
headerLogo.classList.add("header-logo")
headerLogo.src = "/logo.svg"

const headerTitle = document.createElement("h1")
headerTitle.textContent = "CampusEats"

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

// Home Button
const headerRight = document.createElement("div")
headerRight.className = "header-right"

const headerButton = document.createElement("button")
headerButton.textContent = "Home"

headerButton.addEventListener("click", (e) => {
  window.location = "/"
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.append(headerContainer)
