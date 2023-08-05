import { useState } from 'react';

import Login from "../components/auth/login"
import Register from '../components/auth/register';

const Auth = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true)

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