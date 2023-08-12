import { useNavigate } from 'react-router-dom';

import Logo from "./components/logo"

const Navigation = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

    const navigate = useNavigate()

    const redirectSurveys = () => {
        navigate('/surveys')
    }

    return (
        <div className="container-navigation">
            <Logo navigate={navigate} />
            <p className="option-list-header" onClick={redirectSurveys}>{isLoggedIn ? "Surveys" : "Popular"}</p>
            <p className="option-list-header">{isLoggedIn ? "Users" : "About"}</p>
        </div>
    )
}

export default Navigation