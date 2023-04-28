/*EN ESTE PROYECTO SIMULARE UN REGISTRO DE TWEETS Y USARE EL LOCALSTORAGE Y JSON PARA QUE AL
REINICAR LA PAGINA NO SE BORREN MIS TWEETS*/

/*======= EMPECEMOS============ */

//VARIABLES
const formulario = document.getElementById('formulario');
const listaTweet = document.getElementById('lista-tweets');
let allTweet = [];

//EVENTOS
cargarEventos();
function cargarEventos(){
    formulario.addEventListener('submit',showTweet);
    
    //DE ESTA MANERA LOS TWEETS SE MANTENDRAN ASI LA PAGINA RECARGUE 
    document.addEventListener('DOMContentLoaded',()=>{
        allTweet = JSON.parse(localStorage.getItem('tweets'))||[];
        agregarHTML(allTweet);
    });
};

//FUNCIONES


function showTweet(e){
    e.preventDefault();
    
    const tweet = document.getElementById('tweet').value;
    //VALIDAREMOS EL TWEET
    if(tweet===''){
        alertError('Llenar el campo obligatoriamente');
        return
    };

    //CREAMOS UN OBJETO PARA ALMACENAR LOS TWEETS
    const objTweet = {
        tweet: tweet,
        id: Date.now() //ESTE DATE LO PUSO PARA SIMULAR UN ID 
    };

    //Agregamos ese obj al array

    allTweet = [...allTweet,objTweet];

    agregarHTML(allTweet);
    //QUIERO QUE AL IR INGRESANDO UN TWEET SE RECARGUE LA PAGINA
    formulario.reset();
};

//CREAREMOS EN ESTA FUNCION UN ALERTA DE FORMA QUE SE MUESTRE EN EL DOM
function alertError(msj){
    const divAlert = document.createElement('DIV');
    divAlert.classList.add('alert');
    divAlert.textContent = msj;

    //AGREGANDO AL HTML
    formulario.appendChild(divAlert);
};

//AQUI MOSTRAREMOS EL HTML EN EL HTML
function agregarHTML(allTweet){
    
    //SI NO LIMPIO EL HTML SE REPETIRAN LOS TWEETS
    limpiarHTML();

    allTweet.forEach( item =>{
        //CREARE HTML
        const liTweet = document.createElement('li');
        liTweet.textContent = item.tweet;

        //TAMBIEN CREARE UN BOTON PARA QUE SE BORREN LOS TWEET
        const btnBorrar = document.createElement('button');
        btnBorrar.classList.add('btn-quitar');
        btnBorrar.textContent = 'X';
        btnBorrar.onclick = ()=>{

            borrarTweet(item.id);
        };

        liTweet.appendChild(btnBorrar);

        //Agregando al html
        listaTweet.appendChild(liTweet);
    });

    //SINCRONIZAREMOS CON LOCALSTORAGE
    sincronizarLs();
};

//Agregando el array de tweets a localstorage
function sincronizarLs(){
    localStorage.setItem('tweets',JSON.stringify(allTweet));
};

//LE DAREMOS LA FUNCION DE QUITAR AL BOTON
function borrarTweet(id){
    //PARA ELIMINAR USARE EL METODO FILTER
    allTweet = allTweet.filter( borrar => borrar.id !== id );

    agregarHTML(allTweet);
}

//LIMPIAMOS
function limpiarHTML(){
    listaTweet.innerText = '';
};

