const express = require("express")
		const app = express()
		const methodOverride = require("method-override")
		const logger = require("morgan")
        const routes = require("./routes/index")
        
        //Middleware
        app.use(express.urlencoded({ extended: true }))
        app.use(express.json())
        app.use(methodOverride("_method")) 
        app.set("view engine", "hbs") 
        app.use(express.static(__dirname + "/public"))
        app.use(logger("dev"))
        app.use('/', routes)

        const PORT = process.env.PORT || 3001
        app.listen(PORT, () => {
            console.log(`App is listening on PORT ${PORT}`)
        })

        