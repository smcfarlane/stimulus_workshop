import ListCardController from '../../controllers/list_card_controller'
import ControllerBuilder from './helpers/controller_builder'

describe('ListCardController', () => {
  it('removes list card html', () => {
    var msg = 'list removed'
    global.alert = jest.fn()
    var controller = new ControllerBuilder(ListCardController).build()
    controller.element.remove = jest.fn()
    controller.onRemoveListSuccess({ detail: [{ msg }] })

    expect(global.alert).toHaveBeenCalledWith(msg)
    expect(controller.element.remove).toHaveBeenCalled()
  })
})
