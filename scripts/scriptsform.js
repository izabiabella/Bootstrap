tel.onchange = function(){
    let texto = document.querySelector("#dica")
    if(this.value.length !== 13){
        this.style.backgroundColor = "red";
        texto.innerHTML = "Formato válido: (69)9999-9999";
    }else if(this.value.charAt(0) !== '(' && this.value.charAt(3) !== ')'){
        this.style.backgroundColor = "red";
        texto.innerHTML = "Formato válido: (69)9999-9999";
    }else{
        this.style.backgroundColor = "white";
        texto.innerHTML = ""
    }
}

const aperit = document.getElementsByTagName("aperit");

aperit.onchange = function(){
    if(this.checked){
        alert("Checkbox marcado!!")
    }
}

const sx = document.getElementsByName("sexo");
const bts = document.getElementById("btSexo");
bts.onclick = function(){
    for(let i = 0; i < sx.length; i++){
        if(sx[i].checked){
            alert(sx[i].value);
        }
    }
}

uf.onchange = function(){
    natural.innerHTML = this.value
}
window.onload = function(){
    let opt = document.querySelectorAll("#uf option");
    for(let i = 0; i < opt.length; i++){
        if(opt[i].value === "AL"){
            opt[i].setAttribute("selected", "selected");
        }
    }
}

const numero = document.getElementById('num');
const sprs = document.getElementById('result');
numero.onkeyup = function(event){
    if(this.value%3 === 0){
        sprs.innerHTML = "Divisível por 3"
    }
    if(this.value%5 ===0){
        sprs.innerHTML += sprs.innerHTML === "" ?
        "Divisível por 5" : ", também divisível por 5";
    }
}