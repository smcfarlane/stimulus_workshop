import ClassList from './class_list'

export default class {
  constructor (controller) {
    this.controller = controller
  }

  build (args) {
    if (args === undefined) { args = {} }
    const instance = this.buildInstance()
    this.defineTargetProperties(instance, args)

    return instance
  }

  buildInstance () {
    return new this.controller({
      scope: {
        data: {},
        element: {
          classList: new ClassList()
        }
      },
    })
  }

  defineTargetProperties (instance, args) {
    this.controller.targets.forEach(target => {
      instance[`${target}Target`] = {
        dispatchEvent: args.eventDispatcher,
        classList: new ClassList()
      }
    })

    Object.assign(instance, args.targetProperties)
  }
}
