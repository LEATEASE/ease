//封装本地存储用户信息的方法
export const SET_TOKEN = (userInfo: string) => {
    localStorage.setItem('userInfo', userInfo)
}

export const GET_TOKEN = () => {
    return localStorage.getItem('userInfo')
}
//删除本地存储的方法
export const REMOVE_TOKEN = () => {
    localStorage.removeItem('userInfo')
}