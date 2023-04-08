import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
    next: { revalidate: 30 },
  });
  const product = await res.json();

  return NextResponse.json({ product });
}
