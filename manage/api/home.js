const Router = require('@koa/router');
const express = require("express")
const router = new Router();
var app = express();
var bodyParse = require("body-parser")

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static("public"))

const pool = require('../db');
const tools = require('../tools/index')

router.get('/get/get_dating', async (ctx, res, req) => {
    console.log('正在访问:'+ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from dating limit 30`;
        console.log(sql)
        const [rows] = await pool.execute(sql);
        console.log(rows)
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code:1,
            error
        }
    }
})
module.exports = router
