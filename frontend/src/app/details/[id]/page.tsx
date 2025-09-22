import { getFlightById } from "@/lib/api/flights";
import { Flight } from "@/types/flight";
import Image from "next/image";

import { PlaneAirlineInfo } from "@/components/plane-and-airline-info";
import { PathInfo } from "@/components/path-info";
import { RegInfo } from "@/components/registration-info";
import { DateInfo } from "@/components/date-info";
import { BigDetailCard } from "@/components/big-datail-card";


export default async function HistoryDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: Flight = await getFlightById(id);
  return (
    <div className="">
      <div className="flex flex-row gap-4 align-middle">
        <button>
          <a href="/">
            {" "}
            <Image
              src={"/back-btn-icon.svg"}
              width={15.7}
              height={26.67}
              alt="Voltar para históricos de voos"
            ></Image>{" "}
          </a>
        </button>
        <h1 className="font-bold font-sora">Detalhes do voo</h1>
      </div>
      <BigDetailCard
        balance={data.flightData.balance}
        xp={data.flightData.xp}
        missionBonus={data.flightData.missionBonus}
      />
      <div
        style={{ backgroundColor: "var(--secondary-color)" }}
        className="grid gap-y-4 justify-center-safe xl:grid-cols-4 md:grid-cols-2 items-center-safe pt-4 px-6 pb-6 border-neutral-600 border-1 rounded-md mt-9"
      >
        <PlaneAirlineInfo
          plane={data.aircraft.name}
          airline={data.aircraft.airline}
        />
        <PathInfo
          from={data.flightData.route.from}
          to={data.flightData.route.to}
        />
        <RegInfo reg={data.aircraft.registration} />
        <DateInfo date={data.flightData.date} />
      </div>
    </div>
  );
}
