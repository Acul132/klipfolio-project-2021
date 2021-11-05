const Express = require("express")
const cors = require("cors")
const express = Express()
const {
  getRandomItemsFromArr,
  generateVisualizationData
} = require("./dataHelper")

class App {
  constructor(database, port) {
    this.app = express
    //Added database wrapper for all Firestore fetches
    this.database = database
    this.port = port
    this.app.use(cors())
    this.initRoutes()
    //Serve react build through express when in production mode
    if(process.env.NODE_ENV === "production"){
      this.app.use(Express.static("client/build"))
    }
  }

  getApp() {
    return this.app
  }

  initRoutes() {
    this.listenServices()
    this.listenDataSources()
    this.listenVisualizations()
    this.listenSearchOptions()
  }

  listenServices() {
    this.app.get("/api/services/:amount", async (req, res) => {
      const amount = req.params.amount
      try {
        //Database wrapper returns every Service doc
        const names = await this.database.fetchServices()
        //Return a random assortment of Service names
        const returnNames = getRandomItemsFromArr(names, amount)
        return res.status(200).json({
          names: returnNames
        })
      } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error")
      }
    })
  }

  listenDataSources() {
    this.app.get("/api/data-sources/:amount", async (req, res) => {
      const amount = req.params.amount
      try {
        //Database wrapper returns every DataSource doc
        const titles = await this.database.fetchDataSources()
        //Return a random assortment of Data Sources titles
        const returnTitles = getRandomItemsFromArr(titles, amount)
        return res.status(200).json({
          titles: returnTitles
        })
      } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error")
      }
    })
  }

  listenVisualizations() {
    this.app.get("/api/visualizations/:amount", async (req, res) => {
      const amount = req.params.amount
      try {
        //Database wrapper returns every Visualization doc
        let visualizations = await this.database.fetchVisualizations()
        //Return a random assortment of Visualization data generated from parameters in the document
        visualizations = generateVisualizationData(getRandomItemsFromArr(visualizations, amount))
        return res.status(200).json({
          visualizations: visualizations
        })
      } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error")
      }
    })
  }

  listenSearchOptions() {
    this.app.get("/api/search-options", async (req, res) => {
      try {
        //Database wrapper returns every SearchOption doc
        const options = await this.database.fetchSearchOptions()
        return res.status(200).json({
          options
        })
      } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error")
      }
    })
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`App listening on http://localhost:${this.port}`)
    })
  }
}



module.exports = App