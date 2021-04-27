
let nombre= window.prompt("Hola! Escribe el nombre sobre el que quieres conocer datos").toLowerCase;


let personas = {
  BridgetteMcGuire: {
    _id: "5d8a48131595639a1e4fa996",
    index: 0,
    guid: "104791eb-a1ea-4700-a1b8-4199244b457c",
    isActive: false,
    balance: "$2,782.80",
    picture: "https://randomuser.me/api/portraits/women/33.jpg",
    age: 23,
    eyeColor: "blue",
    name: "Bridgette McGuire",
    gender: "female",
    company: "KIDGREASE",
    email: "bridgettemcguire@kidgrease.com",
    phone: "+1 (908) 424-2192",
    address: "811 Lawrence Avenue, Saddlebrooke, Ohio, 6224",
    about:
      "Dolor incididunt adipisicing elit cupidatat aliquip ea incididunt deserunt minim nisi laboris aliquip nisi incididunt. In officia laboris proident exercitation est deserunt. Aliquip adipisicing veniam ea voluptate excepteur. Lorem voluptate officia deserunt nulla ex pariatur eu laborum ea. Dolore cillum quis non mollit nostrud fugiat ullamco consectetur officia laboris nostrud excepteur do. Laborum veniam do veniam laboris non est officia nulla eiusmod deserunt.\r\n",
    registered: "2019-06-09T11:31:03 -02:00",
    latitude: -43.764593,
    longitude: 3.900165,
    greeting: "Hello, Bridgette Mcguire! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  melindawheeler: {
    _id: "5d8a48131108a7cd723412b8",
    index: 1,
    guid: "f55bcd5a-89d8-4ba0-89b5-06df473d8a42",
    isActive: false,
    balance: "$3,624.81",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
    age: 39,
    eyeColor: "green",
    name: "Melinda Wheeler",
    gender: "female",
    company: "ECLIPTO",
    email: "melindawheeler@eclipto.com",
    phone: "+1 (925) 544-3582",
    address: "726 Luquer Street, Muse, New York, 9303",
    about:
      "Magna veniam aliquip ex labore anim et commodo nostrud. Ut pariatur magna magna deserunt. Pariatur nostrud aliqua ad ad consequat. Nisi laborum nostrud esse fugiat magna et esse duis commodo. Exercitation pariatur exercitation adipisicing excepteur eu ad. Id dolore sint officia culpa do.\r\n",
    registered: "2018-07-13T12:09:36 -02:00",
    latitude: 8.398138,
    longitude: 145.073922,
    greeting: "Hello, Melinda Wheeler! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  WardFulton: {
    _id: "5d8a48137ab5238008402bb0",
    index: 2,
    guid: "b35f89a9-be2b-46b7-93c4-9849f601aeb3",
    isActive: false,
    balance: "$1,474.79",
    picture: "https://randomuser.me/api/portraits/men/30.jpg",
    age: 31,
    eyeColor: "green",
    name: "Ward Fulton",
    gender: "male",
    company: "QABOOS",
    email: "wardfulton@qaboos.com",
    phone: "+1 (930) 463-3089",
    address: "978 Victor Road, Sims, American Samoa, 9727",
    about:
      "Aliquip nulla minim cupidatat ut anim duis. Irure est consectetur adipisicing ullamco eiusmod anim magna cupidatat cillum cillum anim labore. Magna officia ea ut cillum ad eiusmod adipisicing. Mollit esse ullamco duis Lorem non voluptate est qui excepteur nulla id. Aute pariatur ullamco exercitation deserunt mollit ex in sint. Laborum cupidatat commodo ea est aute nostrud occaecat enim est consectetur enim enim id. Ipsum consectetur tempor aliqua dolor dolor adipisicing id.\r\n",
    registered: "2019-04-27T05:13:09 -02:00",
    latitude: -56.696991,
    longitude: -111.275708,
    greeting: "Hello, Ward Fulton! You have 7 unread messages.",
    favoriteFruit: "apple",
  },
  TessaSellers: {
    _id: "5d8a48134c5447ed216f551a",
    index: 3,
    guid: "94704ad9-d145-485f-883a-4fd4751c9d97",
    isActive: false,
    balance: "$1,320.07",
    picture: "https://randomuser.me/api/portraits/women/77.jpg",
    age: 35,
    eyeColor: "brown",
    name: "Tessa Sellers",
    gender: "female",
    company: "AUSTEX",
    email: "tessasellers@austex.com",
    phone: "+1 (974) 587-3742",
    address: "107 Blake Court, Faxon, Idaho, 8763",
    about:
      "Est ex sunt duis deserunt nisi qui. Cillum veniam dolor do non culpa do eu sunt non. Exercitation dolor ex ad nostrud irure anim ex occaecat laborum. Et non pariatur officia non laboris in labore aute. Duis do ad et sit eu ea laborum adipisicing ex nisi consectetur sunt aute reprehenderit.\r\n",
    registered: "2019-07-29T02:02:08 -02:00",
    latitude: 5.593906,
    longitude: -153.125529,
    greeting: "Hello, Tessa Sellers! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  KimberleyRoberson: {
    _id: "5d8a48130cbcb8b864608a8c",
    index: 4,
    guid: "dc87b874-bafa-44fd-9df2-92ca8f3532ec",
    isActive: true,
    balance: "$3,410.65",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    age: 25,
    eyeColor: "green",
    name: "Kimberley Roberson",
    gender: "female",
    company: "EVENTEX",
    email: "kimberleyroberson@eventex.com",
    phone: "+1 (832) 436-2181",
    address: "419 Carlton Avenue, Succasunna, Illinois, 8699",
    about:
      "Irure consequat quis nulla consectetur in magna labore et ad anim duis ad occaecat Lorem. Eiusmod amet exercitation sint non officia do. Cupidatat elit anim mollit id dolor laborum laboris excepteur dolore labore laborum veniam officia.\r\n",
    registered: "2016-05-26T11:07:07 -02:00",
    latitude: -75.82921,
    longitude: 23.130712,
    greeting: "Hello, Kimberley Roberson! You have 2 unread messages.",
    favoriteFruit: "banana",
  },
  EleanorStafford: {
    _id: "5d8a4813b6a71a7be4cf6a4a",
    index: 5,
    guid: "4d540541-746d-4bc2-8718-62d41248015f",
    isActive: false,
    balance: "$3,425.20",
    picture: "https://randomuser.me/api/portraits/women/30.jpg",
    age: 35,
    eyeColor: "blue",
    name: "Eleanor Stafford",
    gender: "female",
    company: "PROTODYNE",
    email: "eleanorstafford@protodyne.com",
    phone: "+1 (978) 407-3988",
    address: "570 Columbus Place, Emory, Guam, 5306",
    about:
      "Consequat velit est ut officia ex Lorem. Aliqua veniam sint in amet nisi magna. Ullamco ad laborum exercitation proident exercitation excepteur nulla reprehenderit sunt fugiat nostrud commodo anim ipsum.\r\n",
    registered: "2019-06-11T07:33:48 -02:00",
    latitude: -78.220494,
    longitude: -140.172634,
    greeting: "Hello, Eleanor Stafford! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
  CraneHarris: {
    _id: "5d8a4813adc1e549a3be11dd",
    index: 6,
    guid: "e9f72beb-b67e-4001-9d59-d6d36508bc8f",
    isActive: false,
    balance: "$1,306.69",
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    age: 39,
    eyeColor: "brown",
    name: "Crane Harris",
    gender: "male",
    company: "JETSILK",
    email: "craneharris@jetsilk.com",
    phone: "+1 (844) 444-2205",
    address: "350 Montieth Street, Titanic, West Virginia, 9450",
    about:
      "Proident voluptate enim quis non nulla aliquip velit proident mollit. Aliqua pariatur id exercitation esse ipsum qui ut eiusmod. Dolor dolor qui do laboris quis est exercitation sit. Eu minim qui commodo qui fugiat occaecat aute. Veniam non do officia sit pariatur tempor sit nulla in magna voluptate mollit ipsum. Dolor et eiusmod aliquip quis deserunt sit officia eu in.\r\n",
    registered: "2018-08-26T03:15:18 -02:00",
    latitude: 86.738392,
    longitude: -72.308621,
    greeting: "Hello, Crane Harris! You have 1 unread messages.",
    favoriteFruit: "strawberry",
  },
};

if (nombre == "bridgette" || "mcguire" || "bridgette mcGuire"){
document.getElementById("resultado").innerHTML=`
<img src= ${personas.BridgetteMcGuire.picture}>
<h1>Bridgette McGuire </h1>`
document.getElementById("resultado2").innerHTML=`
<p>${personas.BridgetteMcGuire.age}</p>
<p>${personas.BridgetteMcGuire.eyeColor}</p>
<p>${personas.BridgetteMcGuire.name}</p>
<p>${personas.BridgetteMcGuire.gender}</p>
<p>${personas.BridgetteMcGuire.company}</p>
<p>${personas.BridgetteMcGuire.email}</p>
<p>${personas.BridgetteMcGuire.phone}</p>
<p>${personas.BridgetteMcGuire.address}</p>
<p>${personas.BridgetteMcGuire.about}</p>
<p>${personas.BridgetteMcGuire.registered}</p>
<p>${personas.BridgetteMcGuire.latitude}</p>
<p>${personas.BridgetteMcGuire.longitude}</p>
<p>${personas.BridgetteMcGuire.greeting}</p>
<p>${personas.BridgetteMcGuire.favoriteFruit}</p>
`
document.getElementById("resultado").style.backgroundColor = personas.BridgetteMcGuire.eyeColor;
document.getElementById("resultado2").style.backgroundColor = personas.BridgetteMcGuire.eyeColor;
}

else if (nombre == "melinda" || "wheeler" || "melinda wheeler"){
  document.getElementById("resultado1").innerHTML=`
  <img src= ${personas.melindawheeler.picture}>
  <h1>Melinda Wheeler </h1>`
  document.getElementById("resultado2").innerHTML=`
  <p>${personas.melindawheeler.age}</p>
  <p>${personas.melindawheeler.eyeColor}</p>
  <p>${personas.melindawheeler.name}</p>
  <p>${personas.melindawheeler.gender}</p>
  <p>${personas.melindawheeler.company}</p>
  <p>${personas.melindawheeler.email}</p>
  <p>${personas.melindawheeler.phone}</p>
  <p>${personas.melindawheeler.address}</p>
  <p>${personas.melindawheeler.about}</p>
  <p>${personas.melindawheeler.registered}</p>
  <p>${personas.melindawheeler.latitude}</p>
  <p>${personas.melindawheeler.longitude}</p>
  <p>${personas.melindawheeler.greeting}</p>
  <p>${personas.melindawheeler.favoriteFruit}</p>
  `
  document.getElementById("resultado").style.backgroundColor = personas.melindawheeler.eyeColor;
  document.getElementById("resultado2").style.backgroundColor = personas.melindawheeler.eyeColor;
  }

else if (nombre == "ward" || "fulton" || "ward fulton"){
  document.getElementById("resultado1").innerHTML=`
  <img src= ${personas.WardFulton.picture}>
  <h1>Ward Fulton </h1>`
  document.getElementById("resultado2").innerHTML=`
  <p>${personas.WardFulton.age}</p>
  <p>${personas.WardFulton.eyeColor}</p>
  <p>${personas.WardFulton.name}</p>
  <p>${personas.WardFulton.gender}</p>
  <p>${personas.WardFulton.company}</p>
  <p>${personas.WardFulton.email}</p>
  <p>${personas.WardFulton.phone}</p>
  <p>${personas.WardFulton.address}</p>
  <p>${personas.WardFulton.about}</p>
  <p>${personas.WardFulton.registered}</p>
  <p>${personas.WardFulton.latitude}</p>
  <p>${personas.WardFulton.longitude}</p>
  <p>${personas.WardFulton.greeting}</p>
  <p>${personas.WardFulton.favoriteFruit}</p>
  `
  document.getElementById("resultado").style.backgroundColor = personas.WardFulton.eyeColor;
  document.getElementById("resultado2").style.backgroundColor = personas.WardFulton.eyeColor;
  }

else if (nombre == "tessa" || "sellers" || "tessa sellers"){
  document.getElementById("resultado1").innerHTML=`
  <img src= ${personas.TessaSellers.picture}>
  <h1>Tessa Sellers </h1>`
  document.getElementById("resultado2").innerHTML=`
  <p>${personas.TessaSellers.age}</p>
  <p>${personas.TessaSellers.eyeColor}</p>
  <p>${personas.TessaSellers.name}</p>
  <p>${personas.TessaSellers.gender}</p>
  <p>${personas.TessaSellers.company}</p>
  <p>${personas.TessaSellers.email}</p>
  <p>${personas.TessaSellers.phone}</p>
  <p>${personas.TessaSellers.address}</p>
  <p>${personas.TessaSellers.about}</p>
  <p>${personas.TessaSellers.registered}</p>
  <p>${personas.TessaSellers.latitude}</p>
  <p>${personas.TessaSellers.longitude}</p>
  <p>${personas.TessaSellers.greeting}</p>
  <p>${personas.TessaSellers.favoriteFruit}</p>
  `
  document.getElementById("resultado").style.backgroundColor = personas.TessaSellers.eyeColor;
  document.getElementById("resultado2").style.backgroundColor = personas.TessaSellers.eyeColor;
  }
else if (nombre == "kimberley" || "roberson" || "kimberley roberson"){
  document.getElementById("resultado1").innerHTML=`
  <img src= ${personas.KimberleyRoberson.picture}>
  <h1>Kimberley Roberson </h1>`
  document.getElementById("resultado2").innerHTML=`
  <p>${personas.KimberleyRoberson.age}</p>
  <p>${personas.KimberleyRoberson.eyeColor}</p>
  <p>${personas.KimberleyRoberson.name}</p>
  <p>${personas.KimberleyRoberson.gender}</p>
  <p>${personas.KimberleyRoberson.company}</p>
  <p>${personas.KimberleyRoberson.email}</p>
  <p>${personas.KimberleyRoberson.phone}</p>
  <p>${personas.KimberleyRoberson.address}</p>
  <p>${personas.KimberleyRoberson.about}</p>
  <p>${personas.KimberleyRoberson.registered}</p>
  <p>${personas.KimberleyRoberson.latitude}</p>
  <p>${personas.KimberleyRoberson.longitude}</p>
  <p>${personas.KimberleyRoberson.greeting}</p>
  <p>${personas.KimberleyRoberson.favoriteFruit}</p>
  `
  document.getElementById("resultado").style.backgroundColor = personas.KimberleyRoberson.eyeColor;
  document.getElementById("resultado2").style.backgroundColor = personas.KimberleyRoberson.eyeColor;
  }
else if (nombre == "eleanor" || "stafford" || "eleanor stafford"){
  document.getElementById("resultado1").innerHTML=`
  <img src= ${personas.EleanorStafford.picture}>
  <h1>Eleanor Stafford </h1>`
  document.getElementById("resultado2").innerHTML=`
  <p>${personas.EleanorStafford.age}</p>
  <p>${personas.EleanorStafford.eyeColor}</p>
  <p>${personas.EleanorStafford.name}</p>
  <p>${personas.EleanorStafford.gender}</p>
  <p>${personas.EleanorStafford.company}</p>
  <p>${personas.EleanorStafford.email}</p>
  <p>${personas.EleanorStafford.phone}</p>
  <p>${personas.EleanorStafford.address}</p>
  <p>${personas.EleanorStafford.about}</p>
  <p>${personas.EleanorStafford.registered}</p>
  <p>${personas.EleanorStafford.latitude}</p>
  <p>${personas.EleanorStafford.longitude}</p>
  <p>${personas.EleanorStafford.greeting}</p>
  <p>${personas.EleanorStafford.favoriteFruit}</p>
  `
  document.getElementById("resultado").style.backgroundColor = personas.EleanorStafford.eyeColor;
  document.getElementById("resultado2").style.backgroundColor = personas.EleanorStafford.eyeColor;
  }
else if (nombre == "ward" || "fulton" || "ward fulton"){
  document.getElementById("resultado1").innerHTML=`
  <img src= ${personas.CraneHarris.picture}>
  <h1>Crane Harris </h1>`
  document.getElementById("resultado2").innerHTML=`
  <p>${personas.CraneHarris.age}</p>
  <p>${personas.CraneHarris.eyeColor}</p>
  <p>${personas.CraneHarris.name}</p>
  <p>${personas.CraneHarris.gender}</p>
  <p>${personas.CraneHarris.company}</p>
  <p>${personas.CraneHarris.email}</p>
  <p>${personas.CraneHarris.phone}</p>
  <p>${personas.CraneHarris.address}</p>
  <p>${personas.CraneHarris.about}</p>
  <p>${personas.CraneHarris.registered}</p>
  <p>${personas.CraneHarris.latitude}</p>
  <p>${personas.CraneHarris.longitude}</p>
  <p>${personas.CraneHarris.greeting}</p>
  <p>${personas.CraneHarris.favoriteFruit}</p>
  `
  document.getElementById("resultado").style.backgroundColor = personas.CraneHarris.eyeColor;
  document.getElementById("resultado2").style.backgroundColor = personas.WCraneHarris.eyeColor;
  }

else{
  document.getElementById("resultado").innerHTML=`
<h1>No tenemos registros de ese nombre</h1>`;

}