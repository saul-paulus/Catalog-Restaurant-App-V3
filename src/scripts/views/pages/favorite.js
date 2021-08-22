/* eslint-disable no-console */
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb'
import { createListKatalog } from '../template-creator'

const Favorite = {
  async render () {
    // eslint-disable-next-line quotes
    return `

    <div class="containt-card favorite-card" id="favorite-card">
    </div>
    `
  },

  async afterRender () {
    //   fungsi in akan dipanggi; setelah render
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants()
    const favoriteCard = document.querySelector('#favorite-card')

    if (restaurant.length === 0) {
      favoriteCard.innerHTML = `
      You dont have any Favorite Restaurant
      `
    }
    restaurant.forEach((restaurantFavorite) => {
      favoriteCard.innerHTML += createListKatalog(restaurantFavorite)
    })
  }
}

export default Favorite
