// $("#Banderas").show();
// $("#ContenidoFluido").hide();

// // Show an element
//     let bloqueBanderas = document.getElementById("Banderas");
// 	bloqueBanderas.classList.add('is-visible');
// // Hide an element
//     let bloqueFormulario = document.getElementById("ContenidoFluido");
// 	bloqueFormulario.classList.remove('is-visible');



// var patro = "";
// //ddlPaquete

// $.ajax({
//     type: "POST",
//     url: "EditarPerfil.aspx/GetPais",
//     data: "{}",
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     async: false,
//     success: function (result) {
//         $("#cboPais").empty();
//         $("#cboPais").append("<option value='0'>Seleccione</option>");
//         $.each(result.d, function (key, value) {
//             $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//         });
//     },
//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//         alert(textStatus + ": " + XMLHttpRequest.responseText);
//     }
// });

// $.ajax({
//     type: "POST",
//     url: "EditarPerfil.aspx/GetPais",
//     data: "{}",
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     async: false,
//     success: function (result) {
//         $("#cboPaisTienda").empty();
//         $("#cboPaisTienda").append("<option value='0'>Seleccione</option>");
//         $.each(result.d, function (key, value) {
//             $("#cboPaisTienda").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//             $("#cboPaisTienda").val("08");
//             $("#cboPaisTienda").attr("disabled", true);
//         });
//     },
//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//         alert(textStatus + ": " + XMLHttpRequest.responseText);
//     }
// });

// $("#cboPais").change(function () {
//     var params = new Object();
//     params.pais = $("#cboPais").val();
//     params = JSON.stringify(params);

//     $.ajax({
//         type: "POST",
//         url: "EditarPerfil.aspx/GetDepartamentosByPais",
//         data: params,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         async: false,
//         success: function (result) {
//             $("#cboDepartamento").empty();
//             $("#cboDepartamento").append("<option value='0'>Seleccione</option>");
//             CargarProvincia();
//             CargarDistrito();
//             $.each(result.d, function (key, value) {
//                 $("#cboDepartamento").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//             });
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert(textStatus + ": " + XMLHttpRequest.responseText);
//         }
//     });
// });

// $("#cboDepartamento").change(function () {
//     var params = new Object();
//     params.departamento = $("#cboDepartamento").val();
//     params = JSON.stringify(params);

//     $.ajax({
//         type: "POST",
//         url: "EditarPerfil.aspx/GetProvinciaByDepartamento",
//         data: params,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         async: false,
//         success: function (result) {
//             $("#cboProvincia").empty();
//             $("#cboProvincia").append("<option value='0'>--Seleccione--</option>");
//             CargarDistrito();
//             $.each(result.d, function (key, value) {
//                 $("#cboProvincia").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//             });
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert(textStatus + ": " + XMLHttpRequest.responseText);
//         }
//     });
// });

// $("#cboProvincia").change(function () {
//     var params = new Object();
//     params.provincia = $("#cboProvincia").val();
//     params = JSON.stringify(params);

//     $.ajax({
//         type: "POST",
//         url: "EditarPerfil.aspx/GetDistritoByProvincia",
//         data: params,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         async: false,
//         success: function (result) {
//             $("#cboDistrito").empty();
//             $("#cboDistrito").append("<option value='0'>--Seleccione--</option>");
//             $.each(result.d, function (key, value) {
//                 $("#cboDistrito").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//             });
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert(textStatus + ": " + XMLHttpRequest.responseText);
//         }
//     });
// });

// var inputPais = document.getElementById('cboPais');
// var inputTC = document.getElementById('ddlTC');
// inputPais.onchange = function () {

//     CargaTipoDocumento(this.value);
//     if (this.value == "01") {
//         $("#dvDistrito").show();
//         $("#blogCdrPremio").show();
//         $("#bloqPostal").hide();
//         $("#lblEstado").text("Departamento");
//         $("#lblCondado").text("Provincia");
//         $("#lblDistrito").text("Distrito");

//     } else if (this.value == "02") {
//         $("#dvDistrito").show();
//         $("#blogCdrPremio").hide();
//         $("#bloqPostal").hide();
//         $("#lblDistrito").text("Municipio");
//     } else if (this.value == "09") {
//         $("#dvDistrito").show();
//         $("#blogCdrPremio").hide();
//         $("#bloqPostal").hide();
//         $("#lblEstado").text("Provincia");
//         $("#lblCondado").text("Cantones");
//         $("#lblDistrito").text("Parroquia");
//     } else {
//         $("#dvDistrito").hide();
//         $("#blogCdrPremio").hide();
//         $("#bloqPostal").show();
//         $("#lblEstado").text("Estado");
//         $("#lblCondado").text("Condado");
//     }
// }

