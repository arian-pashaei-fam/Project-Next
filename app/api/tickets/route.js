// router handler

// Response with Next
import { NextResponse } from "next/server";

// dynamic route
export const dynamic = "force-dynamic";

// GET your API
export async function GET() {
  const res = await fetch("http://localhost:4000/tickets");
  const ticket = await res.json();

  return NextResponse.json(ticket, {
    status: 200,
  });
}

// POST your API Or Send
export async function POST(request) {
  const ticket = await request.json();

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

  const newTicket = await res.json();
  return NextResponse.json(newTicket, {
    status: 201,
  });
}
