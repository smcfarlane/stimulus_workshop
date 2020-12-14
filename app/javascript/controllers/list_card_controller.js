import { Controller } from "stimulus"

export default class extends Controller {
  onRemoveListSuccess(event) {
    var data = event.detail[0]
    alert(data.msg)
    this.element.remove()
  }
}
