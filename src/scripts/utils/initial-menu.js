/* eslint-disable no-underscore-dangle */
const InitialMenu = {
  init ({ button, menu, content }) {
    button.addEventListener('click', (event) => {
      this._toggleMenu(event, menu)
    })
    content.addEventListener('click', (event) => {
      this._closeMenu(event, menu)
    })
  },

  _toggleMenu (event, menu) {
    event.stopPropagation()

    menu.classList.toggle('open')
  },

  _closeMenu (event, menu) {
    event.stopPropagation()

    menu.classList.remove('open')
  }
}

export default InitialMenu
