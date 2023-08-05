import AccountAuth from "./components/AccountAuth"
import FormHeader from "./components/formHeader"
import SelectGender from "./components/selectGender"

const Register = ({ setIsLogin, isLogin }: { setIsLogin: any, isLogin: boolean }) => {
    return (
        <form className="container-form-auth">
            <div className="separator">
                <FormHeader />
            </div>
            <div className="separator">
                <input type="text" name="username" className="input-form" placeholder="USERNAME" autoComplete="off" />
            </div>
            <div className="separator">
                <input type="text" name="email" className="input-form" placeholder="EMAIL" autoComplete="off" />
            </div>
            <div className="separator">
                <SelectGender />
            </div>
            <div className="separator">
                <input type="password" name="password" className="input-form" placeholder="PASSWORD" />
            </div>
            <div className="separator">
                <input type="password" name="confirm" className="input-form" placeholder="CONFIRM PASSWORD" />
            </div>
            <div className="separator">
                <button className="button-form">
                    REGISTER
                </button>
            </div>
            <div className="separator">
                <AccountAuth typeAuth="Login" textAccount="I have already an account" setIsLogin={setIsLogin} isLogin={isLogin} />
            </div>
        </form>
    )
}

export default Register