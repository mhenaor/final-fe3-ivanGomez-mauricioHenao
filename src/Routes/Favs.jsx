import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
    const favorites = JSON.parse(localStorage.getItem('favs')) || []

    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
                {favorites.map(doc => (
                    <Card
                        key={doc.id}
                        name={doc.name}
                        username={doc.username}
                        id={doc.id}
                    />
                ))}
            </div>
        </>
    )
}

export default Favs
