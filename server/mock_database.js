//Mock Database class created for unit testing
class Database {
  constructor() {

  }

  async fetchVisualizations() {
    const visualization = []
    return jest.fn(() => Promise.resolve(visualization));
  }

  async fetchServices() {
    const services = []
    return jest.fn(() => Promise.resolve(services));
  }

  async fetchDataSources() {
    const dataSources = []
    return jest.fn(() => Promise.resolve(dataSources));
  }

  async fetchSearchOptions() {
    const searchOptions = []
    return jest.fn(() => Promise.resolve(searchOptions));
  }
}

module.exports = Database