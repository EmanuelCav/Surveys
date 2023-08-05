import AccountAuth from "./components/AccountAuth"
import FormHeader from "./components/formHeader";

import { isLoginType } from "../../types/auth.types";

const Login = ({ setIsLogin, isLogin }: isLoginType) => {

    return (
        <form className="container-form-auth">
            <div className="separator">
                <FormHeader />
            </div>
            <div className="separator">
                <input type="text" name="email" className="input-form" placeholder="EMAIL" autoComplete="off" />
            </div>
            <div className="separator">
                <input type="password" name="password" className="input-form" placeholder="PASSWORD" />
            </div>
            <div className="separator">
                <button className="button-form">
                    LOGIN
                </button>
            </div>
            <div className="separator">
                <AccountAuth typeAuth="Register" textAccount="I have not an account" setIsLogin={setIsLogin} isLogin={isLogin} />
            </div>
        </form>
    )
}

export default Login