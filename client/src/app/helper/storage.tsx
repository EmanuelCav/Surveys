export const isStorage = (): boolean => {

    const value = JSON.parse(localStorage.getItem("persist:surveys-app-storage") as string)

    return JSON.parse(value.user).isLoggedIn

}