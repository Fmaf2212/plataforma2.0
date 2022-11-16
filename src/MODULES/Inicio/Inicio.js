import React from 'react';
// import { TodoProvider } from './Todo/TodoContext';
// import { AppUI } from './Todo/App/AppUI';

import './inicio.css'

import circuloRed01 from '../../BASE/img/circulo-red-01.png'
import CircleProgressBar from './CirclePrograssBar/CircleProgressBar';
import OwlCarousel from './OwlCarouselBloqueInferiorIndex/owlCarousel';


const Inicio = () => {
  return (
    <div id="fondoIndexBody" style={{ zIndex: "1", marginTop: "73px" }}>

      <section id="bloqueLogueado" runat="server">
        <section style={{ backgroundColor: "#E9E9E9" }}>
          <section className="sectionDatosNetwork" style={{ width: "100%", margin: "auto" }}>
            <article className="sectionDatosNetwork__porcentaje">
              <div className="sectionMiProgreso bloqueSectionMiProgreso">
                <div className="sectionMiProgreso__Rangos">
                  <div className="sectionRangoActual">
                    <p id="txtValorRANGO" className="valorRango">EMPRENDEDOR</p>
                    <p id="txtRANGO" className="descRango">Rango actual</p>
                  </div>
                  <CircleProgressBar 
                    divClassName="sectionMiProgreso__porcentaje circleProgressBarPequeño mostrarCircleParaGalaxyFold" 
                    divStyle={{display: "none"}}
                    idSvg="valuePercentage2"
                    dataPercentage="10"
                    textPercentageY="44%"
                    pClassName="textoProgresoPorcentajeGalaxyFold"
                    />
                  {/* <div className="sectionMiProgreso__porcentaje circleProgressBarPequeño mostrarCircleParaGalaxyFold" style={{ display: "none" }}>
                    <svg id="valuePercentage2" data-percentage="10" className="radial-progress" viewBox="0 0 80 80">
                      <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                      <circle className="complete" cx="40" cy="40" r="35" ></circle>
                      <text className="percentage" x="50%" y="44%" transform="matrix(0, 1, -1, 0, 80, 0)" style={{ fontSize: "14px" }}></text>
                    </svg>
                    <p className="textoProgresoPorcentajeGalaxyFold" >
                      Progreso de Rango Actual
                    </p>
                  </div> */}
                  <div className="sectionSiguienteRango">
                    <p className="valorRango">BRONCE</p>
                    <p className="descRango">Siguiente rango</p>
                  </div>
                </div>
                <CircleProgressBar 
                    divClassName="sectionMiProgreso__porcentaje circleProgressBarPequeño ocultarCircleParaGalaxyFold"
                    idSvg="valuePercentage"
                    dataPercentage="25"
                    circleComplete = {{strokeDashoffset: "110" }}
                    textPercentageY="47%"
                    pClassName="textoProgresoPorcentaje"
                />
                {/* <div className="sectionMiProgreso__porcentaje circleProgressBarPequeño ocultarCircleParaGalaxyFold">
                  <svg id="valuePercentage" data-percentage="25" className="radial-progress" viewBox="0 0 80 80">
                    <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                    <circle className="complete" cx="40" cy="40" r="35" style={{ strokeDashoffset: "50" }}></circle>
                    <text className="percentage" x="50%" y="47%" transform="matrix(0, 1, -1, 0, 80, 0)" style={{ fontSize: "14px" }}></text>
                  </svg>
                  <p className="textoProgresoPorcentaje" >
                    Progreso de Rango Actual
                  </p>
                </div> */}
                <div className="sectionMiProgreso__porcentaje circleProgressBarGrande">
                  <div className="card__percent">
                    <svg className="circleProgressBarNew">
                      <defs>
                        <radialGradient id="gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
                          <stop offset="30%" stopColor="var(--primary-light)" />
                          <stop offset="100%" stopColor="var(--Light-primary)" />
                        </radialGradient>
                      </defs>
                      <circle cx="90" cy="90" r="90" stroke="url(#gradient)" id="circle"></circle>
                    </svg>
                    <div className="circle"></div>
                    <div className="circle circle__medium"></div>
                    <div className="circle circle__semimedium"></div>
                    <div className="circle circle__small"></div>
                    <div className="card__number">50%</div>
                  </div>
                  <p className="textoProgresoPorcentaje">
                    Progreso de Rango Actual
                  </p>
                </div>
              </div>

              <div className="sectionTotComisiones bloqueSectionMiProgreso ">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gridGap: "5px" }}>
                  <p className="siguienteConquista">¡Vamos por tu siguiente conquista!</p>
                  <p className="valorComiTotal"><span className="moneda">S/</span> </p>
                  <p className="totComisiones">Total de comisiones</p>
                  <a href="ComisionesMLM2.aspx" className="botonComisiones">Ir a comisiones</a>
                </div>
              </div>






            </article>
            <div className="sectionDatosNetwork__red">
              <div className="bloqueMiRed">
                <section className="bloqueMiRed__section">
                  <section className="bloqueMiRed__titulo">
                    <p>
                      Mi Red
                    </p>
                  </section>
                  <section className="bloqueMiRed__circulos">
                    <article>
                      <div className="articleCirculos__img">
                        <img src={circuloRed01} alt="circuloMiRed" width="150" />
                        <p id="totalSocios" className="valorCirculo">1</p>
                      </div>
                      <div className="articleCirculos__nombre">
                        <p>MIS EMPRESARIOS</p>
                      </div>
                    </article>
                    <article>
                      <div className="articleCirculos__img">
                        <img src={circuloRed01} alt="circuloMiRed" width="150" />
                        <p id="activosSocios" className="valorCirculo">0</p>
                      </div>
                      <div className="articleCirculos__nombre">
                        <p>EMPRESARIOS ACTIVOS</p>
                      </div>
                    </article>
                    <article>
                      <div className="articleCirculos__img">
                        <img src={circuloRed01} alt="circuloMiRed" width="150" />
                        <p id="nuevosSocios" className="valorCirculo">0</p>
                      </div>
                      <div className="articleCirculos__nombre">
                        <p>NUEVOS ACTIVOS</p>
                      </div>
                    </article>
                    <article>
                      <div className="articleCirculos__img">
                        <img src={circuloRed01} alt="circuloMiRed" width="150" />
                        <p id="inactivosSocios" className="valorCirculo">1</p>
                      </div>
                      <div className="articleCirculos__nombre">
                        <p>EMPRESARIOS INACTIVOS</p>
                      </div>
                    </article>

                  </section>
                  <div className="bloqueMiRed__irMapaRed">
                    <a href="MapaRedSocios.aspx">Ir al Mapa de Red</a>
                  </div>
                </section>
              </div>
              <article className="sectionDatosNetwork__cuadros">
                <div className="cuadrosDerecha">
                  <div>
                    <p className="paquete">Paquete PAQUETE </p>
                  </div>
                  <div>
                    <p className="valor">PP </p>
                    <p className="desc">Puntos Personales</p>
                  </div>
                  <div>
                    <p className="valor">VP </p>
                    <p className="desc">Volumen Personal</p>
                  </div>
                  <div>
                    <p className="valor">VG </p>
                    <p className="desc">Volumen Grupal</p>
                  </div>
                </div>
                <div className="cuadrosIzquierda">
                  <div>
                    <p className="valor">VQ </p>
                    <p className="desc">Volumen de Calificación</p>
                  </div>
                  <div>
                    <p className="valor">COMISION </p>
                    <p className="desc">Comisión</p>
                  </div>
                  <div>
                    <p className="valor">VIP </p>
                    <p className="desc">VIP</p>
                  </div>
                  <div>
                    <p className="valor">DIRECTOS</p>
                    <p className="desc">Nuevos Directos</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>

      </section>

      <div id="publicaciones" className="feature_big_add_area">

        <div className="container" style={{ maxWidth: "100vw", width: "100%", padding: "0" }}>
          <div className="s_m_title col-12 scrollflow -opacity" style={{ paddingBottom: "2em", marginLeft: "-15px", display: "none" }}>
            <h2>Publicaciones y novedades</h2>
          </div>
          <div className="w-100"></div>

          <div className="container" style={{ width: "100%", maxWidth: "100vw", padding: "50px 0" }}>
            <OwlCarousel />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Inicio