// inputTC.onchange = function () {

//     if (this.value == "01") {
//         $('#CboUpLine').attr("disabled", false);
//     } else if (this.value == "03") {
//         $('#CboUpLine').attr("disabled", true);
//         $("#CboUpLine").val("0");

//     } else if (this.value == "05") {
//         $('#CboUpLine').attr("disabled", true);
//         $("#CboUpLine").val("0");
//     }
// }

// function CargaTipoDocumento(pais) {
//     $('#ComboTipoDocumento').attr("disabled", false);
//     if (pais == "01") {
//         $("#ComboTipoDocumento").empty();
//         $("#ComboTipoDocumento").append($("<option></option>").val("01").html("DOCUMENTO DE IDENTIDAD"));
//         $("#ComboTipoDocumento").append($("<option></option>").val("02").html("PASAPORTE"));
//     }
//     else if (pais == "02" || pais == "09") {
//         $("#ComboTipoDocumento").empty();
//         $("#ComboTipoDocumento").append($("<option></option>").val("03").html("CÉDULA"));
//         $("#ComboTipoDocumento").append($("<option></option>").val("04").html("PASAPORTE"));
//     }
//     else if (pais == "07") {
//         $("#ComboTipoDocumento").empty();
//         $("#ComboTipoDocumento").append($("<option></option>").val("05").html("CÉDULA DE IDENTIDAD"));
//         $("#ComboTipoDocumento").append($("<option></option>").val("04").html("PASAPORTE"));
//     }
// }

// function paqueteCliente(ddl) {

//     dropdown = ddl.options[ddl.selectedIndex].value;

//     if (ddl.options[ddl.selectedIndex].value == "05" || ddl.options[ddl.selectedIndex].value == "06") {
//         $('#CboUpLine').attr("disabled", true);
//         $("#CboUpLine").val("0");
//     } else {
//         $('#CboUpLine').attr("disabled", false);
//     }
// }

// function CargarDepartamentos() {
//     var params = new Object();
//     params.pais = $("#cboPais").val();
//     params = JSON.stringify(params);

//     $.ajax({
//         type: "POST",
//         url: "EditarPerfil.aspx/GetDepartamentosByPais",
//         data: params,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         async: false,
//         success: function (result) {
//             $("#cboDepartamento").empty();
//             $("#cboDepartamento").append("<option value='0'>Seleccione</option>");
//             $.each(result.d, function (key, value) {
//                 $("#cboDepartamento").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//             });
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert(textStatus + ": " + XMLHttpRequest.responseText);
//         }
//     });
// }

// function CargarProvincia() {
//     var params = new Object();
//     params.departamento = $("#cboDepartamento").val();
//     params = JSON.stringify(params);

//     $.ajax({
//         type: "POST",
//         url: "EditarPerfil.aspx/GetProvinciaByDepartamento",
//         data: params,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         async: false,
//         success: function (result) {
//             $("#cboProvincia").empty();
//             $("#cboProvincia").append("<option value='0'>Seleccione</option>");
//             $.each(result.d, function (key, value) {
//                 $("#cboProvincia").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//             });
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert(textStatus + ": " + XMLHttpRequest.responseText);
//         }
//     });
// }

// function CargarDistrito() {
//     var params = new Object();
//     params.provincia = $("#cboProvincia").val();
//     params = JSON.stringify(params);

//     $.ajax({
//         type: "POST",
//         url: "EditarPerfil.aspx/GetDistritoByProvincia",
//         data: params,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         async: false,
//         success: function (result) {
//             $("#cboDistrito").empty();
//             $("#cboDistrito").append("<option value='0'>Seleccione</option>");
//             $.each(result.d, function (key, value) {
//                 $("#cboDistrito").append($("<option></option>").val(value.Codigo).html(value.Nombre));
//             });
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             alert(textStatus + ": " + XMLHttpRequest.responseText);
//         }
//     });
// }

