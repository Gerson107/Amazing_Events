
let arrayDato = []

async function getDatos() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
      .then((response) => response.json())
      .then((dato) => {
        arrayDato.push(...dato.eventos);

    var id = location.search.split("?id=").filter(Number)
    var selectedId = Number(id[0])
    var event = arrayDato.find(function(event){
        return event.id == selectedId
    })

    var showHtml = `
    
    <div class="cards">
            <div class="header-card">
              <h4 class="card-title">${event.name}</h4>
              <p>${event.date}</p>
              <img src="${event.image}" class="card-img-top" alt="disfraz">
            </div>
            <div class="card-body ">
              <p class="card-text">${event.description}
              </p>
              <ul class="list-group list-group-flush">
    <li class="list-group-item">Categoria: ${event.category}</li>
    <li class="list-group-item">Lugar: ${event.place}</li>
    <li class="list-group-item">Capacidad: ${event.capacity}</li>
    <li class="list-group-item">Estimado: ${event.estimate} </li>
    <li class="list-group-item">Asistentes: ${event.assistance}</li>
    <li class="list-group-item">precio: ${event.price}</li>
  </ul>
            
    `
    document.querySelector("#start").innerHTML = showHtml
      });
   
  }
  getDatos()