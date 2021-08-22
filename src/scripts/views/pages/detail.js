/* eslint-disable no-console */
/* eslint-disable import/extensions */

import URLParse from '../../routes/url.parser'
import KatalogRestaurantSource from '../../data/katalogRestApi-source'
import { createDetailBreadcrumb, createDetailHeader } from '../template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb'

const Detail = {
  async render () {
    return `
      <div class="containt-breadcrumb">
        <div id="containt-breadcrumb"></div>
      </div>
      <div id="containt-header"></div>
      <div id="likeButtonContainer"></div> 
    `
  },
  async afterRender () {
    const url = URLParse.parseActiveUrlWithoutCombiner()
    const getDetailById = await KatalogRestaurantSource.detailRestaurant(url.id)

    const katalogRestaurant = getDetailById.restaurant

    const containtBreadcrumb = document.querySelector('#containt-breadcrumb')
    const containtHeader = document.querySelector('#containt-header')
    const getDetailRestaurant = getDetailById.restaurant
    containtBreadcrumb.innerHTML = createDetailBreadcrumb(getDetailRestaurant)
    containtHeader.innerHTML += createDetailHeader(getDetailRestaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: katalogRestaurant.id,
        name: katalogRestaurant.name,
        city: katalogRestaurant.city,
        rating: katalogRestaurant.rating,
        description: katalogRestaurant.description,
        pictureId: katalogRestaurant.pictureId
      }

    })
  }
}
export default Detail
