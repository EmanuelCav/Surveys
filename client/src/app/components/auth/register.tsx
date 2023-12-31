import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AccountAuth from "./components/accountAuth"
import FormHeader from "./components/formHeader"
import SelectGender from "./components/selectGender"

import { IRegister } from "../../interfaces/User";

import { registerApi } from "../../server/api/user.api";
import { registerAction } from "../../server/features/user.features";
import { loadingAction } from "../../server/features/response.features";

import { dangerMessage } from "../../helper/message";

const Register = ({ setIsLogin, isLogin }: { setIsLogin: any, isLogin: boolean }) => {

    const dispatch = useDispatch()

    const initialState: IRegister = {
        username: "",
        email: "",
        gender: "",
        password: "",
        confirm: "",
    }

    const [userData, setUserData] = useState<IRegister>(initialState)

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirm, setShowConfirm] = useState<boolean>(false)

    const { username, email, gender, password, confirm } = userData

    const setPassword = () => {
        setShowPassword(!showPassword)
    }
    const setConfirm = () => {
        setShowConfirm(!showConfirm)
    }

    const getData = async () => {

        try {

            const { data } = await registerApi(userData)

            dispatch(loadingAction(true))
            dispatch(registerAction(data))

            setTimeout(() => {
                dispatch(loadingAction(false))
            }, 400)

            setIsLogin(true)

        } catch (error: any) {
            dangerMessage(error.response.data.message)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <form className="container-form-auth" onSubmit={handleSumbit}>
            <ToastContainer />
            <div className="separator">
                <FormHeader />
            </div>
            <div className="separator">
                <input type="text" name="username" className="input-form" placeholder="USERNAME" autoComplete="off" value={username} onChange={handleChange} maxLength={45} />
            </div>
            <div className="separator">
                <input type="text" name="email" className="input-form" placeholder="EMAIL" autoComplete="off" value={email} onChange={handleChange} maxLength={50} />
            </div>
            <div className="separator">
                <SelectGender gender={gender} handleChange={handleChange} />
            </div>
            <div className="separator">
                <div className="contain-password-input">
                    <input type={showPassword ? "text" : "password"} name="password" className="input-form" placeholder="PASSWORD" value={password} onChange={handleChange} />
                    {
                        showPassword ? <AiFillEyeInvisible className="eye-password" onClick={setPassword} /> : <AiFillEye className="eye-password" onClick={setPassword} />
                    }
                </div>
            </div>
            <div className="separator">
                <div className="contain-password-input">
                    <input type={showConfirm ? "text" : "password"} name="confirm" className="input-form" placeholder="CONFIRM PASSWORD" value={confirm} onChange={handleChange} />
                    {
                        showConfirm ? <AiFillEyeInvisible className="eye-password" onClick={setConfirm} /> : <AiFillEye className="eye-password" onClick={setConfirm} />
                    }
                </div>
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