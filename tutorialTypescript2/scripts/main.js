import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById("series");
var totalSeasonsElm = document.getElementById("total-seasons");
renderSeriesInTable(dataSeries);
totalSeasonsElm.innerHTML = "".concat(getTotalSeasons(dataSeries));
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return "Seasons Average: ".concat((totalSeasons / series.length).toFixed(0));
}
