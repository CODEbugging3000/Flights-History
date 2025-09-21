import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-col gap-4 items-center col-auto p-8">
      <div className="flex flex-row self-center items-center align-middle gap-2">
        <Image src="/logo.svg" width={57.76} height={57.47} alt="Pilops logo" />
        <Image className="pt-3"
          src="/logo-text.svg"
          width={129.67}
          height={45.95}
          alt="Pilops logo-text"
        />
      </div>
      <p>Your virtual pilot career for Flight Simulator</p>
    </header>
  );
}
