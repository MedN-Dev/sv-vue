// 开发环境域名-Egg服务器接口
const apiAddress = 'http://10.1.2.59:8081';

// 生产环境域名
// const apiAddress = 'http://solar-value.com';

export default apiAddress;

// 账户相关
export const Account = {
    Login: `${apiAddress}/account/loginForMB`,
    Logout: `${apiAddress}/account/logoutForMB`,
}

// 多项目总览
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

// 发电量
export const Energy = {
    Projects: `${apiAddress}/api/energy/projects`,
}

// 项目相关
export const Project = {
    Favorite: `${apiAddress}/api/project/favorite`,
    UnFavorite: `${apiAddress}/api/project/unfavorite`,
    Items: `${apiAddress}/api/project/items`,
    Documents: `${apiAddress}/api/project/documents`,
}

// 日历事件
export const Events = {
    Data: `${apiAddress}/api/events/data`,
}