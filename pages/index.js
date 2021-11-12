import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function HomePage({ events }) {
  const listEvents = events.map((evt) => <EventItem key={evt.id} evt={evt} />);
  return (
    <Layout>
      <h1> Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {listEvents}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">Vew All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
