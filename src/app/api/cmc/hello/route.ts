import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");
  const res = await fetch(
    `https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/historical`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API!!,
      },
    }
  );
  const product = await res.json();

  return NextResponse.json({ product });
}
