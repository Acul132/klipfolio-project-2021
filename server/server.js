const App = require("./app")
const PORT = process.env.PORT || 3001
const Database = require('./database')

const database = new Database();
const app = new App(database, PORT)

app.start()

