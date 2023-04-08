import { NextResponse } from "next/server";

export async function GET(request:Request) {
    
    const res=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en');
    const coins=await res.json();
    return NextResponse.json(coins);
}