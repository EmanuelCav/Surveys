import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import AccountAuth from "./components/accountAuth"
import FormHeader from "./components/formHeader";

import { loginApi } from "../../server/api/user.api";
import { loginAction } from "../../server/features/user.features";
import { loadingAction } from '../../server/features/response.features';

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

        try {

            const { data } = await loginApi(userData)

            dispatch(loadingAction(true))
            dispatch(loginAction(data))

            setTimeout(() => {
                dispatch(loadingAction(false))
            }, 400)

            navigate('/surveys')

        } catch (error) {
            console.log(error);
        }
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