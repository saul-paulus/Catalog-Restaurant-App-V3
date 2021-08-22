import API_ENDPOINT from '../globals/api-endpoint'

class KatalogRestaurantSource {
  static async listKatalogRestaurant () {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT)
    const responseJson = await response.json()

    if (responseJson.error === false) {
      return responseJson.restaurants
    }
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))

    return response.json()
  }
}

export default KatalogRestaurantSource
