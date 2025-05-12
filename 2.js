
const Koa = require('koa');
const Router = require('@koa/router');
// const views = require('koa-views')
const static = require('koa-static')
const koaBody = require('koa-body'); // 导入 koa-body
const cors = require('@koa/cors');
const fs = require('fs');
const path = require('path');
const app = new Koa();
const router = new Router();


// 启用 CORS
app.use(cors());

// 使用 koa-body 解析请求体
app.use(koaBody({
    multipart: true, // 支持文件上传
}));

// 定义 POST 路由
router.post('/upload/square', async (ctx, req) => { 
    try {
        // 对于文件上传，文件数据在 ctx.request.files 中
        // const file = ctx.request.files.file;
        const file = ctx.request?.files?.file;
        console.log("file", file)
        const textField = ctx.request.body.textField; // 处理普通字段
        const reader = await fs.createReadStream(file.path); // 创建读取流
        const upStream = fs.createWriteStream(path.join(__dirname+'/uploads/', 'square', file.name)); // 指定保存路径
        reader.pipe(upStream); // 将读取流管道到写入流
        ctx.body = { code: 0, msg: '上传完毕', file: file.name };

    } catch (error) {
        
    }

});
router.post('/upload/system', async (ctx, req) => { 
    try {
        // 对于文件上传，文件数据在 ctx.request.files 中
        // const file = ctx.request.files.file;
        const file = ctx.request?.files?.file;
        console.log("file", file)
        const textField = ctx.request.body.textField; // 处理普通字段
        const reader = await fs.createReadStream(file.path); // 创建读取流
        const upStream = fs.createWriteStream(path.join(__dirname+'/uploads/', 'mine', file.name)); // 指定保存路径
        reader.pipe(upStream); // 将读取流管道到写入流
        ctx.body = { code: 0, msg: '上传完毕', file: file.name };

    } catch (error) {
        
    }

});
const api = require('./manage/api/api');
const { nextTick } = require('process');

// 使用路由中间件
router.use('/api', api.routes()).use(api.allowedMethods());
app.use(api.routes()).use(api.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());
app.use(static(path.join(__dirname, './uploads/square')))
app.use(static(path.join(__dirname, './manage/uploads/system')))
// app.use(static('./uploads'))

// 启动 Koa 服务器
app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
