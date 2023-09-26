import { useNavigate } from 'react-router-dom';

const InfoStart = () => {

    const navigate = useNavigate()

    const redirectLogin = () => {
        navigate('/auth')
    }
    
    return (
        <div className="container-info-start">
            <h1 className="header-info-start">Create and take part in surveys in a simple way</h1>
            <button className="button-form" onClick={redirectLogin}>Start Now ➜</button>
        </div>
    )
}

export default InfoStart