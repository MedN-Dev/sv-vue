// 本地开发环境域名
// const devpAddress = 'http://localhost:9000';
const devpAddress = 'http://10.1.2.92:9000';

// 生产发布环境域名
const prodAddress = 'http://jira.sail-fs.com:8099/svs';

const apiAddress = process.env.NODE_ENV === 'production' ? prodAddress : devpAddress;

// 账户相关
export const Account = {
    Login: `${apiAddress}/account/loginForMB`,
    Logout: `${apiAddress}/account/logOff`,
    UserInfo: `${apiAddress}/api/account/userinfo`,
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
    Locations:`${apiAddress}/api/portfolio/Locations`
}

// 发电量
export const Energy = {
    Projects: `${apiAddress}/api/energy/projects`,
    Tables: `${apiAddress}/api/energy/tables`,
    Data: `${apiAddress}/api/energy/data`,
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