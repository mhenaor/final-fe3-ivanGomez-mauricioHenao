import { useContext } from 'react'

import { ContextGlobal } from '../Components/utils/global.context'

import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
    const { theme, toggleDarkMode, activeTheme } = useContext(ContextGlobal)

    return (
        <>
            <nav className={activeTheme}>
                {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
                {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
                <Link to="/">
                    <strong>DH </strong>Odonto
                </Link>
                <span>
                    <Link to="/home">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/favs">Favs</Link>
                    <button onClick={toggleDarkMode} className={activeTheme}>
                        {/* Change theme */}
                        {theme ? 'Modo Oscuro' : 'Modo Claro'}
                    </button>
                </span>
            </nav>
        </>
    )
}

export default Navbar
