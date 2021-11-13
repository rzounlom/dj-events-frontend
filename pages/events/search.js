import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import Link from "next/link";
import qs from "qs";
import { useRouter } from "next/router";

export default function SearchPage({ events }) {
  const router = useRouter();
  const listEvents = events?.map((evt) => <EventItem key={evt.id} evt={evt} />);

  return (
    <Layout title="Search Results">
      <Link href="/events">Go Back</Link>
      <h1>Search Results for: {router.query.term}</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.length > 0 && listEvents}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
