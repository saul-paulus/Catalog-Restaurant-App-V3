/* eslint-disable no-underscore-dangle */
import InitialMenu from '../utils/initial-menu'
import UrlParse from '../routes/url.parser'
import routes from '../routes/routes'

class App {
  constructor ({
    button, menu, content
  }) {
    this._button = button
    this._menu = menu
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    InitialMenu.init({
      button: this._button,
      menu: this._menu,
      content: this._content
    })

    // kita bisa inisialisasi komponen lain bila ada
  }

  async renderPage () {
    const url = UrlParse.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()

    await page.afterRender()
  }
}

export default App
