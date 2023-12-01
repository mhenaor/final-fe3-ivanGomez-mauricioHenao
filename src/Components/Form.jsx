import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.elements.name.value
        const email = e.target.elements.email.value
        setUser({ name, email })

        const validate = email => {
            const expReg =
                /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
            return expReg.test(email)
        }

        if (name.length > 5 && validate(email)) {
            setMessage(
                `Gracias ${name}, te contactaremos cuanto antes vía email`
            )
        } else {
            setMessage('Por favor verifique su información nuevamente')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre Completo"
                        name="name"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        name="email"
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <h4>{message}</h4>
        </>
    )
}

export default Form
