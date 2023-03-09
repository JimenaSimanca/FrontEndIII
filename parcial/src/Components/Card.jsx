import React from 'react'

const Card = (props) => {
    return (
        <div>
        <h2>Soy card</h2>
        <h3>{props.peli}:¡Genial! Ahora sabemos que es tu pelicula favorita </h3>
        <h4>¡De lujo! Tu artista favorito es: {props.actor}</h4>

        </div>
    )
}

export default Card