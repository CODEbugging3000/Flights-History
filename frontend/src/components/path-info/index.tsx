import Image from "next/image";


type PathProps = {
  from: string;
  to: string;
};

export function PathInfo({from, to}: PathProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-manrope text-xs font-normal">Trajeto</p>
      <Image src="/path.svg" width={129.67} height={45.95} alt="path" />
      <div className="flex flex-row gap-15">
        <p>{from}</p>
        <p>{to}</p>
      </div>
    </div>
  );
}

