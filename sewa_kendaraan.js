const express = require("express")
const moment = require("moment/moment")
const router = express.Router()
const db = require("./db")

router.post("/sewa_kendaraan", (req,res) => {
    let data = {
        id_admin: req.body.id_admin,
        id_penyewa: req.body.id_penyewa,
        waktu: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    let sewakendaraan = JSON.parse(req.body.sewakendaraan)
    let sql = "insert into sewa_kendaraan set?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
        res.json({message: error.message})
        } else {

            let lastID = result.insertId

            let data2 = []
            for (const item of sewakendaraan) {
                data2.push([lastID, item.id_sewa_kendaraan])
            }
            let sql = "insert into detail_sewa_kendaraan (id_sewa_kendaraan, id_kendaraan) values ?"

            db.query(sql, [data2], (error, result) => {
                if (error) {
                    res.json({message: error.message})
                } else {
                    res.json({message: "Data has been inserted"})
                }
            })
        }
    })
})

router.get("/sewa_kendaraan", (req,res) => {
    let sql = "select s.id_sewa_kendaraan, s.id_penyewa, s.waktu, p.nama, p.nik, p.id_penyewa, u.nama_admin " +
    "from sewa_kendaraan s join data_penyewa p on s.id_penyewa = p.id_penyewa " +
    "join data_admin u on s.id_admin=u.id_admin"


    db.query(sql, (error, result) => {
        if (error) {
            res.json({ message: error.message})   
        }else{
            res.json({
                count: result.length,
                sewa_kendaraan: result
            })
        }
    })
})

router.get("/sewa_kendaraan/:id_sewa_kendaaraan", (req,res) => {
    let param = { id_sewa_kendaraan: req.params.id_sewa_kendaraan}

    let sql = "select p.nama, p.nik" + 
    "from sewa_kendaraan s join data_penyewa p" +
    "on p.id_penyewa = s.id_penyewa" +
    "where ?"

    db.query(sql, param, (error, result) => {
        if (error) {
            res.json({ message: error.message})   
        }else{
            res.json({
                count: result.length,
                detail_sewa_kendaraan: result
            })
        }
    })
})

router.delete("/sewa_kendaraan/:id_sewa_kendaraan", (req, res) => {
    let param = { id_sewa_kendaraan: req.params.id_sewa_kendaraan}

    let sql = "delete from detail_sewa_kendaraan where ?"

    db.query(sql, param, (error, result) => {
        if (error) {
            res.json({ message: error.message})
        } else {
            let param = { id_sewa_kendaraan: req.params.id_sewa_kendaraan}
            let sql = "delete from sewa_kendaraan where ?"

            db.query(sql, param, (error, result) => {
                if (error) {
                    res.json({ message: error.message})
                } else {
                    res.json({message: "Data has been deleted"})
                }
            })
        }
    })

})

module.exports = router