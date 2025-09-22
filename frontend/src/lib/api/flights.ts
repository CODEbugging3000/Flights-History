import { Flight } from "@/types/flight";
import { notFound } from "next/navigation";

export async function getFlights(): Promise<Flight[]>{
    //console.log(process.env.NEXT_PUBLIC_API_URL);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/flights`, {
      cache: "no-store", // Não armazena cache
    });

    if (!res.ok) throw new Error("Erro ao buscar voos");
    return res.json();
}

export async function getFlightById(id: string): Promise<Flight>{
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/flights/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Erro ao buscar voo ${id}`);

    return await res.json();
    
  } catch (error) {
    throw error;
  }
}