import React, { useState } from 'react'
import './registrar.css'
import PhotoProfile from './Components/PhotoProfile'
import ConfirmarContraseña from './Components/ConfirmarContraseña'

const Registrar = () => {
  const [show, setShow] = useState(false)
  const [showBolivia, setShowBolivia] = useState(false)
  const [showEEUU, setShowEEUU] = useState(false)
  const [showPeru, setShowPeru] = useState(false)
  //   const [showBolivia, setShowBolivia] = useState(false)
  //   const [showEEUU, setShowEEUU] = useState(false)
  //   const [showPeru, setShowPeru] = useState(false)
  const [departamento, setDepartamento] = useState([])
  // const [idPais, setIdPais] = useState('')

  //La llamada a useEffect acepta una función como argumento.
  //Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice.
  // React.useEffect(() => {
  //    //obtenerDatos('01')
  //   // mostrarSelectDepartamentoXPais()
  // }, [])

  async function mostrarSelectDepartamentoXPais(idPais) {
    if (idPais === '02') {
      // setIdPais('02')
      // console.log('entré en showBolivia:true')
    }
    // console.log(showEEUU)
    if (idPais === '08') {
      // setIdPais('08')
      // console.log('entré en showEEUU:true')
    }
    // console.log(showPeru)
    if (idPais === '01') {
      // setIdPais('01')
      // console.log('entré en showPeru:true')
    }
    // console.log(idPais)
    await obtenerDatos(idPais)
    // console.log(`idPais: ${typeof idPais}`)
  }

  const obtenerDatos = async (idPa) => {
    // let idPais = "";
    // console.log(idPa)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pais: idPa }),
    }
    // console.log(requestOptions)
    const x = await fetch(
      'https://prueba3.mundosantanatura.com/autocompletado.asmx/GetDepartamentosByPais',
      requestOptions,
    )
      .then((response) => response.json()) //Devuelve una promesa que se resuelve con el resultado de analizar el texto del cuerpo como JSON.
      .then((data) => {
        return data
      })
    const dep = await x
    await setDepartamento(dep.d)
  }

  // const obtenerDatos = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const users = await data.json()
  //   setDepartamento(users)
  // }

  return (
    <div style={{ margin: '70px auto 0', maxWidth: '1440px' }}>
      {!show ? (
        <div
          id="Banderas"
          className="preRegistroSeleccione toggle-content is-visible"
        >
          <div className="preRegistroSeleccione__titulo">
            <label>Realiza el registro de un nuevo empresario</label>
          </div>
          <div className="seleccionPais">
            <div className="seleccionPais__titulo">
              <label>SELECCIONA EL PAÍS</label>
            </div>
            <div className="seleccionPais__banderas">
              <div>
                {/* <div className="bandera banderaBolivia"></div> */}
                <button
                  className="quitarEstilosButton bandera banderaBolivia"
                  onClick={() => {
                    setShow(!show)
                    setShowBolivia(!showBolivia)
                    mostrarSelectDepartamentoXPais('02')
                  }}
                ></button>
                <label>BOLIVIA</label>
              </div>
              {/* <div>
                        <div className="bandera banderaEcuador"></div>
                        <label>ECUADOR</label>
                    </div> */}
              <div className="seleccionPais__banderas__EEUU">
                {/* <div className="bandera banderaEEUU"></div> */}
                <button
                  className="quitarEstilosButton bandera banderaEEUU"
                  onClick={() => {
                    setShow(!show)
                    setShowEEUU(!showEEUU)
                    mostrarSelectDepartamentoXPais('08')
                  }}
                ></button>
                <label>ESTADOS UNIDOS</label>
              </div>
              {/* <div>
                        <div className="bandera banderaPanama"></div>
                        <label>PANAMA</label>
                    </div> */}
              <div>
                {/* <div className="bandera banderaPeru"></div> */}
                <button
                  className="quitarEstilosButton bandera banderaPeru"
                  onClick={() => {
                    setShow(!show)
                    setShowPeru(!showPeru)
                    mostrarSelectDepartamentoXPais('01')
                  }}
                ></button>
                <label>PERÚ</label>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {show ? (
        <div id="ContenidoFluido" className="preRegistroSocio toggle-content">
          <button
            className="quitarEstilosButton form-group scrollflow -pop -opacity preRegistroSocio__bloqueTitulo"
            onClick={() => {
              setShow(!show)
              setShowBolivia(false)
              setShowEEUU(false)
              setShowPeru(false)
            }}
          >
            <i
              id="regresarBanderas"
              className="fas fa-arrow-left regresarBanderas"
            >
              <span>Regresar</span>
            </i>
            <p>REGISTRO DE UN NUEVO EMPRESARIO</p>
          </button>
          <div className="preRegistroSocio__bloqueCrearCuenta">
            <label>Crear cuenta</label>

            <div id="formulario" className="formulario">
              <PhotoProfile />

              <div className="scrollflow -opacity formulario__crearUsuario">
                <label className="labelPreRegistro">Crear usuario</label>
                <input
                  type={'Text'}
                  id="txtUl"
                  title="Se necesita un nombre de Usuario"
                  maxLength={'8'}
                  className="form-controlPreRegistro marginTop"
                ></input>
              </div>
              <ConfirmarContraseña />
            </div>
          </div>

          <div className="row justify-content-md-center preRegistroSocio__bloqueFormulario">
            {/* REGISTRO AFILIACION */}
            <div id="MostrarRegistroCliente">
              <div className="row form-group colorlib-form">
                <div className="form-group">
                  <div className="bloqueInfoAfiliacion">
                    <label className="bloqueInfoAfiliacion__titulo">
                      Información de Afiliación
                    </label>

                    <div className="bloqueInfoAfiliacion__body">
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">
                          Tipo de Cliente
                        </label>
                        <select
                          runat="server"
                          id="ddlTC"
                          className="select form-controlPreRegistro text-uppercase"
                        >
                          <option value="01">Socio</option>
                          <option value="05">Consultor</option>
                          <option value="03">C. Inteligente</option>
                        </select>
                        {/* <select ID="ddlPaquete" runat="server" CssclassName="form-controlPreRegistro text-uppercase" onchange="paqueteCliente(this);" >
                                        <asp:ListItem Value="0"> Seleccione</asp:ListItem>
                                        <asp:ListItem Value="01">Básico</asp:ListItem>
                                        <asp:ListItem Value="02">Profesional</asp:ListItem>
                                        <asp:ListItem Value="03">Empresarial</asp:ListItem>
                                        <asp:ListItem Value="04">Millonario</asp:ListItem>
                                        <asp:ListItem Value="23">Imperial</asp:ListItem>
                                        <asp:ListItem Value="05">Consultor</asp:ListItem>
                                        <asp:ListItem Value="06">C. Inteligente</asp:ListItem>
                                    </select> */}
                      </div>
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">Upline</label>
                        {/* <select ID="CboUpLine" runat="server" CssclassName="form-controlPreRegistro text-uppercase" /> */}
                        <select
                          runat="server"
                          id="CboUpLine"
                          className="select form-controlPreRegistro text-uppercase"
                        ></select>
                      </div>
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">Patrocinador</label>
                        <input
                          id="txtPatrocinador"
                          className="form-controlPreRegistro noEditable"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div
                      className="form-group col-md-3 scrollflow -opacity"
                      style={{ display: 'none' }}
                    >
                      <label className="labelPreRegistro">Pais de tienda</label>
                      <select
                        id="cboPaisTienda"
                        className="form-controlPreRegistro "
                      />
                    </div>
                    <div
                      className="form-group col-md-3 scrollflow -opacity"
                      style={{ display: 'none' }}
                    >
                      <label className="labelPreRegistro">CDR Preferido</label>
                      <select
                        id="cboTipoEstablecimiento"
                        className="form-controlPreRegistro btn-lg "
                      />
                    </div>
                  </div>
                  <div className="bloqueDatosPersonales">
                    <label className="bloqueDatosPersonales__titulo">
                      Datos Personales
                    </label>

                    <div className="bloqueDatosPersonales__body">
                      <div className="form-group scrollflow -opacity">
                        <label className="labelPreRegistro">Nombres</label>
                        <input
                          id="txtNombre"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase "
                          // onKeyDown="validarLetras(event)"
                          // onKeyUp="validarLetras(event)"
                        ></input>
                      </div>
                      <div className="form-group scrollflow -opacity">
                        <label className="labelPreRegistro">
                          Primer Apellido
                        </label>
                        <input
                          id="txtApPaterno"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase "
                          // onKeyDown="validarLetras(event)"
                          // onKeyUp="validarLetras(event)"
                        ></input>
                      </div>
                      <div className="form-group scrollflow -opacity">
                        <label className="labelPreRegistro">
                          Segundo Apellido
                        </label>
                        <input
                          id="txtApMaterno"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase "
                          // onKeyDown="validarLetras(event)"
                          // onKeyUp="validarLetras(event)"
                        ></input>
                      </div>

                      <div className="form-group scrollflow -opacity">
                        <label className="labelPreRegistro">Género</label>
                        <select
                          runat="server"
                          id="ComboSexo"
                          className="select form-controlPreRegistro text-uppercase"
                        >
                          <option value="0">Seleccione</option>
                          <option value="1">MASCULINO</option>
                          <option value="2">FEMENINO</option>
                          <option value="3">NO ESPECIFICA</option>
                        </select>
                        {/* <select ID="ComboSexo" runat="server" CssclassName="form-controlPreRegistro text-uppercase">
                                        <asp:ListItem Value="0">Seleccione</asp:ListItem>
                                        <asp:ListItem Value="1">MASCULINO</asp:ListItem>
                                        <asp:ListItem Value="2">FEMENINO</asp:ListItem>
                                        <asp:ListItem Value="3">NO ESPECIFICA</asp:ListItem>
                                    </select> */}
                      </div>

                      <div className="form-group scrollflow -opacity">
                        <label className="labelPreRegistro">
                          Tipo de documento
                        </label>
                        <select
                          id="ComboTipoDocumento"
                          className="select form-controlPreRegistro text-uppercase"
                        >
                          <option value="0">Seleccione</option>
                          {showBolivia ? (
                            <option value="1">CÉDULA</option>
                          ) : (
                            <option value="1">DOCUMENTO DE IDENTIDAD</option>
                          )}
                          <option value="2">PASAPORTE</option>
                        </select>
                        {/* <select ID="ComboTipoDocumento" runat="server" CssclassName="form-controlPreRegistro text-uppercase">
                                        <asp:ListItem Value="0">Seleccione</asp:ListItem>
                                        <asp:ListItem Value="1">DOCUMENTO DE IDENTIDAD</asp:ListItem>
                                        <asp:ListItem Value="2">PASAPORTE</asp:ListItem>
                                    </select> */}
                      </div>

                      <div className="form-group scrollflow -opacity">
                        <label className="labelPreRegistro">N° Documento</label>
                        <input
                          id="txtNumDocumento"
                          runat="server"
                          // onKeyPress="return validarNumerosPD(event)"
                          className="form-controlPreRegistro text-uppercase "
                        ></input>
                      </div>

                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">
                          Fecha de nacimiento
                        </label>
                        <input
                          type={'text'}
                          id="datepicker"
                          className="form-controlPreRegistro text-uppercase inputDatepicker"
                          readOnly
                          runat="server"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bloqueInfoContacto">
                    <label className="bloqueInfoContacto__titulo">
                      Información de Contacto
                    </label>

                    <div className="bloqueInfoContacto__body">
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">
                          Correo electrónico
                        </label>
                        <input
                          id="TxtCorreo"
                          runat="server"
                          className="form-controlPreRegistro"
                          textmode="Email"
                        ></input>
                      </div>
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">Teléfono</label>
                        <input
                          id="TxtTelefono"
                          runat="server"
                          // onKeyPress="return validarNumeros(event)"
                          className="form-controlPreRegistro text-uppercase"
                        ></input>
                      </div>
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">Celular</label>
                        <input
                          id="TxtCelular"
                          runat="server"
                          // onKeyPress="return validarNumeros(event)"
                          className="form-controlPreRegistro text-uppercase  solo-numero"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="bloqueInfoResidencia">
                    <label className="bloqueInfoResidencia__titulo">
                      Información de Residencia
                    </label>

                    <div className="bloqueInfoResidencia__body">
                      <div
                        className="scrollflow -opacity"
                        style={{ display: 'none' }}
                      >
                        <label className="labelPreRegistro">
                          Pais de operaciones
                        </label>
                        <select
                          runat="server"
                          id="cboPais"
                          className="select form-controlPreRegistro text-uppercase"
                        ></select>
                        {/* <select ID="cboPais" runat="server" CssclassName="form-controlPreRegistro text-uppercase" /> */}
                      </div>
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro" id="lblEstado">
                          {showBolivia || showPeru ? 'Departamento' : 'Estado'}
                        </label>
                        <select
                          runat="server"
                          id="cboDepartamento"
                          className="select form-controlPreRegistro text-uppercase"
                        >
                          <option value="0">Select ...</option>
                          {departamento.map((departamentos) => (
                            <option
                              key={departamentos.Codigo}
                              value={departamentos.Codigo}
                            >
                              {departamentos.Nombre}
                            </option>
                          ))}
                        </select>
                        {/* <select ID="cboDepartamento" runat="server" CssclassName="form-controlPreRegistro text-uppercase" /> */}
                      </div>

                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro" id="lblCondado">
                          {showBolivia || showPeru ? 'Provincia' : 'Condado'}
                        </label>
                        <select
                          runat="server"
                          id="cboProvincia"
                          className="select form-controlPreRegistro text-uppercase"
                        ></select>
                        {/* <select
                          id="cboProvincia"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase"
                        /> */}
                      </div>
                      {!showEEUU ? (
                        <div className="scrollflow -opacity" id="dvDistrito">
                          <label className="labelPreRegistro" id="lblDistrito">
                            {showBolivia ? 'Municipio' : 'Distrito'}
                          </label>
                          <select
                            runat="server"
                            id="cboDistrito"
                            className="select form-controlPreRegistro text-uppercase"
                          ></select>
                          {/* <select
                          id="cboDistrito"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase"
                        /> */}
                        </div>
                      ) : null}
                      {!((!showBolivia || !showEEUU) && !showPeru) ? (
                        <div className="scrollflow -opacity" id="blogCdrPremio">
                          <label className="labelPreRegistro">
                            Y.W. Premio
                          </label>
                          <select
                            runat="server"
                            id="cboPremio"
                            className="select form-controlPreRegistro text-uppercase"
                          ></select>
                          {/* <select
                          id="cboPremio"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase"
                        /> */}
                        </div>
                      ) : null}
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro">Dirección</label>
                        <input
                          id="txtDireccion"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase "
                        ></input>
                      </div>
                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro refDireccion">
                          Referencia de dirección
                        </label>
                        <input
                          id="TxtReferencia"
                          runat="server"
                          className="form-controlPreRegistro text-uppercase "
                        ></input>
                      </div>
                      {(showBolivia && showPeru) || showEEUU ? (
                        <div className="scrollflow -opacity" id="bloqPostal">
                          <label className="labelPreRegistro">
                            ** Código Postal
                          </label>
                          <input
                            id="txtCodigoPostal"
                            runat="server"
                            className="form-controlPreRegistro text-uppercase "
                            // onKeyPress="return validarNumeros(event)"
                          ></input>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="form-group" style={{ display: 'none' }}>
                  <label style={{ fontWeight: 'bold', fontSize: '16px' }}>
                    DATOS BANCARIOS
                  </label>
                  <div className="row col-md-12">
                    <div className="col-md-4 scrollflow -opacity">
                      <label className="labelPreRegistro">RUC</label>
                      <input
                        id="TxtRUC"
                        runat="server"
                        className="form-controlPreRegistro "
                        //   onKeyPress="return validarNumeros(event)"
                      ></input>
                    </div>
                    <div className="col-md-4 scrollflow -opacity">
                      <label className="labelPreRegistro">Banco</label>
                      <input
                        id="TxtBanco"
                        runat="server"
                        className="form-controlPreRegistro text-uppercase "
                        //   onKeyDown="validarLetras(event)"
                        //   onKeyUp="validarLetras(event)"
                      ></input>
                    </div>
                    <div className="col-md-4 scrollflow -opacity">
                      <label className="labelPreRegistro">
                        N° Cuenta depósito
                      </label>
                      <input
                        id="TxtNumCuenDeposito"
                        runat="server"
                        className="form-controlPreRegistro "
                      ></input>
                    </div>
                  </div>

                  <div className="row col-md-12">
                    <div className="form-group col-md-6 scrollflow -opacity">
                      <label className="labelPreRegistro">
                        N° Cuenta detracciones
                      </label>
                      <input
                        id="TxtNumCuenDetracciones"
                        runat="server"
                        className="form-controlPreRegistro "
                      ></input>
                    </div>
                    <div className="form-group col-md-6 scrollflow -opacity">
                      <label className="labelPreRegistro">
                        N° Cuenta interbancaria
                      </label>
                      <input
                        id="TxtNumCuenInterbancaria"
                        runat="server"
                        className="form-controlPreRegistro "
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center preRegistroSocio__bloqueBotones">
            <button
              className="form-controlEPP btnCancelar"
              type={'button'}
              id="btnCancelar"
            >
              ELIMINAR
            </button>
            <button
              className="form-controlEPP btnRegistrar"
              type={'button'}
              id="btnRegistrar"
            >
              REGISTRAR
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Registrar
