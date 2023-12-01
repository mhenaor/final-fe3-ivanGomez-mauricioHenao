import { useContext } from 'react'

import { ContextGlobal } from './Components/utils/global.context'

import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
    const { activeTheme } = useContext(ContextGlobal)

    return (
        <>
            <div className={activeTheme}>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default App
