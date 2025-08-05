import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function tickets() {
  return (
    <div className="container">
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently Open Tickets.</small>
          </p>
        </div>
      </nav>
      {/* Suspense */}
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </div>
  );
}
