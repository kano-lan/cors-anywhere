const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8081;

import * as cors_proxy from 'cors-anywhere';
cors_proxy.createServer({
    // 許可するオリジンを記載
    originWhitelist: ['https://example.com'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('OHTAM CORS Anywhere起動中 ' + host + ':' + port);
});
