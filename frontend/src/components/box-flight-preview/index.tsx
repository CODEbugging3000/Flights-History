import { Flight } from "@/types/flight";
import { getFlights } from "@/lib/api/flights";
import Image from "next/image";

import Link from "next/link";


export default async function BoxPreview() {
  const flightsList: Flight[] = await getFlights();

  return (
    <div className="flex flex-col gap-10 p-6">
      {flightsList.map((flight: Flight) => (
        <div className="grid xl:grid-cols-5 sm:grid-cols-3 content-between border-neutral-700 border-1 p-6 rounded-b-md ">
          <div className="flex flex-col items-start">
            <h1 className="font-extrabold">{flight.aircraft.name}</h1>
            <p className=" font-manrope font-normal">
              {flight.aircraft.airline}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p>Trajeto</p>
            <Image src="/path.svg" width={129.67} height={45.95} alt="" />
            <div className="flex flex-row gap-15">
              <p>{flight.flightData.route.from}</p>
              <p>{flight.flightData.route.to}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p>Matrícula</p>
            <h6>{flight.aircraft.registration}</h6>
          </div>
          <div className="flex flex-col items-center">
            <p>Data</p>
            <h6>{flight.flightData.date}</h6>
          </div>
          <div className="flex flex-col items-center">
            <p>Saldo</p>
            <h6>{flight.flightData.balance}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
