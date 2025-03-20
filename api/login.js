const Router = require('@koa/router');
const express = require("express")
const router = new Router();
var app = express();
var bodyParse = require("body-parser")

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static("public"))

const pool = require('../db');
const tools = require('../tools/index')
//修改密码
router.get('/get/updatePWD', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var validSql = `select account from users where id = ${request.id} and password = '${request.oldPassword}'`
        var sql = `update users set password = '${request.newPassword}' where id = ${request.id}`
        console.log(validSql)
        console.log(sql)
        const [validRows] = await pool.execute(validSql);
        console.log(validRows)
        if(validRows.length>0) {
            const [rows] = await pool.execute(sql);
            console.log('修改成功：',rows)
            if(rows.affectedRows == 1) {
                ctx.body = {
                    code: 0,
                    msg:'修改成功',
                    rows
                }
            } else {
                ctx.body = {
                    code: 1,
                    msg:'修改失败'
                }
            }
        } else {
            ctx.body = {
                code: 1,
                msg: '密码错误'
            }
        }
        // if(validRows)
        
        
    } catch (error) {
        console.log(error)
        ctx.body = {
            code:1,
            error
        }
    }
})
router.get('/get/get_user', async (ctx, res, req) => {
    console.log('正在访问:'+ctx.path)
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
            code:1,
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
            code:1,
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
            code:1,
            error
        }
    }
})
router.get('/get/get_order', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select makeMoney,date,type,status from orderList where account = '${request.account}'`
        console.log(sql)
        const [rows] = await pool.execute(sql);
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
//私约
router.get('/get/convension', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from convension where gender='${request.gender}' limit ${request.pageIndex*5},5`
        console.log(sql)
        const [rows] = await pool.execute(sql);
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
router.get('/get/updateMoney', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = ''
        if(request.type == 0) {
            sql += `update users set money = money + CONVERT(${request.makeMoney}, FLOAT) where account = '${request.account}'`
        } else if (request.type == 1) {
            sql += `update users set money = money + CONVERT(${request.makeMoney}, FLOAT) where account = '${request.account}'`
        }
        console.log(sql)
        // const [rows] = await pool.execute(sql);
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
//账单type 0充值 1提现  用户申请默认状态为等待  需要管理员通过
router.get('/get/set_order', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = ''
        if(request.type == 0) {
            sql = `insert into orderList(account,makeMoney,type,date) values('${request.account}',${request.makeMoney},${request.type},'${tools.DFormat(new Date())}');`
        } else if(request.type == 1) {
            sql = `insert into orderList(account,makeMoney,type,date) values('${request.account}',${request.makeMoney},${request.type},'${tools.DFormat(new Date())}');`
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
            code:1,
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
            code:1,
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
        if(request.flag == 'true') {
            sql = `update users set likeSquare = REPLACE(likeSquare, '${request.likeSquare},', '') where account = '${request.account}'`;
        } else {
            sql = `update users set likeSquare = CONCAT(likeSquare, '${request.likeSquare},') where account = '${request.account}'`;
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
            code:1,
            error
        }
    }
})
router.get('/get/get_square', async (ctx, res, req) => {
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select * from square ORDER BY id DESC limit ${request.pageIndex*5},5`;
        console.log(sql)
        const [rows] = await pool.execute(sql);
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
//获取公告
router.get('/get/get_dating', async (ctx, res, req) => {
    console.log('正在访问:'+ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = `select vipGrade,name,money,type,country,id from dating ORDER BY id DESC limit ${request.pageIndex*request.pageCount},${request.pageCount}`;
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
// 制作修改会员卡
router.get('/get/set_user', async (ctx, res, req) => {
    
    let request = ctx.query;
    console.log(request)
    var sql = ""
    if(request.name==undefined){
        sql = `UPDATE users SET avatar='${request.avatar}' WHERE account = '${request.account}'`
    } else if(request.vipStatus==''||request.vipStatus==null){
        sql = `UPDATE users SET  name='${request.name}',vipStatus='0',vipGrade='1' WHERE account = '${request.account}'`
    } else {
        sql = `UPDATE users SET name='${request.name}' WHERE account = '${request.account}'`
    }
    try {
        console.log(request)
        
        console.log(sql)
        const [rows] = await pool.execute(sql);
        console.log(rows)
        ctx.body = {
            code:0,
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
            if(exsitRows.length>0&&rows.length<1) {
                ctx.body = {
                    code: 1,
                    msg:'密码错误'
                }
            } else if(rows.length>0){
                ctx.body = {
                    code: 0,
                    rows
                }
            } else if(exsitRows.length<1) {
                ctx.body = {
                    code: 1,
                    msg:'你还没有注册'
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
            var sql = "INSERT INTO `users`(`id`, `account`, `password`, `createDate`, `inviteCode`,`gender`,vipGrade) VALUES ('','" + request.account + "','" + request.pwd + "','" + tools.DFormat(new Date()) + "','" + request.inviteCode + "','"+request.gender+"','0')"
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
            code:1,
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
        code:1,
        rows
    }
})

module.exports = router
