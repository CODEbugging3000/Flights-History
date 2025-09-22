import BoxPreview from "@/components/box-flight-preview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h2 className=" font-sora text-2xlfont-sora text-2xl font-bold tracking-normal">
        Histórico de Voos
      </h2>
      <p className=" font-normal font-sora">
        Visualize seu histórico completo de voos realizados
      </p>
      <div className="">
        <BoxPreview />
      </div>
    </div>
  );
}
