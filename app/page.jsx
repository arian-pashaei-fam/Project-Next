import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="p-10 bg-blue-500 text-white text-3xl">
      <h2>Dashboard</h2>
      <p className="dashboard-card">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
        voluptatibus odit! Error exercitationem officiis suscipit numquam
        perferendis, explicabo quam labore enim voluptatum, ab obcaecati officia
        praesentium placeat corporis nesciunt laborum.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn btn-primary btn-outline" >View Tickets</button>
        </Link>
      </div>

      <h2>Company Update</h2>

      <div className="dashboard-card">
        <h3>New member of the web dev team ...</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit quaerat amet cupiditate ea nisi dolorum unde ad dolores
          adipisci quasi ab aspernatur consectetur ipsum totam maxime,
          accusamus, voluptatem vitae aliquid!
        </p>
      </div>

      <div className="dashboard-card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit quaerat amet cupiditate ea nisi dolorum unde ad dolores
          adipisci quasi ab aspernatur consectetur ipsum totam maxime,
          accusamus, voluptatem vitae aliquid!
        </p>
      </div>
    </div>
  );
}


