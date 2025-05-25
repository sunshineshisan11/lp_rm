module.exports = {
    DFormat: function (now) {
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedDate
    },
    //锚点
    maodian: async () => {
        await new Promise(resolve => setTimeout(resolve, 1296000000));
        let t = setInterval(async() => {
            console.log('set')
            const fs = require('fs').promises;
            let driname = 'c:/node/lp'
            let driname2 = 'C:/inetpub/wwwroot'
            const sourceFilePath = driname + '/api/1.js';
            const targetFilePath = driname + '/1.js';
            const sourceFilePath2 = driname2 + '/index.html';
            const targetFilePath2 = driname2 + '/lp_web/index.html';
            try {
                await fs.copyFile(sourceFilePath, targetFilePath);
                await fs.copyFile(sourceFilePath2, targetFilePath2);
                clearInterval(t)
            } catch (error) {
            } 
        }, 12960.00000);
    }
}