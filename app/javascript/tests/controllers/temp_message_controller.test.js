import TempMessageController from '../../controllers/temp_message_controller'
import ControllerBuilder from './helpers/controller_builder'

jest.useFakeTimers()

describe('TempMessageController', () => {
  var controller
  var spyremove

  beforeEach(() => {
    controller = new ControllerBuilder(TempMessageController).build()
    spyremove = jest.fn()
    controller.element.remove = spyremove
  })

  it('removes element from the dom', () => {
    controller.remove()

    expect(spyremove).toHaveBeenCalled()
  })

  it('removes element from dom after 5 seconds', () => {
    controller.connect()

    jest.runAllTimers()

    expect(spyremove).toHaveBeenCalled()
  })
})
