import ClipboardController from '../../controllers/clipboard_controller'
import ControllerBuilder from './helpers/controller_builder'

jest.useFakeTimers()

describe('ClipboardController', () => {
  var spyExecCmd
  var spyAppend
  var spyRemove
  var controller
  var text = 'this is the text to be copied'

  beforeEach(() => {
    spyExecCmd = jest.fn()
    document.execCommand = spyExecCmd
    spyAppend = jest.spyOn(document.body, 'appendChild')
    spyRemove = jest.spyOn(document.body, 'removeChild')

    controller = new ControllerBuilder(ClipboardController).build()

    controller.sourceTarget.innerText = text
    controller.buttonTarget.innerText = 'Copy'
    controller.buttonTarget.classList.add('btn-warning')
  })

  afterEach(() => {
    document.execCommand = undefined
  })

  describe('copies text from source to clipboard', () => {
    it('copies the text', () => {
      controller.hasButtonTarget = () => false
      controller.copy()

      expect(spyAppend).toHaveBeenCalled()
      expect(spyExecCmd).toHaveBeenCalled()
      expect(spyRemove).toHaveBeenCalled()
    })
  })

  describe('signal the copy has occured', () => {
    it('changes the color and text of the button and back again', () => {
      controller.hasButtonTarget = () => true
      controller.changeButton()

      expect(controller.buttonTarget.classList.includes('btn-success')).toBeTruthy()
      expect(controller.buttonTarget.classList.includes('btn-warning')).toBeFalsy()
      expect(controller.buttonTarget.innerText).toEqual('Copied!')

      jest.runAllTimers()

      expect(controller.buttonTarget.classList.includes('btn-warning')).toBeTruthy()
      expect(controller.buttonTarget.classList.includes('btn-success')).toBeFalsy()
      expect(controller.buttonTarget.innerText).toEqual('Copy')
    })
  })
})
