import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Presentation from "../components/index/Presentation";
import Visualization from "../components/index/Visualization";
import SurveySection from "../components/index/CreateAndParticipate";
import Resume from "../components/index/Resume";
import Footer from "../components/index/Footer";
import ContainerAuth from "../components/auth/ContainerAuth";

import { IReducer } from "../interfaces/Reducer";

import { selector } from "../helper/selector";

const Index = () => {

  const navigate = useNavigate()

  const user = useSelector((state: IReducer) => selector(state).user)

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)

  useEffect(() => {
    if (isLogin || isRegister) {
      document.body.style.overflow = "hidden";
      return
    }

    document.body.style.overflow = "auto";

  }, [isLogin, isRegister])

  useEffect(() => {
    if(user.user.token) {
      navigate("/explore/surveys")
    }
  }, [user.user.token])

  return (
    <>
      {
        (isLogin || isRegister) && <ContainerAuth
          isLogin={isLogin} isRegister={isRegister} 
          navigate={navigate} setIsLogin={setIsLogin} setIsRegister={setIsRegister}
        />
      }
      <Presentation setIsLogin={setIsLogin} />
      <Visualization />
      <SurveySection />
      <Resume setIsLogin={setIsLogin} />
      <Footer navigate={navigate} />
    </>
  )
}

export default Index