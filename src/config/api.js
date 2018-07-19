// 开发环境域名
const apiAddress = 'http://10.1.2.59:8080';

// 生产环境域名
// const apiAddress = 'http://127.0.0.1:7001';

export default apiAddress;

export const News = {
    newsList: `${apiAddress}/api/v2/newsList`,
}

