import { useNavigate } from 'react-router-dom';

import Logo from "./components/logo"

const Navigation = () => {

    const navigate = useNavigate()

    const redirectSurveys = () => {
        navigate('/surveys')
    }

    return (
        <div className="container-navigation">
            <Logo navigate={navigate} />
            <p className="option-list-header" onClick={redirectSurveys}>Popular</p>
            <p className="option-list-header">About</p>
        </div>
    )
}

export default Navigation