export default class {
  constructor () {
    this.data = []
  }

  add (value) {
    this.data.push(value)
  }

  remove (value) {
    const index = this.data.indexOf(value)
    if (index > -1) {
      this.data.splice(index, 1)
    }
  }

  includes (value) {
    return this.data.includes(value)
  }
}
