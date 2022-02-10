const searchEvent = document.querySelector("#ingresoEvent");
searchEvent.addEventListener("keyup", getTextSearch);
const selectOption = document.getElementById("select");
const inputCheckbox = document.querySelectorAll(".check");
selectOption.addEventListener("change", getValueSelect);

var arrayDato = [];
var search = "";
var valueSelect = "";
var valueCheckbox = [];

async function getDatos() {
  await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then((response) => response.json())
    .then((dato) => {
      arrayDato.push(...dato.eventos);
      showEvent(arrayDato);
    });
}
getDatos();

function getValueSelect() {
  var value = event.target.value;
  valueSelect = value;
  console.log(valueSelect);

  var filtrado = filter(value, search);
  showEvent(filtrado);
}

function getTextSearch() {
  var value = event.target.value;
  search = value;
  var filtrado = [];

  if (valueCheckbox.length > 0) {
    valueCheckbox.map((Lugar) => {
      if (search == undefined) {
        switch (valueSelect) {
          case "menor":
            filtrado.push(
              ...arrayDato.filter(
                (event) =>
                  event.place.toLowerCase().includes(Lugar.toLowerCase()) &&
                  event.capacity < 50000
              )
            );
            breack;
          case "mayor":
            filtrado.push(
              ...arrayDato.filter(
                (event) =>
                  event.place.toLowerCase().includes(Lugar.toLowerCase()) &&
                  event.capacity > 50000
              )
            );
          default:
            filtrado.push(
              ...arrayDato.filter((event) =>
                event.pacer.toLowerCase().includes(Lugar.toLowerCase())
              )
            );
        }
      } else {
        switch (valueSelect) {
          case "menor":
            filtrado.push(
              ...arrayDato.filter(
                (even) =>
                  even.place.toLowerCase().includes(Lugar) &&
                  even.capacity < 50000 &&
                  even.name.toLowerCase().includes(search.toLowerCase())
              )
            );
            break;
          case "mayor":
            filtrado.push(
              ...arrayDato.filter(
                (even) =>
                  even.place.toLowerCase().includes(Lugar) &&
                  even.capacity > 50000 &&
                  even.name.toLowerCase().includes(search.toLowerCase())
              )
            );
          default:
            filtrado.push(
              ...arrayDato.filter(
                (even) =>
                  even.place.toLowerCase().includes(Lugar) &&
                  even.name.toLowerCase().includes(search.toLowerCase())
              )
            );
        }
      }
    });
  } else if (search == undefined && valueCheckbox.length == 0) {
    filtrado.push(...arrayDato);
  } else {
    switch (valueSelect) {
      case "menor":
        filtrado.push(
          ...arrayDato.filter(
            (even) =>
              even.capacity < 50000 &&
              even.name.toLowerCase().includes(search.toLowerCase())
          )
        );
        break;
      case "mayor":
        filtrado.push(
          ...arrayDato.filter(
            (even) =>
              even.capacity > 50000 &&
              even.name.toLowerCase().includes(search.toLowerCase())
          )
        );
        break;
      default:
        filtrado.push(
          ...arrayDato.filter((even) =>
            even.name.toLowerCase().includes(search.toLowerCase())
          )
        );
    }
  }
  showEvent(filtrado);
}

getValueCheckbox();
function getValueCheckbox() {
  inputCheckbox.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (element.checked == true) {
        valueCheckbox.push(e.target.value);
        console.log(valueCheckbox);
      } else {
        valueCheckbox = valueCheckbox.filter(
          (elementV) => elementV != element.value
        );
        console.log(valueCheckbox);
      }

      var filtrado = [];

      if (valueCheckbox.length > 0) {
        console.log(valueCheckbox)
        valueCheckbox.map((Lugar) => {
          if (search == undefined) {
            switch (valueSelect) {
              case "menor":
                filtrado.push(
                  ...arrayDato.filter(
                    (event) =>
                      event.place.toLowerCase().includes(Lugar.toLowerCase()) &&
                      event.capacity < 50000
                  )
                );
                break;
              case "mayor":
                filtrado.push(
                  ...arrayDato.filter(
                    (even) =>
                      even.place.toLowerCase().includes(Lugar.toLowerCase()) &&
                      even.capacity > 50000
                  )
                );
                break;
              default:
                filtrado.push(
                  ...arrayDato.filter((even) =>
                    even.place.toLowerCase().includes(Lugar.toLowerCase())
                  )
                );
            }
          } else {
            switch (valueSelect) {
              case "menor":
                filtrado.push(
                  ...arrayDato.filter(
                    (even) =>
                      even.place.toLowerCase().includes(Lugar) &&
                      even.capacity < 50000 &&
                      even.name.toLowerCase().includes(search.toLowerCase())
                  )
                );
                break;
              case "mayor":
                filtrado.push(
                  ...arrayDato.filter(
                    (even) =>
                      even.place.toLowerCase().includes(Lugar) &&
                      even.capacity > 50000 &&
                      even.name.toLowerCase().includes(search.toLowerCase())
                  )
                );
              default:
                filtrado.push(
                  ...arrayDato.filter(
                    (even) =>
                      even.place.toLowerCase().includes(Lugar) &&
                      even.name.toLowerCase().includes(search.toLowerCase())
                  )
                );
            }
          }
        });
      } else if (search == undefined && valueCheckbox.length == 0) {
        filtrado.push(...arrayDato);
      } else {
        switch (valueSelect) {
          case "menor":
            filtrado.push(
              ...arrayDato.filter(
                (even) =>
                  even.capacity < 50000 &&
                  even.name.toLowerCase().includes(search.toLowerCase())
              )
            );
            break;
          case "mayor":
            filtrado.push(
              ...arrayDato.filter(
                (even) =>
                  even.capacity > 50000 &&
                  even.name.toLowerCase().includes(search.toLowerCase())
              )
            );
            break;
          default:
            filtrado.push(
              ...arrayDato.filter((even) =>
                even.name.toLowerCase().includes(search.toLowerCase())
              )
            );
        }
      }
      showEvent(filtrado);
    });
  });
}


function filter(selectValue, inputValue) {
  var filtrado = [];
  if (inputValue != undefined) {
    switch (selectValue) {
      case "menor":
        filtrado.push(...arrayDato.filter((even) => even.capacity < 50000));
        break;
      case "mayor":
        filtrado.push(...arrayDato.filter((even) => even.capacity > 50000));
        break;
      default:
        filtrado.push(...arrayDato);
    }
  } else {
    switch (selectValue) {
      case "menor":
        filtrado.push(
          ...arrayDato.filter(
            (even) =>
              even.capacity < 50000 &&
              even.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
        break;
      case "mayor":
        filtrado.push(
          ...arrayDato.filter(
            (even) =>
              even.capacity > 50000 &&
              even.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
        break;
      default:
        filtrado.push(
          ...arrayDato.filter((even) =>
            even.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
    }
  }
  return filtrado;
}
function showEvent(arrayEvent) {
  var eventHtml = "";
  var toEvent = [];
  if (arrayEvent) {
    toEvent = [];
    toEvent.push(...arrayEvent);
  } else {
    toEvent = [];
    toEvent.push(...arrayDato);
  }

  toEvent.map((event) => {
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
        
        `;
  });
  document.querySelector("#start").innerHTML = eventHtml;
}
