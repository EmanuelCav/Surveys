import { useNavigate } from 'react-router-dom';

const NotFountPage = () => {

    const navigate = useNavigate()

    const redirectPage = () => {
        navigate('/')
    }

    return (
        <div className="not-fount-container">
            <div className="container-message-not-found">
                <img src="/survey.png" alt="survey_icon" className="image-logo-header" />
                <h1 className="text-logo-header" style={{ margin: '15px' }}>Page not found</h1>
                <button className="button-form" onClick={redirectPage}>
                    Come back
                </button>
            </div>
        </div>
    )
}

export default NotFountPage