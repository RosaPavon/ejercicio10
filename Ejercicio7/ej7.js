

let planet1 = window.prompt("Introduce un planeta: ").toLowerCase();
let planet2 = window.prompt("Introduce otro planeta: ").toLowerCase();
let planet3 = window.prompt("Introduce otro planeta más: ").toLowerCase();

let nombresCorrectos = 0;
let repetidos;
let parrafo = "";

planet1 == planet2 || planet2 == planet3 || planet1 == planet3
  ? (repetidos = false)
  : (repetidos = true);

for (i = 0; i < sistemaSolar.length; i++) {
  if (planet1 === sistemaSolar[i].nombre) {
    nombresCorrectos += 1;
  }
  if (planet2 === sistemaSolar[i].nombre) {
    nombresCorrectos += 1;
  }
  if (planet3 === sistemaSolar[i].nombre) {
    nombresCorrectos += 1;
  }
}

nombresCorrectos === 3 ? (nombres = true) : (nombres = false);

if (nombres && repetidos) {
  for (i = 0; i < sistemaSolar.length; i++) {
    if (
      sistemaSolar[i].nombre === planet1 ||
      sistemaSolar[i].nombre === planet2 ||
      sistemaSolar[i].nombre === planet3
    ) {
      parrafo += `
        <div class="card" id="planeta${i}">
          <img src="${sistemaSolar[i].imagen}" alt="imagen de ${sistemaSolar[i].nombre}" />
            <div class="container">
              <h1>${sistemaSolar[i].nombre}</h1>
              <p>Temperatura: ${sistemaSolar[i].temperatura}ºC</p>
              <p style="color:${sistemaSolar[i].fondo}">Color: ${sistemaSolar[i].color}</p>
            </div>
        </div>
        `;
    }
  }
}

document.getElementById("resultado").innerHTML = parrafo;

if(planeta !== planeta2 || planeta !== planeta3 || planeta2!==planeta3){

let sistemaSolar = {
  mercurio: {
    nombre: "mercurio",
    color: "gris",
    temperatura: 350,
    imagen: "https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg",
  },
  venus: {
    nombre: "venus",
    color: "blanco",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  tierra: {
    nombre: "tierra",
    color: "morado",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  marte: {
    nombre: "marte",
    color: "rojo",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  jupiter: {
    nombre: "jupiter",
    color: "marrón",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  saturno: {
    nombre: "saturno",
    color: "amarillo",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  urano: {
    nombre: "urano",
    color: "azul",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  neptuno: {
    nombre: "neptuno",
    color: "azul",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  pluton: {
    nombre: "plutón",
    color: "blanco",
    temperatura: -229,
    imagen:"https://es.wikipedia.org/wiki/Plut%C3%B3n_(planeta_enano)#/media/Archivo:Pluto_in_True_Color_-_High-Res.jpg",
  },
}
}
