/* ESTE SIMULADOR PRIMERO NOS PERMITIRA REGISTRAR PRODUCTOS Y LUEGO UNOS VEZ REGISTRADO, VEREMOS SI EL PRODUCTO EXISTE 
EN ESTE CASO MI SIMULADOR ES DE PRODUCTOS DE MARCAS DE ROPA (ADIDAS, NIKE, PUMA)*/

/*=====================================================*/ 

/* DEFINIMOS LAS VARIABLES */ 
let cantidadDatos = prompt('Cuantos productos desea ingresar');
let i = 1;
let ContentProducts = [];

/* ENTRADA DE DATOS */
inputDatos();
function inputDatos(){
    while(i <= cantidadDatos){
        
        let name = prompt(`Ingrese nombre del producto ${i}`);
        let price = parseInt(prompt(`Ingrese precio del producto ${i}`));
        let quentity = parseInt(prompt(`Ingrese cantidad del producto ${i}`));

        const obtDatos = {
            nombre: name,
            precio: price,
            cantidad: quentity
        }
    
        i++;
        
        //USE UN SPREAD OPERATOR AGREGAR LOS OBJETOS AL ARRAY 
        ContentProducts = [...ContentProducts, obtDatos];

    }

    console.log(ContentProducts);
    
    agregarDato();
};

/* USE EL PUSH PARA AGREGAR UN DATOS MAS AL ARRAY PREGUNTANDO AL USUARIO SI SE OLVIDO */
function agregarDato(){
    let agregar = prompt('desea agregar?')
    if(agregar === 'si'){
        ContentProducts.push(prompt('Ingrese nombre del producto'));
        console.log(ContentProducts);
    }else{
        alert('DATOS REGISTRADOS');
    }

    validarDatos();
}


/* VALIDAMOS SI EL DATO EXISTE EN EL ARRAY PARA ESTO USE SOME */

function validarDatos(){
    let existe = ContentProducts.some( item =>{
        return item.nombre === prompt('Ingrese productos que desee verificar');
    });
    alert(existe);
}

/* EN ESTE PROYECTO SE USO OBJETOS ARRAAY FUNCIONES Y TODO LO PEDIDO EN EL DESAFIO */