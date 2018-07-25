// 开发环境域名-Egg服务器接口
// const apiAddress = 'http://10.1.2.59:8080';

// 测试环境域名-Postman接口
const apiAddress = 'https://86b4e00a-2096-4324-a405-4ddf0d56d4f0.mock.pstmn.io';

// 生产环境域名
// const apiAddress = 'http://127.0.0.1:7001';

export default apiAddress;

export const Account = {
    Login: `${apiAddress}/api/v2/Account/Login`,
    Logout: `${apiAddress}/api/v2/Account/Logout`,
    GetUserInfo: `${apiAddress}/api/v2/Account/UserInfo`,
}

export const News = {
    GetNewsList: `${apiAddress}/api/v2/News/GetNewsList`,
}



