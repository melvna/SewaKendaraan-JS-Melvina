const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const adminrouter = require("./admin")
const kendaraanrouter = require("./kendaraan")
const penyewarouter = require("./penyewa")
const sewakendaraanrouter = require("./sewa_kendaraan")

const app = express()
app.use(express.static(__dirname));
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(adminrouter)
app.use(kendaraanrouter)
app.use(penyewarouter)
app.use(sewakendaraanrouter)

app.listen(8000, () => {
    console.log("BERHASILLL")
})



