import { Controller } from "stimulus"
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = ['check']
  static values = { url: String, completed: Boolean }

  connect() {
    console.log('todo card controller', this.urlValue)
  }

  onRemoveTodoSuccess(event) {
    var data = event.detail[0]
    alert(data.msg)
    this.element.remove()
  }

  onTodoCheckChanged() {
    if (this.checkTarget.checked) {
      this.completeTodo()
    } else {
      this.uncompleteTodo()
    }
  }

  completeTodo() {
    this.updateTodo({ completed: true })
  }

  uncompleteTodo() {
    this.updateTodo({ completed: false })
  }

  updateTodo(data) {
    fetch(this.urlValue, {
      method: 'PATCH',
      body: JSON.stringify({ todo: data }),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': Rails.csrfToken()
      },
      credentials: 'same-origin'
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
  }
}
