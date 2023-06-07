const USER_KEY="userInfo"

export const  setCachedUserInfo = (userInfo: any) => {
    window.localStorage.setItem(USER_KEY, JSON.stringify(userInfo));
}

export const getCachedUserInfo = () => {
    const response = window.localStorage.getItem(USER_KEY)
    return response ? JSON.parse(response) : []
}

