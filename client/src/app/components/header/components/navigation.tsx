import Logo from "./components/logo"

const Navigation = () => {
    return (
        <div className="container-navigation">
            <Logo />
            <p className="option-list-header">Popular</p>
            <p className="option-list-header">About</p>
        </div>
    )
}

export default Navigation