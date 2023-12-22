import { express } from "express";
import { cors } from "cors";

const app = Express()
app.use(cors())

app.use(express.json())
const PORT = 5000;
app.listen(PORT, () => console.log(`server berjalan PORT ${s}`))
const express = require("express");

const mysql = require('mysql');
const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    databse: "signup"
})

app.post('/sign',(req,res) => { const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
const values = [
    req.body.name,
    req.bod.email,
    req.body.password
]
db.query(sql, [values], (err, data) => {
    if(err){ res.json("Error");}
    return res.json(data);
})
})


