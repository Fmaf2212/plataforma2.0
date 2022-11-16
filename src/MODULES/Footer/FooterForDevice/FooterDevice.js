import React from 'react'

import { Link } from 'react-router-dom'

import homeWhite from '../../../BASE/img/home-white.png'
import agregarWhite from '../../../BASE/img/agregar-white.png'
import usuarioWhite from '../../../BASE/img/usuario-white.png'

const FooterDevice = () => {
  return (
    <div id="barraNavInferiorResponsive" className="barraNavInferiorResponsive">
      <Link
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          className="imagenIcono"
          src={homeWhite}
          alt="Alternate Text"
        />
        <p>Inicio</p>
      </Link>
      <Link
        to="/PreRegistroSocio"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          className="imagenIcono"
          src={agregarWhite}
          alt="Alternate Text"
        />
        <p>Registrar</p>
      </Link>
      <Link
        to="/EditarPerfil"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          className="imagenIcono"
          src={usuarioWhite}
          alt="Alternate Text"
        />
        <p>Perfil</p>
      </Link>
    </div>
  )
}

export default FooterDevice
