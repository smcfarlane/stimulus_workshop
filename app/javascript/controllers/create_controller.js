import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['form', 'textField', 'container']

  onShowForm() {
    this.formTarget.style.display = 'block'
  }

  onCreate(event) {
    var xhr = event.detail[2]
    this.containerTarget.insertAdjacentHTML('beforeend', xhr.response)
    this.formTarget.style.display = 'none'
    this.textFieldTarget.value = ''
  }
}
