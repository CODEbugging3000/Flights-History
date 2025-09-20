"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFlightsData = loadFlightsData;
exports.getFlights = getFlights;
let flights = [];
async function loadFlightsData() {
    const dbURL = "https://gist.githubusercontent.com/josehfortes/5fd349078368a4b864887dea200021d5/raw/6e28ab6f38a58a226646041f66b8e1d8926be1f8/flightHistory.json";
    try {
        const res = await fetch(dbURL);
        if (!res.ok) {
            throw new Error("Erro ao obter dados");
        }
        flights = await res.json();
    }
    catch (error) {
        console.error("Erro ao obter dados", error);
    }
}
function getFlights() {
    return flights;
}
//# sourceMappingURL=dataSource.js.map