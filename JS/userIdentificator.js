let userName = document.getElementById("userName");
let div = document.getElementById("div__identification")
let exit = document.createElement("button");

validation = new Promise((resolve, reject) => {
    userStorage = JSON.parse(localStorage.getItem("userName"))
    if (userStorage != null){
        resolve()
    }
    else reject()
})

validation
.then(()=>{
    userValidation()
})
.catch(()=>{
    userRegistration();
})

function userRegistration(){
    userName.innerText = "Identificate aquí"
    exit.className="hidden";
    userName.addEventListener("click", ()=>{
        userName = prompt("Ingresa tu nombre");
        userName.innerText = userName
        Swal.fire({
            title: `¡Hola ${userName}!`,
            text: 'Disfruta tu visita',
            icon: 'success',
            confirmButtonText: 'Adelante'
        });
        localStorage.setItem("userName", JSON.stringify(userName));
    })
}

function userValidation(){
    userName.innerText = userStorage;
    exit.className="erase";
    exit.innerText="Salir";
   div.append(exit);
    exit.addEventListener("click", ()=>{
        Swal.fire({
            title: `¡Hasta luego ${userStorage}!`,
            text: 'Vuelve pronto',
            icon: 'success',
            confirmButtonText: 'Adelante'
          });
        localStorage.removeItem("userName");
        userRegistration();
    })
}
