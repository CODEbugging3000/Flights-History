import { Flight } from "@/types/flight";

export async function getFlights(): Promise<Flight[]>{
    //console.log(process.env.NEXT_PUBLIC_API_URL);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/flights`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Erro ao buscar voos");
    return res.json();
}