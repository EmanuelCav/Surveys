import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Login from "../components/auth/login"
import Register from '../components/auth/register';

import { isStorage } from '../helper/storage';

const Auth = () => {

  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState<boolean>(true)

  useEffect(() => {

    (async () => {
      if (isStorage()) {
        navigate('/surveys')
      }
    })()
    
  }, [])

  return (
    <div className="container-auth">
      {
        isLogin ?
          <Login setIsLogin={setIsLogin} isLogin={isLogin} /> :
          <Register setIsLogin={setIsLogin} isLogin={isLogin} />
      }
    </div>
  )
}

export default Auth