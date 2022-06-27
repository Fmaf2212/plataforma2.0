import React from 'react'
import './contacto.css'

const Contacto = () => {
  return (
    <div style={{marginTop: "70px", display: "flex", justifyContent: "center"}}>
        <div className="form-horizontal">
            <fieldset>

                <div className="control-group campo" style={{paddingTop: "40px"}}>
                    <div className="controls">
                        <input id="txtNom" type="text" placeholder="Nombres y Apellidos..." className="input-medium form-control" required style={{fontSize: "1.3rem"}} />
                    </div>
                </div>

                <div className="control-group campo">
                    <div className="controls">
                        <input id="txtDoc" type="text" placeholder="Número de documento..." className="input-medium form-control solo-numero" required style={{fontSize: "1.3rem"}} />
                    </div>
                </div>

                <div className="control-group campo">
                    <div className="controls">
                        <input id="txtTelf" type="text" placeholder="Teléfono de contacto..." className="input-medium form-control solo-numero" required style={{fontSize: "1.3rem"}}/>
                    </div>
                </div>

                <div className="control-group campo">
                    <div className="controls">
                        <input id="txtEmail" runat="server" type="email" placeholder="Email (opcional)" className="input-large form-control" style={{fontSize: "1.3rem"}} pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"/>
                    </div>
                </div>

                <div className="control-group campo">
                    <select id="cboTipoEmpresario" className="form-control" required style={{fontSize: "1.1rem"}}>
                        <option hidden>Seleccione el tipo de empresario...</option>
                    </select>
                </div>

                <div className="control-group campo">
                    <select id="cboTema" className="form-control" required style={{fontSize: "1.1rem"}}>
                        <option>Seleccione el tema...</option>
                    </select>
                </div>

                <div className="control-group campo">
                    <select id="cboTemaEspecifico" className="form-control" required style={{fontSize: "1.1rem"}}>
                        <option>Seleccione el tema específico...</option>
                    </select>
                </div>

                <div className="control-group campo">
                    <div className="controls">
                        <textarea id="Detalle" runat="server" placeholder="Detalle aquí por favor..." cols="40" rows="6" required></textarea>
                    </div>
                </div>

                <div className="control-group campo">
                    <div className="controls">
                        <button className="btn btn-success" id="btnSend2" runat="server" style={{fontSize: "1.3rem"}}>Enviar </button>
                    </div>
                </div>

            </fieldset>
        </div>
    </div>
  )
}

export default Contacto