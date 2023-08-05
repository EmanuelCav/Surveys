import { ReactNode } from 'react'
import { useLocation } from "react-router-dom";

const Container = ({ children }: { children: ReactNode }) => {

  const location = useLocation()

  return (
    <div className='container' style={location.pathname !== "/auth" ? { marginTop: '76px' } : {}}>
        {children}
    </div>
  )
}

export default Container