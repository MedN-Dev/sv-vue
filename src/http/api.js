// 本地开发环境域名
const apiAddress = 'http://10.1.2.59:9000';

// 生产环境域名
// const apiAddress = 'http://solar-value.com';

export default apiAddress;

// 账户相关
export const Account = {
    Login: `${apiAddress}/account/loginForMB`,
    Logout: `${apiAddress}/account/logOff`,
}

// 多项目总览
export const Collection = {
    List: `${apiAddress}/api/collection/list`,
    Projects: `${apiAddress}/api/collection/projects`,
}

// 指标面板
export const Widgets = {
    Data: `${apiAddress}/api/widgets/data`,
}

// 多项目Portfolio
export const Portfolio = {
    Region: `${apiAddress}/api/portfolio/region`,
    Charts: `${apiAddress}/api/portfolio/chats`,
    Projects: `${apiAddress}/api/portfolio/projects`,
    Widgets: `${apiAddress}/api/portfolio/widgets`,
}

// 发电量
export const Energy = {
    Projects: `${apiAddress}/api/energy/projects`,
    Tables: `${apiAddress}/api/energy/tables`,
    Data: `${apiAddress}/api/energy/data`, // 发电量图表
}

// 项目相关
export const Project = {
    Favorite: `${apiAddress}/api/project/favorite`,
    UnFavorite: `${apiAddress}/api/project/unfavorite`,
    Items: `${apiAddress}/api/project/items`,
    Documents: `${apiAddress}/api/project/documents`,
    Infoes: `${apiAddress}/api/project/infoes`,
}

// 日历事件
export const Events = {
    Data: `${apiAddress}/api/events/data`,
}

// 搜索功能
export const Search = {
    Projects: `${apiAddress}/api/search/projects`,
}