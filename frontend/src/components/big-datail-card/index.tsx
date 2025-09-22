import Image from "next/image";

import clsx from "clsx";

type FlightReward = {
    balance: number,
    xp: number,
    missionBonus: number
}

function formatBalance(num: number) : string {
    const format = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Math.abs(num));
    return num < 0 ? `- ${format}` : `${format}`;
}

export function BigDetailCard({balance, xp, missionBonus}: FlightReward) {
  return (
    <div
      style={{ backgroundColor: "var(--secondary-color)" }}
      className="flex flex-col pt-4 px-6 pb-8 border-neutral-600 border-1 rounded-md gap-4 mt-9"
    >
      <div className="flex flex-row gap-3">
        <Image src={"/trophy.svg"} width={20} height={20} alt="Recompensas" />
        <h6 className="text-lg font-bold font-sora">Recompensas</h6>
      </div>
      <div className="grid gap-y-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center">
        <div className="flex flex-row gap-2 align-middle items-center ">
          <div className=" w-12 h-12 bg-blue-400 rounded-full p-2 align-middle items-center justify-center text-center text-black font-manrope font-semibold">
            P$
          </div>
          <div className="flex flex-col ">
            <p className=" font-manrope font-normal">Ganhos totais</p>
            <h2 className={clsx("text-3xl font-bold font-sora",
                {
                    "text-green-500": balance > 0,
                    "text-red-600": balance < 0
                }
            )}>{formatBalance(balance)}</h2>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={"/xp-star-icon.svg"}
            width={48}
            height={48}
            alt="Recompensas"
          />
          <div className="flex flex-col">
            <p className=" font-manrope font-normal">XP CONQUISTADO</p>
            <h2 className="text-3xl font-bold font-sora">{xp}</h2>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={"/bonus-star-icon.svg"}
            width={48}
            height={48}
            alt="Recompensas"
          />
          <div className="flex flex-col">
            <p className=" font-manrope font-normal">Bônus de missão</p>
            <h2 className="text-3xl font-bold font-sora">{missionBonus}%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
