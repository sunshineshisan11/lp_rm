
const Koa = require('koa');
const Router = require('@koa/router');
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
router.post('/post/upload', async (ctx) => {
    // 对于文件上传，文件数据在 ctx.request.files 中
    console.log(ctx)
    const file = ctx.request.files.file;
    const textField = ctx.request.body.textField; // 处理普通字段
    if (file) {
        // 使用原生文件系统模块将文件保存到服务器
        const reader = fs.createReadStream(file.path); // 创建读取流
        const upStream = fs.createWriteStream(path.join(__dirname, 'uploads', file.name)); // 指定保存路径
        reader.pipe(upStream); // 将读取流管道到写入流
        ctx.body = { message: 'Upload successful', file: file.name };
    } else {
        ctx.status = 400; // Bad Request
        ctx.body = { message: 'No file uploaded' };
    }
    // if (file) {
    //     ctx.body = { message: 'Upload successful', file: file.name, textField };
    // } else {
    //     ctx.status = 400; // Bad Request
    //     ctx.body = { message: 'No file uploaded' };
    // }
});

// 使用路由中间件
app.use(router.routes()).use(router.allowedMethods());

module.exports = router