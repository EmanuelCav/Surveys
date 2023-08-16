import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Data from "../components/index/data"
import Start from "../components/index/start"

import { IReducer } from "../interfaces/Reducer";

const Index = () => {

  const { user } = useSelector((state: IReducer) => state)

  const navigate = useNavigate()

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate('/surveys')
    }
  }, [user.isLoggedIn])


  return (
    <div className="container-index">
      <Start />
      <Data />
    </div>
  )
}

export default Index