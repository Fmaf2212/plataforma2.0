import React, { useState } from 'react'
import AvisoError from '../../../BASE/img/aviso-error.png'
import Ojito from '../../../BASE/img/ojito.png'

const ConfirmarContraseña = () => {
  // const [inputPassword1, setInputPassword1] = useState('')
  // const [inputPassword2, setInputPassword2] = useState('')
  const [typeInputPassword, setTypeInputPassword] = useState('password')
  const [typeInputPassword2, setTypeInputPassword2] = useState('password')
  const [passwordsEquals, setPasswordsEquals] = useState(true)
  const [password1Null, setPassword1Null] = useState(false)
  const [password2Null, setPassword2Null] = useState(false)
  const [checkPasswordsEquals, setCheckPasswordsEquals] = useState(false)

  const capturarValorContraseña = () => {
    const valor1 = document.getElementById('password').value
    const valor2 = document.getElementById('password2').value
    // console.log(valor1+' '+valor2)


    if (valor1 === valor2 || valor2 === '') {
      setPasswordsEquals(true)
    } else {
      setPasswordsEquals(false)
    }
    if (valor1 === valor2 && valor2 !== '') {
      setCheckPasswordsEquals(true)
    }
    if (valor1 === '' || valor2 === '') {
      setCheckPasswordsEquals(false)
    }
    // if (valor1 === '' && valor2 === ''){
    // }
  }

  const placeholder = () => {
    const valor1 = document.getElementById('password')
    if(valor1.value === ''){
      let inputPassword = document.getElementById('password')
      inputPassword.placeholder = 'Contraseña inválido'
      // valor1.classList.toggle('formulario__input');
      setPassword1Null(true)
    }else{
      setPassword1Null(false)
      capturarValorContraseña();
    }
  }
  const placeholder2 = () => {    
    const valor2 = document.getElementById('password2')
    if(valor2.value === ''){
      let inputPassword2 = document.getElementById('password2')
      inputPassword2.placeholder = 'Contraseña inválido'
      // valor2.classList.toggle('formulario__input');
      setPassword2Null(true)
    }else{
      setPassword2Null(false)
      capturarValorContraseña();
    }
  }

  const mostrarPrimeraContraseña = () => {
    console.log('entré en mostrarPrimeraContraseña')
    if (typeInputPassword === 'password') {
      console.log('entré en la condición SI de mostrarPrimeraContraseña')
      setTypeInputPassword('text')
    } else {
      console.log('entré en la condición SINO de mostrarPrimeraContraseña')
      setTypeInputPassword('password')
    }
  }

  const mostrarSegundaContraseña = () => {
    console.log('entré en mostrarSegundaContraseña')
    if (typeInputPassword2 === 'password') {
      console.log('entré en la condición SI de mostrarSegundaContraseña')
      setTypeInputPassword2('text')
    } else {
      console.log('entré en la condición SINO de mostrarSegundaContraseña')
      setTypeInputPassword2('password')
    }
  }


  return (
    <div>
      <div
        className={`formulario__grupo formulario__crearCrearContraseña 
        ${
          passwordsEquals
            ? 'formulario__grupo-correcto'
            : 'formulario__grupo-incorrecto'
        }
        ${
          password1Null
            ? 'formulario__grupo-null'
            : null
        }`}
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
            onChange={(e) => {
              capturarValorContraseña(e.target.value)
              placeholder(e.target.value)
            }}
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
            onClick={() => mostrarPrimeraContraseña()}
          />
          {checkPasswordsEquals ? (
            <i className="formulario__validacion-estado fas fa-check-circle"></i>
          ) : null}
        </div>
      </div>
      <div
        className={`formulario__grupo formulario__confirmarContraseña ${
          passwordsEquals
            ? 'formulario__grupo-correcto'
            : 'formulario__grupo-incorrecto'
        }
        ${
          password2Null
            ? 'formulario__grupo-null'
            : null
        }
        `}
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
            type={typeInputPassword2 === 'password' ? 'password' : 'text'}
            className="form-controlPreRegistro marginTop formulario__input"
            name="password2"
            id="password2"
            onChange={(e) => {
              capturarValorContraseña(e.target.value)
              placeholder2(e.target.value)
            }}
          />
          <img
            id="ojito2"
            className={`ojito2 ${
              typeInputPassword2 === 'text'
                ? 'sombraOjoContraseña'
                : 'quitarSombraOjoContraseña'
            }`}
            src={Ojito}
            alt="Segundo Ojito"
            onClick={() => mostrarSegundaContraseña()}
          />
          {checkPasswordsEquals ? (
            <i className="formulario__validacion-estado fas fa-check-circle"></i>
          ) : null}
        </div>
        {/* <button onClick={()=>               
                validarContraseñasIguales()}>
          validar contraseña
        </button> */}
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
