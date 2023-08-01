import Auth from "./components/auth"
import Navigation from "./components/navigation"

const Header = () => {
  return (
    <div className="container-header">
        <Navigation />
        <Auth />
    </div>
  )
}

export default Header