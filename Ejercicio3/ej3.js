let num=parseInt(window.prompt("Introduce un número"));

let estilo={
    color: "black",
}
if(num<100){
    estilo.color="green"

}else if( num>=100 && num<200){
    estilo.color="yelow"

}else{
    estilo.color="red"

}    
document.getElementById("resultado").innerHTML=`
<h1>${num}</h1>`;
document.getElementById("resultado").style.color = estilo.color;
      