export default class {
  mock (responseBody) {
    const promiseMock = Promise.resolve({
      json: () => Promise.resolve(responseBody),
      text: () => Promise.resolve(responseBody)
    })

    global.fetch = jest.fn().mockImplementation(() => promiseMock)
  }
}
