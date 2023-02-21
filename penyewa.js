const express = require("express")
const router = express.Router()
const md5 = require("md5")
const db = require("./db")

router.get("/penyewa", (req, res) => {
    let sql = "select * from data_penyewa"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                penyewa: result 
            }            
        }
        res.json(response) 
    })
})

router.get("/penyewa/:id", (req, res) => {
    let data = {
        id_penyewa: req.params.id,
        username:req.body.username,
        password: md5 (req.body.password)
    }
    let sql = "select * from data_penyewa where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                penyewa: result 
            }            
        }
        res.json(response) 
    })
})

router.post("/penyewa", (req,res) => {
    let data = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        nik: req.body.nik,
        username:req.body.username,
        password: md5 (req.body.password)
    }

    let sql = "insert into data_penyewa set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
})
})

router.put("/penyewa", (req,res) => {
    let data = [
        {
        nama: req.body.nama,
        alamat: req.body.alamat,
        nik: req.body.nik,
        username:req.body.username,
        password: md5 (req.body.password)
        },
        {
            id_penyewa: req.body.id_penyewa
        }
    ]
    let sql = "update data_penyewa set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })
})

router.delete("/penyewa/:id", (req,res) => {
    let data = {
        id_penyewa: req.params.id,
    }

    let sql = "delete from data_penyewa where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })
})

module.exports = router