const Router = require('@koa/router');
const express = require("express")
const router = new Router();
var app = express();
var bodyParse = require("body-parser")

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static("public"))

const pool = require('../../db');
const tools = require('../../tools/index')

//修改密码
// router.get('/update/pwd', async (ctx, res, req) => {
//     console.log('正在访问:'+ctx.path)
//     let request = ctx.query;
//     try {
//         console.log(request)
//         var sql = `update user set password='${request.password}' where id = '${request.id}'`
//         console.log(sql)
//         const [rows] = await pool.execute(sql);
//         console.log(rows)
//         ctx.body = {
//             code: 0,
//             rows
//         }
//     } catch (error) {
//         console.log(error)
//         ctx.body = {
//             code:1,
//             error
//         }
//     }
// })
//每日公告
router.get('/add/bulletin', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `insert into bulletin(date,clientId,content) values('${request.date}','${request.clientId}','${request.content}')`
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
            code: 1,
            error
        }
    }
})
router.get('/del/bulletin', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `delete from bulletin where id  = ${request.id}`
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
            code: 1,
            error
        }
    }
})
router.get('/set/bulletin', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `update bulletin set name = '${request.date}', type = '${request.clientId}',img = '${request.content}' where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/bulletin', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from bulletin where 1=1`
        var countSql = `select count(id) as sum from bulletin where 1=1`
        if (request.clientId) {
            sql += ` and clientId like '%${request.clientId}%'`
            countSql += ` and clientId like '%${request.clientId}%'`
        }
        if (request.content) {
            sql += ` and clientId like '%${request.content}%'`
            countSql += ` and content like '%${request.content}%'`
        }
        if (request.pageIndex) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(countSql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(countRows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//vip卡
router.get('/add/vip', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `insert into vip(name,type,img) values('${request.name}','${request.type}','${request.img}')`
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
            code: 1,
            error
        }
    }
})
router.get('/del/vip', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `delete from vip where id  = ${request.id}`
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
            code: 1,
            error
        }
    }
})
router.get('/set/vip', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `update vip set name = '${request.name}', type = '${request.type}',img = '${request.img}' where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/vip', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from vip where 1=1`
        var countSql = `select count(id) as sum from vip where 1=1`
        if (request.name) {
            sql += ` and name like '%${request.name}%'`
            countSql += ` and name like '%${request.name}%'`
        }
        if (request.type) {
            sql += ` and type = '${request.type}'`
            countSql += ` and type = '${request.type}'`
        }
        if (request.pageIndex) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(countSql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(countRows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//员工
router.get('/add/staff', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `insert into staff(name,inviteCode) values('${request.name}','${request.inviteCode}')`
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
            code: 1,
            error
        }
    }
})
router.get('/del/staff', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `delete from staff where id  = ${request.id}`
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
            code: 1,
            error
        }
    }
})
router.get('/set/staff', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `update staff set name = '${request.name}', inviteCode = '${request.inviteCode}' where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/staff', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from staff where 1=1`
        var countSql = `select count(id) as sum from staff where 1=1`
        if (request.name) {
            sql += ` and name like '%${request.name}%'`
            countSql += ` and name like '%${request.name}%'`
        }
        if (request.inviteCode) {
            sql += ` and inviteCode = '${request.inviteCode}'`
            countSql += ` and inviteCode = '${request.inviteCode}'`
        }
        if (request.pageIndex) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(countSql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(countRows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//系统
router.get('/set/sys', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `update sysdata SET errorMoney='${request.errorMoney}',profit='${request.profit}',initMoney='${request.initMoney}' where id='${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/sys', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sysSql = `select * from sysdata where switch = 1`
        var langSql = `select * from lang`
        const [sysRows] = await pool.execute(sysSql);
        const [langRows] = await pool.execute(langSql);
        console.log(sysRows)
        ctx.body = {
            code: 0,
            sysRows,
            langRows
        }
    } catch (error) {
        console.log(error)
    }
})
//投票
router.get('/del/vote', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `delete from vote where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/set/vote', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `UPDATE vote SET voteId='${request.voteId}',voteNum='${request.voteNum}',date='${request.date}' where id='${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/vote', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select users.id uid,vote.voteId,vote.account,vote.voteNum,users.staffName,vote.date,users.dataError from vote inner join users on users.account = vote.account`
        var countSql = `select count(id) as sum from vote where 1=1`
        if (request.account && request.account != undefined) {
            sql += ` and vote.account = '${request.account}'`
            countSql += ` and vote.account = '${request.account}'`
        }
        if (request.voteNum && request.voteNum != undefined) {
            sql += ` and vote.voteNum = '${request.voteNum}'`
            countSql += ` and vote.account = '${request.account}'`
        }
        if (request.pageIndex && request.pageIndex != undefined) {
            sql += ` ORDER BY vote.id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(sql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(rows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/add/vote', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `insert into vote(account,voteNum,voteId,date) values('${request.account}','${request.voteNum}','${request.voteId}','${request.date}');`
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
            code: 1,
            error
        }
    }
})
//账单管理
router.get('/del/order', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `delete from  orderlist where id='${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/update/order', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `UPDATE orderList SET makeMoney='${request.makeMoney}',type='${request.type}' where id='${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/order', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = ''
        sql = `select u.id as uid,o.id as oid,o.*,u.staffName from orderlist o inner join users u on u.account = o.account where 1=1`
        var countSql = `select count(o.id) as sum from orderlist o inner join users u on u.account = o.account where 1=1`
        if (request.id) {
            sql += ` and u.id = '${request.id}'`
            countSql += ` and u.id = '${request.id}'`
        }
        if (request.account && request.account != undefined) {
            sql += ` and o.account like '%${request.account}%'`
            countSql += ` and o.account like '%${request.account}%'`
        }
        if (request.type && request.type != undefined) {
            sql += ` and o.type = '${request.type}'`
            countSql += ` and o.type = '${request.type}'`
        }
        if (request.status && request.status != undefined) {
            sql += ` and o.status = '${request.status}'`
            countSql += ` and o.status = '${request.status}'`
        }
        if (request.date && request.date != undefined) {
            sql += ` and o.date = '${request.date}'`
            countSql += ` and o.date = '${request.date}'`
        }
        if (request.pageIndex && request.pageIndex != undefined) {
            sql += ` ORDER BY o.id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(sql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(rows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/get/userInCode', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from staff where inviteCode = ${request.inviteCode}`
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
            code: 1,
            error
        }
    }
})
//用户管理
router.get('/get/user', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = ''
        var countSql = ''
        sql += `SELECT * FROM users where 1=1`
        countSql = `select count(id) as sum from users where 1=1`
        if (request.id) {
            sql += ` and id like '%${request.id}%'`
            countSql += ` and id like '%${request.id}%'`
        }
        if (request.account && request.account != undefined) {
            sql += ` and account like '%${request.account}%' or name like '%${request.account}%' or staffName like '%${request.account}%'`
            countSql += ` and account like '%${request.account}%' or name like '%${request.account}%' or staffName like '%${request.account}%'`
        }
        if (request.inviteCode && request.inviteCode != undefined) {
            sql += ` and inviteCode = '${request.inviteCode}'`
            countSql += ` and inviteCode = '${request.inviteCode}'`
        }
        if (request.vipGrade && request.vipGrade != undefined) {
            sql += ` and vipGrade = '${request.vipGrade}'`
            countSql += ` and vipGrade = '${request.vipGrade}'`
        } else {
            sql += ` and vipGrade != '3'`
            countSql += ` and vipGrade != '3'`
        }
        if (request.remake && request.remake != undefined) {
            sql += ` and remake LIKE '%${request.remake}%'`
            countSql += ` and remake LIKE '%${request.remake}%'`
        }
        if (request.staff) {
            sql += ` and staff LIKE '%${request.staff}%'`
            countSql += ` and staff LIKE '%${request.staff}%'`
        }
        if (request.date && request.date != undefined) {
            sql += ` and createData = '${request.date}'`
            countSql += ` and createData = '${request.date}'`
        }
        if (request.pageIndex && request.pageIndex != undefined) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(request.pageIndex && request.pageIndex != undefined)
        console.log(sql)

        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        //console.log(rows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/update/user', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request)
    try {
        console.log(request)
        var sql = `UPDATE users SET account='${request.account}',password='${request.password}',inviteCode='${request.inviteCode}',dataError='${request.dataError}',
        age='${request.age}',gender='${request.gender}',bankCard='${request.bankCard}',money='${request.money}',avatar='${request.avatar}',vipCode='${request.vipCode}',
        createDate='${request.createDate}',vipGrade='${request.vipGrade}',name='${request.name}',vipStatus='${request.vipStatus}',likeSquare='${request.likeSquare}',
        city='${request.city}',remake='${request.remake}',lineCode='${request.lineCode}',pairAccount='${request.pairAccount}',pz='${request.pz}' 
        ,pz1='${request.pz1}' ,pz2='${request.pz2}',voteFlag='${request.voteFlag}',staffName='${request.staffName}' 
        where id='${request.id}'`
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
            code: 1,
            error
        }
    }
})
//dating
router.get('/add/dating', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `insert into dating(account, vipGrade, name, money, type, country) values('${request.account}','${request.vipGrade}','${request.name}','${request.money}','${request.type}','${request.country}');`
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
            code: 1,
            error
        }
    }
})
router.get('/del/users', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `delete from users where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/del/dating', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `delete from dating where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/update/dating', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `update dating set account='${request.account}',vipGrade='${request.vipGrade}',
        name='${request.name}',money='${request.money}',type='${request.type}',country='${request.country}' where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/dating', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `SELECT id,account, vipGrade, name, money, type, country FROM dating WHERE 1`
        var countSql = `select count(id) as sum from dating where 1=1`
        if (request.country) {
            sql += ` and country = '${request.country}'`
            countSql += ` and country = '${request.country}'`
        }
        if (request.type) {
            sql += ` and type = '${request.type}'`
            countSql += ` and type = '${request.type}'`
        }
        if (request.vipGrade) {
            sql += ` and vipGrade = '${request.vipGrade}'`
            countSql += ` and vipGrade = '${request.vipGrade}'`
        }
        if (request.pageIndex && request.pageIndex != undefined) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(sql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(rows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//square
router.get('/add/square', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        let accountR = Math.floor(Math.random() * 900000) + 100000
        let random = Math.floor(Math.random() * 90000) + 10000
        let random1 = Math.floor(Math.random() * 9000) + 1000
        let random2 = Math.floor(Math.random() * 900) + 100
        var sql = `insert into square(account, avatar, title, content, source, name,vipGrade,likes,comment,share,date,country) values('${accountR}','${request.avatar}',
        "${request.title}","${request.content}",'${request.source}','${request.name}','${request.vipGrade}','${random}','${random1}','${random2}',
        '${request.date}','${request.country}');`
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
            code: 1,
            error
        }
    }
})
router.get('/del/square', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `delete from square where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/update/square', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    
    try {
        var sql = `update square set account='${request.account}',vipGrade='${request.vipGrade}',title="${request.title}",content="${request.content}",source='${request.source}',
        name='${request.name}',date='${request.date}',country='${request.country}' where id='${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/square', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `SELECT * FROM square where 1=1`
        var countSql = `select count(id) as sum from square where 1=1`
        if (request.country) {
            sql += ` and country = '${request.country}'`
            countSql += ` and country = '${request.country}'`
        }
        if (request.vipGrade) {
            sql += ` and vipGrade = '${request.vipGrade}'`
            countSql += ` and vipGrade = '${request.vipGrade}'`
        }
        if (request.date) {
            sql += ` and date = '${request.date}'`
            countSql += ` and date = '${request.date}'`
        }
        if (request.pageIndex && request.pageIndex != undefined) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(sql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(rows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//LP
router.get('/add/convension', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `insert into convension(account, height, weight, xw, job, city,avatar,jj,video,name,gender) values('${request.account}','${request.height}','${request.weight}','${request.xw}','${request.job}','${request.city}','${request.avatar}','${request.jj}','${request.video}','${request.name}','${request.gender}');`
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
            code: 1,
            error
        }
    }
})
router.get('/del/convension', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `delete from convension where id = '${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/update/convension', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    if (request.xw == '') {
        request.xw = "1"
    }
    try {
        console.log(request)
        var sql = `update convension set account='${request.account}',height='${request.height}',weight='${request.weight}',xw='${request.xw}',job='${request.job}',city='${request.city}',avatar='${request.avatar}',jj='${request.jj}',video='${request.video}',name='${request.name}' where id='${request.id}'`
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
            code: 1,
            error
        }
    }
})
router.get('/get/convension', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `SELECT account, height, weight, xw, job, city, avatar, jj, id, video, name,gender FROM convension WHERE 1`
        var countSql = `select count(id) as sum from convension where 1=1`
        if (request.gender) {
            sql += ` and gender = '${request.gender}'`
            countSql += ` and gender = '${request.gender}'`
        }
        if (request.pageIndex) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
        console.log(sql)
        const [rows] = await pool.execute(sql);
        const [countRows] = await pool.execute(countSql);
        console.log(countRows)
        ctx.body = {
            code: 0,
            rows,
            count: countRows[0].sum
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/get/login', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `SELECT account from manage where account='${request.account}' and password='${request.password}'`
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
            code: 1,
            error
        }
    }
})
//-------------------------

router.get('/get/get_user', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from users where account = '${request.account}'`;
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
            code: 1,
            error
        }
    }
})
router.get('/get/get_letter', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from letter`
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//操作错误
router.get('/get/dataError', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `update users set dataError = 1 where account = '${request.account}'`
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/get/get_order', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select o.*,u.staffName from users u inner join orderlist o on u.account = o.account where u.account = '${request.account}'`
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//用户提交申请，待审核
// router.get('/get/get_order', async (ctx, res, req) => {
//     let request = ctx.query;
//     try {
//         console.log(request)
//         var sql = `update users set status = 0 where account = ${request.account}`
//         console.log(sql)
//         const [rows] = await pool.execute(sql);
//         ctx.body = {
//             code: 0,
//             rows
//         }
//     } catch (error) {
//         console.log(error)
//         ctx.body = {
//             code:1,
//             error
//         }
//     }
// })
//修改用户积分
router.get('/set/updateMoney', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = ''
        if (request.type == 0) {
            sql += `update users set money = money + CONVERT(${request.makeMoney}, FLOAT), voteFlag = ${request.voteFlag} where account = '${request.account}'`
        } else if (request.type == 1) {
            sql += `update users set money = money - CONVERT(${request.makeMoney}, FLOAT) where account = '${request.account}'`
        }
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//账单审核
router.get('/set/validOrder', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `update orderList set status = '${request.status}' where id='${request.id}'`
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//账单type 0充值 1提现
router.get('/get/set_order', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `insert into orderList(account,makeMoney,type,status,date) values('${request.account}',${request.makeMoney},${request.type},${request.status},'${request.date}');`
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//gift
router.get('/get/get_gift', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `INSERT INTO gift(giftDate) VALUES ('${request.giftDate}')`
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//main
router.get('/get/likeSquare', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = ''
        if (request.flag == 'true') {
            sql = `update users set likeSquare = REPLACE(likeSquare, '${request.likeSquare}', '') where account = '${request.account}'`;
        } else {
            sql = `update users set likeSquare = CONCAT(likeSquare, ${request.likeSquare}) where account = '${request.account}'`;
        }
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/get/get_square', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from square limit ${request.pageIndex * 5},5`;
        console.log(sql)
        const [rows] = await pool.execute(sql);
        ctx.body = {
            code: 0,
            rows
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
//获取公告
router.get('/get/get_dating', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
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
            code: 1,
            error
        }
    }
})

router.get('/get/login', async (ctx) => {
    let request = ctx.query;
    console.log('request:', request);
    try {
        if (request.type == 0) {
            var sql = `select * from users where account = '${request.account}' and password = '${request.pwd}'`;
            var exsitSql = `select * from users where account = '${request.account}'`;
            console.log(sql)
            const [rows] = await pool.execute(sql);
            const [exsitRows] = await pool.execute(exsitSql);
            console.log(rows)
            if (exsitRows.length > 0 && rows.length < 1) {
                ctx.body = {
                    code: 1,
                    msg: '密码错误'
                }
            } else if (rows.length > 0) {
                ctx.body = {
                    code: 0,
                    rows
                }
            } else if (exsitRows.length < 1) {
                ctx.body = {
                    code: 1,
                    msg: '你还没有注册'
                }
            }
        } else if (request.type == 1) {

            var getUserSql = `select * from users where account = '${request.account}'`;
            console.log(getUserSql)
            const [getUser] = await pool.execute(getUserSql);
            console.log("getuser:", getUser)
            if (getUser.length > 0) {
                ctx.body = {
                    code: 1,
                    msg: '该账号已注册'
                }
                return
            }
            var sql = "INSERT INTO `users`(`id`, `account`, `password`, `createDate`, `inviteCode`,`gender`) VALUES ('','" + request.account + "','" + request.pwd + "','" + tools.DFormat(new Date()) + "','" + request.inviteCode + "','" + request.gender + "')"
            const [rows] = await pool.execute(sql);
            console.log('[rows]', [rows])
            console.log([rows][0])
            if ([rows][0].affectedRows == 1) {
                ctx.body = {
                    code: 0,
                    msg: '数据插入成功'
                }
                return
            } else {
                ctx.body = {
                    code: 1,
                    msg: '数据插入失败'
                }
                return
            }
        }
    } catch (error) {
        console.log(error)
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/get/register', async (ctx) => {
    let request = ctx.query;
    console.log(request);
    try {

    } catch (error) {
        ctx.body = {
            code: 1,
            error
        }
    }
})
router.get('/get/del_user', async (ctx) => {
    let request = ctx.query;
    console.log(request);
    var sql = `select * from users`;
    const [rows] = await pool.execute(sql);
    ctx.body = {
        code: 1,
        rows
    }
})

module.exports = router
