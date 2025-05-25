const https = require('https');
const fs = require('fs');
const path = require('path');
const httpProxy = require('http-proxy');

// 读取证书和私钥文件
const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 's297656039_soulmatemeet.vip_server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 's297656039_soulmatemeet.vip_server.crt')),
};

// 如果有中间证书文件，也需要读取并添加到配置中
if (fs.existsSync(path.join(__dirname, 'cert', 'intermediate_certificate.crt'))) {
    options.ca = fs.readFileSync(path.join(__dirname, 'cert', 'intermediate_certificate.crt'));
}


// 创建代理服务器实例
const proxy = httpProxy.createProxyServer({});

// 创建一个简单的 HTTP 请求处理函数
const server = https.createServer(options, (req, res) => {
    const target = 'http://localhost:8888';
    proxy.web(req, res, Object.assign({ target }));
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello, this is a secure Node.js application!\n');
});


// 监听端口
const port = 168; // HTTPS 默认端口
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
