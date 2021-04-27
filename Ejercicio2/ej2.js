
let yo={
    nombre:'Rosa',
    edad: '31'  
}

document.getElementById("resultado").innerHTML=`
<h1>Hola, soy ${yo.nombre}, tengo ${yo.edad} </h1>`;

yo.altura=1.65

document.getElementById("resultado2").innerHTML=`
<h1>Hola, soy ${yo.nombre}, tengo ${yo.edad} y mido ${yo.altura}cm </h1>`;
