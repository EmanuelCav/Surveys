import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AccountAuth from "./components/accountAuth"
import FormHeader from "./components/formHeader"
import SelectGender from "./components/selectGender"

import { IRegister } from "../../interfaces/User";

import { userRegister } from "../../server/actions/user.actions";

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

        dispatch(userRegister({
            userData,
            setIsLogin
        }) as any)

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