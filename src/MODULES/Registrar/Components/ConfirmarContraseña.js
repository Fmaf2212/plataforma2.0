import React, { useState } from 'react'
import AvisoError from '../../../BASE/img/aviso-error.png'
import Ojito from '../../../BASE/img/ojito.png'

const ConfirmarContraseña = () => {
  // const [inputPassword, setInputPassword] = useState('')
  const [typeInputPassword, setTypeInputPassword] = useState('password')
  const [passwordsEquals, setPasswordsEquals] = useState(false)

  const capturarValorContraseña = (valor, tipo) => {
    console.log(valor)
    // setInputPassword(valor)
    // setTypeInputPassword(tipo)
    console.log(setPasswordsEquals)
  }

  const mostrarContraseña = () => {
    console.log('entré en mostrarContraseña')
    if (typeInputPassword === 'password') {
      console.log('entré en la condición SI de mostrarContraseña')
      setTypeInputPassword('text')
    } else {
      console.log('entré en la condición SINO de mostrarContraseña')
      setTypeInputPassword('password')
    }
  }
  console.log(typeInputPassword)

  return (
    <div>
      <div
        className="formulario__grupo formulario__crearCrearContraseña"
        id="grupo__password"
      >
        <label
          htmlFor="password"
          className="labelPreRegistro formulario__label"
        >
          Crear contraseña
        </label>
        <div className="formulario__grupo-input">
          <input
            type={typeInputPassword === 'password' ? 'password' : 'text'}
            className="form-controlPreRegistro marginTop formulario__input"
            name="password"
            id="password"
            maxLength="12"
            autoComplete="new-password"
            onChange={(e) =>
              capturarValorContraseña(e.target.value, e.target.type)
            }
          />
          <img
            id="ojito1"
            className={`ojito1 ${
              typeInputPassword === 'text'
                ? 'sombraOjoContraseña'
                : 'quitarSombraOjoContraseña'
            }`}
            src={Ojito}
            alt="primerOjito"
            onClick={() => mostrarContraseña()}
          />
          <i className="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
      </div>
      <div
        className="formulario__grupo formulario__confirmarContraseña"
        id="grupo__password2"
      >
        <label
          htmlFor="password2"
          className="labelPreRegistro formulario__label"
        >
          Confirmar contraseña
        </label>
        <div className="formulario__grupo-input">
          <input
            type={typeInputPassword === 'password' ? 'password' : 'text'}
            className="form-controlPreRegistro marginTop formulario__input"
            name="password2"
            id="password2"
          />
          <img
            id="ojito2"
            className={`ojito2 ${
              typeInputPassword === 'text'
                ? 'sombraOjoContraseña'
                : 'quitarSombraOjoContraseña'
            }`}
            src={Ojito}
            alt=""
            onClick={() => mostrarContraseña()}
          />
          <i className="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <span
          className={
            passwordsEquals
              ? 'formulario__input-error'
              : 'formulario__input-error-activo'
          }
        >
          <img width="12" src={AvisoError} alt="Alternate Text" />
          Las contraseñas no coinciden. Inténtalo nuevamente.
        </span>
      </div>
    </div>
  )
}

export default ConfirmarContraseña