// $("#btnRegistrar").click(function (e) {
//     var day = new Date();
//     var fecha = $("#datepicker").val();
//     var dni = $("#txtNumDocumento").val();
//     dni = dni.trim();
//     var usuario = $("#txtUl").val();
//     var clave = $("#password").val();
//     var clave2 = $("#password2").val();
//     var upline = $("#CboUpLine").val();
//     var patrocinador = $("#txtPatrocinador").val();
//     var paquete = ($("#ddlTC").val() == "01") ? "01" : ($("#ddlTC").val() == "03") ? "06" : "05";
//     var nombre = $("#txtNombre").val();
//     var apellidoPat = $("#txtApPaterno").val();
//     var tdoc = $("#ComboTipoDocumento").val();
//     var sexo = $("#ComboSexo").val();
//     var correo = $("#TxtCorreo").val();
//     var pais = $("#cboPais").val();
//     var departamento = $("#cboDepartamento").val();
//     var provincia = $("#cboProvincia").val();
//     var distrito = $("#cboDistrito").val();
//     var direccion = $("#txtDireccion").val();
//     var fechaNac = toDate(moment(fecha).format('DD/MM/YYYY'));
//     var cdrPremio = $("#cboPremio").val();


//     e.preventDefault();

//     fechaNac.setFullYear(fechaNac.getFullYear() + 18);
//     if (usuario == "") {
//         FaltaUsuario();
//     } else if (clave == "") {
//         FaltaClave();
//     } else if (patrocinador == "") {
//         FaltaPatrocinador();
//     } else if (clave2 == "") {
//         FaltaClave2();
//     } else if (paquete == "0") {
//         FaltaPackete();
//     } else if (fecha == "") {
//         FaltaFechaNac();
//     } else if (fechaNac >= day) {
//         FaltaFechaNac();
//     } else if (paquete == "0") {
//         FaltaPaquete();
//     } else if ((paquete != "05" && paquete != "06") && upline == "0") {
//         FaltaUpline();
//     } else if (nombre == "") {
//         FaltaNombre();
//     } else if (apellidoPat == "") {
//         FaltaApellido();
//     } else if (tdoc == "0") {
//         FaltaTipoDoc();
//     } else if (dni == "") {
//         FaltaDocumento();
//     } else if (dni.length < 8 && pais == "01") {
//         ErrorDocumento();
//     } else if (validarEnteroEnCampo(dni) == false && pais == "01") {
//         ErrorDocumento();
//     } else if (sexo == "0") {
//         FaltaSexo();
//     } else if (correo == "") {
//         FaltaCorreo();
//     } else if (pais == "0") {
//         FaltaPais();
//     } else if (departamento == "0") {
//         FaltaDepartamento();
//     } else if (provincia == "0") {
//         FaltaProvincia();
//     } else if (direccion == "") {
//         FaltaDireccion();
//     } else if ((pais == "01" || pais == "02" || pais == "09") && distrito == "0") {
//         FaltaDistrito();
//     } else if (pais == "01" && cdrPremio == "0") {
//         FaltaCDR();
//     } else {
//         ValidarCorreo();
//     }

// });

// function validarEnteroEnCampo(documento) {
//     let valueInt = parseInt(documento);
//     if (!Number.isInteger(valueInt)) {
//         return false;
//     } else {
//         return true;
//     }
// }

// $("#btnCancelar").click(function (e) {
//     patro = $("#txtPatrocinador").val();
//     $("input").val("");
//     $("select").val("0");
//     $("#txtPatrocinador").val(patro);
//     $("#Banderas").show();
//     $("#ContenidoFluido").hide();
//     $("#ddlTC").val("01");
// });
// $("#regresarBanderas").click(function (e) {
//     patro = $("#txtPatrocinador").val();
//     $("input").val("");
//     $("select").val("0");
//     $("#txtPatrocinador").val(patro);
//     $("#Banderas").show();
//     $("#ContenidoFluido").hide();
//     $("#ddlTC").val("01");
// });

// $(document).on('click', '.banderaPeru', function (e) {
//     e.preventDefault();
//     $("#Banderas").hide();
//     $("#ContenidoFluido").show();
//     CargaTipoDocumento("01");
//     $("#cboPais").val("01");
//     CargarDepartamentos();
//     $("#dvDistrito").show();
//     $("#blogCdrPremio").show();
//     $("#bloqPostal").hide();
//     $("#lblEstado").text("Departamento");
//     $("#lblCondado").text("Provincia");
//     $("#lblDistrito").text("Distrito");
// });

// $(document).on('click', '.banderaBolivia', function (e) {
//     e.preventDefault();
//     $("#Banderas").hide();
//     $("#ContenidoFluido").show();
//     CargaTipoDocumento("02");
//     $("#cboPais").val("02");
//     CargarDepartamentos();
//     $("#dvDistrito").show();
//     $("#blogCdrPremio").hide();
//     $("#bloqPostal").hide();
//     $("#lblEstado").text("Departamento");
//     $("#lblCondado").text("Provincia");
//     $("#lblDistrito").text("Municipio");
// });

