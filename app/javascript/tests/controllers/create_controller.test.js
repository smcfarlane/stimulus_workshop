import CreateController from '../../controllers/create_controller'
import ControllerBuilder from './helpers/controller_builder'

describe('CreateListController', () => {
  describe('showing the form', () => {
    it('shows the form', () => {
      var form = { style: { display: 'none' } }
      var controller = new ControllerBuilder(CreateController).build()
      controller.formTarget = form
      controller.onShowForm()
      expect(controller.formTarget.style.display).toEqual('block')
    })
  })

  describe('add list html from event to dom', () => {
    var controller
    var form
    var textField
    var response
    var listHTML = '<p>list</p>'

    beforeAll(() => {
      controller = new ControllerBuilder(CreateController).build()
      form = { style: { display: 'block' } }
      textField = { value: 'new list name' }

      controller.formTarget = form
      controller.textFieldTarget = textField
      controller.containerTarget = {
        insertAdjacentHTML(_position, res) {
          response = res
        }
      }
      controller.onCreate({ detail: [null, null, { response: listHTML }] })
    })

    it('adds list html', () => {
      expect(response).toEqual(listHTML)
    })

    it('hides the form', () => {
      expect(controller.formTarget.style.display).toEqual('none')
    })

    it('clears the text field value', () => {
      expect(controller.textFieldTarget.value).toEqual('')
    })
  })
})
