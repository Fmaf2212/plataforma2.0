import React from 'react'

import './footer.css'
import '../../BASE/elegant-icon/style.css'

const Footer = () => {
    return (
        <footer id="footerMaxWidth" className="footerMaxWidth" style={{ background: "var(--Medium-primary)" }}>
            <div style={{ position: "relative", zIndex: "100", width: "95%", margin: "auto" }}>
                <div className="footer_widgets" style={{ borderTop: "none", borderBottom: "1px solid #9F8948", display: "flex", flexDirection: "column", gap: "40px", padding: "16px 0 29px" }}>
                    <div>
                        <aside className="f_about_widget" style={{ marginBottom: "-45px" }}>
                            <div>
                                <img width="193" id="imgLogoFooter2" src="https://tienda.mundosantanatura.com/img/logo-01.png" alt="" />
                            </div>
                            <p>"Porque vivir bien está en nuestras raíces"</p>
                            <ul style={{ padding:"0",listStyle: "none", margin: "8px 0 30px", display: "flex", justifyContent: "center", alignItems: "center", gridGap: "20px" }}>
                                <li id="facebook2" style={{ marginLeft: "0" }}><a href="http://www.facebook.com/santanaturanetworkoficialperu" style={{ fontSize: "30px", display: "flex" }}><i className="social_facebook" style={{ fontSize: "27px" }}></i></a></li>
                                {/* <li id="twitter2" style="margin-left: 0"><a href="#" style="font-size: 30px; display: flex;"><i className="social_twitter" style="font-size: 27px"></i></a></li> */}
                                <li style={{ marginLeft: "0" }}><a href="https://www.youtube.com/c/SANTANATURANETWORK" style={{ fontSize: "30px", display: "flex" }}><i className="social_youtube" style={{ fontSize: "27px" }}></i></a></li>

                                <li style={{ marginLeft: "0" }}><a href="https://www.instagram.com/santanatura.network/">
                                    <i className="social_instagram" style={{ fontSize: "27px" }}></i></a></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="text-center">
                        <div className="col-2 col-sm-2 col-md-2">
                        </div>
                        <div className="autorizacionVisa col-xs-12 col-sm-8 col-md-8">
                            <span>Esta tienda está autorizada por Visa para realizar transacciones electrónicas.</span>

                        </div>
                        <div className="col-2 col-sm-2 col-md-2">
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="footer_copyright">
                    <p className="copyright">
                        ©
                        <script>document.write(new Date().getFullYear());</script>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright ©<script>document.write(new Date().getFullYear());</script>
                        All rights reserved
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer