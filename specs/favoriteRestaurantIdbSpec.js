import { itActsAsfavoriteRestaurantModel } from "./contract/favoriteRestaurantContract"
import FavoriteRestaurantIdb from "../src/scripts/data/favoriteRestaurant-idb"


describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
      (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
      })
    })
   
    itActsAsfavoriteRestaurantModel(FavoriteRestaurantIdb)
  })