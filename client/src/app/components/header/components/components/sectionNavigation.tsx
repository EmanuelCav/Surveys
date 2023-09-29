import { userNavigationType } from "../../../../types/index.types"

const SectionNavigation = ({ user, redirectAuth, redirectCreate, redirectProfile, navigate }: userNavigationType) => {

    const redirectUsers = () => {
        navigate('/users')
    }

    const redirectSurveys = () => {
        navigate('/surveys')
    }

    return (
        <div className='container-section-navigation'>
            {
                user.isLoggedIn ? (
                    <>
                        <div className="contain-section-nav">
                            <p className="text-section-nav" onClick={redirectSurveys}>Surveys</p>
                        </div>
                        <div className="contain-section-nav">
                            <p className="text-section-nav" onClick={redirectUsers}>Users</p>
                        </div>
                        <div className="contain-section-nav">
                            <p className="text-section-nav" onClick={redirectProfile}>Profile</p>
                        </div>
                        <div className="contain-section-nav">
                            <p className="text-section-nav" onClick={redirectCreate}>Create Survey</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="contain-section-nav">
                            <p className="text-section-nav" onClick={redirectSurveys}>Popular</p>
                        </div>
                        <div className="contain-section-nav">
                            <p className="text-section-nav" onClick={redirectAuth}>Login</p>
                        </div>
                        <div className="contain-section-nav">
                            <p className="text-section-nav">Help</p>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default SectionNavigation