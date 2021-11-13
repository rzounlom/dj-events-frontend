import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";

export default function EventsPage({ events }) {
  const listEvents = events?.map((evt) => <EventItem key={evt.id} evt={evt} />);

  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.length > 0 && listEvents}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
