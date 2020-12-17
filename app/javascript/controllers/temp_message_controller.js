import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    setTimeout(() => {
      this.remove()
    }, 5000)
  }

  remove() {
    this.element.remove()
  }
}
