import { Controller } from "stimulus"

export default class extends Controller {
  onRemoveSuccess(event) {
    var data = event.detail[0]
    alert(data.msg)
    this.element.remove()
  }
}
