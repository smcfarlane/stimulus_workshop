import TodoCardController from '../../controllers/todo_card_controller'
import ControllerBuilder from './helpers/controller_builder'

describe('TodoCardController', () => {
  it('removes todo card html', () => {
    var msg = 'list removed'
    global.alert = jest.fn()
    var controller = new ControllerBuilder(TodoCardController).build()
    controller.element.remove = jest.fn()
    controller.onRemoveTodoSuccess({ detail: [{ msg }] })

    expect(global.alert).toHaveBeenCalledWith(msg)
    expect(controller.element.remove).toHaveBeenCalled()
  })
})
