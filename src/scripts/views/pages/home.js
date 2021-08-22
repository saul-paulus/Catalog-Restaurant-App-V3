/* eslint-disable no-console */
import KatalogRestaurantSource from '../../data/katalogRestApi-source'

const { createHeader, createListKatalog } = require('../template-creator')

const Home = {
  async render () {
    return `
    <!-- membuat header -->
    <header class="header">
        <div class="containt-header" id="containt-header">
        </div>
    </header>
    <!-- AKhir membuat header -->
      <main class="main-content">
        <div class="main-title">
          <h1>Explore Our Best Restaurant</h1>
          <span></span>
        </div>
        <div class="containt-card" id="containt-card">
        </div>
      </main>
    `
  },
  async afterRender () {
    const katalogRestaurants = await KatalogRestaurantSource.listKatalogRestaurant()

    const containHeader = document.querySelector('#containt-header')
    const containtCard = document.querySelector('#containt-card')

    katalogRestaurants.forEach((katalogRestaurant) => {
      containtCard.innerHTML += createListKatalog(katalogRestaurant)
    })
    containHeader.innerHTML = createHeader()
  }
}

export default Home
