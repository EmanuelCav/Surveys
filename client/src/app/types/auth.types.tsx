export type isAccountType = {
    typeAuth: string;
    textAccount: string;
    setIsLogin: (isLogin: boolean) => void;
    isLogin: boolean;
}
export type isLoginType = {
    setIsLogin: (isLogin: boolean) => void;
    isLogin: boolean;
}