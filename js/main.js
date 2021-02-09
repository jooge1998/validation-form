
const userRegex = /([A-Za-z][0-9])/; //agrupacion alfanumerica
const  textRegex = /^[A-Za-z]/; //iniciar con texto
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


const btn = document.getElementById('btn').addEventListener('click',function(e){

    const nick_name = document.getElementById('nick_name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const comments = document.getElementById('comments');
    
    if (userRegex.test(nick_name.value) && emailRegex.test(email.value)  &&  textRegex.test(subject.value) && textRegex.test(comments.value)) {
        
    validationUser(nick_name);
    validationEmail(email);
    validationText(subject);
    validationText(comments);

    } else {
        validationUser(nick_name);
        validationEmail(email);
        validationText(subject);
        validationText(comments);
        e.preventDefault()
    }

});

function validationUser(element){
  
    if(element.value != "" && userRegex.test(element.value)){
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
        alerta("Nick Name invalido, tiene que tener valores alfanumericos como user123",true,element);
    }else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        alerta("Nick Name invalido, tiene que tener valores alfanumericos como user123",false,element);
    }
}

function validationText(element){

    if(element.value != "" && textRegex.test(element.value)){
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
        alerta("campo " + element.id + " invalido ",true,element);
        
    }else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        alerta("campo " + element.id +" invalido ",false,element);
    }
}

function validationEmail(element){

    if (element.value != "" && typeof(element.value) === 'string' && emailRegex.test(element.value)) {

        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
        alerta(element.id +" invalido, tiene que ser correo@micorreo.com",true,element);

    } else {
        element.classList.remove("is-valid");
            element.classList.add("is-invalid");
         alerta(element.id +" invalido, tiene que ser correo@micorreo.com",false,element);    
    }
}


function alerta(texto,boolean,campo){     // parametros elemnent eje div-h1, texto , dato booleano
    
    let alert = document.getElementById("alert" +campo.id);
    console.log(alert);
    let form = document.getElementById('padre');

    if (boolean && alert) {         // si boolean es verdadero y alerta existe = eliminala la alerta
        form.removeChild(alert);    
       
    } else if (!boolean == !alert) {     // si boolean es falso es verdadero y alerta no existe = crea la alerta   
        addElement(texto,"h1",campo);
    }
} 

function addElement (text,idInsert,campo) {
    // crea un nuevo div
    // y añade contenido
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id","alert" +campo.id);
    newDiv.classList.add("alert","alert-danger");

    let newContent = document.createTextNode(text);
    newDiv.appendChild(newContent); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    let currentDiv = document.getElementById(idInsert);
    document.getElementById('padre').insertBefore(newDiv, currentDiv);
  }

