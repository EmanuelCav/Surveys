import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from "./components/logo"

const Navigation = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const redirectSurveys = () => {
        navigate('/surveys')
    }

    const redirectUsers = () => {
        navigate('/users')
    }

    useEffect(() => {
    }, [location])

    return (
        <div className="container-navigation">
            <Logo navigate={navigate} isLoggedIn={isLoggedIn} />
            <p className="option-list-header" style={location.pathname === "/surveys" ? 
            {color: '#f64', cursor: 'default', fontWeight: 700, textDecoration: 'underline'} : {}} onClick={redirectSurveys}>
                {isLoggedIn ? "Surveys" : "Popular"}
            </p>
            <p className="option-list-header" style={location.pathname === "/users" ? 
            {color: '#f64', cursor: 'default', fontWeight: 700, textDecoration: 'underline'} : {}} onClick={redirectUsers}>
                {isLoggedIn && "Users"}
            </p>
        </div>
    )
}

export default Navigation