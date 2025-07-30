import TicketList from "./TicketList";

export default function tickets() {
  return (
    <div>
      <nav>
        <div className="btn">
          <h2>Tickets</h2>
          <p><small>Currently Open Tickets.</small></p>
        </div>
      </nav>
      <TicketList />
    </div>
  )
}