// $(document).on('click', '.banderaEcuador', function (e) {
//     e.preventDefault();
//     $("#Banderas").hide();
//     $("#ContenidoFluido").show();
//     CargaTipoDocumento("09");
//     $("#cboPais").val("09");
//     CargarDepartamentos();
//     $("#dvDistrito").show();
//     $("#blogCdrPremio").hide();
//     $("#bloqPostal").hide();
//     $("#lblEstado").text("Provincia");
//     $("#lblCondado").text("Cantones");
//     $("#lblDistrito").text("Parroquia");
// });

// $(document).on('click', '.banderaEEUU', function (e) {
//     e.preventDefault();
//     $("#Banderas").hide();
//     $("#ContenidoFluido").show();
//     CargaTipoDocumento("08");
//     $("#cboPais").val("08");
//     CargarDepartamentos();
//     $("#dvDistrito").hide();
//     $("#blogCdrPremio").hide();
//     $("#bloqPostal").show();
//     $("#lblEstado").text("Estado");
//     $("#lblCondado").text("Condado");
// });

// $(document).on('click', '.banderaPanama', function (e) {
//     e.preventDefault();
//     $("#Banderas").hide();
//     $("#ContenidoFluido").show();
//     CargaTipoDocumento("07");
//     $("#cboPais").val("07");
//     CargarDepartamentos();
//     $("#dvDistrito").show();
//     $("#blogCdrPremio").hide();
//     $("#bloqPostal").hide();
//     $("#lblEstado").text("Entidad Federativa");
//     $("#lblCondado").text("Departamento");
//     $("#lblDistrito").text("Colonia");
// });

// //Solo permite introducir numeros.
// function validarNumerosPD(evt) {
//     var PD = $("#cboPais").val();
//     if (PD == "01") {
//     var charCode = (evt.which) ? evt.which : event.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57))
//         return false;
//         return true;
//     }
// }


// // CONDICIONES PARA REGISTRAR
// function ValidarCorreo() {
//     var correo = $("#TxtCorreo").val();
//     var doc = $("#txtNumDocumento").val();
//     var usu = $("#txtUl").val();
//     var valida = document.getElementById('imageUpload').files.length;
//     var obj = JSON.stringify({ correoS: correo, documento: doc, usuario: usu });
//     $.ajax({
//         type: "POST",
//         url: "PreRegistroSocio.aspx/ValidarDatos",
//         data: obj,
//         dataType: "json",
//         contentType: 'application/json; charset=utf-8',
//         error: function (xhr, ajaxOptions, throwError) {
//             console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
//         },
//         success: function (response) {
//             console.log(response);
//             if (response.d == "0") {
//                 if (valida == 0) {
//                     RegistroCliente();
//                 } else {
//                     UploadFile();
//                 }
//             } else {
//                 Swal.fire({
//                     title: 'Ooops...!',
//                     text: response.d,
//                     type: "error"
//                 });
//             }
//         }
//     });
// }

// function UploadFile() {
//     var fileUpload = $("#imageUpload").get(0);
//     var files = fileUpload.files;

//     var data = new FormData();
//     for (var i = 0; i < files.length; i++) {
//         data.append(files[i].name, files[i]);
//     }
//     data.append("archivo", "socios");

//     $.ajax({
//         url: "FileUpload.ashx",
//         type: "POST",
//         data: data,
//         contentType: false,
//         processData: false,
//         success: function (result) {
//             var r = result;
//             console.log(result.d);
//             if (r == "") {
//                 RegistroCliente();
//             } else {
//                 alert(result);
//             }
//         },
//         error: function (err) {
//             alert(err.statusText)
//         }
//     });
// }

// function RegistroCliente() {
//     var day = moment().format("DD/MM/YYYY"), imagenCliente = "";
//     var valida = document.getElementById('imageUpload').files.length;
//     var paquete = ($("#ddlTC").val() == "01") ? "01" : ($("#ddlTC").val() == "03") ? "06" : "05";
//     if (valida != 0) {
//         imagenCliente = document.getElementById('imageUpload').files[0].name;
//     }

