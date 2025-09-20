import Source from "./flightHistory.json";
import type { Flight } from "../types/flight";

let flights: Flight[] = []

export async function loadFlightsData(){
  try {
    if (!Source) {
      throw new Error("Erro ao obter dados");
    }
    flights = Source.flights as Flight[];
  } catch (error) {
    console.error("Erro ao obter dados", error);
  }
}

export function getFlights(): Flight[]{
  return flights;
}
