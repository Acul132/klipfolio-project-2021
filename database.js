const {
	initializeApp,
	cert
} = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = require('./service-account')

class Database {
	constructor() {
		initializeApp({
			credential: cert(serviceAccount)
		});
		this.db = getFirestore()
	}

	async fetchVisualizations() {
		const visRef = this.db.collection("visualizations")
		const snapshot = await visRef.get()
		let visualizations = []
		snapshot.forEach(doc => {
			visualizations.push(doc.data())
		})
		return visualizations
	}

	async fetchServices() {
		const servicesRef = this.db.collection("services")
		const snapshot = await servicesRef.get()
		let services = []
		snapshot.forEach(doc => {
			services.push(doc.data())
		})
		return services
	}

	async fetchDataSources() {
		const dataSourcesRef = this.db.collection("dataSources")
		const snapshot = await dataSourcesRef.get()
		let dataSources = []
		snapshot.forEach(doc => {
			dataSources.push(doc.data())
		})
		return dataSources
	}

	async fetchSearchOptions() {
		const services = await this.fetchServices()
		const labeledServices = services.map(({
			name
		}) => {
			return {
				title: name.split('-').join(" "),
				category: "Service"
			}
		})
		const dataSources = await this.fetchDataSources()
		const labeledDataSources = dataSources.map(({
			title
		}) => {
			return {
				title,
				category: "Data Source"
			}
		})
		const visualizations = await this.fetchVisualizations()
		const labeledVisualizations = visualizations.map(({
			title
		}) => {
			return {
				title,
				category: "Visualization"
			}
		})
		return [...labeledServices, ...labeledDataSources, ...labeledVisualizations]
	}
}

module.exports = Database