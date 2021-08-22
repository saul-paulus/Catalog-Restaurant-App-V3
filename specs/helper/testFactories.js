import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriteRestaurant-idb'

const createLikeButtonContainer = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant
  })
}

export { createLikeButtonContainer }
