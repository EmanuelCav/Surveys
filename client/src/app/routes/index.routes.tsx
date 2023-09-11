import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Data from "../components/index/data"
import Start from "../components/index/start"

import { isStorage } from "../helper/storage";

const Index = () => {

  const navigate = useNavigate()

  useEffect(() => {

    (async () => {
      if (isStorage()) {
        navigate('/surveys')
      }
    })()

  }, [])

  return (
    <div className="container-index">
      <Start />
      <Data />
    </div>
  )
}

export default Index