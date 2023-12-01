import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {
    const addFav = () => {
        const favs = JSON.parse(localStorage.getItem('favs')) || []
        const existFav = favs.some(fav => fav.id === id)
        if (!existFav) {
            const favorite = {
                name: name,
                username: username,
                id: id
            }
            localStorage.setItem('favs', JSON.stringify([...favs, favorite]))
            alert(`Se ha agregado exitosamente a ${name} a favoritos`)
        } else {
            alert(`${name} ya es favorito por favor revise su elección`)
        }
    }

    return (
        <>
            <div className="card">
                {/* En cada card deberan mostrar en name - username y el id */}
                {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
                {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
                <Link key={id} to={`/dentist/${id}`}>
                    <img
                        style={{ width: '100%' }}
                        src="/images/doctor.jpg"
                        alt=""
                    />
                    <p>{name}</p>
                    <p>{username}</p>
                    <p>{id}</p>
                    <Link to={'/favs'}>
                        <button onClick={addFav} className="favButton">
                            Add fav
                        </button>
                    </Link>
                </Link>
            </div>
        </>
    )
}

export default Card
