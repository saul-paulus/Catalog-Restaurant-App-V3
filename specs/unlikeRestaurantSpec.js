/* eslint-disable no-undef */
import * as TestFactories from './helper/testFactories'
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurant-idb'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unliking A restaurant catalog', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should display unlike widget when the restaurant catalog has been liked', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this katalogRestaurant"]')).toBeTruthy()
  })

  it('should not display like widget when the restaurant catalog has been liked', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    expect(document.querySelector('[aria-label="like this katalogRestaurant"]')).toBeFalsy()
  })

  it('should be able to remove liked restaurant catalog from the list', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    document.querySelector('[aria-label="unlike this katalogRestaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })

  it('should not throw error if the unliked restaurant catalog is not in the list', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    await FavoriteRestaurantIdb.deleteRestaurant(1)

    document.querySelector('[aria-label="unlike this katalogRestaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
