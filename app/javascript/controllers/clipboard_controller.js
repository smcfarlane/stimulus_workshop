import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['source', 'button']

  copy() {
    var text = this.sourceTarget.innerText
    var textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)

    this.changeButton()
  }

  changeButton() {
    if (this.hasButtonTarget) {
      this.buttonTarget.classList.remove('btn-warning')
      this.buttonTarget.classList.add('btn-success')
      this.buttonTarget.innerText = 'Copied!'

      setTimeout(() => {
        this.buttonTarget.classList.remove('btn-success')
        this.buttonTarget.classList.add('btn-warning')
        this.buttonTarget.innerText = 'Copy'
      }, 3000)
    }
  }
}
