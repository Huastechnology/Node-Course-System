require('dotenv').config()
const app = require('./app')
const connectDb = require('./database/connection')
const { appConfig, dbConfig } = require('./config/config')

async function init (appConfig,dbConfig){
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port,()=>{
            console.log(`Server running at ${appConfig.host}:${appConfig.port}`)
        })
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

init(appConfig,dbConfig)