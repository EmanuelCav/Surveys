import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Data from "../components/index/data"
import Start from "../components/index/start"

import { IReducerUser } from "../interfaces/Reducer";

const Index = () => {

  const { isLoggedIn } = useSelector((state: IReducerUser) => state)

  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/surveys')
    }
  }, [])


  return (
    <div className="container-index">
      <Start />
      <Data />
    </div>
  )
}

export default Index