//     var obj = JSON.stringify({
//         numeroDocUd: $("#txtNumDocumento").val(), usuarioUd: $("#txtUl").val(), claveUd: $("#password").val(), paisTienda: $("#cboPaisTienda").val(),
//         nombresUd: $("#txtNombre").val(), apellidoPatUd: $("#txtApPaterno").val(), apellidoMatUd: $("#txtApMaterno").val(),
//         fechaNacUd: $("#datepicker").val(), sexoUd: $("#ComboSexo option:selected").text(), tipoDocUd: $("#ComboTipoDocumento option:selected").text(),
//         correoUd: $("#TxtCorreo").val(), telefonoUd: $("#TxtTelefono").val(), celularUd: $("#TxtCelular").val(), paisUd: $("#cboPais").val(),
//         departamentoUd: $("#cboDepartamento").val(), provinciaUd: $("#cboProvincia").val(), distritoUd: $("#cboDistrito").val(),
//         direccionUd: $("#txtDireccion").val(), referenciaUd: $("#TxtReferencia").val(), detraccionUd: $("#TxtNumCuenDetracciones").val(),
//         rucUd: $("#TxtRUC").val(), bancoUd: $("#TxtBanco").val(), depositoUd: $("#TxtNumCuenDeposito").val(), interbancariaUd: $("#TxtNumCuenInterbancaria").val(),
//         patrocinadorUd: $("#txtPatrocinador").val(), uplineUd: $("#CboUpLine").val(), establecimientoUd: $("#cboTipoEstablecimiento").val(),
//         imagenUd: imagenCliente, fecharegistro: day, paqueteUd: paquete, cdrPremioUd: $("#cboPremio").val(), CodigoPostalUd: $("#txtCodigoPostal").val()
//     });

//     $.ajax({
//         type: "POST",
//         url: "PreRegistroSocio.aspx/PreRegistro",
//         data: obj,
//         dataType: "json",
//         contentType: 'application/json; charset=utf-8',
//         error: function (xhr, ajaxOptions, throwError) {
//             console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
//         },
//         success: function (response) {
//             if (response.d != "") {
//                 Error(response.d);
//             }
//             else {
//                 alertme();
//             }
//         }
//     });
// }

// function toDate(dateStr) {
//     var parts = dateStr.split("/")
//     return new Date(parts[2], parts[1] - 1, parts[0])
// }

// //ALERTAS
// function alertme() {
//     Swal.fire({
//         title: '¡MUCHAS GRACIAS!',
//         text: 'Se ha realizado el registro con éxito',
//         type: "success"
//     }).then(function () {
//         window.location = "PreRegistroSocio.aspx";
//     });
// }
// function FaltaUsuario() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No registró el campo Usuario',
//         type: "error"
//     });
// } 

// function FaltaPatrocinador() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'Su sesión ha experiado, porfavor vuelva a loguearse',
//         type: "error"
//     });
// }

// function FaltaClave() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No registró el campo Contraseña',
//         type: "error"
//     });
// }
// function FaltaClave2() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'Debe confirmar su contraseña',
//         type: "error"
//     });
// }
// function FaltaUpline() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'Debe seleccionar el Upline',
//         type: "error"
//     });
// }
// function FaltaPackete() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No seleccionó el campo Packete',
//         type: "error"
//     });
// }
// function FaltaPaquete() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No seleccionó el paquete del cliente',
//         type: "error"
//     });
// }
// function FaltaNombre() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No registró el campo Nombres',
//         type: "error"
//     });
// }
// function FaltaApellido() {
//     Swal.fire({
//         title: 'No registró un Apellido!',
//         text: 'Debe colocar el primer apellido',
//         type: "error"
//     });
// }
// function FaltaTipoDoc() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No definió el Tipo de Documento',
//         type: "error"
//     });
// }
// function ErrorDocumento() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'Error en el Documento de Identidad',
//         type: "error"
//     });
// }
// function FaltaDocumento() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No registró el Número de Documento',
//         type: "error"
//     });
// }
// function FaltaFechaNac() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'Fecha de Nacimiento Incorrecta',
//         type: "error"
//     });
// }
// function FaltaSexo() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No definió el Sexo',
//         type: "error"
//     });
// }
// function FaltaCorreo() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'El formato del correo es inválido',
//         type: "error"
//     });
// }
// function FaltaPais() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No definió el País',
//         type: "error"
//     });
// }
// function FaltaPaisTienda() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No definió el País tienda',
//         type: "error"
//     });
// }
// function FaltaDepartamento() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No definió el Departamento',
//         type: "error"
//     });
// }
// function FaltaProvincia() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No definió la Provincia',
//         type: "error"
//     });
// }
// function FaltaDistrito() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No definió el Distrito',
//         type: "error"
//     });
// }
// function FaltaDireccion() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No registró la Dirección',
//         type: "error"
//     });
// }
// function FaltaCDR() {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: 'No seleccionó el CDR Premio',
//         type: "error"
//     });
// }
// function Error(mssg) {
//     Swal.fire({
//         title: 'Ooops...!',
//         text: mssg,
//         type: "error"
//     });
// }