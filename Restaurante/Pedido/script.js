function comecar(){
    var nome = document.getElementById("input1").value;
    show(nome)
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div")
    if (nome && nome.trim() !== ""){
        div.style.display = "block"
    }else{
        document.getElementById("error").style.display="flex";
    }
}

function fechar(){
    document.getElementById("error").style.display="none";
    document.getElementById("input1").style.backgroundColor = "lightpink"
}