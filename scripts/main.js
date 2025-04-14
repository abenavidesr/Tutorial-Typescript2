import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var totalSeasonElm = document.getElementById("total-seasons");
renderSeriesInTable(dataSeries);
totalSeasonElm.innerHTML = "".concat(getTotalSeasons(dataSeries));
function renderSeriesInTable(series) {
    clearSeriesInTable();
    series.forEach(function (serie) {
        var _a;
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td>".concat(serie.numero, "</td>\n      <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>");
        (_a = trElement.querySelector(".serie-link")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
            e.preventDefault();
            mostrarDetalleSerie(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return "Seasons Average: ".concat((totalSeasons / series.length).toFixed(0));
}
function mostrarDetalleSerie(serie) {
    var detalle = document.getElementById("detalle");
    detalle.innerHTML = "\n    <div class=\"card\" style=\"max-width: 540px;\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <img src=\"".concat(serie.image, "\" class=\"img-fluid rounded-start\" alt=\"").concat(serie.name, "\">\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.url, "\" class=\"btn btn-primary\" target=\"_blank\">Ver sitio oficial</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  ");
}
function clearSeriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
