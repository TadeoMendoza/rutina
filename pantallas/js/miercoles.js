var serie = 0;
const terminar = document.getElementById("terminar")
const terminarej1 = document.getElementById("terminarej1")

if(!document.getElementById("calentamiento").classList.contains("hidden")){
    terminar.addEventListener("click", () => {
        serie++;
        document.getElementById("numeroserie").innerHTML=serie;
        if(serie === 3){
            document.getElementById("calentamiento").classList.add("hidden");
            document.getElementById("ejer1").classList.remove("hidden");
            serie=0;
        }
    })
}



if(document.getElementById("ejer1").classList.contains("hidden")){
    
    terminarej1.addEventListener("click", () => {
        document.getElementById("ejer1").classList.remove("hidden");
        serie++;
        document.getElementById("ejer1series").innerHTML=serie;
        if(serie === 5){
            document.getElementById("ejer1").classList.add("hidden");
            document.getElementById("ejer2").classList.remove("hidden");
            serie=0;
        }
       
    })
}
if(document.getElementById("ejer2").classList.contains("hidden")){
    
    document.getElementById("terminarej2").addEventListener("click", () => {
        document.getElementById("ejer2").classList.remove("hidden");
        serie++;
        document.getElementById("ejer2series").innerHTML=serie;
        if(serie === 5){
            document.getElementById("ejer2").classList.add("hidden");
            document.getElementById("ejer3").classList.remove("hidden");
            serie=0;
        }
       
    })
}
if(document.getElementById("ejer3").classList.contains("hidden")){
    
    document.getElementById("terminarej3").addEventListener("click", () => {
        document.getElementById("ejer3").classList.remove("hidden");
        serie++;
        document.getElementById("ejer3series").innerHTML=serie;
        if(serie === 5){
            document.getElementById("ejer3").classList.add("hidden");
            document.getElementById("ejer4").classList.remove("hidden");
            serie=0;
        }
       
    })
}
if(document.getElementById("ejer4").classList.contains("hidden")){
    
    document.getElementById("terminarej4").addEventListener("click", () => {
        document.getElementById("ejer4").classList.remove("hidden");
        serie++;
        document.getElementById("ejer4series").innerHTML=serie;
        if(serie === 5){
            document.getElementById("ejer4").classList.add("hidden");
            document.getElementById("ejer5").classList.remove("hidden");
            serie=0;
        }
       
    })
}
if(document.getElementById("ejer5").classList.contains("hidden")){
    
    document.getElementById("terminarej5").addEventListener("click", () => {
        document.getElementById("ejer5").classList.remove("hidden");
        serie++;
        document.getElementById("ejer5series").innerHTML=serie;
        if(serie === 5){
            document.getElementById("ejer5").classList.add("hidden");
            document.getElementById("ejer6").classList.remove("hidden");
            serie=0;
        }
       
    })
}
if(document.getElementById("ejer6").classList.contains("hidden")){
    
    document.getElementById("terminarej6").addEventListener("click", () => {
        document.getElementById("ejer6").classList.remove("hidden");
        serie++;
        document.getElementById("ejer6series").innerHTML=serie;
        if(serie === 5){
            document.getElementById("ejer6").classList.add("hidden");
            document.getElementById("ejer7").classList.remove("hidden");
            serie=0;
        }
       
    })
}
if(document.getElementById("ejer7").classList.contains("hidden")){
    
    document.getElementById("terminarej7").addEventListener("click", () => {
        document.getElementById("ejer7").classList.remove("hidden");
        serie++;
        document.getElementById("ejer7series").innerHTML=serie;
        if(serie === 5){
            document.getElementById("ejer7").classList.add("hidden");
            document.getElementById("terminaste").classList.remove("hidden");
            serie=0;
        }
       
    })
}

document.getElementById("volver").addEventListener('click', () => { 
    location.href ="/index.html";
})