/* eslint-disable no-undef */
import * as TestFactories from './helper/testFactories'
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteRestaurant-idb'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Liking A restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant catalog has not been liked before', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    expect(document.querySelector('[aria-label="like this katalogRestaurant"]')).toBeTruthy()
  })

  it('should show the unlike button when the restaurant catalog has not been liked before', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this katalogRestaurant"]')).toBeFalsy()
  })

  it('should be able to like the restaurant catalog', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)

    expect(restaurant).toEqual({ id: 1 })
    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant catalog again when its already liked', async () => {
    await TestFactories.createLikeButtonContainer({ id: 1 })

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }])

    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant catalog when it has no id', async () => {
    await TestFactories.createLikeButtonContainer({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
