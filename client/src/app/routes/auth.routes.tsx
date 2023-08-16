import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Login from "../components/auth/login"
import Register from '../components/auth/register';

import { IReducer } from '../interfaces/Reducer';

const Auth = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true)

  const { user } = useSelector((state: IReducer) => state)

  const navigate = useNavigate()

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate('/surveys')
    }
  }, [user.isLoggedIn])


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