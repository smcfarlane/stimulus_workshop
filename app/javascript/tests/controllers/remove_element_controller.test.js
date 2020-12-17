import RemoveElementController from '../../controllers/remove_element_controller'
import ControllerBuilder from './helpers/controller_builder'

describe('ListCardController', () => {
  it('removes html', () => {
    var msg = 'list removed'
    global.alert = jest.fn()
    var controller = new ControllerBuilder(RemoveElementController).build()
    controller.element.remove = jest.fn()
    controller.onRemoveSuccess({ detail: [{ msg }] })

    expect(global.alert).toHaveBeenCalledWith(msg)
    expect(controller.element.remove).toHaveBeenCalled()
  })
})
