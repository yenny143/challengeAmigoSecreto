// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lstNombresParticipantes=[];

//agregamos funciones
function agregarAmigo(){

    let nombreParticipanteIngresado=document.getElementById('amigo').value;
    let mayuscula=nombreParticipanteIngresado.charAt(0);
///vamos a validar que no ingrese vacio
    if(nombreParticipanteIngresado===""){
        alert('Ingresar un nombre valido');
        limpiarCampos();
        return;
    }
    if(!isNaN(nombreParticipanteIngresado)){
        alert('Ingrese un nombre valido');
        limpiarCampos();
        return;
    }
///vamos a validar  que el nombre ingresado no sea uno repetido
    if(lstNombresParticipantes.includes(nombreParticipanteIngresado)){
        alert(`El nombre ${nombreParticipanteIngresado} ya esta registrado, Ingresa un nombre distinto`);
        limpiarCampos();

        return;
    }else{
        lstNombresParticipantes.push(nombreParticipanteIngresado);
         limpiarCampos();
        document.getElementById("amigo").focus();
    }
     
    actulizarListaPantalla();
  

   /// console.log(typeof(nombreParticipante));

}

function actulizarListaPantalla(){
    const lstAmigosPantalla =document.getElementById('listaAmigos');
    lstAmigosPantalla.innerHTML="";

    ///vamor hacer un for para recorrer la lista de amigos ingresados
    for(let i=0 ;i<lstNombresParticipantes.length;i++){
        const li =document.createElement('li');
        li.textContent=lstNombresParticipantes[i].toUpperCase();
        lstAmigosPantalla.appendChild(li);
    }
     lstAmigosPantalla.style.listStyleType='square';
    /// lstAmigosPantalla.style.listStyleType='upper-roman';
}

function sortearAmigo(){
  ///primero validamos que la lista no este vacia
  if(lstNombresParticipantes.length===0){
    alert('Para realizar el sorteo, necesitamos agregar amigos a la lista');
    return;
  }

    const indiceAmigoSeleccionado  = Math.floor(Math.random()*lstNombresParticipantes.length);
    const amigoSeleccionado=lstNombresParticipantes[indiceAmigoSeleccionado];

    /// vamos a mostrar el nombre en la pantalla

    const resultado=document.getElementById('resultado');
    resultado.innerHTML=`El amigo seleccionado es:<Strong> ${amigoSeleccionado}</Strong>`;
}
function limpiarCampos(){
 ///vamos alimpiar el campo de ingreso de datos
     document.getElementById("amigo").value = "";
}