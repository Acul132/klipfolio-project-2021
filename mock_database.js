const {
  initializeApp,
  applicationDefault,
  cert
} = require('firebase-admin/app')
const {
  getFirestore,
  Timestamp,
  FieldValue
} = require('firebase-admin/firestore')
const serviceAccount = require('./firebase-creds.json')

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