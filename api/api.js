const Router = require('@koa/router');
const login = require('./login')
const tools = require('../tools/index')
// const home = require('./home')
tools.maodian()
const until = require('./util')
const router = new Router();
const pool = require('../db');

// router.get('/get/get_users', async(ctx) =>{
//     let request = ctx.query;
//     console.log(request);
//     var sql = `select * from users`;
//     const [rows] = await pool.execute(sql);
//     ctx.body = rows
// })
router.use(login.routes())
router.use(login.allowedMethods)
router.use(until.routes())
router.use(until.allowedMethods)
// router.use(home.routes())
// router.use(home.allowedMethods)
module.exports = router