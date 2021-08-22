/* eslint-disable max-len */
import CONFIG from '../globals/config'

const createHeader = () => `
<div class="header-title">
    <h1>Meet, Eat & Enjoy</h1>
    <h1>The Deliciuous Meals</h1>
</div>
<div class="header-description">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto reprehenderit quae dicta? Perferendis vel iste dolore quos eligendi qui nihil assumenda voluptatum, id, praesentium inventore! Minima, quod. Aspernatur, quae blanditiis.</p>
</div>
<div class="header-tombol">
    <p>Our recomendation</p>
</div>     
`

const createListKatalog = (restaurant) => `
<div class="main-card" id="main-card">
    <div class="containt-img">
        <img class="lazyload" data-src="${CONFIG.BASE_URL_IMG_S}/${restaurant.pictureId}" alt="img-${restaurant.name}">
        <div class="tombol-detail">
            <a class="text-detail" href="${`/#/detail/${restaurant.id}`}">Details</a>
        </div>
    </div>
    <h1>Area of ${restaurant.city}</h1>
    <p class="name">${restaurant.name}</p>
    <p class="rating"><span class="fa fa-star checked"></span> ${restaurant.rating}</p>
    <p class="description">${restaurant.description}</p>
</div>
`

const createDetailBreadcrumb = (details) => `
<ul class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li>${details.city}</li>
</ul>
`

const createDetailHeader = (details) => `
<div class="containt-header-detail">
    <div class ="detail-header">
        <div class="detail-hero">
            <img class="lazyload img-detail" data-src="${CONFIG.BASE_URL_IMG_S}/${details.pictureId}" alt="img-${details.name}">
            <p class="detail-rating"><span class="fa fa-star checked"></span> ${details.rating}</p>
        </div>
        <div class="containt-detail-title">
            <div class="detail-title">
                <h1>${details.name}</h1>
                <h2>${details.city}</h2>
                <p>${details.address}</p>
            </div>
            <div class="detail-description">
                <h2>Description</h3>
                <p>${details.description}</p>
            </div>
            <div class="detail-categories">
              <h2>Categories</h2>
            <ul>${details.categories.map((categorie) => `
                <li>${categorie.name}</li>`).join('')}</ul>
            </div>
        </div>
    </div>
</div>
<div class="detail-menus">
    <h1>Menu List</h1>
    <div class="menu">
        <div class="menus-foods">
            <h2>Foods</h2>
            <picture>
                <source type="image/webp" srcset="./img/foods.webp">
                <source media="(max-width: 600px)" srcset="./img/foods-small.jpg">
                <img class="lazyload" data-src="./img/foods-large.jpeg" alt="img-foods">
            </picture>
            <ul>${details.menus.foods.map((food) => `
                <li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div class="menus-drink">
            <h2>Drinks</h2>
            <picture>
                <source type="image/webp" srcset="./img/drink.webp">
                <source media="(max-width: 600px)" srcset="./img/drink-small.jpg">
                <img class="lazyload" data-src="./img/drink-large.jpeg" alt="img-foods">
            </picture>
            <ul>${details.menus.drinks.map((drink) => `
            <li>${drink.name}</li>`).join('')}
            </ul>
        </div>
    </div>
</div>

<div class="containt-detail-review">
    <h1>Reviews</h1>
    ${details.customerReviews.map((review) => `
    <div class="review-card">
        <picture>
            <source type="image/webp" srcset="./img/avatar-review.webp">
            <source media="(max-width: 600px)" srcset="./img/avatar-review-small.jpg">
            <img class="lazyload" data-src="./img/avatar-review-large.png" alt="review-img" />
        </picture>
        <div class="review">
            <h3>${review.name}</h3>
            <p class="review-description">${review.review}</p>
            <p class="review-tgl">${review.date}</p>
        </div> 
    </div>
    `)}
</div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this katalogRestaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this katalogRestaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createHeader, createListKatalog, createDetailBreadcrumb, createDetailHeader, createLikeButtonTemplate, createLikedButtonTemplate
}
