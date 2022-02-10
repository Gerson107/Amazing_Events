var arrayDato=[]
var dateActual=""

async function getDatos(){
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response=>response.json())
    .then(dato =>{
      dateActual= dato.fechaActual
      arrayDato.push(...dato.eventos.filter(evento=> evento.date > dateActual))

      console.log(arrayDato)
    })
   showEvent(arrayDato)
  }
  getDatos()
  

function showEvent(arrayDato){
    var toEvent = arrayDato
    
    var eventHtml=""

    toEvent.map(event =>{

        eventHtml += `
        
        <div class="cards">
          <div class="header-card">
            <h4 class="card-title">${event.name}</h4>
            <p>${event.date}</p>
            <img src="${event.image}" class="card-img-top" >
          </div>
          <div class="card-body ">
            <p class="card-text">${event.description}
            </p>

           <a class="ver"href="detail.html?id=${event.id}">Ver mas</a>
          </div>
        </div>          
        
        `
    })
document.querySelector('#next').innerHTML = eventHtml

}
showEvent()
