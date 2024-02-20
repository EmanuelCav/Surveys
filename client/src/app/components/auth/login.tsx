import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AccountAuth from "./components/accountAuth"
import FormHeader from "./components/formHeader";

import { userLogin } from '../../server/actions/user.actions';

import { isLoginType } from "../../types/auth.types";
import { ILogin } from '../../interfaces/User';

const Login = ({ setIsLogin, isLogin }: isLoginType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialState: ILogin = {
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState<ILogin>(initialState)

    const { email, password } = userData

    const getData = async () => {

        dispatch(userLogin({
            userData,
            navigate
        }) as any)

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <form className="container-form-auth" onSubmit={handleSumbit}>
            <ToastContainer limit={1} />
            <div className="separator">
                <FormHeader />
            </div>
            <div className="separator">
                <input type="text" name="email" className="input-form" placeholder="EMAIL" autoComplete="off" value={email} onChange={handleChange} />
            </div>
            <div className="separator">
                <input type="password" name="password" className="input-form" placeholder="PASSWORD" value={password} onChange={handleChange} />
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