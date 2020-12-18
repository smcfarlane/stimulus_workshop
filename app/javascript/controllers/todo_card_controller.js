import { Controller } from "stimulus"
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ['check']
  static values = { url: String, completed: Boolean }

  onTodoCheckChanged() {
    if (this.checkTarget.checked) {
      this.completeTodo()
    } else {
      this.uncompleteTodo()
    }
  }

  async completeTodo() {
    await this.updateTodo({ completed: true })
    this.reward()
  }

  async uncompleteTodo() {
    await this.updateTodo({ completed: false })
  }

  reward() {
    var intervalID
    var green = true
    var count = 0
    intervalID = setInterval(() => {
      if (green) {
        this.element.classList.add('bg-success')
        this.element.classList.remove('bg-secondary')
      } else {
        this.element.classList.add('bg-secondary')
        this.element.classList.remove('bg-success')
        if (count > 10) { clearInterval(intervalID) }
      }
      green = !green
      count += 1
    }, 150)
  }

  async updateTodo(data) {
    return fetch(this.urlValue, {
      method: 'PATCH',
      body: JSON.stringify({ todo: data }),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': Rails.csrfToken()
      },
      credentials: 'same-origin'
    })
      .then((response) => response.text())
  }
}
