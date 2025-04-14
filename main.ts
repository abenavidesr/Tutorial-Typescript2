import { Serie } from './Serie.js';

import { dataSeries } from './dataSeries.js';


let seriesTbody: HTMLElement = document.getElementById('series')!;
const totalSeasonElm: HTMLElement = document.getElementById("total-seasons")!;

renderSeriesInTable(dataSeries);

totalSeasonElm.innerHTML = `${getTotalSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  clearSeriesInTable();
  
  series.forEach((serie) => {
    const trElement = document.createElement("tr");
    
    trElement.innerHTML = `
      <td>${serie.numero}</td>
      <td><a href="#" class="serie-link">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`;

    trElement.querySelector(".serie-link")?.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarDetalleSerie(serie);
    });

    seriesTbody.appendChild(trElement);
  });
}

function getTotalSeasons(series: Serie[]): string {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return "Seasons Average: ".concat((totalSeasons / series.length).toFixed(0));
}


function mostrarDetalleSerie(serie: Serie): void {
  const detalle = document.getElementById("detalle")!;
  detalle.innerHTML = `
    <div class="card" style="max-width: 540px;">
      <div class="row">
        <div class="col-md-4">
          <img src="${serie.image}" class="img-fluid rounded-start" alt="${serie.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.url}" class="btn btn-primary" target="_blank">Ver sitio oficial</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function clearSeriesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}