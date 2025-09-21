import Image from "next/image";
import BoxPreview from "@/components/box-flight-preview";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      <h2 className=" font-bold font-sora ">Histórico de Voos</h2>
      <p className=" font-normal font-sora">Visualize seu histórico completo de voos realizados</p>
      <div className="">
      <BoxPreview/>
      </div>
    </div>
  );
}
