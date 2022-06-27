import React from 'react'
import './registrar.css'

const Registrar = () => {
  return (
    <div style={{margin: "70px auto 0", maxWidth: "1440px"}}>
        <div class="preRegistroSeleccione" id="Banderas">
            <div class="preRegistroSeleccione__titulo">
                <label>Realiza el registro de un nuevo empresario</label>
            </div>
            <div class="seleccionPais">
                <div class="seleccionPais__titulo">
                    <label>SELECCIONA EL PAÍS</label>
                </div>
                <div class="seleccionPais__banderas">
                    <div>
                        <div class="bandera banderaBolivia"></div>
                        <label>BOLIVIA</label>
                    </div>
                   {/* <div>
                        <div class="bandera banderaEcuador"></div>
                        <label>ECUADOR</label>
                    </div> */}
                    <div class="seleccionPais__banderas__EEUU">
                        <div class="bandera banderaEEUU"></div>
                        <label>ESTADOS UNIDOS</label>
                    </div>
                    {/* <div>
                        <div class="bandera banderaPanama"></div>
                        <label>PANAMA</label>
                    </div> */}
                    <div>
                        <div class="bandera banderaPeru"></div>
                        <label>PERÚ</label>
                    </div>
                </div>
            </div>
        </div>

        <div id="ContenidoFluido" class="preRegistroSocio">
            <div class="form-group scrollflow -pop -opacity preRegistroSocio__bloqueTitulo">
                <i id="regresarBanderas" class="fas fa-arrow-left regresarBanderas"><span>Regresar</span></i>
                <p>REGISTRO DE UN NUEVO EMPRESARIO</p>
            </div>
            <div class="preRegistroSocio__bloqueCrearCuenta">
                    <label>Crear cuenta</label>

                    <div id="formulario" class="formulario">
                        <div class="scrollflow -opacity formulario__photo">
                            {/* <label>Mi foto de perfil</label>
                        <div id="imagePreview" class="center-block align-content-center">
                            <img src="img/usuario1.png" class="img-fluid" />
                        </div> */}
                            <div id="imagePreview" style={{backgroundImage: "url(img/usuario-azul.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "100%", borderRadius: "50%"}}>
                            </div>
                            {/* <img style="" width="186" src="img/usuario-azul.png" class="" /> */}
                            <input class="inputAddPhoto" type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label for="imageUpload">
                                <img class="imgAddPhoto" src="img/add-photo.png" alt="" /></label>

                            {/* <asp:FileUpload CssClass="form-control imagen" ID="fileUpload1" runat="server" /> */}
                        </div>
                        {/* <div class="form-group col-md-4 scrollflow -opacity" id="btnCargaImagen" runat="server">
                        <label class="label" style="font-weight: bold">Foto de Perfil</label>
                        <label class="file-upload btn btn-success form-control marginTop" style="font-size: 15px">
                            Ingresa tu foto
                                    <asp:FileUpload CssClass="form-control imagen" ID="fileUpload" runat="server" />
                        </label>
                    </div> */}
                        <div class="scrollflow -opacity formulario__crearUsuario">
                            <label class="labelPreRegistro">Crear usuario</label>
                            <input type={Text} id='txtUl' title="Se necesita un nombre de Usuario" maxLength={"8"} className="form-controlPreRegistro marginTop"></input>
                        </div>

                        <div class="formulario__grupo formulario__crearCrearContraseña" id="grupo__password">
                            <label for="password" class="labelPreRegistro formulario__label">Crear contraseña</label>
                            <div class="formulario__grupo-input">
                                <input type="password" class="form-controlPreRegistro marginTop formulario__input" name="password" id="password" maxlength="12" autocomplete="new-password"/>
                                {/* <input ID="password" runat="server" CssClass="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></input> */}
                                <img id="ojito1" class="ojito1" onclick="mostrarContrasena()"
                                    src="img/ojito.png" alt="" />
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                            </div>
                        </div>
                        <div class="formulario__grupo formulario__confirmarContraseña" id="grupo__password2">
                            <label for="password2" class="labelPreRegistro formulario__label">Confirmar contraseña</label>
                            <div class="formulario__grupo-input">
                                <input type="password" class="form-controlPreRegistro marginTop formulario__input" name="password2" id="password2"/>
                                <img id="ojito2" class="ojito2" onclick="mostrarContrasena2()"
                                    src="img/ojito.png" alt="" />
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                            </div>
                            <span class="formulario__input-error">
                                <img width="12" src="img/aviso-error.png" alt="Alternate Text" />Las contraseñas no coinciden. Inténtalo nuevamente.</span>
                        </div>

                        {/* <div id="grupo__password" class="scrollflow -opacity " style="margin-bottom: 18px;">
                        <label class="labelPreRegistro formulario__label">Crear contraseña</label>
                        <div class="formulario__grupo-input">
                            <input ID="TxtCl" runat="server" CssClass="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></input>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <img id="ojito1" style="position: absolute; right: 20px; top: 40px; cursor: pointer;" onclick="mostrarContrasena()"
                            src="img/ojito.png" alt="" />
                    </div>
                    <div id="grupo__password3" class="scrollflow -opacity">
                        <label class="labelPreRegistro">Confirmar contraseña</label>
                        <div class="formulario__grupo-input">
                            <input ID="TxtCl2" runat="server" CssClass="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></input>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                            <img id="ojito2" style="position: absolute; right: 20px; top: 40px; cursor: pointer;" onclick="mostrarContrasena2()"
                                src="img/ojito.png" alt="" />
                        </div>
                        <span class="formulario__input-error mensajeContraseñasNoCoinciden">
                            <img width="12" src="img/aviso-error.png" alt="Alternate Text" />Las contraseñas no coinciden. Inténtalo nuevamente.</span>
                    </div> */}
                    </div>
            </div>
            <div class="row justify-content-md-center preRegistroSocio__bloqueFormulario">
                {/* REGISTRO AFILIACION */}
                <div id="MostrarRegistroCliente">
                    <div class="row form-group colorlib-form">
                        <div class="form-group">
                            <div class="bloqueInfoAfiliacion">
                                <label class="bloqueInfoAfiliacion__titulo">Información de Afiliación</label>

                                <div class="bloqueInfoAfiliacion__body">
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Tipo de Cliente</label>
                                        <select runat="server" id="ddlTC" class="select form-controlPreRegistro text-uppercase">
                                            <option value="01">Socio</option>
                                            <option value="05">Consultor</option>
                                            <option value="03">C. Inteligente</option>
                                        </select>
                                        {/* <select ID="ddlPaquete" runat="server" CssClass="form-controlPreRegistro text-uppercase" onchange="paqueteCliente(this);" >
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
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Upline</label>
                                        {/* <select ID="CboUpLine" runat="server" CssClass="form-controlPreRegistro text-uppercase" /> */}
                                        <select runat="server" id="CboUpLine" class="select form-controlPreRegistro text-uppercase"></select>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Patrocinador</label>
                                        <input id="txtPatrocinador" className="form-controlPreRegistro noEditable"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="row col-md-12">

                                <div class="form-group col-md-3 scrollflow -opacity" style={{display: "none"}}>
                                    <label class="labelPreRegistro">Pais de tienda</label>
                                    <select id="cboPaisTienda" className="form-controlPreRegistro " />
                                </div>
                                <div class="form-group col-md-3 scrollflow -opacity" style={{display: "none"}}>
                                    <label class="labelPreRegistro">CDR Preferido</label>
                                    <select id="cboTipoEstablecimiento" className="form-controlPreRegistro btn-lg " />
                                </div>
                            </div>
                            <div class="bloqueDatosPersonales">
                                <label class="bloqueDatosPersonales__titulo">Datos Personales</label>

                                <div class="bloqueDatosPersonales__body">
                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Nombres</label>
                                        <input ID="txtNombre" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                            onkeyup="validarLetras(event)"></input>
                                    </div>
                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Primer Apellido</label>
                                        <input ID="txtApPaterno" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                            onkeyup="validarLetras(event)"></input>
                                    </div>
                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Segundo Apellido</label>
                                        <input ID="txtApMaterno" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                            onkeyup="validarLetras(event)"></input>
                                    </div>


                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Género</label>
                                        <select runat="server" id="ComboSexo" class="select form-controlPreRegistro text-uppercase">
                                            <option value="0">Seleccione</option>
                                            <option value="1">MASCULINO</option>
                                            <option value="2">FEMENINO</option>
                                            <option value="3">NO ESPECIFICA</option>
                                        </select>
                                        {/* <select ID="ComboSexo" runat="server" CssClass="form-controlPreRegistro text-uppercase">
                                        <asp:ListItem Value="0">Seleccione</asp:ListItem>
                                        <asp:ListItem Value="1">MASCULINO</asp:ListItem>
                                        <asp:ListItem Value="2">FEMENINO</asp:ListItem>
                                        <asp:ListItem Value="3">NO ESPECIFICA</asp:ListItem>
                                    </select> */}
                                    </div>

                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Tipo de documento</label>
                                        <select runat="server" id="ComboTipoDocumento" class="select form-controlPreRegistro text-uppercase">
                                            <option value="0">Seleccione</option>
                                            <option value="1">DOCUMENTO DE IDENTIDAD</option>
                                            <option value="2">PASAPORTE</option>
                                        </select>
                                        {/* <select ID="ComboTipoDocumento" runat="server" CssClass="form-controlPreRegistro text-uppercase">
                                        <asp:ListItem Value="0">Seleccione</asp:ListItem>
                                        <asp:ListItem Value="1">DOCUMENTO DE IDENTIDAD</asp:ListItem>
                                        <asp:ListItem Value="2">PASAPORTE</asp:ListItem>
                                    </select> */}
                                    </div>

                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">N° Documento</label>
                                        <input ID="txtNumDocumento" runat="server" onkeypress="return validarNumerosPD(event)" CssClass="form-controlPreRegistro text-uppercase "></input>
                                    </div>


                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Fecha de nacimiento</label>
                                        <input type="text" id="datepicker" class="form-controlPreRegistro text-uppercase inputDatepicker" readonly runat="server" />
                                    </div>
                                </div>
                            </div>

                            <div class="bloqueInfoContacto">
                                <label class="bloqueInfoContacto__titulo">Información de Contacto</label>

                                <div class="bloqueInfoContacto__body">
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Correo electrónico</label>
                                        <input ID="TxtCorreo" runat="server" CssClass="form-controlPreRegistro" TextMode="Email"></input>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Teléfono</label>
                                        <input ID="TxtTelefono" runat="server" onkeypress="return validarNumeros(event)" CssClass="form-controlPreRegistro text-uppercase"></input>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Celular</label>
                                        <input ID="TxtCelular" runat="server" onkeypress="return validarNumeros(event)" CssClass="form-controlPreRegistro text-uppercase  solo-numero"></input>
                                    </div>
                                </div>
                            </div>

                            <div class="bloqueInfoResidencia">
                                <label class="bloqueInfoResidencia__titulo">Información de Residencia</label>

                                <div class="bloqueInfoResidencia__body">
                                    <div class="scrollflow -opacity" style={{display: "none"}}>
                                        <label class="labelPreRegistro">Pais de operaciones</label>
                                        <select runat="server" id="cboPais" class="select form-controlPreRegistro text-uppercase"></select>
                                        {/* <select ID="cboPais" runat="server" CssClass="form-controlPreRegistro text-uppercase" /> */}
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro" id="lblEstado">Estado</label>
                                        <select runat="server" id="cboDepartamento" class="select form-controlPreRegistro text-uppercase"></select>
                                        {/* <select ID="cboDepartamento" runat="server" CssClass="form-controlPreRegistro text-uppercase" /> */}
                                    </div>

                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro" id="lblCondado">Condado</label>
                                        <select runat="server" id="cboProvincia" class="select form-controlPreRegistro text-uppercase"></select>
                                        <select ID="cboProvincia" runat="server" CssClass="form-controlPreRegistro text-uppercase" />
                                    </div>
                                    <div class="scrollflow -opacity" id="dvDistrito">
                                        <label class="labelPreRegistro" id="lblDistrito">Distrito</label>
                                        <select runat="server" id="cboDistrito" class="select form-controlPreRegistro text-uppercase"></select>
                                        <select ID="cboDistrito" runat="server" CssClass="form-controlPreRegistro text-uppercase" />
                                    </div>
                                    <div class="scrollflow -opacity" id="blogCdrPremio">
                                        <label class="labelPreRegistro">Y.W. Premio</label>
                                        <select runat="server" id="cboPremio" class="select form-controlPreRegistro text-uppercase"></select>
                                        <select ID="cboPremio" runat="server" CssClass="form-controlPreRegistro text-uppercase" />
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Dirección</label>
                                        <input ID="txtDireccion" runat="server" CssClass="form-controlPreRegistro text-uppercase "></input>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro refDireccion">Referencia de dirección</label>
                                        <input ID="TxtReferencia" runat="server" CssClass="form-controlPreRegistro text-uppercase "></input>
                                    </div>
                                    <div class="scrollflow -opacity" id="bloqPostal">
                                        <label class="labelPreRegistro">** Código Postal</label>
                                        <input ID="txtCodigoPostal" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeypress="return validarNumeros(event)"></input>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="form-group" style={{display: "none"}}>
                            <label style={{fontWeight: "bold", fontSize: "16px"}}>DATOS BANCARIOS</label>
                            <div class="row col-md-12">
                                <div class="col-md-4 scrollflow -opacity">
                                    <label class="labelPreRegistro">RUC</label>
                                    <input ID="TxtRUC" runat="server" CssClass="form-controlPreRegistro " onkeypress="return validarNumeros(event)"></input>
                                </div>
                                <div class="col-md-4 scrollflow -opacity">
                                    <label class="labelPreRegistro">Banco</label>
                                    <input ID="TxtBanco" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                        onkeyup="validarLetras(event)"></input>
                                </div>
                                <div class="col-md-4 scrollflow -opacity">
                                    <label class="labelPreRegistro">N° Cuenta depósito</label>
                                    <input ID="TxtNumCuenDeposito" runat="server" CssClass="form-controlPreRegistro "></input>
                                </div>
                            </div>

                            <div class="row col-md-12">
                                <div class="form-group col-md-6 scrollflow -opacity">
                                    <label class="labelPreRegistro">N° Cuenta detracciones</label>
                                    <input ID="TxtNumCuenDetracciones" runat="server" CssClass="form-controlPreRegistro "></input>
                                </div>
                                <div class="form-group col-md-6 scrollflow -opacity">
                                    <label class="labelPreRegistro">N° Cuenta interbancaria</label>
                                    <input ID="TxtNumCuenInterbancaria" runat="server" CssClass="form-controlPreRegistro "></input>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="text-center preRegistroSocio__bloqueBotones">
                <button class="form-controlEPP btnCancelar" type="button" id="btnCancelar">ELIMINAR</button>
                <button class="form-controlEPP btnRegistrar" type="button" id="btnRegistrar">REGISTRAR</button>
            </div>
        </div>

    </div>
  )
}

export default Registrar