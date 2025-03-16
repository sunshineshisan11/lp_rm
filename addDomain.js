const fs = require('fs');
const path = require('path');

// 获取环境变量中的域名
// const domain = process.env.NODE_ENV === 'production'
//   ? process.env.VITE_APP_DOMAIN
//   : process.env.VITE_APP_DOMAIN;
const domain = 'https://154.39.81.208'
// 打包后文件所在的目录
const distDir = path.join(__dirname, 'dist');

// 递归遍历目录
function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      traverseDirectory(filePath);
    } else if (path.extname(file) === '.html') {
      // 读取 JS 文件内容
      const content = fs.readFileSync(filePath, 'utf8');
      // 在文件头部添加域名信息
      const newContent = `/**
 * 此文件所属域名: ${domain}
 */
${content}`;
      // 将新内容写回文件
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`已为文件 ${filePath} 添加域名信息`);
    }
  }
}

// 开始遍历 dist 目录
traverseDirectory(distDir);
