const lunes = document.getElementById("lunes");
const martes = document.getElementById("martes");
const miercoles = document.getElementById("miercoles");
const jueves = document.getElementById("jueves");

lunes.addEventListener('click', () => { 
    location.href ="rutina/pantallas/lunes.html";
})
martes.addEventListener('click', () => { 
    location.href ="rutina/pantallas/martes.html";
})
miercoles.addEventListener('click', () => { 
    location.href ="rutina/pantallas/miercoles.html";
})
jueves.addEventListener('click', () => { 
    location.href ="rutina/pantallas/jueves.html";
})
