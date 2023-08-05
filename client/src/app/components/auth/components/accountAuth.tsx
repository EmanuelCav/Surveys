import { isAccountType } from "../../../types/auth.types";

const AccountAuth = ({ typeAuth, textAccount, setIsLogin, isLogin }: isAccountType) => {

    const register = () => {
        setIsLogin(!isLogin)
    }

    return (
        <p className="text-account-form">
            {textAccount}
            <span className="auth-text-account-form" onClick={register}>
                {typeAuth}
            </span>
        </p>
    )
}

export default AccountAuth