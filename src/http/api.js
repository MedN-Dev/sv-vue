// 开发环境域名-Egg服务器接口
const apiAddress = 'http://10.1.2.59:8081';

// 生产环境域名
// const apiAddress = 'http://127.0.0.1:7001';

export default apiAddress;

export const Account = {
    Login: `${apiAddress}/Account/Login`,
    Logout: `${apiAddress}/api/v2/Account/Logout`,
    GetUserInfo: `${apiAddress}/api/v2/Account/UserInfo`,
}

// 多项目分类
export const Collection = {
    List: `${apiAddress}/api/collection/list`,
    Widgets: `${apiAddress}/api/collection/widgets`,
    Projects: `${apiAddress}/api/collection/projects`,
}

// 多项目Portfolio
export const Portfolio = {
    Region: `${apiAddress}/api/portfolio/region`,
    Charts: `${apiAddress}/api/portfolio/chats`,
    Projects: `${apiAddress}/api/portfolio/projects`,
}

// 发电量也页面
export const Energy = {
    Projects: `${apiAddress}/api/energy/projects`,
}

// 项目相关
export const Project = {
    Favorite: `${apiAddress}/api/project/favorite`,
    UnFavorite: `${apiAddress}/api/project/unfavorite`
}