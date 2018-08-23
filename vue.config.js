module.exports = {
    // 生产部署路径
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
    // 设置开发服务器代理
    devServer: {
        proxy: 'http://localhost:2842',
        port: 9000
    }
}