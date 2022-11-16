//javascript for responsive navigation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.fa-bars');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

let abreDesplegable = document.getElementById("imgNavNotify");
abreDesplegable.addEventListener("click", changeText);
function changeText() {
    document.getElementById("ul_idNavNotify").classList.toggle('displayBlock');
}

let idMenu = document.getElementById('idMenu');
let sanguche = document.getElementById('sanguche');
sanguche.onclick = muestraAlerta;
function muestraAlerta(evento) {
    document.getElementById("header").style.zIndex = "10000000000";
    document.getElementById("header").style.background = "rgb(4,10,27)";
    document.getElementById("modalGeneral").style.display = "block";
    //document.getElementById("popup").style.animation = "modal .5s forwards";
    //document.getElementById("contenido").style.display = "none";
    document.getElementById("body").style.overflowY = "hidden";
    document.querySelector('#brand > a').style.pointerEvents = "none";
    document.getElementById("imgLogoNavBar").style.filter = "opacity(0.5)";
    document.getElementById("imgNavNotify").style.filter = "opacity(0.5)";
    document.getElementById("imgNavNotify").style.pointerEvents = "none";

}
let clickCerrar = document.getElementById('clickCerrar');
clickCerrar.onclick = muestraAlerta2;
function muestraAlerta2(evento) {
    document.getElementById("header").style.zIndex = "z-index: 999;";
    document.getElementById("header").style.background = "var(--Medium-primary)";
    document.getElementById("modalGeneral").style.display = "none";
    document.getElementById("body").style.overflowY = "unset";
    document.getElementById("imgLogoNavBar").style.filter = "opacity(1)";
    document.getElementById("imgNavNotify").style.filter = "opacity(1)";
    document.getElementById("imgNavNotify").style.pointerEvents = "inherit";
}
//function muestraAlerta(evento) {
//    document.getElementById("header").style.zIndex = "10000000000";
//    document.getElementById("header").style.background = "rgba(21,50,133,0.45)";
//    document.getElementById("modal").style.display = "block";
//}

let element = document.getElementById('navlogin');
let elementStyle = window.getComputedStyle(element);
let elementDisplay = elementStyle.getPropertyValue('display');
//console.log(elementDisplay);
//No Logueado
if (elementDisplay === "block") {
    document.getElementById("publicaciones").style.display = "none";
    document.getElementById("footerMaxWidth").style.display = "none";
    idMenu.removeClass("menu").addClass("menuSoloLogin");
    document.getElementById("sanguche").style.display = "none";
    document.getElementById("iconCerrar").style.display = "none";
    document.getElementById("navUsuario").style.display = "none";
    document.getElementById("navCerrarSesion").style.display = "none";
    document.getElementById("footerResponsive").style.display = "none";
    document.getElementById("barraNavInferiorResponsive").style.display = "none";
    document.getElementById("navPreRegistroTablet").style.display = "none";
    document.getElementById("idMenuPreRegistroTablet").style.display = "none";
    if (window.innerWidth < 500) {
        document.getElementById("header").style.flexDirection = "row";
        document.getElementById("header").style.justifyContent = "space-between";
        document.getElementById("header").style.gridGap = "calc(100vw - 330px)";
        //document.getElementById("clicLogin").style.border = "none";
    }
    else if (window.screen.width < 768) {
        document.getElementById("header").style.flexDirection = "row";
        document.getElementById("header").style.justifyContent = "space-between";
        document.getElementById("header").style.gridGap = "calc(100vw - 410px)";
    }
    else if (window.innerWidth < 1140) {
        document.getElementById("header").style.flexDirection = "row";
        document.getElementById("header").style.justifyContent = "space-between";
        document.getElementById("header").style.gridGap = "calc(100vw - 470px)";
    }
    else {
        document.getElementById("header").style.flexDirection = "row";
        document.getElementById("header").style.justifyContent = "space-between";
        document.getElementById("header").style.gridGap = "0";
    }
    window.addEventListener("resize", showInfo);
    function showInfo() {
        if (window.innerWidth < 500) {
            document.getElementById("header").style.flexDirection = "row";
            document.getElementById("header").style.justifyContent = "space-between";
            document.getElementById("header").style.gridGap = "calc(100vw - 330px)";
            //document.getElementById("clicLogin").style.border = "none";
        }
        else if (window.screen.width < 768) {
            document.getElementById("header").style.flexDirection = "row";
            document.getElementById("header").style.justifyContent = "space-between";
            document.getElementById("header").style.gridGap = "calc(100vw - 410px)";
        }
        else if (window.innerWidth < 1149) {
            document.getElementById("header").style.flexDirection = "row";
            document.getElementById("header").style.justifyContent = "space-between";
            document.getElementById("header").style.gridGap = "calc(100vw - 470px)";
            
        }
        else {
            document.getElementById("header").style.flexDirection = "row";
            document.getElementById("header").style.justifyContent = "space-between";
            document.getElementById("header").style.gridGap = "0";
        }
    }

} else if (elementDisplay === "none") {// Logueado
    if (window.innerWidth > 1140) {// mayor a 1140 es cuando se debe ocultar el menu desplegable
        document.getElementById("navPreRegistroTablet").style.display = "none";
    } else if (window.innerWidth < 500) {
        document.getElementById("navPreRegistroTablet").style.display = "none";
        document.getElementById("imgNoti").style.width = "26px";
        document.getElementById("imgNavNotify").style.display = "none";
        document.getElementById("imgNavNotify").style.position = "fixed";
        document.getElementById("imgNavNotify").style.top = "-4px";
        document.getElementById("imgNavNotify").style.left = "calc(100% - 100px)";
    }
    else {
        document.getElementById("header").style.flexDirection = "row-reverse";
        document.getElementById("brand").style.display = "block";
        document.getElementById("navPreRegistroTablet").style.display = "block";
        document.getElementById("imgNavNotify").style.position = "fixed";
        document.getElementById("imgNavNotify").style.top = "0";
        document.getElementById("imgNavNotify").style.left = "calc(100% - 120px)";
    }
    window.addEventListener("resize", showInfo);
    function showInfo() {
        if (window.innerWidth > 1148) {
            document.getElementById("header").style.flexDirection = "row";
            document.getElementById("navPreRegistroTablet").style.display = "none";
            document.getElementById("imgNavNotify").style.position = "relative";
            document.getElementById("imgNavNotify").style.left = "0";
            document.getElementById("imgNavNotify").style.top = "0";
        } else if (window.innerWidth < 500) {
            document.getElementById("header").style.flexDirection = "row-reverse";
            document.getElementById("navPreRegistroTablet").style.display = "none";
            document.getElementById("imgNoti").style.width = "26px";
            document.getElementById("imgNavNotify").style.display = "none";
            document.getElementById("imgNavNotify").style.position = "fixed";
            document.getElementById("imgNavNotify").style.top = "-4px";
            document.getElementById("imgNavNotify").style.left = "calc(100% - 100px)";
        } else {
            document.getElementById("header").style.flexDirection = "row-reverse";
            document.getElementById("brand").style.display = "block";
            document.getElementById("navPreRegistroTablet").style.display = "block";
            document.getElementById("imgNavNotify").style.position = "fixed";
            document.getElementById("imgNavNotify").style.top = "0";
            document.getElementById("imgNavNotify").style.left = "calc(100% - 120px)";
        }
    }


};