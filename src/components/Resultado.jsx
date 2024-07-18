import React from 'react'
import styled from '@emotion/styled'

const Cotizacion = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 900;
    }
`
const Precio = styled.p`
    font-size: 25px;
    span {
        font-weight: 900;
    }
`


const Resultado = ({cotizacion}) => {

const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion

  return (
    <Cotizacion>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Criptomoneda" />
        <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24hrs: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última Actulización:<span>{LASTUPDATE}</span></Texto>
        </div>
    </Cotizacion>
  )
}

export default Resultado