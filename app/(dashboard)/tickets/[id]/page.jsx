import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();

  return {
    title: `Arian | ${ticket.title}`,
  };
}

// render static
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTickets(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  // 404 for as id
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

// Parmas
export default async function TicketDetails({ params }) {
  const ticket = await getTickets(params.id);
  return (
    <div className="container">
      <nav>
        <h2>Tickets Details</h2>
      </nav>
      <div className="card ">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </div>
  );
}
