const Router = require('@koa/router');
const express = require("express")
const router = new Router();
var app = express();
var bodyParse = require("body-parser")

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static("public"))

const pool = require('../db');
const tools = require('../tools/index')

//修改凭证
router.get('/get/set_pz', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    console.log(request)
    var sql = ""
    if (request.pz) {
        sql = `UPDATE users SET pz='${request.pz}' WHERE account = '${request.account}'`
    } else if (request.pz1) {
        sql = `UPDATE users SET pz1='${request.pz1}' WHERE account = '${request.account}'`
    } else if (request.pz2) {
        sql = `UPDATE users SET pz2='${request.pz2}' WHERE account = '${request.account}'`
    }
    try {
        console.log(request)
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
//查询用户
router.get('/get/user', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        var sql = ''
        var countSql = ''
        sql += `SELECT id,account, password, inviteCode, dataError, age, gender, bankCard, money, avatar, vipCode, createDate, vipGrade, name, vipStatus, 
        likeSquare,city,remake,lineCode,pz,pz1,pz2 FROM users where 1=1`
        countSql = `select count(id) as sum from users where 1=1`
        if (request.account && request.account != undefined) {
            sql += ` and account = '${request.account}' or name = '${request.account}'`
            countSql += ` and account = '${request.account}' or name = '${request.account}'`
        }
        if (request.inviteCode && request.inviteCode != undefined) {
            sql += ` and inviteCode = '${request.inviteCode}'`
            countSql += ` and inviteCode = '${request.inviteCode}'`
        }
        if (request.vipGrade && request.vipGrade != undefined) {
            sql += ` and vipGrade = '${request.vipGrade}'`
            countSql += ` and vipGrade = '${request.vipGrade}'`
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
//投票纪录
router.get('/add/vote', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = `insert into vote(account,voteId,voteNum,date) values('${request.account}',${request.voteId},${request.voteNum},'${tools.DFormat(new Date())}');`
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
//投票数增加
router.get('/update/giftVoteAdd', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = `update gift set vote = vote + CONVERT(${request.vote}, FLOAT) where id = ${request.id}`
        console.log(sql)
        const [rows] = await pool.execute(sql);
        console.log('修改成功：', rows)
        if (rows.affectedRows == 1) {
            ctx.body = {
                code: 0,
                msg: '修改成功',
                rows
            }
        } else {
            ctx.body = {
                code: 1,
                error: '修改失败'
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
//查询投票模特
router.get('/get/gift', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = `select id,name,src,vote from gift where 1=1`
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
//邀请码查询用户  验证客户邀请码  分配客户
router.get('/get/userInCode', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = `select id,account, password, inviteCode, dataError, age, gender, bankCard, money, avatar, vipCode, createDate, vipGrade, name, vipStatus, 
        likeSquare,lineCode from users where inviteCode = ${request.inviteCode} and vipGrade = 3`
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
//修改密码
router.get('/get/updatePWD', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var validSql = `select account from users where id = ${request.id} and password = '${request.oldPassword}'`
        var sql = `update users set password = '${request.newPassword}' where id = ${request.id}`
        console.log(validSql)
        console.log(sql)
        const [validRows] = await pool.execute(validSql);
        console.log(validRows)
        if (validRows.length > 0) {
            const [rows] = await pool.execute(sql);
            console.log('修改成功：', rows)
            if (rows.affectedRows == 1) {
                ctx.body = {
                    code: 0,
                    msg: '修改成功',
                    rows
                }
            } else {
                ctx.body = {
                    code: 1,
                    msg: '修改失败'
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
            code: 1,
            error
        }
    }
})
router.get('/get/get_user', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
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
    console.log(request.user + '正在访问:' + ctx.path)
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
    console.log(request.user + '正在访问:' + ctx.path)
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
    console.log(request.user + '正在访问:' + ctx.path)
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
            code: 1,
            error
        }
    }
})
//私约
router.get('/get/convension', async (ctx, res, req) => {
    console.log('正在访问:' + ctx.path)
    let request = ctx.query;
    try {
        console.log(request)
        // if(request.gender=='0') {
        //     request.gender='女'
        // }
        // if(request.gender=='1') {
        //     request.gender='男'
        // }
        var sql = `SELECT account, height, weight, xw, job, city, avatar, jj, id, video, name,gender FROM convension WHERE 1`
        countSql = `select count(id) as sum from convension where 1=1 `

        if (request.gender && request.gender != undefined) {
            sql += ` and gender = '${request.gender}'`
            countSql += ` and gender = '${request.gender}'`
        }
        if (request.pageIndex && request.pageIndex != undefined) {
            sql += ` ORDER BY id DESC limit ${request.pageIndex * request.pageSize},${request.pageSize}`
        }
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
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = ''
        if (request.type == 0) {
            sql += `update users set money = money + CONVERT(${request.makeMoney}, FLOAT),voteFlag = ${request.voteFlag} where account = '${request.account}'`
        } else if (request.type == 1) {
            sql += `update users set money = money - CONVERT(${request.makeMoney}, FLOAT) where account = '${request.account}'`
        }
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
//账单type 0充值 1提现  用户申请默认状态为等待  需要管理员通过
router.get('/get/set_order', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = ''
        if (request.type == 0) {
            sql = `insert into orderList(account,makeMoney,type,date) values('${request.account}',${request.makeMoney},${request.type},'${tools.DFormat(new Date())}');`
        } else if (request.type == 1) {
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
            code: 1,
            error
        }
    }
})
//gift
router.get('/get/get_gift', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
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
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = ''
        if (request.flag == 'true') {
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
            code: 1,
            error
        }
    }
})
router.get('/get/get_square', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = `select * from square ORDER BY id DESC limit ${request.pageIndex * 5},5`;
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
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        console.log(request)
        var sql = `select vipGrade,name,money,type,country,id from dating ORDER BY id DESC limit ${request.pageIndex * request.pageCount},${request.pageCount}`;
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
// 制作修改会员卡
router.get('/get/set_user', async (ctx, res, req) => {
    let request = ctx.query;
    console.log(request.user + '正在访问:' + ctx.path)
    console.log(request)
    var sql = ""
    if (request.name == undefined) {
        sql = `UPDATE users SET avatar='${request.avatar}' WHERE account = '${request.account}'`
    } else if (request.vipStatus == '' || request.vipStatus == null) {
        sql = `UPDATE users SET  name='${request.name}',vipStatus='0',vipGrade='1' WHERE account = '${request.account}'`
    } else {
        sql = `UPDATE users SET name='${request.name}' WHERE account = '${request.account}'`
    }
    try {
        console.log(request)
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
router.get('/get/login', async (ctx) => {
    let request = ctx.query;
    console.log('request:', request);
    console.log(request.user + '正在访问:' + ctx.path)
    try {
        if (request.type == 0) {
            var sql = `select * from users where account = '${request.account}' and password = '${request.pwd}'`;
            var exsitSql = `select * from users where account = '${request.account}'`;
            console.log(sql)
            const [rows] = await pool.execute(sql);
            const [exsitRows] = await pool.execute(exsitSql);
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
            if (getUser.length > 0) {
                ctx.body = {
                    code: 1,
                    msg: '该账号已注册'
                }
                return
            }
            // let sysSql = `select * from sysdata where swtich = 1`
            // const [sysRows] = await pool.execute(sysSql)
            // console.log(sysRows)
            let code = Math.floor(Math.random() * 900000) + 100000
            var sql = "INSERT INTO `users`(`id`, `account`, `password`, `createDate`, `inviteCode`,`gender`,`vipGrade`,`vipCode`,money) VALUES ('','" + request.account + "','" + request.pwd + "','" + tools.DFormat(new Date()) + "','" + request.inviteCode + "','" + request.gender + "','0','"+code+"','0')"
            const [rows] = await pool.execute(sql);
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
    console.log(request.user + '正在访问:' + ctx.path)
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
    console.log(request.user + '正在访问:' + ctx.path)
    console.log(request);
    var sql = `delelte from users where id = ${request.id}`;
    console.log(sql)
    const [rows] = await pool.execute(sql);
    ctx.body = {
        code: 1,
        rows
    }
})

module.exports = router
