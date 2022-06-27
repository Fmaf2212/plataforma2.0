// import React from "react";
// import { BrowserRouter, Routes } from "react-router-dom";
// import Home from "../App/index"

// //Creamos una función que va a exponer BrowserRouter y los elementos que se tendrán en la construcción de rutas.
// //Para esta función hacemos un return explicito, añadiendo la lógica entre paréntesis.
// const App = () => (
//     <BrowserRouter>
//         {/* exact: Para que cuando alguien entre a la url principal va a hacer el match con el path que va a recibir y luego se expone un componente. Si es exacta que utilice un componente  */}
//         <Routes exact path="/" component={Home} />
//     </BrowserRouter>
// );

// export default App;

import React from 'react';

import {
  BrowserRouter as Router,
  //Routes,
  Route,
  Link,
  // NavLink,
  Switch
} from "react-router-dom";

import Inicio from '../components/Inicio';
import Comisiones from '../components/Comisiones';
import Contacto from '../components/Contacto';
import Tienda from '../components/Tienda';
import Footer from '../components/Footer/Footer';
import './routes.css';
import IconUser from "../img/IconUser.png";

function App() {
  return (
    <Router>
      <div className="container pt-3">
        <header id="header">
          <div id="brand" className="brand">
            {/* <a href="Index.aspx">
              <img className='imgLogoNavBar' id="imgLogoNavBar" src="https://tienda.mundosantanatura.com/img/LOGO-PARA-BARRA-MOVEDIZA.png" alt="for sell"/>
            </a> */}
            <Link to="/">
              <img className='imgLogoNavBar' id="imgLogoNavBar" src="https://tienda.mundosantanatura.com/img/LOGO-PARA-BARRA-MOVEDIZA.png" alt="for sell" />
            </Link>
          </div>
          <nav id='idMenu' className='menu'>
            <div id="iconCerrar" className="btn">
              <i id="clickCerrar" className="fa fa-times close-btn"></i>
            </div>
            <ul className='nav newNavBar-nav navBarNavegadorDesplegado' data-animation="center">
              <li className="nav-item ocultar navResponsive" id="navUsuario" runat="server" style={{ display: "none" }}>
                <img src="img/user-menu.png" alt="Alternate Text" />
                <div className="ocultarDatos">
                  <p id="valorNombreDesplegable" className="claseFuente1 ocultarDatos__parrafo1">NombresCompletos</p>
                  <p className="ocultarDatos__parrafo2">ID: IDCLIENTE</p>
                  <a id="idEditarPerfil2" className="claseFuente1 menuEditarPerfil" href="EditarPerfil.aspx">Editar Perfil</a>
                </div>
              </li>
              <li className="nav-item dropdown submenu menuRegistrarTablet" id="navPreRegistroTablet" runat="server" style={{ display: "none" }}>
                <a id="idMenuPreRegistroTablet" className=" claseFuente1 enlaceRegistrar" href="PreRegistroSocio.aspx">Registrar</a>
              </li>
              <li className="nav-item" id="nav-quienessomos" runat="server" style={{ display: "none" }}>
                <a id="clicquienessomos" className="claseFuente1" href="PreRegistroSocio.aspx">quienes somos</a>
              </li>
              <li id="idMenuMisComprasNoSocio" className="nav-item" style={{ display: "none" }}>
                <img src="img/purchase-history.png" alt="Alternate Text" />
                <a className="fondoNaranjaFocus claseFuente1" href="MisComprasV2.aspx">Historial de Compras</a>
              </li>
              <li className="menu__item borderBottom nav-item dropdown submenu navResponsive" id="navtienda2" runat="server">
                <img src="img/tienda-menu.png" alt="Alternate Text" />
                <Link to="/navtienda2" id="idMenuTienda" className="animacionBorderBottom claseFuente1 newNavBarDevice" role="button">Compras<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                {/* <a href="#navtienda2" id="idMenuTienda" className="animacionBorderBottom claseFuente1 newNavBarDevice" role="button">Compras<i className="fa fa-angle-down" aria-hidden="true"></i></a> */}

                <ul className="menu__nesting">
                  <li id="liTienda" className="nav-item"><Link id="idSubMenuTienda" className="fondoNaranjaFocus  claseFuente1" to="/Tienda">Tienda</Link></li>
                  <li id="liHistCompras" className="nav-item"><a id="idSubMenuHisCompras" className="fondoNaranjaFocus  claseFuente1" href="MisComprasV2.aspx">Historial de Compras</a></li>
                </ul>
              </li>
              <li className="menu__item borderBottom nav-item dropdown submenu navResponsive" id="navDesplegable" runat="server">
                <img src="img/red-menu.png" alt="Alternate Text" />
                <a href="#navDesplegable" id="idMenuRed" className="animacionBorderBottom claseFuente1 newNavBarDevice" role="button">Red<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul className="menu__nesting">
                  <li id="liMapaPatro" className="nav-item"><a id="idSubMenuMapaDePatrocinio" className="fondoNaranjaFocus  claseFuente1" href="MapaDePatrocinio.aspx">Mapa Patrocinio</a></li>
                  <li id="liMapaRed" className="nav-item"><a id="idSubMenuMapaDeRed" className="fondoNaranjaFocus  claseFuente1" href="MapaRedSocios.aspx">Mapa Red</a></li>
                  <li id="liTablaCali" className="nav-item"><a id="idSubMenuTablaCalificacion" className="fondoNaranjaFocus  claseFuente1" href="TablaCalificacion.aspx">Tabla de Calificación</a></li>
                  <li id="liEmprRegis" className="nav-item"><a id="idSubMenuDatosPre" className="fondoNaranjaFocus  claseFuente1" href="CompletarPregistro.aspx">Empresarios Registrados</a></li>
                  <li id="liEstadisticas" className="nav-item" style={{ display: "none" }}><a id="idSubMenuEstadisticas" className="fondoNaranjaFocus  claseFuente1" href="Estadisticas.aspx">Estadísticas</a></li>
                  <li id="liTop10" className="nav-item" style={{ display: "none" }}><a id="idSubMenuTop10" className="fondoNaranjaFocus  claseFuente1" href="Top10.aspx">TOP 10</a></li>
                </ul>
              </li>
              <li className="nav-item borderBottom dropdown submenu navResponsive" id="navbonificiones" runat="server">
                <img src="img/comisiones-menu.png" alt="Alternate Text" />
                <Link id="clicBonif" className="animacionBorderBottom claseFuente1" to="/Comisiones">Comisiones</Link>
                <ul className="dropdown-menu" style={{ display: "none" }}>
                  <li className="nav-item"><a id="idSubMenuContactenos" className=" claseFuente1" href="Contactenos.aspx">Contáctenos</a></li>
                  <li className="nav-item"><a id="idSubBonificaciones" className=" claseFuente1" href="Bonificaciones.aspx">Bonificaciones</a></li>
                  <li className="nav-item"><a id="idSubFacturacion" className=" claseFuente1" href="HistorialFacturas.aspx">Facturas</a></li>
                </ul>
              </li>

              <li className="menu__item borderBottom nav-item dropdown submenu navResponsive" id="navDocumentos" runat="server">
                <img src="img/informacion-menu.png" alt="Alternate Text" />
                <a href="#navDocumentos" id="idMenuDocumentos" className="animacionBorderBottom claseFuente1 newNavBarDevice" role="button">Información<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul className="menu__nesting">
                  <li className="nav-item" style={{ display: "none" }}><a id="idSubMenuContactenos" className=" claseFuente1" href="Contactenos.aspx">Contáctenos</a></li>
                  <li id="liDocu" className="nav-item"><a id="idSubMenuDocume" className="fondoNaranjaFocus claseFuente1" href="Documentos.aspx">Documentos</a></li>
                  <li id="liPromo" className="nav-item"><a id="idSubMenuPromociones" className="fondoNaranjaFocus claseFuente1" href="Promociones.aspx">Promociones</a></li>
                  <li className="nav-item"><a id="idSubMenuMarketinheader .menu .borderBottom ag" className=" claseFuente1" href="Marketing.aspx">Materiales</a></li>
                </ul>
              </li>
              <li className="nav-item borderBottom navResponsive" id="navContactenos" runat="server">
                <img src="img/contactanos-menu.png" alt="Alternate Text" />
                {/* <a id="idMenuContactenos" className="animacionBorderBottom claseFuente1" href="atc.aspx">Contacto</a> */}
                <Link id="idMenuContactenos" className="animacionBorderBottom claseFuente1" to="/Contacto">Contacto</Link>
              </li>



              <li id="navCerrarSesion" className="menu__item borderBottom nav-item dropdown submenu navResponsive navCerrarSesion">
                <img src="img/cerrar sesion-blue.png" alt="Alternate Text" />
                <button runat="server" className="linkCerrarResponsive claseFuente1">Cerrar Sesión</button>
              </li>
              <li className="nav-item dropdown submenu menuRegistrar" id="navPreRegistro" runat="server">
                <a id="idMenuPreRegistro" className=" claseFuente1 enlaceRegistrar" href="PreRegistroSocio.aspx">Registrar</a>
              </li>
              {/* <img id="imgNavNotify" src="../img/Notificacion.png" alt="Alternate Text" runat="server" /> */}
              <li className="dropdown submenu navResponsive" id="imgNavNotify" runat="server" style={{ display: "none" }}>
                <a id="idNavNotify" className="claseFuente1 newNavBarDevice" role="button" href='PreRegistroSocio.aspx'>
                  <img id="imgNoti" src="../img/Notificacion.png" alt="Alternate Text" runat="server" /></a>
                <ul className="menu__nesting ul_idNavNotify" id="ul_idNavNotify">
                  <li></li>
                  <li></li>
                </ul>
              </li>

              <li className="nav-item" id="navlogin" runat="server" style={{ display: "none" }}>
                <a id="clicLogin" className="iniSesion claseFuente1" href="login.aspx">Iniciar sesión</a>
              </li>
              <li className="menu__item borderBottom nav-item dropdown submenu" id="navCerrar" runat="server">
                <a className=" claseFuente1" role="button" href='/'>
                  <img className='iconUser' src={IconUser} alt="user" />
                  {/* <img src="img/user-fondo.png" alt="user" /> */}
                </a>
                <ul className="menu__nesting menu__nestingCerrar">
                  <li className="ocultar">
                    <div>
                      <img className="imgUser" src="img/IconUser.png" alt="user" />
                    </div>
                  </li>
                  <li className="nav-item"><a className=" claseFuente1" id="logout" runat="server" href='/'>cerrar sesión</a></li>
                  <li className="nav-item ocultar" id="navUsuario2" runat="server">
                    <p id="valorNombre" className="claseFuente1">NombresCompletos</p>
                    <p>ID: IDCLIENTE</p>
                  </li>
                  <li className="nav-item subMenuCerrar" id="navPerfil" runat="server">
                    <a id="idEditarPerfil" className="claseFuente1 menuEditarPerfil" href="EditarPerfil.aspx">Editar Perfil</a>
                  </li>
                  <li className="nav-item subMenuCerrar">
                    <button runat="server" className="linkCerrar claseFuente1">Cerrar Sesión</button>
                  </li>
                </ul>
                {/* <ul className="dropdown-menu-user hover"> style="right: 0px; left: -150px; border-radius: 7px; top: 100%; background-color: rgba(255,255,255,.8);">
                                    <li className="nav-item" id="Li1" runat="server">
                                        <p className="claseFuente1" style="color: black; text-align: center; font-weight: bold; margin: 5px;"><%=NombresCompletos%></p>
                                        <p style="color: black; text-align: center; margin: 0 0 5px;">ID: 73011583</p>
                                    </li>
                                </ul> */}
              </li>

              <li id="footerResponsive" className="footerResponsive">
                <div>
                  <div className="footer_widgets" >
                    <div>
                      <aside className="f_about_widget">
                        <div>
                          <img width="193" id="imgLogoFooter" src="https://tienda.mundosantanatura.com/img/logo-01.png" alt="" />
                        </div>
                        <p >"Porque vivir bien está en nuestras raíces"</p>
                        <ul >
                          <li id="facebook"><a href="/" ><i className="social_facebook"></i></a></li>
                          <li id="twitter"><a href="/" ><i className="social_twitter"></i></a></li>
                          <li ><a href="/"><i className="social_youtube"></i></a></li>
                          <li ><a href="/">
                            <img className="social_instagram" src="img/iconInstagram.png" alt="iconInstagram" /></a>
                          </li>
                        </ul>
                      </aside>
                    </div>
                    <div className="text-center">
                      <span>Esta tienda está autorizada por Visa para realizar transacciones electrónicas.</span>
                    </div>
                  </div>
                  <div className="linea"></div>
                  <div className="footer_copyright">
                    <p className="copyright">
                      ©
                      <script>document.write(new Date().getFullYear());</script>
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                      All rights reserved
                    </p>
                  </div>
                </div>
              </li>


              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Contacto">About</Link>
              </li>
              <li>
                <Link to="/Nosotros">Users</Link>
              </li> */}
            </ul>
          </nav>
          <div className="btn menu__hamburguer">
            <i id="sanguche" className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </header>
        <hr />
        <Switch style={{ marginTop: "80px" }}>
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
        </Switch>

        <Footer />

        {/* <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Nosotros" element={<Nosotros/>} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;