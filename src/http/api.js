// 开发环境域名-Egg服务器接口
const apiAddress = 'http://10.1.2.59:8081';

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

// 多项目
export const Collection = {
    List: `${apiAddress}/api/collection/list`,
    Widgets: `${apiAddress}/api/collection/widgets`,
    Projects: `${apiAddress}/api/collection/projects?id=1&page=1&pagesize=10`,
}

// 多项目
export const Portfolio = {
    Region: `${apiAddress}/api/portfolio/region?id=1`,
    Charts: `${apiAddress}/api/portfolio/charts?id=1&region=&fit=&codYears=0-5`
}