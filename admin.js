const express = require("express")
const router = express.Router()
const md5 = require("md5")
const db = require("./db")

router.get("/admin", (req, res) => {
    let sql = "select * from data_admin"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                admin: result 
            }            
        }
        res.json(response) 
    })
})

router.get("/admin/:id", (req, res) => {
    let data = {
        id_admin: req.params.id,
        username:req.body.username,
        password: md5 (req.body.password)
    }
    let sql = "select * from data_admin where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                admin: result 
            }            
        }
        res.json(response) 
    })
})

router.post("/admin", (req,res) => {
    let data = {
        nama_admin: req.body.nama_admin,
        status_admin: req.body.status_admin,
        username:req.body.username,
        password: md5 (req.body.password)
    }

    let sql = "insert into data_admin set ?"

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

router.put("/admin", (req,res) => {
    let data = [
        {
        nama_admin: req.body.nama_admin,
        status_admin: req.body.status_admin,
        username:req.body.username,
        password: md5 (req.body.password)
        },
        {
            id_admin: req.body.id_admin
        }
    ]
    let sql = "update data_admin set ? where ?"

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

router.delete("/admin/:id", (req,res) => {
    let data = {
        id_admin: req.params.id,
    }

    let sql = "delete from data_admin where ?"

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