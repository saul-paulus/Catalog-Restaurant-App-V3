const assert = require('assert')

// /* eslint-disable no-undef */
Feature(' Liking Restaurant ')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked katalogRestaurant', ({ I }) => {
  I.seeElement('#favorite-card')
  I.see('You dont have any Favorite Restaurant', '#favorite-card')
})

Scenario('Linking one Restaurant', async ({ I }) => {
  I.see('You dont have any Favorite Restaurant', '#favorite-card')

  I.amOnPage('/')

  I.seeElement('.tombol-detail a')

  const firstRestaurant = locate('.tombol-detail a').first()
  const firstRestaurantDetails = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurantDetails)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.main-card')

  const likeRestaurantDetail = await I.grabTextFrom('.tombol-detail')
  assert.strictEqual(firstRestaurantDetails, likeRestaurantDetail)
})
Scenario('Unlinking one Restaurant', async ({ I }) => {
  I.see('You dont have any Favorite Restaurant', '#favorite-card')

  I.amOnPage('/')

  I.seeElement('.tombol-detail a')

  const firstRestaurant = locate('.tombol-detail a').first()
  const firstRestaurantDetails = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurantDetails)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.main-card')

  const likeRestaurantDetail = await I.grabTextFrom('.tombol-detail')
  assert.strictEqual(firstRestaurantDetails, likeRestaurantDetail)

  I.click('.tombol-detail')

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('#favorite-card')
  const nonRestaurantFavorite = await I.grabTextFrom('#favorite-card')
  assert.strictEqual(nonRestaurantFavorite, 'You dont have any Favorite Restaurant')
})
