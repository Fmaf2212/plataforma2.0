import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Inicio from '../../MODULES/Inicio/Inicio'
import Comisiones from '../../MODULES/Comisiones'
import Contacto from '../../MODULES/Contacto/Contacto'
import Tienda from '../../MODULES/Tienda'
import Footer from '../../MODULES/Footer/Footer'
import Registrar from '../../MODULES/Registrar/Registrar'

import './routes.css'

import FooterDevice from '../../MODULES/Footer/FooterForDevice/FooterDevice'

import IconUser from '../../BASE/img/IconUser.png'
import iconInstagram from '../../BASE/img/iconInstagram.png'
import userMenu from '../../BASE/img/user-menu.png'
import tiendaMenu from '../../BASE/img/tienda-menu.png'
import redMenu from '../../BASE/img/red-menu.png'
import comisionesMenu from '../../BASE/img/comisiones-menu.png'
import informacionMenu from '../../BASE/img/informacion-menu.png'
import contactanosMenu from '../../BASE/img/contactanos-menu.png'
import cerrarSesionBlue from '../../BASE/img/cerrar sesion-blue.png'

function App() {
  function openUL(e) {
    if (e.nextSibling) {
      console.log('hola')
    }
    if (e.tagName === 'A' && e.nextSibling.children[0] && e.tagName !== 'I') {
      let sumaDeAlturas =
        e.nextSibling.children[0].clientHeight +
        e.nextSibling.children[1].clientHeight
      let elementoUl = e.nextSibling
      if (elementoUl.clientHeight === 0) {
        elementoUl.style.height = `${sumaDeAlturas}px`
        if (e.style.length === 0) {
          //si style.length vale 2 es porque tiene 2 estilos, si vale 0 es porque no tiene estilos el elemento.
        } else {
          e.removeAttribute('style')
          e.parentNode.firstChild.removeAttribute('style')
          e.lastChild.removeAttribute('style')
        }
      } else {
        elementoUl.style.height = '0px'
        e.style.setProperty('color', 'rgb(33, 33, 33)', 'important')
        e.style.backgroundColor = 'white'
        e.parentNode.firstChild.style.setProperty('filter', 'none')
        e.lastChild.style.setProperty('color', 'rgb(21, 50, 133)', 'important')
      }
      /* ---------------------------------------- */
    }
    if (e.tagName === 'IMG') {
      //Dar altura al elemento ul, en caso ya tenga altura colocarle de valor 0.
      let sumaDeAlturas =
        e.nextSibling.nextSibling.children[0].clientHeight +
        e.nextSibling.nextSibling.children[1].clientHeight
      let elementoUl = e.nextSibling.nextSibling
      // e.target.style.setProperty('max-height', '192px')
      if (elementoUl.clientHeight === 0) {
        elementoUl.style.height = `${sumaDeAlturas}px`
      } else {
        elementoUl.style.height = '0px'
      }
      /* ---------------------------------------- */
      if (e.style.length === 0) {
        //si style.length vale 2 es porque tiene 2 estilos, si vale 0 es porque no tiene estilos el elemento.
        e.style.setProperty('filter', 'none')
        e.nextSibling.style.setProperty('color', 'rgb(33, 33, 33)', 'important')
        e.nextSibling.style.backgroundColor = 'white'
        e.nextSibling.lastChild.style.setProperty(
          'color',
          'rgb(21, 50, 133)',
          'important',
        )
      } else {
        e.removeAttribute('style')
        e.nextSibling.removeAttribute('style')
        e.nextSibling.lastChild.removeAttribute('style')
      }
    }
    if (e.tagName === 'I') {
      //Dar altura al elemento ul, en caso ya tenga altura colocarle de valor 0.
      let sumaDeAlturas =
        e.parentNode.nextSibling.children[0].clientHeight +
        e.parentNode.nextSibling.children[1].clientHeight
      let elementoUl = e.parentNode.nextSibling
      if (elementoUl.clientHeight === 0) {
        elementoUl.style.height = `${sumaDeAlturas}px`
      } else {
        elementoUl.style.height = '0px'
      }
      /* ---------------------------------------- */
      if (e.style.length === 0) {
        //si style.length vale 2 es porque tiene 2 estilos, si vale 0 es porque no tiene estilos el elemento.
        e.style.setProperty('color', 'rgb(21, 50, 133)', 'important')
        e.parentNode.parentNode.firstChild.style.setProperty('filter', 'none')
        e.parentNode.style.setProperty('color', 'rgb(33, 33, 33)', 'important')
        e.parentNode.style.backgroundColor = 'white'
      } else {
        e.removeAttribute('style')
        e.parentNode.parentNode.firstChild.removeAttribute('style')
        e.parentNode.removeAttribute('style')
      }
    } 
  }

  function openNav(){
    document.querySelector('.menu').classList.add('active')
    document.getElementById('modalGeneral').style.display = 'block';
    document.querySelector('header').style.backgroundColor = '#040A1B';
    document.querySelector('body').style.overflowY = 'hidden';
  }
  function closeNav(){
    document.querySelector('.menu').classList.remove('active')
    document.getElementById('modalGeneral').style.display = 'none';
    document.querySelector('header').removeAttribute('style');
    document.querySelector('body').removeAttribute('style');
  }
  function windowReSize() {
    // console.log(window.innerWidth)
    if(window.innerWidth > 1148){
      document.querySelector('.menu').classList.remove('active')
      document.getElementById('modalGeneral').style.display = 'none';
      document.querySelector('header').removeAttribute('style');
      document.querySelector('body').removeAttribute('style');
      let quitarEstilosEnlance = document.querySelectorAll('ul.navBarNavegadorDesplegado > li > a');
      // console.log(quitarEstilosEnlance)
      quitarEstilosEnlance.forEach(e => {
        e.removeAttribute('style');
      });
    }
  }
  
  window.onresize = windowReSize;

  return (
    <Router>
      <div className="container pt-3">
        <header id="header">
          <div id="brand" className="brand">
            {/* <a href="Index.aspx">
              <img className='imgLogoNavBar' id="imgLogoNavBar" src="https://tienda.mundosantanatura.com/img/LOGO-PARA-BARRA-MOVEDIZA.png" alt="for sell"/>
            </a> */}
            <Link to="/">
              <img
                className="imgLogoNavBar"
                id="imgLogoNavBar"
                src="https://tienda.mundosantanatura.com/img/LOGO-PARA-BARRA-MOVEDIZA.png"
                alt="for sell"
              />
            </Link>
          </div>
          <nav id="idMenu" className="menu">
            <div id="iconCerrar" className="btn">
              <i
                onClick={() => closeNav()}
                id="clickCerrar"
                className="fa fa-times close-btn"
              ></i>
            </div>
            <ul
              className="nav newNavBar-nav navBarNavegadorDesplegado"
              data-animation="center"
            >
              <li className="nav-item ocultar navResponsive" id="navUsuario">
                <img src={userMenu} alt="Alternate Text" />
                <div className="ocultarDatos">
                  <p
                    id="valorNombreDesplegable"
                    className="claseFuente1 ocultarDatos__parrafo1"
                  >
                    NombresCompletos
                  </p>
                  <p className="ocultarDatos__parrafo2">ID: IDCLIENTE</p>
                  <a
                    id="idEditarPerfil2"
                    className="claseFuente1 menuEditarPerfil"
                    href="EditarPerfil.aspx"
                  >
                    Editar Perfil
                  </a>
                </div>
              </li>
              <li
                className="nav-item dropdown submenu menuRegistrarTablet"
                id="navPreRegistroTablet"
                style={{display: 'none'}}
              >
                <a
                  id="idMenuPreRegistroTablet"
                  className=" claseFuente1 enlaceRegistrar"
                  href="PreRegistroSocio.aspx"
                >
                  Registrar
                </a>
              </li>
              <li
                className="nav-item"
                id="nav-quienessomos"
                style={{ display: 'none' }}
              >
                <a
                  id="clicquienessomos"
                  className="claseFuente1"
                  href="PreRegistroSocio.aspx"
                >
                  quienes somos
                </a>
              </li>
              <li
                id="idMenuMisComprasNoSocio"
                className="nav-item"
                style={{ display: 'none' }}
              >
                <img src="img/purchase-history.png" alt="Alternate Text" />
                <a
                  className="fondoNaranjaFocus claseFuente1"
                  href="MisComprasV2.aspx"
                >
                  Historial de Compras
                </a>
              </li>
              <li
                className="menu__item borderBottom nav-item dropdown submenu navResponsive"
                id="navtienda2"
                style={{ margin: '0' }}
                onClick={(e) => openUL(e.target)}
              >
                <img src={tiendaMenu} alt="Alternate Text" />
                <a
                  href="#navtienda2"
                  id="idMenuTienda"
                  className="animacionBorderBottom claseFuente1 newNavBarDevice"
                  role="button"
                >
                  Compras<i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                {/* <a href="#navtienda2" id="idMenuTienda" className="animacionBorderBottom claseFuente1 newNavBarDevice" role="button">Compras<i className="fa fa-angle-down" aria-hidden="true"></i></a> */}

                <ul className="menu__nesting">
                  <li id="liTienda" className="nav-item">
                    <Link
                      id="idSubMenuTienda"
                      className="fondoNaranjaFocus  claseFuente1"
                      to="/Tienda"
                    >
                      Tienda
                    </Link>
                  </li>
                  <li id="liHistCompras" className="nav-item">
                    <a
                      id="idSubMenuHisCompras"
                      className="fondoNaranjaFocus  claseFuente1"
                      href="MisComprasV2.aspx"
                    >
                      Historial de Compras
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="menu__item borderBottom nav-item dropdown submenu navResponsive"
                id="navDesplegable"
                onClick={(e) => openUL(e.target)}
              >
                <img src={redMenu} alt="Alternate Text" />
                <a
                  href="#navDesplegable"
                  id="idMenuRed"
                  className="animacionBorderBottom claseFuente1 newNavBarDevice"
                  role="button"
                >
                  Red<i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="menu__nesting">
                  <li id="liMapaPatro" className="nav-item">
                    <a
                      id="idSubMenuMapaDePatrocinio"
                      className="fondoNaranjaFocus  claseFuente1"
                      href="MapaDePatrocinio.aspx"
                    >
                      Mapa Patrocinio
                    </a>
                  </li>
                  <li id="liMapaRed" className="nav-item">
                    <a
                      id="idSubMenuMapaDeRed"
                      className="fondoNaranjaFocus  claseFuente1"
                      href="MapaRedSocios.aspx"
                    >
                      Mapa Red
                    </a>
                  </li>
                  <li id="liTablaCali" className="nav-item">
                    <a
                      id="idSubMenuTablaCalificacion"
                      className="fondoNaranjaFocus  claseFuente1"
                      href="TablaCalificacion.aspx"
                    >
                      Tabla de Calificación
                    </a>
                  </li>
                  <li id="liEmprRegis" className="nav-item">
                    <a
                      id="idSubMenuDatosPre"
                      className="fondoNaranjaFocus  claseFuente1"
                      href="CompletarPregistro.aspx"
                    >
                      Empresarios Registrados
                    </a>
                  </li>
                  <li
                    id="liEstadisticas"
                    className="nav-item"
                    style={{ display: 'none' }}
                  >
                    <a
                      id="idSubMenuEstadisticas"
                      className="fondoNaranjaFocus  claseFuente1"
                      href="Estadisticas.aspx"
                    >
                      Estadísticas
                    </a>
                  </li>
                  <li
                    id="liTop10"
                    className="nav-item"
                    style={{ display: 'none' }}
                  >
                    <a
                      id="idSubMenuTop10"
                      className="fondoNaranjaFocus  claseFuente1"
                      href="Top10.aspx"
                    >
                      TOP 10
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item borderBottom dropdown submenu navResponsive"
                id="navbonificiones"
              >
                <img src={comisionesMenu} alt="Alternate Text" />
                <a
                  id="clicBonif"
                  className="animacionBorderBottom claseFuente1"
                  href="#ComisionesMLM2"
                  role="button"
                >
                  Comisiones
                  {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                </a>
                <ul className="menu__nesting">
                  {/* <li class="nav-item"><a id="idSubBonificaciones" class="fondoNaranjaFocus claseFuente1" href="Bonificaciones.aspx">Bonificaciones</a></li>
                  <li class="nav-item"><a id="idSubFacturacion" class=" claseFuente1" href="HistorialFacturas.aspx" style="color: white;">Facturas</a></li>
                  <li class="nav-item"><a id="idSubComisionesMLM" class="fondoNaranjaFocus claseFuente1" href="ComisionesMLM.aspx">Comisiones MLM</a></li>
                  <li class="nav-item"><a id="idSubComisionesMLM2" class="fondoNaranjaFocus claseFuente1" href="ComisionesMLM2.aspx">Comisiones MLM 2</a></li> */}
                </ul>
              </li>

              <li
                className="nav-item borderBottom"
                id="nav-sistemaeducativo"
                style={{ display: 'none' }}
              >
                <Link
                  id="clicSistEdu"
                  className=" claseFuente1"
                  to="/"
                  style={{ fontSize: '16px' }}
                >
                  Sistema Educativo
                </Link>
              </li>

              <li
                className="menu__item borderBottom nav-item dropdown submenu navResponsive"
                id="navDocumentos"
                onClick={(e) => openUL(e.target)}
              >
                <img src={informacionMenu} alt="informacion-menu" />
                <a
                  href="#navDocumentos"
                  id="idMenuDocumentos"
                  className="animacionBorderBottom claseFuente1 newNavBarDevice"
                  role="button"
                  style={{ fontSize: '14px' }}
                >
                  Información
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="menu__nesting" style={{ width: '150%' }}>
                  {/* <li className="nav-item"><Link id="idSubMenuContactenos" className=" claseFuente1" href="Contactenos.aspx">Contáctenos</Link></li> */}
                  <li id="liDocu" className="nav-item">
                    <Link
                      id="idSubMenuDocume"
                      className="fondoNaranjaFocus claseFuente1"
                      to="/Documentos"
                    >
                      Documentos
                    </Link>
                  </li>
                  <li id="liPromo" className="nav-item">
                    <Link
                      id="idSubMenuPromociones"
                      className="fondoNaranjaFocus claseFuente1"
                      to="/Promociones"
                    >
                      Promociones
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      id="idSubMenuMarketinheader .menu .borderBottom ag"
                      className=" claseFuente1"
                      to="/Marketing"
                    >
                      Materiales
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item borderBottom navResponsive"
                id="navContactenos"
              >
                <img src={contactanosMenu} alt="contactanos-menu" />
                <Link
                  id="idMenuContactenos"
                  className="animacionBorderBottom claseFuente1"
                  to="/atc"
                  style={{ fontSize: '14px' }}
                >
                  Contacto
                </Link>
              </li>

              <li
                className="nav-item borderBottom navResponsive"
                style={{ display: 'none' }}
                id="navSeguros"
              >
                <img src={contactanosMenu} alt="contactanos-menu" />
                <Link
                  id="idMenuSeguros"
                  className="animacionBorderBottom claseFuente1"
                  to="/Seguros"
                  style={{ fontSize: '14px' }}
                >
                  Contacto
                </Link>
              </li>

              <li
                id="navCerrarSesion"
                className="menu__item borderBottom nav-item dropdown submenu navResponsive navCerrarSesion"
              >
                <img src={cerrarSesionBlue} alt="cerrar sesion-blue" />
                <Link
                  className="linkCerrarResponsive claseFuente1"
                  style={{ fontSize: '14px' }}
                  to="/"
                >
                  Cerrar Sesión
                </Link>
              </li>
              <li
                className="nav-item dropdown submenu menuRegistrar"
                id="navPreRegistro"
              >
                <Link
                  id="idMenuPreRegistro"
                  className="claseFuente1 enlaceRegistrar"
                  to="/PreRegistroSocio"
                >
                  Registrar
                </Link>
              </li>
              {/* <li
                className="dropdown submenu navResponsive"
                id="imgNavNotify"
                style={{ display: 'none' }}
              >
                <Link
                  id="idNavNotify"
                  className="claseFuente1 newNavBarDevice"
                  role="button"
                  to="/"
                >
                  <img
                    id="idNavNotify"
                    src="../img/Notificacion.png"
                    alt="Notificacion"
                  />
                </Link>
                <ul
                  className="menu__nesting ul_idNavNotify"
                  id="ul_idNavNotify"
                  style={{
                    backgroundColor: '#F6F6F6',
                    width: '370px',
                    height: '430px',
                    left: 'auto',
                    right: '-60px',
                    borderRadius: '7px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    bottom: '-25px',
                  }}
                >
                  <li></li>
                  <li></li>
                </ul>
              </li> */}

              <li
                className="nav-item"
                id="navlogin"
                style={{ display: 'none' }}
              >
                <Link
                  id="clicLogin"
                  className="iniSesion claseFuente1"
                  to="/Login"
                >
                  Iniciar sesión
                </Link>
              </li>
              <li
                className="menu__item borderBottom nav-item dropdown submenu"
                id="navCerrar"
              >
                <Link
                  className=" claseFuente1"
                  role="button"
                  to="/"
                  style={{
                    fontSize: '14px',
                    borderBottom: 'none',
                    padding: '0',
                    textAlign: 'center',
                  }}
                >
                  <img style={{ width: '44px' }} src={IconUser} alt="user" />
                  {/* <img src="img/user-fondo.png" alt="user" /> */}
                </Link>
                <ul className="menu__nesting menu__nestingCerrar">
                  <li style={{ borderBottom: 'none' }} className="ocultar">
                    <div
                      style={{
                        marginBottom: '10px',
                        position: 'relative',
                        height: '86px',
                        width: '86px',
                        margin: 'auto',
                      }}
                    >
                      <img
                        className="imgUser"
                        src="img/IconUser.png"
                        alt="user"
                      />
                    </div>
                  </li>
                  <li
                    className="nav-item ocultar"
                    id="navUsuario2"
                    style={{ borderBottom: '1px solid white' }}
                  >
                    <p
                      id="valorNombre"
                      className="claseFuente1"
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        margin: '10px 0 0',
                      }}
                    >
                      NombresCompletos
                    </p>
                    <p
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '14px',
                        margin: '10px 0 0',
                      }}
                    >
                      ID: IDCLIENTE
                    </p>
                  </li>
                  <li
                    className="nav-item subMenuCerrar"
                    id="navPerfil"
                    style={{ display: 'none' }}
                  >
                    <Link
                      id="idEditarPerfil"
                      className="claseFuente1 menuEditarPerfil"
                      to="/EditarPerfil"
                    >
                      Editar Perfil
                    </Link>
                  </li>
                  <li className="nav-item subMenuCerrar">
                    <button className="linkCerrar claseFuente1">
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </li>

              <li id="footerResponsive" className="footerResponsive">
                <div
                  style={{
                    position: 'relative',
                    zIndex: '100',
                    width: '95%',
                    margin: 'auto',
                  }}
                >
                  <div
                    className="footer_widgets"
                    style={{
                      borderTop: 'none',
                      borderBottom: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gridGap: '40px',
                      padding: '16px 0 29px',
                    }}
                  >
                    <div>
                      <aside
                        className="f_about_widget"
                        style={{ marginBottom: '-45px' }}
                      >
                        <div>
                          <img
                            style={{ width: '193px' }}
                            id="imgLogoFooter"
                            src="https://tienda.mundosantanatura.com/img/logo-01.png"
                            alt=""
                          />
                        </div>
                        <p
                          style={{
                            marginTop: '-35px',
                            fontSize: '13px',
                            color: 'white',
                            padding: '30px 0 0 0',
                          }}
                        >
                          "Porque vivir bien está en nuestras raíces"
                        </p>
                        <ul>
                          <li id="facebook">
                            <Link to="/">
                              <i className="social_facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="social_youtube"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <img
                                className="social_instagram"
                                src={iconInstagram}
                                alt="iconInstagram"
                              />
                            </Link>
                          </li>
                        </ul>
                      </aside>
                    </div>
                    <div className="text-center">
                      <span style={{ fontSize: '14px', color: 'white' }}>
                        Esta tienda está autorizada por Visa para realizar
                        transacciones electrónicas.
                      </span>
                    </div>
                  </div>
                  <div className="linea"></div>
                  <div
                    className="footer_copyright"
                    style={{ padding: '21px 0 22px' }}
                  >
                    <p className="copyright">
                      ©
                      <script>document.write(new Date().getFullYear());</script>
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>
                      All rights reserved
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className="btn menu__hamburguer">
            <i
              onClick={() => openNav()}
              id="sanguche"
              className="fa fa-bars"
              aria-hidden="true"
            ></i>
          </div>
        </header>
        <div runat="server" id="modalGeneral" style={{display: "none"}}>
          <div id="popup" className="popup"></div>
        </div>
        <Switch style={{ marginTop: '80px' }}>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/Contacto">
            <Contacto />
          </Route>
          <Route path="/Comisiones">
            <Comisiones />
          </Route>
          <Route path="/Tienda">
            <Tienda />
          </Route>
          <Route path="/Registrar">
            <Registrar />
          </Route>
        </Switch>

        <FooterDevice />

        <Footer />
      </div>
    </Router>
  )
}

export default App
