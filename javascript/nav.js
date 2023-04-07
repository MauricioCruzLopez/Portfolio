function quitaElColorDelBorderDeTodosLosBotones(){
    const todosLosBotonesDelNav = document.querySelectorAll("#nav-botonesDeNavegacion button");
    todosLosBotonesDelNav.forEach(boton =>{
        boton.style.borderBottom="2px solid rgb(0, 170, 255, 0)";
    });
}

const navBotonesDeNavegacionGeneral = document.getElementById("nav-botonesDeNavegacion__general");
const navBotonesDeNavegacionGeneralBoton = document.getElementById("nav-botonesDeNavegacion__generalBoton");
navBotonesDeNavegacionGeneralBoton.style.borderBottom="2px solid rgb(0, 170, 255)"; //estilo por defecto cuando se recarga la página

navBotonesDeNavegacionGeneral.addEventListener("click",()=>{
    quitaElColorDelBorderDeTodosLosBotones();
    navBotonesDeNavegacionGeneralBoton.style.borderBottom="2px solid rgb(0, 170, 255)";
});

const navBotonesDeNavegacionDesarrollo = document.getElementById("nav-botonesDeNavegacion__desarrollo");
const navBotonesDeNavegacionDesarrolloBoton = document.getElementById("nav-botonesDeNavegacion__desarrolloBoton");
navBotonesDeNavegacionDesarrollo.addEventListener("click",()=>{
    quitaElColorDelBorderDeTodosLosBotones();
    navBotonesDeNavegacionDesarrolloBoton.style.borderBottom="2px solid rgb(0, 170, 255)";
});

const navBotonesDeNavegacionContacto = document.getElementById("nav-botonesDeNavegacion__contacto");
const navBotonesDeNavegacionContactoBoton = document.getElementById("nav-botonesDeNavegacion__contactoBoton");
navBotonesDeNavegacionContacto.addEventListener("click",()=>{
    quitaElColorDelBorderDeTodosLosBotones();
    navBotonesDeNavegacionContactoBoton.style.borderBottom="2px solid rgb(0, 170, 255)";
});



