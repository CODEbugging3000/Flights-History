import { Flight } from "@/types/flight";

import { getFlights } from "@/lib/api/flights";

import clsx from "clsx";
import Link from "next/link";

import { PlaneAirlineInfo } from "@/components/plane-and-airline-info";
import { PathInfo } from "@/components/path-info";
import { RegInfo } from "@/components/registration-info";
import { DateInfo } from "@/components/date-info";

function convertBalance(num: number) {
  const format = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(num));
  
  return num < 0 ? `- P$ ${format}` :`P$ ${format}`;
}


export default async function BoxPreview() {
  const flightsList: Flight[] = await getFlights();
  return (
    <div className="flex flex-col gap-10 p-6">
      {flightsList.map((flight: Flight) => (
        <Link key={flight.id} href={`/details/${flight.id}`}>
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="grid gap-y-3 font-manrope grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  content-between border-neutral-600 border-1 p-6 rounded-md "
          >
            <PlaneAirlineInfo
              plane={flight.aircraft.name}
              airline={flight.aircraft.airline}
            />
            <PathInfo
              from={flight.flightData.route.from}
              to={flight.flightData.route.to}
            />
            <RegInfo reg={flight.aircraft.registration} />
            <DateInfo date={flight.flightData.date} />

            <div className="flex flex-col items-center">
              <p className="font-manrope text-xs font-normal">Saldo</p>
              <h6
                className={clsx(
                  "font-manrope text-base font-semibold leading-[140%] tracking-normal text-center",
                  {
                    "text-red-600": flight.flightData.balance < 0,
                    "text-green-400": flight.flightData.balance > 0,
                  }
                )}
              >
                {convertBalance(flight.flightData.balance)}
              </h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
