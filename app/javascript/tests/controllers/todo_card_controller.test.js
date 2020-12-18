import TodoCardController from '../../controllers/todo_card_controller'
import ControllerBuilder from './helpers/controller_builder'
import FetchMocker from './helpers/fetch_mocker'

jest.useFakeTimers();

describe('TodoCardController', () => {
  describe('handling completion', () => {
    var controller
    var spyReward

    beforeEach(() => {
      controller = new ControllerBuilder(TodoCardController).build()
      controller.urlValue = '/todos/4'
      spyReward = jest.fn()
      controller.reward = spyReward

      new FetchMocker().mock('it worked')
    })

    it('completes a todo', async () => {
      await controller.completeTodo()

      expect(spyReward).toHaveBeenCalled()
    })

    it('completes a todo', async () => {
      await controller.uncompleteTodo()

      expect(spyReward).not.toHaveBeenCalled()
    })

    it('onTodoCheckChanged', () => {
      controller.completeTodo = jest.fn()
      controller.uncompleteTodo = jest.fn()
      controller.onTodoCheckChanged()

      expect(controller.completeTodo).not.toHaveBeenCalled()
      expect(controller.uncompleteTodo).toHaveBeenCalled()

      controller.completeTodo = jest.fn()
      controller.uncompleteTodo = jest.fn()
      controller.checkTarget.checked = true
      controller.onTodoCheckChanged()

      expect(controller.uncompleteTodo).not.toHaveBeenCalled()
      expect(controller.completeTodo).toHaveBeenCalled()
    })
  })

  it('flashes green on completed todo', () => {
    var controller = new ControllerBuilder(TodoCardController).build()
    controller.element.classList.add('bg-secondary')

    controller.reward()

    jest.advanceTimersByTime(160)

    expect(controller.element.classList.includes('bg-success')).toBeTruthy()
    expect(controller.element.classList.includes('bg-secondary')).toBeFalsy()

    jest.advanceTimersByTime(150)

    expect(controller.element.classList.includes('bg-success')).toBeFalsy()
    expect(controller.element.classList.includes('bg-secondary')).toBeTruthy()

    jest.runAllTimers()

    expect(controller.element.classList.includes('bg-success')).toBeFalsy()
    expect(controller.element.classList.includes('bg-secondary')).toBeTruthy()
  })
})
