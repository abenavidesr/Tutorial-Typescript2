import { Serie } from './Serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const totalSeasonsElm: HTMLElement = document.getElementById("total-seasons")!;

renderSeriesInTable(dataSeries);
totalSeasonsElm.innerHTML = `${getTotalSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getTotalSeasons(series: Serie[]): string {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return "Seasons Average: ".concat((totalSeasons / series.length).toFixed(0));
}
