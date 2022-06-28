import React, { useState } from 'react'
import './registrar.css'
import './script.js'

const Registrar = () => {
  const [show, setShow] = useState(false)
  const [showBolivia, setShowBolivia] = useState(false)
  const [showEEUU, setShowEEUU] = useState(false)
  const [showPeru, setShowPeru] = useState(false)
  //   const [showBolivia, setShowBolivia] = useState(false)
  //   const [showEEUU, setShowEEUU] = useState(false)
  //   const [showPeru, setShowPeru] = useState(false)

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
                    setShow(!show);
                    setShowBolivia(!showBolivia);
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
                    setShow(!show);
                    setShowEEUU(!showEEUU);
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
                    setShow(!show);
                    setShowPeru(!showPeru);
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
                    setShow(!show);
                    setShowBolivia(false);
                    setShowEEUU(false);
                    setShowPeru(false);
                }
            }
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
              <div className="scrollflow -opacity formulario__photo">
                {/* <label>Mi foto de perfil</label>
                        <div id="imagePreview" className="center-block align-content-center">
                            <img src="img/usuario1.png" className="img-fluid" />
                        </div> */}
                <div
                  id="imagePreview"
                  style={{
                    backgroundImage: 'url(img/usuario-azul.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                  }}
                ></div>
                {/* <img style="" width="186" src="img/usuario-azul.png" className="" /> */}
                <input
                  className="inputAddPhoto"
                  type={'file'}
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                />
                <label htmlFor="imageUpload">
                  <img className="imgAddPhoto" src="img/add-photo.png" alt="" />
                </label>

                {/* <asp:FileUpload CssclassName="form-control imagen" ID="fileUpload1" runat="server" /> */}
              </div>
              {/* <div className="form-group col-md-4 scrollflow -opacity" id="btnCargaImagen" runat="server">
                        <label className="label" style="font-weight: bold">Foto de Perfil</label>
                        <label className="file-upload btn btn-success form-control marginTop" style="font-size: 15px">
                            Ingresa tu foto
                                    <asp:FileUpload CssclassName="form-control imagen" ID="fileUpload" runat="server" />
                        </label>
                    </div> */}
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
                    type={'password'}
                    className="form-controlPreRegistro marginTop formulario__input"
                    name="password"
                    id="password"
                    maxLength="12"
                    autoComplete="new-password"
                  />
                  {/* <input ID="password" runat="server" CssclassName="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></input> */}
                  <img
                    id="ojito1"
                    className="ojito1"
                    //   onClick="mostrarContrasena()"
                    src="img/ojito.png"
                    alt=""
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
                    type={'password'}
                    className="form-controlPreRegistro marginTop formulario__input"
                    name="password2"
                    id="password2"
                  />
                  <img
                    id="ojito2"
                    className="ojito2"
                    //   onClick="mostrarContrasena2()"
                    src="img/ojito.png"
                    alt=""
                  />
                  <i className="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <span className="formulario__input-error">
                  <img
                    width="12"
                    src="img/aviso-error.png"
                    alt="Alternate Text"
                  />
                  Las contraseñas no coinciden. Inténtalo nuevamente.
                </span>
              </div>

              {/* <div id="grupo__password" className="scrollflow -opacity " style="margin-bottom: 18px;">
                        <label className="labelPreRegistro formulario__label">Crear contraseña</label>
                        <div className="formulario__grupo-input">
                            <input ID="TxtCl" runat="server" CssclassName="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></input>
                            <i className="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <img id="ojito1" style="position: absolute; right: 20px; top: 40px; cursor: pointer;" onclick="mostrarContrasena()"
                            src="img/ojito.png" alt="" />
                    </div>
                    <div id="grupo__password3" className="scrollflow -opacity">
                        <label className="labelPreRegistro">Confirmar contraseña</label>
                        <div className="formulario__grupo-input">
                            <input ID="TxtCl2" runat="server" CssclassName="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></input>
                            <i className="formulario__validacion-estado fas fa-times-circle"></i>
                            <img id="ojito2" style="position: absolute; right: 20px; top: 40px; cursor: pointer;" onclick="mostrarContrasena2()"
                                src="img/ojito.png" alt="" />
                        </div>
                        <span className="formulario__input-error mensajeContraseñasNoCoinciden">
                            <img width="12" src="img/aviso-error.png" alt="Alternate Text" />Las contraseñas no coinciden. Inténtalo nuevamente.</span>
                    </div> */}
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
                          {(showBolivia)? (<option value="1">CÉDULA</option>): (<option value="1">DOCUMENTO DE IDENTIDAD</option>)}
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
                          {showBolivia || showPeru ? ('Departamento') : 'Estado'}
                        </label>
                        <select
                          runat="server"
                          id="cboDepartamento"
                          className="select form-controlPreRegistro text-uppercase"
                        ></select>
                        {/* <select ID="cboDepartamento" runat="server" CssclassName="form-controlPreRegistro text-uppercase" /> */}
                      </div>

                      <div className="scrollflow -opacity">
                        <label className="labelPreRegistro" id="lblCondado">
                        {showBolivia || showPeru ? ('Provincia') : 'Condado'}
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
                        {showBolivia ? ('Municipio') : 'Distrito'}
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
                      </div>):null}
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
                      {((showBolivia && showPeru) || showEEUU) ? (
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
