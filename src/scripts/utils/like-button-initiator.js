/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
// import FavoriteRestaurantIdb from '../data/favoriteRestaurant-idb'
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant
    this._favoriteRestaurant = favoriteRestaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isrestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isrestaurantExist (id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}
export default LikeButtonInitiator
