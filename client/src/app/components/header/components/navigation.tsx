import { useNavigate } from 'react-router-dom';

import Logo from "./components/logo"

const Navigation = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

    const navigate = useNavigate()

    const redirectSurveys = () => {
        navigate('/surveys')
    }

    const redirectUsers = () => {
        navigate('/users')
    }

    return (
        <div className="container-navigation">
            <Logo navigate={navigate} isLoggedIn={isLoggedIn} />
            <p className="option-list-header" onClick={redirectSurveys}>{isLoggedIn ? "Surveys" : "Popular"}</p>
            <p className="option-list-header" onClick={redirectUsers}>{isLoggedIn && "Users"}</p>
        </div>
    )
}

export default Navigation